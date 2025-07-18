import React, { useState } from 'react'
import { Sidebar } from './components/layout/Sidebar'
import { DashboardHome } from './components/pages/DashboardHome'
import { BusinessProfile } from './components/pages/BusinessProfile'
import { DataUpload } from './components/pages/DataUpload'
import { Visualizations } from './components/pages/Visualizations'
import { RiskAnalysis } from './components/pages/RiskAnalysis'
import { Recommendations } from './components/pages/Recommendations'
import { ScenarioSimulator } from './components/pages/ScenarioSimulator'
import { ExportReports } from './components/pages/ExportReports'
import './App.css'

export type NavigationPage = 
  | 'dashboard' 
  | 'profile' 
  | 'upload' 
  | 'visualizations' 
  | 'risks' 
  | 'recommendations' 
  | 'simulator' 
  | 'export'

function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('dashboard')

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardHome />
      case 'profile':
        return <BusinessProfile />
      case 'upload':
        return <DataUpload />
      case 'visualizations':
        return <Visualizations />
      case 'risks':
        return <RiskAnalysis />
      case 'recommendations':
        return <Recommendations />
      case 'simulator':
        return <ScenarioSimulator />
      case 'export':
        return <ExportReports />
      default:
        return <DashboardHome />
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative">
      {/* Enhanced background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(49,201,243,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,28,61,0.2)_0%,transparent_50%)] pointer-events-none"></div>
      
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1 overflow-auto relative z-10">
        {renderCurrentPage()}
      </main>
    </div>
  )
}

export default App