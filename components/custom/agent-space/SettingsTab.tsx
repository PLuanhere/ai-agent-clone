import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AgentConfigContext } from "@/context/AgentConfigContext"
import { useContext } from "react"

function SettingsTab() {
  const { agentConfig, setAgentConfig } = useContext(AgentConfigContext);
  return (
    <div className="space-y-2">
      <Label htmlFor="agent-description-instructions">Agent Description &amp; Instructions</Label>
      <Textarea
        id="agent-description-instructions"
        value={agentConfig?.description}
        onChange={(event) => setAgentConfig((prevConfig: any) => ({
          ...prevConfig,
          description: event.target.value
        }))}
        className="min-h-64 resize-none bg-background leading-6"
      />
      <p className="text-xs leading-5 text-muted-foreground">
        Describe your agent’s purpose, behavior, priorities, and response style in one place.
      </p>
    </div>
  )
}

export default SettingsTab
