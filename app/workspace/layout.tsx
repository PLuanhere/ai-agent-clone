import AppSideBar from "@/components/custom/workspace/AppSideBar"
import WorkspaceShell from "@/components/custom/workspace/WorkspaceShell"
import { SidebarProvider } from "@/components/ui/sidebar"

function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSideBar />
      <WorkspaceShell>{children}</WorkspaceShell>
    </SidebarProvider>
  )
}

export default WorkspaceLayout
