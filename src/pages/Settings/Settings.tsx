import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Toggle } from "@/components/ui/toggle"
import { Italic } from "lucide-react"

export const Settings = () => {


  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl font-semibold">Configurações</h1>
      <div>
       <h2 className="text-lg font-semibold">Tema</h2> 
     
      </div>


     
  </div>
  )
}