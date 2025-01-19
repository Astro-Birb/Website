export interface DiscordGuild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
  permissions: string;
}

export interface MutualGuildsResponse {
  mutual: string[];
}

export interface PermissionResponse {
  isAdmin: boolean;
}

export interface InfractionResponse {
  id: string;
  // Add other infraction fields as needed
}
