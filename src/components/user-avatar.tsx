import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
  user: {
    image?: string | null
    name?: string | null
  }
  className?: string
}

export function UserAvatar({ user, className }: UserAvatarProps) {
  return (
    <Avatar className={className}>
      {user.image ? (
        <AvatarImage src={user.image} alt={user.name || 'User avatar'} />
      ) : (
        <AvatarFallback className="bg-gray-800">
          {user.name?.charAt(0).toUpperCase() || 'U'}
        </AvatarFallback>
      )}
    </Avatar>
  )
}
