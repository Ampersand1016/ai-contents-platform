import { Bell } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div>
        <h1 className="text-lg font-semibold text-gray-900">AI Contents Platform</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-50 rounded-md">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <Avatar className="h-8 w-8 bg-gray-900">
          <AvatarFallback className="bg-gray-900 text-white text-sm font-medium">A</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
