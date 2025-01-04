"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  BotOff,
  Command,
  Fish,
  FishIcon,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2, 
  SquareTerminal,
  SquareTerminalIcon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Cloud, Sun } from 'react-feather';

// This is sample data.
const data = {
  user: {
    name: "Cliente X",
    email: "cliente@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "EMPRESA X",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Biomasa",
      url: "#",
      icon: Fish,
      items: [
        {
          title: "Subcategoria 1",
          url: "#",
        },
        {
          title: "Subcategoria 2",
          url: "#",
        },
        {
          title: "Subcategoria 3",
          url: "#",
        },
      ],
    },
    {
      title: "Clima",
      url: "#",
      icon: Cloud,
      items: [
        {
          title: "Subcategoria 1",
          url: "#",
        },
        {
          title: "Subcategoria 2",
          url: "#",
        },
        {
          title: "Subcategoria 3",
          url: "#",
        },
      ],
    },
    {
      title: "Seguridad",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Subcategoria 1",
          url: "#",
        },
        {
          title: "Subcategoria 2",
          url: "#",
        },
        {
          title: "Subcategoria 3",
          url: "#",
        },
      ],
    },
    {
      title: "Configuración",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Usuarios",
          url: "#",
        },
        {
          title: "Roles",
          url: "#",
        },
        {
          title: "Permisos",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Biomasa",
      url: "#",
      icon: Frame,
    },
    {
      name: "Clima",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Seguridad",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
