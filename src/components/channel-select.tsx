import { useState } from 'react'
import { Hash, Volume2, Lock } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Channel = {
  id: string
  name: string
  type: 'text' | 'voice' | 'locked'
}

const channels: Channel[] = [
  { id: '1', name: 'general', type: 'text' },
  { id: '2', name: 'voice-chat', type: 'voice' },
  { id: '3', name: 'announcements', type: 'locked' },
  { id: '4', name: 'off-topic', type: 'text' },
  { id: '5', name: 'music', type: 'voice' },
  // Add more channels as needed
]

const ChannelIcon = ({ type }: { type: Channel['type'] }) => {
  const icons = {
    text: <Hash className="h-4 w-4" />,
    voice: <Volume2 className="h-4 w-4" />,
    locked: <Lock className="h-4 w-4" />
  }
  return <span className="mr-2 text-muted-foreground">{icons[type]}</span>
}

export function ChannelSelectDropdown() {
  const [selectedChannel, setSelectedChannel] = useState<string>(channels[0].id)

  return (
    <div className='pt-4'>
    <Select value={selectedChannel} onValueChange={setSelectedChannel}>
      <SelectTrigger className="w-[450px]">
        <SelectValue placeholder="Select a channel" />
      </SelectTrigger>
      <SelectContent className="dark">
        {channels.map((channel) => (
          <SelectItem className="dark" key={channel.id} value={channel.id}>
            <div className="flex items-center dark">
              <ChannelIcon type={channel.type} />
              <span>{channel.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    </div>
  )
}
