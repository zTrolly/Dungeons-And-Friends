import { Calendar, Home, Inbox, Search, Settings, Book, Map, Moon, Sun } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { useTheme } from "./components/theme-provider"
import { Toggle } from "./components/ui/toggle"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/boiolinha",
    icon: Home,
  },
  {
    title: "Livros",
    url: "#",
    icon: Book,
  },
  {
    title: "Campanhas",
    url: "#",
    icon: Map,
  },
  {
    title: "Configurações",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const { setTheme,  theme} = useTheme()

  const handleThemeChange = (changed: boolean) => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Sidebar variant="inset" collapsible="icon"> 
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dungeon and Friends</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <Toggle size="sm" aria-label="Toggle italic" onPressedChange={handleThemeChange}>
       {theme === "light" ? <Moon /> : <Sun />}
     </Toggle>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
