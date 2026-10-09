import AppSideBar from "@/components/custom/workspace/AppSideBar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSideBar />
      <SidebarInset className="min-h-svh bg-muted/20">
        <header className="flex h-14 shrink-0 items-center border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="flex flex-1 flex-col p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default WorkspaceLayout
