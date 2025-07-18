import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Checkbox } from '../ui/checkbox'
import { FileText, Download, Mail, Share2, Calendar, BarChart3, AlertTriangle, Lightbulb, Target } from 'lucide-react'

export function ExportReports() {
  const [selectedFormat, setSelectedFormat] = useState('pdf')
  const [selectedSections, setSelectedSections] = useState({
    overview: true,
    metrics: true,
    visualizations: true,
    risks: true,
    recommendations: true,
    scenarios: false
  })
  const [reportPeriod, setReportPeriod] = useState('monthly')

  const reportTemplates = [
    {
      name: "Executive Summary",
      description: "High-level overview for stakeholders and investors",
      sections: ["overview", "metrics", "risks"],
      format: "PDF",
      pages: "3-4 pages",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      name: "Detailed Financial Analysis",
      description: "Comprehensive report with all metrics and visualizations",
      sections: ["overview", "metrics", "visualizations", "risks", "recommendations"],
      format: "PDF",
      pages: "8-12 pages",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      name: "Risk Assessment Report",
      description: "Focus on risk analysis and mitigation strategies",
      sections: ["overview", "risks", "recommendations"],
      format: "PDF",
      pages: "5-6 pages",
      color: "from-red-500/20 to-rose-500/20",
      borderColor: "border-red-500/30"
    },
    {
      name: "Consulting Presentation",
      description: "PowerPoint deck for client presentations",
      sections: ["overview", "metrics", "visualizations", "recommendations"],
      format: "PowerPoint",
      pages: "15-20 slides",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    }
  ]

  const recentReports = [
    {
      name: "Monthly Financial Report - December 2024",
      type: "Detailed Analysis",
      format: "PDF",
      size: "2.3 MB",
      generated: "2024-01-15",
      status: "ready"
    },
    {
      name: "Q4 2024 Executive Summary",
      type: "Executive Summary",
      format: "PDF",
      size: "1.1 MB",
      generated: "2024-01-10",
      status: "ready"
    },
    {
      name: "Risk Assessment - January 2024",
      type: "Risk Report",
      format: "PDF",
      size: "1.8 MB",
      generated: "2024-01-08",
      status: "ready"
    }
  ]

  const sectionOptions = [
    { id: 'overview', label: 'Business Overview', icon: BarChart3, description: 'Company profile and key metrics summary' },
    { id: 'metrics', label: 'Financial Metrics', icon: BarChart3, description: 'Revenue, profit, cash flow analysis' },
    { id: 'visualizations', label: 'Charts & Graphs', icon: BarChart3, description: 'Interactive visualizations and trends' },
    { id: 'risks', label: 'Risk Analysis', icon: AlertTriangle, description: 'Risk alerts and mitigation strategies' },
    { id: 'recommendations', label: 'AI Recommendations', icon: Lightbulb, description: 'Actionable business insights' },
    { id: 'scenarios', label: 'Scenario Analysis', icon: Target, description: 'What-if analysis and projections' }
  ]

  const handleSectionToggle = (sectionId: string) => {
    setSelectedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const generateReport = () => {
    console.log('Generating report with:', {
      format: selectedFormat,
      sections: selectedSections,
      period: reportPeriod
    })
    // Here you would implement the actual report generation
  }

  const applyTemplate = (template: any) => {
    const newSections = { ...selectedSections }
    Object.keys(newSections).forEach(key => {
      newSections[key] = template.sections.includes(key)
    })
    setSelectedSections(newSections)
    setSelectedFormat(template.format.toLowerCase())
  }

  return (
    <div className="p-8 space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Export & Reports
          </h1>
          <p className="text-slate-300 mt-3 text-lg">
            Generate professional reports and presentations for stakeholders
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="btn-secondary">
            <Mail className="w-4 h-4 mr-2" />
            Email Report
          </Button>
          <Button onClick={generateReport} className="btn-primary">
            <Download className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Report Configuration */}
        <div className="space-y-6">
          {/* Quick Templates */}
          <Card className="glass card-hover border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white text-xl">Report Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {reportTemplates.map((template, index) => (
                <div key={index} className={`p-6 glass-light rounded-xl border ${template.borderColor} hover-glow transition-all duration-300 cursor-pointer relative overflow-hidden`}
                     onClick={() => applyTemplate(template)}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-20`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-white text-lg">{template.name}</h4>
                      <div className="flex space-x-2">
                        <Badge className="bg-slate-700/50 text-slate-200 border-slate-600/50">{template.format}</Badge>
                        <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">{template.pages}</Badge>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-4 leading-relaxed">{template.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {template.sections.map((section, sIndex) => (
                          <Badge key={sIndex} className="bg-slate-700/50 text-slate-200 border-slate-600/50 text-xs">
                            {sectionOptions.find(s => s.id === section)?.label}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" className="btn-primary">
                        Use Template
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Custom Configuration */}
          <Card className="glass card-hover border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white text-xl">Custom Report</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Format Selection */}
              <div className="space-y-3">
                <label className="text-slate-200 font-medium">Export Format</label>
                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger className="input-glass">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="glass border-slate-600/50">
                    <SelectItem value="pdf" className="text-slate-200 hover:bg-slate-700/50">PDF Document</SelectItem>
                    <SelectItem value="powerpoint" className="text-slate-200 hover:bg-slate-700/50">PowerPoint Presentation</SelectItem>
                    <SelectItem value="excel" className="text-slate-200 hover:bg-slate-700/50">Excel Spreadsheet</SelectItem>
                    <SelectItem value="word" className="text-slate-200 hover:bg-slate-700/50">Word Document</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Period Selection */}
              <div className="space-y-3">
                <label className="text-slate-200 font-medium">Report Period</label>
                <Select value={reportPeriod} onValueChange={setReportPeriod}>
                  <SelectTrigger className="input-glass">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="glass border-slate-600/50">
                    <SelectItem value="weekly" className="text-slate-200 hover:bg-slate-700/50">This Week</SelectItem>
                    <SelectItem value="monthly" className="text-slate-200 hover:bg-slate-700/50">This Month</SelectItem>
                    <SelectItem value="quarterly" className="text-slate-200 hover:bg-slate-700/50">This Quarter</SelectItem>
                    <SelectItem value="yearly" className="text-slate-200 hover:bg-slate-700/50">This Year</SelectItem>
                    <SelectItem value="custom" className="text-slate-200 hover:bg-slate-700/50">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Section Selection */}
              <div className="space-y-4">
                <label className="text-slate-200 font-medium">Include Sections</label>
                <div className="space-y-3">
                  {sectionOptions.map((section) => {
                    const Icon = section.icon
                    return (
                      <div key={section.id} className="flex items-start space-x-4 p-4 glass-light rounded-xl border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300">
                        <Checkbox
                          id={section.id}
                          checked={selectedSections[section.id]}
                          onCheckedChange={() => handleSectionToggle(section.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <Icon className="w-5 h-5 text-slate-400" />
                            <label htmlFor={section.id} className="font-semibold text-white cursor-pointer text-lg">
                              {section.label}
                            </label>
                          </div>
                          <p className="text-slate-300 mt-2 leading-relaxed">{section.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview & Recent Reports */}
        <div className="space-y-6">
          {/* Report Preview */}
          <Card className="glass card-hover border-slate-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-white">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-xl">Report Preview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="glass-light rounded-xl p-8 text-center border border-slate-600/30">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-slate-900" />
                </div>
                <h4 className="font-bold text-white text-xl mb-2">
                  {selectedFormat.toUpperCase()} Report Preview
                </h4>
                <p className="text-slate-300 mb-6">
                  {Object.values(selectedSections).filter(Boolean).length} sections selected
                </p>
                <div className="space-y-3 text-left">
                  {Object.entries(selectedSections)
                    .filter(([_, selected]) => selected)
                    .map(([sectionId, _]) => {
                      const section = sectionOptions.find(s => s.id === sectionId)
                      const Icon = section?.icon || FileText
                      return (
                        <div key={sectionId} className="flex items-center space-x-3 text-slate-200">
                          <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                            <Icon className="w-4 h-4 text-cyan-400" />
                          </div>
                          <span className="font-medium">{section?.label}</span>
                        </div>
                      )
                    })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Reports */}
          <Card className="glass card-hover border-slate-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-white">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
                  <Calendar className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-xl">Recent Reports</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentReports.length > 0 ? (
                <div className="space-y-4">
                  {recentReports.map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-6 glass-light rounded-xl border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                          <FileText className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-lg">{report.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-slate-400 mt-1">
                            <span className="font-medium">{report.type}</span>
                            <span>{report.format}</span>
                            <span>{report.size}</span>
                            <span>Generated: {report.generated}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30 font-medium">
                          Ready
                        </Badge>
                        <Button size="sm" className="btn-secondary">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-cyan-400">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-slate-700/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-slate-400" />
                  </div>
                  <p className="text-slate-400 text-lg">No reports generated yet</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Sharing Options */}
          <Card className="glass card-hover border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white text-xl">Sharing & Distribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto p-6 flex flex-col items-center space-y-3 btn-secondary group hover-glow">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                    <Mail className="w-6 h-6 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <span className="font-semibold">Email Report</span>
                </Button>
                <Button variant="outline" className="h-auto p-6 flex flex-col items-center space-y-3 btn-secondary group hover-glow">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                    <Share2 className="w-6 h-6 text-green-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <span className="font-semibold">Share Link</span>
                </Button>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
                <h4 className="font-bold text-white text-lg mb-3 flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-cyan-400" />
                  <span>Pro Tip</span>
                </h4>
                <p className="text-slate-200 leading-relaxed">
                  Schedule automatic monthly reports to be sent to your stakeholders via email.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}