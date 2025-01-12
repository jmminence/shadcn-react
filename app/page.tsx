"use client";

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import BarChart from "@/components/BarChart"
import LineChart from "@/components/LineChart"
import PieChart from "@/components/PieChart"
import RadarChart from "@/components/RadarChart"
import LineChart2 from "@/components/LineChart2"
import AreaChart from "@/components/AreaChart"
import BubbleChart from "@/components/BubbleChart"
import TemperatureDropdown from "@/components/TemperatureDropdown"
import { InteractiveAreaChart } from "@/components/InteractiveAreaChart";
import { BarChart2, BarChartBig, ChartScatter } from "lucide-react";
import { BarController, BarElement } from "chart.js";
import { InteractiveBarChart } from "@/components/InteractiveBarChart";



export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Main
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50">
              <BarChart />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <LineChart />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <LineChart2 />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <AreaChart />
            </div>
            <div className="aspect-square w-1/2 mx-auto rounded-xl bg-muted/0">
              <PieChart />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <BubbleChart />
            </div>
          </div>
          <div className="p-4">
            <InteractiveBarChart />
          </div>
          <div className="min-h-[100vh] w-1/2 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
