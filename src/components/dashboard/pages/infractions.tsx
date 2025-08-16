"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChannelSelectDropdown } from "@/components/channel-select";
import { Switch } from "@/components/ui/switch";
import { EditIcon, Trash2, SaveIcon } from "lucide-react";
import TypesModal from "../modals/types";

export default function InfractionsCD({ guild, config }: { guild: any; config: any }) {
  const [selectedChannel, setSelectedChannel] = useState("");
  const [moduleStatus, setModuleStatus] = useState(false);
  const [types, setTypes] = useState<string[]>([]);
  const [typesModalOpen, setTypesModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  useEffect(() => {
    setSelectedChannel(
      config?.Infraction?.channel?.toString() ||
      guild?.channels?.[0]?.id?.toString() ||
      ""
    );
    setModuleStatus(config?.Modules?.infractions ?? false);
    setTypes(config?.Infraction?.types ?? []);
  }, [config, guild]);

  const handleSave = async () => {
    if (!guild?.id || !selectedChannel) return;
    const payload = {
      Modules: {
        ...(config?.Modules || {}),
        infractions: moduleStatus,
      },
      Infraction: {
        ...(config?.Infraction || {}),
        channel: String(selectedChannel),
        types,
      },
    };
    const res = await fetch(`/api/config/${guild.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      alert("An error occured while trying to save " + (err.message || res.statusText));
    }
  };

  return (
    <Card className="p-4 bg-zinc-950">
      <Card className="mb-2 bg-zinc-900 border-zinc-850">
        <CardHeader>
          <CardTitle>Module Status</CardTitle>
          <CardDescription>
            Decide whether you want the module to be enabled.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Switch
            checked={moduleStatus}
            onCheckedChange={setModuleStatus}
            key="infraction-module-switch"
          />
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-850 mb-2">
        <CardHeader>
          <CardTitle>Infraction Channel</CardTitle>
          <CardDescription>
            The channel where infractions are sent.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChannelSelectDropdown
            channels={guild.channels}
            config={config}
            configKey="Infraction.channel"
            onChange={setSelectedChannel}
          />
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-850 mb-6">
        <CardHeader>
          <CardTitle>Infraction Types</CardTitle>
          <CardDescription>
            The different infraction categories you can assign.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="p-3 bg-zinc-850">
            {types.length > 0 ? (
              <ul>
                {types.map((type, idx) => (
                  <li key={idx}>
                    <Card className="p-4 mb-2">
                      <div className="flex items-center justify-between">
                        <span>{type}</span>
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              setSelectedType(type);
                              setTypesModalOpen(true);
                            }}
                          >
                            <EditIcon className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              setTypes(types.filter((_, i) => i !== idx))
                            }
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center py-6 text-zinc-400">
                <span className="mb-2 text-sm">
                  No infraction types configured.
                </span>
                <span className="text-xs">
                  You can add infraction types in your server settings.
                </span>
              </div>
            )}

          </Card>
              <Button className=" mt-4" onClick={() => setTypes([...types, "New Type"])}>
              Create
              </Button>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="self-end">
        <SaveIcon className="mr-1 w-4 h-4" />
        Save
      </Button>

      <TypesModal
        open={typesModalOpen}
        onOpenChange={setTypesModalOpen}
        type={selectedType}
        setType={setSelectedType}
      />
    </Card>
  );
}
