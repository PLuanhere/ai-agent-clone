"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import {
  Bot,
  ChartNoAxesCombined,
  PenTool,
  Plus,
  Store,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import axios from "axios"
import { AgentType } from "@/type/Agent"
import { usePathname } from "next/navigation"

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

function AppSideBar() {
  const [agents, setAgents] = useState<AgentType[]>([]);
  const { data: session } = useSession()
  const [activeAgentId, setActiveAgentId] = useState(agents[0]?.agentId)
  const userName = session?.user?.name ?? "Orbit User"
  const path = usePathname();

  useEffect(() => {
    GetUserAgents()
  }, [path]);

  const GetUserAgents = async () => {
    try {
      const result = await axios.get('/api/agent');
      console.log(result.data)
      const agentList = Array.isArray(result.data)
        ? result.data
        : Array.isArray(result.data?.agentConfigs)
          ? result.data.agentConfigs
          : [];
      setAgents(agentList);
    } catch (error) {
      console.error("Error fetching agents:", error);
      setAgents([]);
    }
  }

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="gap-3 px-3 py-4">
        <Link
          href="/workspace"
          className="flex h-10 items-center gap-3 overflow-hidden rounded-lg px-1.5 outline-none ring-sidebar-ring transition-colors hover:bg-sidebar-accent focus-visible:ring-2"
        >
          <span className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-950 shadow-sm ring-1 ring-black/5 dark:bg-white">
            <Image
              src="/logo.png"
              alt="Orbit logo"
              width={36}
              height={36}
              className="size-8 object-contain"
              priority
            />
          </span>
          <span className="truncate text-lg font-semibold tracking-tight group-data-[collapsible=icon]:hidden">
            Orbit
          </span>
        </Link>

        <Link href="/workspace/create-agent">
          <Button
            className="h-10 w-full justify-start gap-2.5 rounded-lg bg-slate-950 px-3 text-white shadow-sm hover:bg-slate-800 group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:p-0 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            <Plus className="size-4 shrink-0" />
            <span className="group-data-[collapsible=icon]:hidden">Create New Agent</span>
          </Button>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="px-3 py-2">
          <SidebarGroupLabel className="px-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-sidebar-foreground/50">
            Your Agents
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {Array.isArray(agents) && agents.map((agent) => {
                return (
                  <SidebarMenuItem key={agent?.agentId}>
                    <SidebarMenuButton
                      render={<Link href={`/workspace/${agent.agentId}`} />}
                      size="lg"
                      tooltip={agent.name}
                      isActive={activeAgentId === agent?.agentId}
                      onClick={() => setActiveAgentId(agent?.agentId)}
                      className="h-11 gap-3 rounded-lg px-2.5 text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-active:bg-sky-50 data-active:text-sky-950 dark:data-active:bg-sky-950/50 dark:data-active:text-sky-100"
                    >
                      <Avatar className="size-7 rounded-lg after:rounded-lg">
                        {agent.agentImage ? (
                          <AvatarImage src={agent.agentImage} alt={agent.name} className="rounded-lg object-cover" />
                        ) : null}
                        <AvatarFallback className="rounded-lg text-xs">
                          {getInitials(agent.name)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{agent.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-2 px-3 pb-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<Link href="/workspace/marketplace" />}
              tooltip="Marketplace"
              className="h-10 gap-3 rounded-lg px-2.5 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <Store className="size-4" />
              <span className="font-medium">Marketplace</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarSeparator className="mx-0" />

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              tooltip={userName}
              className="h-12 gap-3 rounded-lg px-2 hover:bg-sidebar-accent"
            >
              <Avatar className="size-8">
                {session?.user?.image ? (
                  <AvatarImage src={session.user.image} alt={userName} />
                ) : null}
                <AvatarFallback className="bg-slate-200 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {getInitials(userName)}
                </AvatarFallback>
              </Avatar>
              <span className="min-w-0 flex-1 truncate font-medium">{session?.user?.name}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export default AppSideBar
