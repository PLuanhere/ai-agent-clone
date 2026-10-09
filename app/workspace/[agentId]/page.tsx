"use client"
import ChatPanel from "@/components/custom/agent-space/ChatPanel";
import ConfigurationPanel from "@/components/custom/agent-space/ConfigurationPanel";
import { toast } from "@/components/ui/toast";
import { AgentConfigContext } from "@/context/AgentConfigContext";
import { AgentType } from "@/type/Agent";
import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function AgentSpace() {

  const { agentId } = useParams();
  const [agentConfig, setAgentConfig] = useState<AgentType | null>()
  useEffect(() => {
    agentId && GetAgentConfig();
  }, [agentId]);

  const GetAgentConfig = async () => {
    const result = await axios.get('/api/agent?agentId=' + agentId);
    console.log(result.data);
    setAgentConfig(result.data)
  }

  return (
    <AgentConfigContext.Provider value={{ agentConfig, setAgentConfig }}>
      <main className="grid h-svh min-h-0 grid-cols-1 overflow-hidden min-[1180px]:grid-cols-[minmax(400px,1fr)_420px] 2xl:grid-cols-[minmax(520px,1fr)_480px]">
        <ChatPanel />
        <div className="hidden min-h-0 min-[1180px]:block">
          <ConfigurationPanel />
        </div>
      </main>
    </AgentConfigContext.Provider>
  )
}
