import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface QuickAccessCardProps {
  title: string
  description: string
  icon: LucideIcon
  iconBgColor: string
}

export function QuickAccessCard({ title, description, icon: Icon, iconBgColor }: QuickAccessCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-full ${iconBgColor}`}>
            <Icon className="h-6 w-6 text-gray-700" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
