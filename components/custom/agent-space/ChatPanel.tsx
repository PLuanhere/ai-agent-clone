import ChatHeader from "./ChatHeader"
import Conversation from "./Conversation"
import PromptComposer from "./PromptComposer"

function ChatPanel() {
  return (
    <section className="flex min-h-0 min-w-0 flex-col bg-background">
      <ChatHeader />
      <Conversation />
      <PromptComposer />
    </section>
  )
}

export default ChatPanel
