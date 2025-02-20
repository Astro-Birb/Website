import React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { Hash } from "lucide-react"

interface Embed {
  title?: string
  description?: string
  color?: number
  image?: { url: string }
  thumbnail?: { url: string }
  footer?: { text: string; icon_url?: string }
  fields?: { name: string; value: string }[]
  author?: { name: string; url?: string; icon_url?: string }
}

interface Message {
  author_id: string
  content: string
  author_name: string
  message_id: string
  author_avatar: string
  attachments: string[]
  embeds: Embed[]
  timestamp: number
}

function formatTimestamp(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })
}

function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

function EmbedCard({ embed }: { embed: Embed }) {
  return (
    <div
      className="mt-2 bg-[#2f3136] rounded-lg overflow-hidden border-l-4"
      style={{ borderLeftColor: embed.color ? `#${embed.color.toString(16).padStart(6, "0")}` : "#4e5058" }}
    >
      <div className="p-4">
        {embed.author && (
          <div className="mb-2 flex items-center text-xs text-[#72767d]">
            {embed.author.icon_url && (
              <Image src={embed.author.icon_url} alt="Author Icon" width={20} height={20} className="mr-2 rounded-full" />
            )}
            <span>{embed.author.name}</span>
          </div>
        )}
        {embed.title && (
          <h3 className="font-semibold mb-2 text-white">{parseContent(embed.title)}</h3>
        )}
        {embed.description && (
          <p className="text-sm text-[#dcddde] whitespace-pre-wrap break-words">{parseContent(embed.description)}</p>
        )}
        {embed.image && (
          <div className="mt-2">
            <Image src={embed.image.url} alt="Embed Image" width={300} height={200} className="rounded-md" />
          </div>
        )}
        {embed.thumbnail && (
          <div className="mt-2">
            <Image src={embed.thumbnail.url} alt="Embed Thumbnail" width={100} height={100} className="rounded-md" />
          </div>
        )}
        {embed.footer && (
          <div className="mt-2 flex items-center text-xs text-[#72767d]">
            {embed.footer.icon_url && (
              <Image src={embed.footer.icon_url} alt="Footer Icon" width={20} height={20} className="mr-2 rounded-full" />
            )}
            <span>{embed.footer.text}</span>
          </div>
        )}
        {embed.fields && (
          <div className="mt-2 space-y-2">
            {embed.fields.map((field, index) => (
              <div key={index}>
                <div className="font-semibold text-white">{field.name}</div>
                <div className="text-sm text-[#dcddde] whitespace-pre-wrap break-words">{parseContent(field.value)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}



function MessageGroup({ messages }: { messages: Message[] }) {
  const firstMessage = messages[0]

  return (
    <div className="py-2 px-4 hover:bg-[#32353b] transition-colors duration-100">
      <div className="flex items-start space-x-4">
        <Avatar className="w-10 h-10 mt-0.5">
          <AvatarImage src={firstMessage.author_avatar} alt={firstMessage.author_name} />
          <AvatarFallback>{firstMessage.author_name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline">
            <span className="font-medium text-[#ffffff]">{firstMessage.author_name}</span>
            <span className="ml-2 text-xs text-[#a3a6aa]">{formatTimestamp(firstMessage.timestamp)}</span>
          </div>
          {messages.map((message, index) => (
            <div key={message.message_id} className={index > 0 ? "mt-1" : ""}>
              <p className="text-[#dcddde] break-words">{parseContent(message.content)}</p>
              {message.embeds.map((embed, embedIndex) => (
                <EmbedCard key={embedIndex} embed={embed} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function parseContent(content: string): React.ReactNode[] {
  const mentionRegex = /<@!?(\d+)>|<#(\d+)>|<@&(\d+)>/g;
  const markdownRegex = /(\*\*|__|`|_|\*)(.*?)\1/g;
  const emojiRegex = /<(a?):([a-zA-Z0-9_]+):(\d+)>/g;
  const timestampRegex = /<t:(\d+):([R])?>/g;

  let parsedNodes: React.ReactNode[] = [];
  let currentIndex = 0;
  content.replace(mentionRegex, (match, user, channel, role, offset) => {
    if (currentIndex < offset) {
      parsedNodes.push(content.slice(currentIndex, offset));
    }
    if (user) {
      parsedNodes.push(<span className="text-blue-500" key={offset}>@user</span>);
    } else if (channel) {
      parsedNodes.push(<span className="text-green-500" key={offset}>#channel</span>);
    } else if (role) {
      parsedNodes.push(<span className="text-purple-500" key={offset}>@role</span>);
    }
    currentIndex = offset + match.length;
    return '';  
  });

  content.replace(emojiRegex, (match, isAnimated, emojiName, emojiId, offset) => {
    if (currentIndex < offset) {
      parsedNodes.push(content.slice(currentIndex, offset));
    }
    const emojiUrl = `https://cdn.discordapp.com/emojis/${emojiId}.${isAnimated ? "gif" : "png"}?v=1`;
    parsedNodes.push(
      <img
        key={offset}
        src={emojiUrl}
        alt={emojiName}
        className="inline-block w-5 h-5 align-bottom"
      />
    );
    currentIndex = offset + match.length;
    return ''; 
  });

  content.replace(timestampRegex, (match, timestamp, format, offset) => {
    if (currentIndex < offset) {
      parsedNodes.push(content.slice(currentIndex, offset));
    }
    const relativeTime = new Date(parseInt(timestamp) * 1000).toLocaleString("en-US", { hour12: false });
    parsedNodes.push(
      <span key={offset} className="text-[#a3a6aa]" title={relativeTime}>
        {format === "R" ? `at ${relativeTime}` : relativeTime}
      </span>
    );
    currentIndex = offset + match.length;
    return '';  
  });

  if (currentIndex < content.length) {
    parsedNodes.push(content.slice(currentIndex));
  }

  parsedNodes = parsedNodes.flatMap((text) => {
    if (typeof text !== "string") return text;

    const parts = [];
    let match;
    let lastIndex = 0;

    while ((match = markdownRegex.exec(text)) !== null) {
      if (lastIndex < match.index) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const symbol = match[1];
      const content = match[2];

      if (symbol === "**" || symbol === "__") {
        parts.push(<strong key={lastIndex}>{content}</strong>);
      } else if (symbol === "*") {
        parts.push(<em key={lastIndex}>{content}</em>);
      } else if (symbol === "`") {
        parts.push(<code key={lastIndex} className="bg-gray-700 px-1 rounded">{content}</code>);
      }
      lastIndex = markdownRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  });

  return parsedNodes;
}

export default function DiscordTranscript({ transcript }: { transcript: Message[] }) {
  const groupedMessages = transcript.reduce((acc, message) => {
    const lastGroup = acc[acc.length - 1]
    if (lastGroup && lastGroup[0].author_id === message.author_id) {
      lastGroup.push(message)
    } else {
      acc.push([message])
    }
    return acc
  }, [] as Message[][])

  return (
    <div className="flex h-screen bg-[#36393f] text-[#dcddde]">
      <div className="flex-1 flex flex-col">
        <div className="h-12 border-b border-[#202225] flex items-center px-4">
          <Hash className="w-6 h-6 text-[#8e9297] mr-2" />
          <span className="font-semibold text-white">ticket</span>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-4">
            {groupedMessages.map((group, index) => (
              <React.Fragment key={group[0].message_id}>
                {index === 0 ||
                formatDate(group[0].timestamp) !== formatDate(groupedMessages[index - 1][0].timestamp) ? (
                  <div className="text-center my-4">
                    <span className="text-xs bg-[#36393f] text-[#72767d] px-2 py-1 rounded-full">
                      {formatDate(group[0].timestamp)}
                    </span>
                  </div>
                ) : null}
                <MessageGroup messages={group} />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
