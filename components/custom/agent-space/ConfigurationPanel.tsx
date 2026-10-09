"use client"

import { Tabs, TabsContent } from "@/components/ui/tabs"

import AgentSettingsTab from "./AgentSettingsTab"
import ConfigurationHeader from "./ConfigurationHeader"
import ScheduleTab from "./ScheduleTab"
import SettingsTab from "./SettingsTab"
import ToolsTab from "./ToolsTab"
import { useContext } from "react"
import { AgentConfigContext } from "@/context/AgentConfigContext"

function ConfigurationPanel() {

  const { agentConfig, setAgentConfig } = useContext(AgentConfigContext);

  return (
    <aside className="min-h-0 border-l bg-muted/20">
      <Tabs defaultValue="settings" className="h-full gap-0">
        <ConfigurationHeader />

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          <TabsContent value="settings"><SettingsTab /></TabsContent>
          <TabsContent value="tools"><ToolsTab /></TabsContent>
          <TabsContent value="schedule"><ScheduleTab /></TabsContent>
          <TabsContent value="agent-settings"><AgentSettingsTab /></TabsContent>
        </div>
      </Tabs>
    </aside>
  )
}

export default ConfigurationPanel
