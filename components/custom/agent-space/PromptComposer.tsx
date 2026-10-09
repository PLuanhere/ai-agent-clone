"use client"

import { SendHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

function PromptComposer() {
  return (
    <div className="shrink-0 border-t bg-background px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border bg-background p-2 shadow-sm focus-within:border-slate-400 focus-within:ring-3 focus-within:ring-slate-200/60 dark:focus-within:ring-slate-800/60">
        <Textarea
          placeholder="Ask your agent anything..."
          aria-label="Message Nova Research"
          className="min-h-14 resize-none border-0 bg-transparent px-2 py-2 shadow-none focus-visible:border-transparent focus-visible:ring-0 dark:bg-transparent"
        />
        <div className="flex items-center justify-between px-1 pb-0.5">
          <span className="pl-1 text-[11px] text-muted-foreground">Enter to send · Shift + Enter for a new line</span>
          <Button size="icon" aria-label="Send message" className="size-9 rounded-xl">
            <SendHorizontal className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PromptComposer
