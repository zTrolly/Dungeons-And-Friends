import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const Settings = () => {
  const { setTheme,  theme} = useTheme()

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl font-semibold">Configurações</h1>
      <Button onClick={()=>{
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}>{theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}</Button>
  </div>
  )
}