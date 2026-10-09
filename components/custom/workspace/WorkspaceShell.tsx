"use client"

import { usePathname } from "next/navigation"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

function WorkspaceShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAgentSpace = /^\/workspace\/[^/]+$/.test(pathname)

  return (
    <SidebarInset className="min-h-svh overflow-hidden bg-muted/20">
      {!isAgentSpace ? (
        <header className="flex h-14 shrink-0 items-center border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
      ) : null}
      <div
        className={
          isAgentSpace
            ? "flex min-h-0 flex-1 flex-col"
            : "flex flex-1 flex-col p-4 md:p-6"
        }
      >
        {children}
      </div>
    </SidebarInset>
  )
}

export default WorkspaceShell
