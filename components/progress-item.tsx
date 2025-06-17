import type React from "react"
import { Progress } from "@/components/ui/progress"

interface ProgressItemProps {
  label: string
  value: number
  max: number
  color: string
}

export function ProgressItem({ label, value, max, color }: ProgressItemProps) {
  const percentage = (value / max) * 100

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{label}</span>
        <span className="text-gray-900 font-medium">
          {value}/{max}
        </span>
      </div>
      <Progress
        value={percentage}
        className="h-2"
        style={
          {
            "--progress-background": color,
          } as React.CSSProperties
        }
      />
    </div>
  )
}
