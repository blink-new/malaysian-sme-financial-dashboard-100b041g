import React from 'react'
import { NavigationPage } from '../../App'
import { 
  BarChart3, 
  Building2, 
  Upload, 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb, 
  Calculator, 
  FileText,
  Home
} from 'lucide-react'
import { cn } from '../../lib/utils'

interface SidebarProps {
  currentPage: NavigationPage
  onPageChange: (page: NavigationPage) => void
}

const navigationItems = [
  { id: 'dashboard' as NavigationPage, label: 'Dashboard', icon: Home },
  { id: 'profile' as NavigationPage, label: 'Business Profile', icon: Building2 },
  { id: 'upload' as NavigationPage, label: 'Upload Data', icon: Upload },
  { id: 'visualizations' as NavigationPage, label: 'Visualizations', icon: BarChart3 },
  { id: 'risks' as NavigationPage, label: 'Risk Analysis', icon: AlertTriangle },
  { id: 'recommendations' as NavigationPage, label: 'Recommendations', icon: Lightbulb },
  { id: 'simulator' as NavigationPage, label: 'Scenario Simulator', icon: Calculator },
  { id: 'export' as NavigationPage, label: 'Export & Reports', icon: FileText },
]

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-900">SME Analytics</h1>
            <p className="text-sm text-slate-500">Financial Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                isActive 
                  ? "bg-blue-50 text-blue-700 border border-blue-200" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <Icon className={cn(
                "w-5 h-5",
                isActive ? "text-blue-600" : "text-slate-400"
              )} />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200">
        <div className="bg-slate-50 rounded-lg p-3">
          <p className="text-xs text-slate-600 font-medium">Malaysian SME Focus</p>
          <p className="text-xs text-slate-500 mt-1">
            Tailored insights for local businesses
          </p>
        </div>
      </div>
    </div>
  )
}