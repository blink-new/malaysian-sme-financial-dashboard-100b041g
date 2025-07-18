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
    <div className="flex h-screen bg-slate-50">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1 overflow-auto">
        {renderCurrentPage()}
      </main>
    </div>
  )
}

export default App