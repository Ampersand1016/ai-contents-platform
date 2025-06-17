import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { QuickAccessCard } from "@/components/quick-access-card"
import { ProgressItem } from "@/components/progress-item"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, FileText, BarChart3 } from "lucide-react"

const quickAccessItems = [
  {
    title: "Keyword Analysis",
    description: "キーワードの検索ボリュームと競合分析を実行",
    icon: Search,
    iconBgColor: "bg-blue-100",
  },
  {
    title: "Article Creation",
    description: "AIを使用して高品質なコンテンツを生成",
    icon: FileText,
    iconBgColor: "bg-green-100",
  },
  {
    title: "Performance Tracking",
    description: "コンテンツのパフォーマンスを追跡・分析",
    icon: BarChart3,
    iconBgColor: "bg-purple-100",
  },
]

const recentKeywords = [
  { keyword: "AI マーケティング", date: "2024-01-15", volume: "12,000" },
  { keyword: "コンテンツ戦略", date: "2024-01-14", volume: "8,500" },
  { keyword: "SEO 最適化", date: "2024-01-13", volume: "15,200" },
  { keyword: "デジタル変革", date: "2024-01-12", volume: "6,800" },
  { keyword: "ブランディング", date: "2024-01-11", volume: "9,300" },
]

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
        <AppSidebar />
        <SidebarInset>
          <Header />
          <main className="p-6">
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Welcome Section */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">こんにちは、アンパサンドさん</h1>
              </div>

              {/* Quick Access Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickAccessItems.map((item, index) => (
                  <QuickAccessCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    iconBgColor={item.iconBgColor}
                  />
                ))}
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                {/* Recent Analysis History - 70% width */}
                <div className="lg:col-span-7">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900">最近の分析履歴</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentKeywords.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                          >
                            <div>
                              <p className="font-medium text-gray-900">{item.keyword}</p>
                              <p className="text-sm text-gray-500">{item.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-900">{item.volume}</p>
                              <p className="text-sm text-gray-500">月間検索数</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Resource Usage - 30% width */}
                <div className="lg:col-span-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900">今月のリソース使用状況</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ProgressItem label="API コール" value={750} max={1000} color="#3b82f6" />
                      <ProgressItem label="記事生成" value={12} max={20} color="#10b981" />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
