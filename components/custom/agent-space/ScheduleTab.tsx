import { CalendarClock, Clock3, RefreshCcw, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const scheduleOptions = [
  { value: "manual", label: "Manual", description: "Run only when you ask", icon: Zap },
  { value: "recurring", label: "Recurring", description: "Run on a repeating schedule", icon: RefreshCcw },
  { value: "specific", label: "Specific Time", description: "Run once at a chosen time", icon: Clock3 },
]

function ScheduleTab() {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-sm font-semibold">Execution schedule</h3>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">Choose when this agent should run.</p>
      </div>

      <RadioGroup defaultValue="recurring" className="grid gap-2">
        {scheduleOptions.map((option) => {
          const Icon = option.icon
          return (
            <Label
              key={option.value}
              htmlFor={option.value}
              className="flex cursor-pointer items-center gap-3 rounded-xl border bg-background p-3 hover:bg-muted/40 has-data-checked:border-slate-400 has-data-checked:ring-1 has-data-checked:ring-slate-200 dark:has-data-checked:border-slate-600 dark:has-data-checked:ring-slate-800"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Icon className="size-4 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{option.label}</p>
                <p className="text-xs font-normal text-muted-foreground">{option.description}</p>
              </div>
              <RadioGroupItem value={option.value} id={option.value} />
            </Label>
          )
        })}
      </RadioGroup>

      <div className="space-y-4 rounded-xl border bg-muted/25 p-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="frequency">Frequency</Label>
            <Select defaultValue="daily">
              <SelectTrigger id="frequency" className="w-full bg-background"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Every day</SelectItem>
                <SelectItem value="weekly">Every week</SelectItem>
                <SelectItem value="monthly">Every month</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="schedule-time">Time</Label>
            <Input id="schedule-time" type="time" defaultValue="08:00" className="bg-background" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Days</Label>
          <div className="grid grid-cols-7 gap-1.5">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
              <Button key={`${day}-${index}`} type="button" variant={index < 5 ? "default" : "outline"} size="icon-sm" className="w-full">
                {day}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-background px-3 py-2.5 text-sm">
          <CalendarClock className="size-4 text-sky-600" />
          <span>Every weekday at <strong>8:00 AM</strong></span>
        </div>
      </div>
    </div>
  )
}

export default ScheduleTab
