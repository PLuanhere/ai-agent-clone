"use client"

import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"

import AgentAvatar from "./AgentAvatar"

function ChatHeader() {
  return (
    <header className="flex h-[76px] shrink-0 items-center justify-between border-b px-4 sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <SidebarTrigger className="-ml-1 lg:hidden" />
        <AgentAvatar className="size-10 shrink-0" />
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="truncate text-sm font-semibold sm:text-base">Nova Research</h1>
            <Badge variant="secondary" className="hidden font-normal sm:inline-flex">AI Agent</Badge>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">Research &amp; insights assistant</p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 rounded-full border bg-muted/30 px-3 py-2">
        <span className="size-2 rounded-full bg-emerald-500" />
        <span className="text-xs font-medium sm:text-sm">Active</span>
        <Switch checked aria-label="Agent is active" aria-readonly className="pointer-events-none" />
      </div>
    </header>
  )
}

export default ChatHeader
