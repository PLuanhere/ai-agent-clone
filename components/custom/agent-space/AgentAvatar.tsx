import { Bot } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

function AgentAvatar({ className = "" }: { className?: string }) {
  return (
    <Avatar className={`border border-sky-100 bg-sky-50 ${className}`}>
      <AvatarFallback className="bg-gradient-to-br from-sky-100 via-white to-violet-100 text-sky-700 dark:from-sky-950 dark:via-slate-950 dark:to-violet-950 dark:text-sky-300">
        <Bot className="size-1/2" />
      </AvatarFallback>
    </Avatar>
  )
}

export default AgentAvatar
