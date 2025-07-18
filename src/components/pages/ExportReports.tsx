import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Checkbox } from '../ui/checkbox'
import { FileText, Download, Mail, Share2, Calendar, BarChart3, AlertTriangle, Lightbulb } from 'lucide-react'

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
      pages: "3-4 pages"
    },
    {
      name: "Detailed Financial Analysis",
      description: "Comprehensive report with all metrics and visualizations",
      sections: ["overview", "metrics", "visualizations", "risks", "recommendations"],
      format: "PDF",
      pages: "8-12 pages"
    },
    {
      name: "Risk Assessment Report",
      description: "Focus on risk analysis and mitigation strategies",
      sections: ["overview", "risks", "recommendations"],
      format: "PDF",
      pages: "5-6 pages"
    },
    {
      name: "Consulting Presentation",
      description: "PowerPoint deck for client presentations",
      sections: ["overview", "metrics", "visualizations", "recommendations"],
      format: "PowerPoint",
      pages: "15-20 slides"
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
    { id: 'scenarios', label: 'Scenario Analysis', icon: BarChart3, description: 'What-if analysis and projections' }
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
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Export & Reports</h1>
          <p className="text-slate-600 mt-2">
            Generate professional reports and presentations for stakeholders
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Mail className="w-4 h-4 mr-2" />
            Email Report
          </Button>
          <Button onClick={generateReport}>
            <Download className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Report Configuration */}
        <div className="space-y-6">
          {/* Quick Templates */}
          <Card>
            <CardHeader>
              <CardTitle>Report Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {reportTemplates.map((template, index) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
                     onClick={() => applyTemplate(template)}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-slate-900">{template.name}</h4>
                    <div className="flex space-x-2">
                      <Badge variant="outline">{template.format}</Badge>
                      <Badge variant="secondary">{template.pages}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{template.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {template.sections.map((section, sIndex) => (
                        <Badge key={sIndex} variant="outline" className="text-xs">
                          {sectionOptions.find(s => s.id === section)?.label}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="ghost">
                      Use Template
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Custom Configuration */}
          <Card>
            <CardHeader>
              <CardTitle>Custom Report</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Format Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Export Format</label>
                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF Document</SelectItem>
                    <SelectItem value="powerpoint">PowerPoint Presentation</SelectItem>
                    <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                    <SelectItem value="word">Word Document</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Period Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Report Period</label>
                <Select value={reportPeriod} onValueChange={setReportPeriod}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">This Week</SelectItem>
                    <SelectItem value="monthly">This Month</SelectItem>
                    <SelectItem value="quarterly">This Quarter</SelectItem>
                    <SelectItem value="yearly">This Year</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Section Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-slate-700">Include Sections</label>
                <div className="space-y-3">
                  {sectionOptions.map((section) => {
                    const Icon = section.icon
                    return (
                      <div key={section.id} className="flex items-start space-x-3 p-3 border border-slate-200 rounded-lg">
                        <Checkbox
                          id={section.id}
                          checked={selectedSections[section.id]}
                          onCheckedChange={() => handleSectionToggle(section.id)}
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <Icon className="w-4 h-4 text-slate-500" />
                            <label htmlFor={section.id} className="font-medium text-slate-900 cursor-pointer">
                              {section.label}
                            </label>
                          </div>
                          <p className="text-sm text-slate-600 mt-1">{section.description}</p>
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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Report Preview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 rounded-lg p-6 text-center">
                <FileText className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h4 className="font-semibold text-slate-900 mb-2">
                  {selectedFormat.toUpperCase()} Report Preview
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  {Object.values(selectedSections).filter(Boolean).length} sections selected
                </p>
                <div className="space-y-2 text-left">
                  {Object.entries(selectedSections)
                    .filter(([_, selected]) => selected)
                    .map(([sectionId, _]) => {
                      const section = sectionOptions.find(s => s.id === sectionId)
                      return (
                        <div key={sectionId} className="flex items-center space-x-2 text-sm text-slate-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{section?.label}</span>
                        </div>
                      )
                    })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Reports */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-green-600" />
                <span>Recent Reports</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentReports.length > 0 ? (
                <div className="space-y-4">
                  {recentReports.map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900">{report.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <span>{report.type}</span>
                            <span>{report.format}</span>
                            <span>{report.size}</span>
                            <span>Generated: {report.generated}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          Ready
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">No reports generated yet</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Sharing Options */}
          <Card>
            <CardHeader>
              <CardTitle>Sharing & Distribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span>Email Report</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Share2 className="w-6 h-6 text-green-600" />
                  <span>Share Link</span>
                </Button>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">💡 Pro Tip</h4>
                <p className="text-sm text-blue-800">
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