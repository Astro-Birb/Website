"use client";

import { useState, useEffect } from "react";
import { Hash, Volume2, Lock } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function getNested(obj: any, path: string) {
  return path.split(".").reduce((o, k) => o?.[k], obj);
}

const ChannelIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    text: <Hash className="h-4 w-4" />,
    voice: <Volume2 className="h-4 w-4" />,
    locked: <Lock className="h-4 w-4" />,
  };
  return <span className="mr-2 text-muted-foreground">{icons[type] || icons.text}</span>;
};

interface Channel {
  id: string;
  name: string;
  type: string;
}

interface ChannelSelectDropdownProps {
  channels: Channel[];
  config: any;
  configKey: string;
  onChange?: (channelId: string) => void; 
}

export function ChannelSelectDropdown({
  channels,
  config,
  configKey,
  onChange,
}: ChannelSelectDropdownProps) {
  const initialChannel =
    getNested(config, configKey) ||
    (channels && channels.length > 0 ? channels[0].id : "");

  const [selectedChannel, setSelectedChannel] = useState(initialChannel);

  useEffect(() => {
    const currentValue = getNested(config, configKey);
    const defaultValue = channels && channels.length > 0 ? channels[0].id : "";
    setSelectedChannel(currentValue || defaultValue);
  }, [config, configKey, channels]);

  const handleSelect = (value: string) => {
    setSelectedChannel(value);
    if (onChange) onChange(value);
  };

  if (!channels || channels.length === 0) {
    return (
      <Select disabled>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="No channels available" />
        </SelectTrigger>
      </Select>
    );
  }

  return (
    <Select value={selectedChannel} onValueChange={handleSelect}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a channel">
          {selectedChannel && (
            <div className="flex items-center">
              <ChannelIcon 
                type={channels.find(c => c.id === selectedChannel)?.type || "text"} 
              />
              <span>{channels.find(c => c.id === selectedChannel)?.name}</span>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {channels.map((channel) => (
          <SelectItem key={channel.id} value={channel.id}>
            <div className="flex items-center">
              <ChannelIcon type={channel.type} />
              <span>{channel.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}