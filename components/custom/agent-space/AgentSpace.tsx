import ChatPanel from "./ChatPanel"
import ConfigurationPanel from "./ConfigurationPanel"

function AgentSpace() {
  return (
    <main className="grid h-svh min-h-0 grid-cols-1 overflow-hidden min-[1180px]:grid-cols-[minmax(400px,1fr)_420px] 2xl:grid-cols-[minmax(520px,1fr)_480px]">
      <ChatPanel />
      <div className="hidden min-h-0 min-[1180px]:block">
        <ConfigurationPanel />
      </div>
    </main>
  )
}

export default AgentSpace
