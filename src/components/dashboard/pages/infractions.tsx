import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ChannelSelectDropdown } from "@/components/channel-select";

export default function InfractionsCD({
  guild,
  config,
}: {
  guild: any;
  config: any;
}) {
  return (
    <>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Module Status</CardTitle>
            <CardDescription>
              Decide wether you want 
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <ChannelSelectDropdown />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Infraction Channel</CardTitle>
            <CardDescription>
              The channel where infractions are sent.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <ChannelSelectDropdown />
        </CardContent>
      </Card>
    </>
  );
}
