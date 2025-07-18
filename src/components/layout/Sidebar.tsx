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
    <div className="w-72 glass border-r border-slate-700/30 flex flex-col relative backdrop-blur-xl">
      {/* Enhanced decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 animate-pulse-glow"></div>
      
      {/* Subtle side glow */}
      <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
      
      {/* Header */}
      <div className="p-6 border-b border-slate-700/50 fintech-border">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-slate-900" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">SME Analytics</h1>
            <p className="text-sm text-cyan-300 font-medium">Financial Dashboard</p>
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
                "w-full flex items-center space-x-4 px-4 py-3.5 rounded-xl text-left transition-all duration-300 group relative overflow-hidden",
                isActive 
                  ? "nav-active font-semibold" 
                  : "text-slate-300 hover:text-white hover:glass-light hover:border-cyan-400/30"
              )}
            >
              {/* Glow effect for active item */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl"></div>
              )}
              
              <Icon className={cn(
                "w-5 h-5 relative z-10 transition-all duration-300",
                isActive ? "text-slate-900" : "text-slate-400 group-hover:text-cyan-400"
              )} />
              <span className="font-medium relative z-10 text-sm">{item.label}</span>
              
              {/* Subtle hover glow line */}
              {!isActive && (
                <div className="absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full transition-all duration-300 group-hover:h-8 group-hover:-translate-y-1/2"></div>
              )}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700/50">
        <div className="glass-light rounded-xl p-4 border border-slate-600/30">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-sm text-slate-200 font-semibold">Malaysian SME Focus</p>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Tailored insights for local businesses with real-time analytics
          </p>
        </div>
      </div>
      
      {/* Bottom decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"></div>
    </div>
  )
}