"use client";
import React, { useState, useEffect } from "react";
import {
  DiscordMessages,
  DiscordMessage,
  DiscordMention,
  DiscordEmbed,
  DiscordEmbedFields,
  DiscordEmbedField,
  DiscordEmbedDescription,
} from "@skyra/discord-components-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Hash } from "lucide-react";
import Head from "next/head";

interface Embed {
  title?: string;
  description?: string;
  color?: number;
  image?: { url: string };
  thumbnail?: { url: string };
  footer?: { text: string; icon_url?: string };
  fields?: { name: string; value: string }[];
  author?: { name: string; url?: string; icon_url?: string };
}

interface Message {
  author_id: string;
  content: string;
  author_name: string;
  message_id: string;
  author_avatar: string;
  attachments: string[];
  embeds: Embed[];
  timestamp: number;
}

function formatTimestamp(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function EmbedCard({ embed }: { embed: Embed }) {
  const embedColor = embed.color
    ? `#${embed.color.toString(16).padStart(6, "0")}`
    : "#4e5058";

  return (
    <DiscordEmbed color={embedColor}>
      {embed.title && (
        <DiscordEmbedDescription>{embed.title}</DiscordEmbedDescription>
      )}
      {embed.description && (
        <DiscordEmbedDescription>{embed.description}</DiscordEmbedDescription>
      )}

      {embed.fields && embed.fields.length > 0 && (
        <DiscordEmbedFields>
          {embed.fields.map((field, index) =>
            field.name && field.value ? (
              <DiscordEmbedField key={index} fieldTitle={field.name}>
                {field.value}
              </DiscordEmbedField>
            ) : null
          )}
        </DiscordEmbedFields>
      )}
    </DiscordEmbed>
  );
}

function MessageGroup({ messages }: { messages: Message[] }) {
  const firstMessage = messages[0];

  return (
    <DiscordMessage
      author={firstMessage.author_name}
      avatar={firstMessage.author_avatar}
      timestamp={formatTimestamp(firstMessage.timestamp)}
    >
      {messages.map((message, index) => (
        <div key={message.message_id} className={index > 0 ? "mt-1" : ""}>
          <p>{parseContent(message.content)}</p>
          
          {message.embeds.map((embed, embedIndex) => (
            <EmbedCard key={embedIndex} embed={embed} />
          ))}

          {message.attachments.length > 0 && (
            <div className="mt-2">
              {message.attachments.map((attachment, attachmentIndex) => {
                const isImage = attachment.match(/\.(jpg|jpeg|png|gif)$/i);
                return (
                  <div key={attachmentIndex} className="mb-2">
                    {isImage ? (
                      <img
                        src={attachment}
                        alt={`Attachment ${attachmentIndex}`}
                        className="max-w-full rounded-lg"
                      />
                    ) : (
                      <a
                        href={attachment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1d9bf0] hover:underline"
                      >
                        Download attachment {attachmentIndex + 1}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </DiscordMessage>
  );
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
      parsedNodes.push(<DiscordMention key={offset}>user</DiscordMention>);
    } else if (channel) {
      parsedNodes.push(<DiscordMention key={offset}>channel</DiscordMention>);
    } else if (role) {
      parsedNodes.push(<DiscordMention key={offset}>role</DiscordMention>);
    }
    currentIndex = offset + match.length;
    return "";
  });

  content.replace(
    emojiRegex,
    (match, isAnimated, emojiName, emojiId, offset) => {
      if (currentIndex < offset) {
        parsedNodes.push(content.slice(currentIndex, offset));
      }
      const emojiUrl = `https://cdn.discordapp.com/emojis/${emojiId}.${
        isAnimated ? "gif" : "png"
      }?v=1`;
      parsedNodes.push(
        <img
          key={offset}
          src={emojiUrl}
          alt={emojiName}
          className="inline-block w-5 h-5 align-bottom"
        />
      );
      currentIndex = offset + match.length;
      return "";
    }
  );

  content.replace(timestampRegex, (match, timestamp, format, offset) => {
    if (currentIndex < offset) {
      parsedNodes.push(content.slice(currentIndex, offset));
    }
    const relativeTime = new Date(parseInt(timestamp) * 1000).toLocaleString(
      "en-US",
      { hour12: false }
    );
    parsedNodes.push(
      <span key={offset} className="text-[#a3a6aa]" title={relativeTime}>
        {format === "R" ? `at ${relativeTime}` : relativeTime}
      </span>
    );
    currentIndex = offset + match.length;
    return "";
  });

  if (currentIndex < content.length) {
    parsedNodes.push(content.slice(currentIndex));
  }
  const lastIndex = 0;

  parsedNodes = parsedNodes.flatMap((text) => {
    if (typeof text !== "string") return text;

    const parts = [];
    let match: RegExpExecArray | null;

    while ((match = markdownRegex.exec(text)) !== null) {
      let lastIndex = 0;
      parts.push(text.substring(lastIndex, match.index));
      const symbol = match[1];
      const content = match[2];

      if (symbol === "**" || symbol === "__") {
        parts.push(<strong key={lastIndex}>{content}</strong>);
      } else if (symbol === "*") {
        parts.push(<em key={lastIndex}>{content}</em>);
      } else if (symbol === "`") {
        parts.push(
          <code key={lastIndex} className="bg-gray-700 px-1 rounded">
            {content}
          </code>
        );
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

export default function DiscordTranscript({
  transcript,
}: {
  transcript: Message[];
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set the state to true after the initial mount
  }, []);

  if (!isClient) {
    return null; // Return null during server-side render to prevent mismatch
  }

  const groupedMessages = transcript.reduce((acc, message) => {
    const lastGroup = acc[acc.length - 1];
    if (lastGroup && lastGroup[0].author_id === message.author_id) {
      lastGroup.push(message);
    } else {
      acc.push([message]);
    }
    return acc;
  }, [] as Message[][]);

  return (
    <>
      <Head>
        <title>Discord Transcript</title>
        <meta
          name="description"
          content="View the transcript of a Discord conversation."
        />
      </Head>
      <div className="flex h-screen bg-[#36393f] text-[#dcddde]">
        <div className="flex-1 flex flex-col">
          <div className="h-12 border-b border-[#202225] flex items-center px-4">
            <Hash className="w-6 h-6 text-[#8e9297] mr-2" />
            <span className="font-semibold text-white">ticket</span>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-4">
              <DiscordMessages>
                {groupedMessages.map((group, index) => (
                  <React.Fragment key={group[0].message_id}>
                    {index === 0 ||
                    formatDate(group[0].timestamp) !==
                      formatDate(groupedMessages[index - 1][0].timestamp) ? (
                      <div className="text-center my-4">
                        <span className="text-xs bg-[#36393f] text-[#72767d] px-2 py-1 rounded-full">
                          {formatDate(group[0].timestamp)}
                        </span>
                      </div>
                    ) : null}
                    <MessageGroup messages={group} />
                  </React.Fragment>
                ))}
              </DiscordMessages>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
