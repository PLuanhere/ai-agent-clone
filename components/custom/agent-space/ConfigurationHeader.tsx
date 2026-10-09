import { CalendarClock, Save, Settings2, Shuffle, SlidersHorizontal, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import AgentAvatar from "./AgentAvatar"
import { useContext } from "react"
import { AgentConfigContext } from "@/context/AgentConfigContext"
import { toast } from "@/components/ui/toast"
import axios from "axios"

const tabItems = [
  { value: "settings", label: "Settings", icon: Settings2 },
  { value: "tools", label: "Tools", icon: Wrench },
  { value: "schedule", label: "Schedule", icon: CalendarClock },
  { value: "agent-settings", label: "Agent Settings", icon: SlidersHorizontal },
]

function ConfigurationHeader() {

  const { agentConfig, setAgentConfig } = useContext(AgentConfigContext);

  const shuffleAvatar = () => {
    const randomSeed = crypto.randomUUID();
    const newAvatarUrl = `https://api.dicebear.com/10.x/line-face/svg?backgroundColor=ffd9b0,ffa8bf&backgroundColorFill=linear&backgroundColorAngle=135&seed=${randomSeed}`
    setAgentConfig((prevConfig: any) => ({
      ...prevConfig,
      agentImage: newAvatarUrl
    }))
  }

  const SaveAgentConfig = async () => {
    toast.add({
      title: "Saving Agent Configuration",
      description: "Agent Configuration Updating...",
      type: "info"
    })
    const result = await axios.put('/api/agent', agentConfig);

    console.log(result.data);

    toast.add({
      title: "Saved Agent Configuration",
      description: "Agent Configuration Updated Successfully",
      type: "success"
    })
  }

  return (
    <header className="border-b bg-background px-5 py-4 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold tracking-tight">Agent Configuration</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">Customize how Nova works</p>
        </div>
        <Button onClick={SaveAgentConfig}><Save data-icon="inline-start" />Save</Button>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <img src={agentConfig?.agentImage} alt="Agent Avatar" className="size-16 rounded-full" />
        <div className="min-w-0 flex-1 space-y-2">
          <Button variant="outline" size="sm" onClick={shuffleAvatar}><Shuffle data-icon="inline-start" />Shuffle Avatar</Button>
          <div className="space-y-1.5">
            <Label htmlFor="agent-name" className="text-xs">Agent Name</Label>
            <Input id="agent-name" defaultValue={agentConfig?.name}
              onChange={(event) => setAgentConfig((prevConfig: any) => ({
                ...prevConfig,
                name: event.target.value
              }))}
              className="h-9 bg-background" />
          </div>
        </div>
      </div>

      <TooltipProvider>
        <TabsList className="mt-5 grid h-11 w-full grid-cols-4 rounded-xl border bg-muted/60 p-1">
          {tabItems.map((tab) => {
            const Icon = tab.icon
            return (
              <Tooltip key={tab.value}>
                <TooltipTrigger
                  render={
                    <TabsTrigger value={tab.value} aria-label={tab.label} className="h-full rounded-lg px-0 data-active:bg-background data-active:shadow-sm">
                      <Icon className="size-4" />
                    </TabsTrigger>
                  }
                />
                <TooltipContent>{tab.label}</TooltipContent>
              </Tooltip>
            )
          })}
        </TabsList>
      </TooltipProvider>
    </header>
  )
}

export default ConfigurationHeader
