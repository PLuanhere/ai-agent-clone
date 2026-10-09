import {
  CalendarDays,
  Github,
  Mail,
  MessageSquare,
  NotebookText,
  type LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"

type ToolItem = {
  name: string
  icon: LucideIcon
  iconClassName: string
  iconBackground: string
}

const tools: ToolItem[] = [
  { name: "Gmail", icon: Mail, iconClassName: "text-red-600", iconBackground: "bg-red-50 dark:bg-red-950/40" },
  { name: "Slack", icon: MessageSquare, iconClassName: "text-violet-600", iconBackground: "bg-violet-50 dark:bg-violet-950/40" },
  { name: "Google Calendar", icon: CalendarDays, iconClassName: "text-blue-600", iconBackground: "bg-blue-50 dark:bg-blue-950/40" },
  { name: "Notion", icon: NotebookText, iconClassName: "text-slate-800 dark:text-slate-100", iconBackground: "bg-slate-100 dark:bg-slate-800" },
  { name: "GitHub", icon: Github, iconClassName: "text-slate-900 dark:text-slate-50", iconBackground: "bg-slate-100 dark:bg-slate-800" },
]

function ToolsTab() {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-sm font-semibold">Connected apps</h3>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">Give your agent access to the tools it needs.</p>
      </div>
      <div className="divide-y rounded-xl border bg-background">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <div key={tool.name} className="flex items-center gap-3 px-3 py-3">
              <div className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${tool.iconBackground}`}>
                <Icon className={`size-4.5 ${tool.iconClassName}`} />
              </div>
              <span className="min-w-0 flex-1 truncate text-sm font-medium">{tool.name}</span>
              <Button variant="outline" size="sm">Connect</Button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ToolsTab
