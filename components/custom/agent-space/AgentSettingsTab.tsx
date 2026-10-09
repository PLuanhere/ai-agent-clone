import { Copy, Pause, RotateCcw, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"

const actions = [
  { label: "Duplicate Agent", description: "Create a copy of this agent", icon: Copy },
  { label: "Pause Agent", description: "Temporarily stop this agent", icon: Pause },
  { label: "Reset Agent", description: "Restore the default configuration", icon: RotateCcw },
]

function AgentSettingsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold">Agent management</h3>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">Manage or reset this agent.</p>
      </div>

      <div className="divide-y rounded-xl border bg-background">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <div key={action.label} className="flex items-center gap-3 p-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Icon className="size-4 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{action.label}</p>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
              <Button variant="outline" size="sm">{action.label.split(" ")[0]}</Button>
            </div>
          )
        })}
      </div>

      <div className="rounded-xl border border-red-200 bg-red-50/60 p-4 dark:border-red-950 dark:bg-red-950/20">
        <h3 className="text-sm font-semibold text-red-700 dark:text-red-400">Danger Zone</h3>
        <p className="mt-1 text-xs leading-5 text-red-700/70 dark:text-red-400/70">Permanently remove this agent and its configuration.</p>
        <Button variant="destructive" className="mt-4">
          <Trash2 data-icon="inline-start" />
          Delete Agent
        </Button>
      </div>
    </div>
  )
}

export default AgentSettingsTab
