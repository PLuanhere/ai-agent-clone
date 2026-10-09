import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import AgentAvatar from "./AgentAvatar"

function UserAvatar() {
  return (
    <Avatar className="size-8 shrink-0">
      <AvatarFallback className="bg-slate-200 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
        AM
      </AvatarFallback>
    </Avatar>
  )
}

function Conversation() {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-7">
        <div className="flex items-center gap-3 text-xs text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
          Today
        </div>

        <div className="flex justify-end gap-3">
          <div className="max-w-[78%] rounded-2xl rounded-br-md bg-slate-950 px-4 py-3 text-sm leading-6 text-white shadow-sm dark:bg-slate-100 dark:text-slate-950">
            Can you summarize the latest customer feedback and highlight the most common requests?
          </div>
          <UserAvatar />
        </div>

        <div className="flex items-start gap-3">
          <AgentAvatar className="size-8 shrink-0" />
          <div className="max-w-[82%] rounded-2xl rounded-tl-md border bg-muted/35 px-4 py-3 text-sm leading-6 shadow-xs">
            <p>I reviewed the recent feedback. The strongest themes are:</p>
            <ul className="mt-2 space-y-1.5 text-muted-foreground">
              <li className="flex gap-2"><span className="text-foreground">1.</span> More flexible reporting and export options.</li>
              <li className="flex gap-2"><span className="text-foreground">2.</span> Faster search across projects and documents.</li>
              <li className="flex gap-2"><span className="text-foreground">3.</span> Additional Slack and calendar automations.</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <div className="max-w-[78%] rounded-2xl rounded-br-md bg-slate-950 px-4 py-3 text-sm leading-6 text-white shadow-sm dark:bg-slate-100 dark:text-slate-950">
            Great. Turn those into a short list of priorities for next week.
          </div>
          <UserAvatar />
        </div>

        <div className="flex items-start gap-3">
          <AgentAvatar className="size-8 shrink-0" />
          <div className="max-w-[82%] rounded-2xl rounded-tl-md border bg-muted/35 px-4 py-3 text-sm leading-6 shadow-xs">
            Absolutely. I’d prioritize improved exports first, followed by universal search, then the most requested Slack automation.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conversation
