import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { AlertTriangle, TrendingDown, DollarSign, Clock, Shield, CheckCircle, Zap, Target } from 'lucide-react'

export function RiskAnalysis() {
  const riskAlerts = [
    {
      id: 1,
      title: "Inventory Costs Spike",
      description: "Coffee bean costs increased 20% above average in June. This impacts your profit margin significantly.",
      severity: "high",
      category: "Cost Management",
      impact: "RM 12,000 monthly",
      recommendation: "Consider negotiating bulk purchase agreements with suppliers or exploring alternative suppliers.",
      trend: "increasing",
      detectedDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Cash Flow Declining",
      description: "Monthly cash flow has decreased by 15% over the last 3 months, indicating potential liquidity issues.",
      severity: "medium",
      category: "Cash Flow",
      impact: "RM 8,500 shortfall",
      recommendation: "Implement faster payment collection processes and review payment terms with customers.",
      trend: "declining",
      detectedDate: "2024-01-12"
    },
    {
      id: 3,
      title: "Seasonal Revenue Drop",
      description: "Revenue typically drops 25% during monsoon season (Nov-Jan). Plan accordingly for cash reserves.",
      severity: "medium",
      category: "Seasonality",
      impact: "RM 18,000 revenue drop",
      recommendation: "Build cash reserves during peak months and consider monsoon-friendly menu items.",
      trend: "seasonal",
      detectedDate: "2024-01-08"
    },
    {
      id: 4,
      title: "High Staff Turnover",
      description: "Employee turnover rate is 35% higher than industry average, increasing recruitment and training costs.",
      severity: "low",
      category: "Human Resources",
      impact: "RM 5,200 additional costs",
      recommendation: "Review compensation packages and implement employee retention programs.",
      trend: "stable",
      detectedDate: "2024-01-05"
    }
  ]

  const riskCategories = [
    {
      category: "Financial Risk",
      count: 3,
      highRisk: 1,
      color: "from-red-500/20 to-rose-500/20",
      borderColor: "border-red-500/30",
      iconColor: "text-red-400"
    },
    {
      category: "Operational Risk",
      count: 2,
      highRisk: 0,
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      iconColor: "text-yellow-400"
    },
    {
      category: "Market Risk",
      count: 1,
      highRisk: 0,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      category: "Compliance Risk",
      count: 0,
      highRisk: 0,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-400"
    }
  ]

  const riskMetrics = [
    {
      title: "Overall Risk Score",
      value: "6.8/10",
      status: "medium",
      description: "Moderate risk level requiring attention",
      color: "from-orange-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      title: "Financial Health",
      value: "7.2/10",
      status: "good",
      description: "Strong financial position with minor concerns",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      title: "Cash Flow Risk",
      value: "5.5/10",
      status: "medium",
      description: "Monitor cash flow patterns closely",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      title: "Market Position",
      value: "8.1/10",
      status: "good",
      description: "Strong competitive position in local market",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500/10 border-red-500/30 hover:border-red-400/50'
      case 'medium':
        return 'bg-yellow-500/10 border-yellow-500/30 hover:border-yellow-400/50'
      case 'low':
        return 'bg-blue-500/10 border-blue-500/30 hover:border-blue-400/50'
      default:
        return 'bg-gray-500/10 border-gray-500/30 hover:border-gray-400/50'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return <AlertTriangle className="w-5 h-5 text-red-400" />
      case 'medium':
        return <Clock className="w-5 h-5 text-yellow-400" />
      case 'low':
        return <Shield className="w-5 h-5 text-blue-400" />
      default:
        return <CheckCircle className="w-5 h-5 text-gray-400" />
    }
  }

  const getSeverityBadgeColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500/20 text-red-300 border-red-500/30'
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      case 'low':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  return (
    <div className="p-8 space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Risk Analysis
          </h1>
          <p className="text-slate-300 mt-3 text-lg">
            Identify potential financial risks and get actionable recommendations
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="btn-secondary">
            Generate Report
          </Button>
          <Button className="btn-primary">
            Set Risk Alerts
          </Button>
        </div>
      </div>

      {/* Risk Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {riskMetrics.map((metric, index) => (
          <Card key={index} className="metric-card card-hover border-slate-700/50 relative overflow-hidden">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-30`}></div>
            
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-200 text-sm">{metric.title}</h4>
                <div className={`w-3 h-3 rounded-full ${
                  metric.status === 'good' ? 'bg-green-400 glow' : 
                  metric.status === 'medium' ? 'bg-yellow-400' : 'bg-red-400'
                } animate-pulse`}></div>
              </div>
              <p className="text-3xl font-bold text-white mb-2">{metric.value}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Risk Categories */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-xl">Risk Categories</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {riskCategories.map((category, index) => (
              <div key={index} className={`text-center p-6 glass-light rounded-xl border ${category.borderColor} hover-glow transition-all duration-300 relative overflow-hidden`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20`}></div>
                
                <div className="relative z-10">
                  <h4 className="font-bold text-white text-lg mb-4">{category.category}</h4>
                  <div className="space-y-3">
                    <p className="text-4xl font-bold text-slate-200">{category.count}</p>
                    <p className="text-sm text-slate-400 font-medium">Total Risks</p>
                    {category.highRisk > 0 && (
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-xs font-medium">
                        {category.highRisk} High Risk
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Alerts */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-500/30">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
            </div>
            <span className="text-xl">Active Risk Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {riskAlerts.map((risk) => (
            <div key={risk.id} className={`p-6 rounded-xl border-2 transition-all duration-300 ${getSeverityColor(risk.severity)} relative overflow-hidden`}>
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5 data-grid"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-4">
                    {getSeverityIcon(risk.severity)}
                    <div>
                      <h4 className="font-bold text-white text-xl">{risk.title}</h4>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge className="bg-slate-700/50 text-slate-200 border-slate-600/50 text-xs font-medium">
                          {risk.category}
                        </Badge>
                        <span className="text-sm text-slate-400">
                          Detected: {risk.detectedDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge className={`capitalize font-medium ${getSeverityBadgeColor(risk.severity)}`}>
                    {risk.severity} Risk
                  </Badge>
                </div>

                <p className="mb-6 text-slate-200 leading-relaxed text-lg">{risk.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                      <DollarSign className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Financial Impact</p>
                      <p className="text-white font-bold">{risk.impact}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                      <TrendingDown className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Trend</p>
                      <p className="text-white font-bold capitalize">{risk.trend}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-light p-6 rounded-xl border border-slate-600/30 mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <h5 className="font-bold text-white text-lg">Recommended Action</h5>
                  </div>
                  <p className="text-slate-200 leading-relaxed">{risk.recommendation}</p>
                </div>

                <div className="flex justify-end space-x-3">
                  <Button size="sm" variant="outline" className="btn-secondary">
                    Mark as Reviewed
                  </Button>
                  <Button size="sm" className="btn-primary">
                    Create Action Plan
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Risk Prevention Tips */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white text-xl">Risk Prevention Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-white text-lg mb-6 flex items-center space-x-3">
                <Target className="w-6 h-6 text-green-400" />
                <span>Financial Risk Management</span>
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">Maintain 3-6 months of operating expenses in cash reserves</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">Diversify revenue streams to reduce dependency risks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">Monitor key financial ratios monthly</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">Implement early warning systems for cash flow</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-6 flex items-center space-x-3">
                <Shield className="w-6 h-6 text-blue-400" />
                <span>Operational Risk Management</span>
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">Establish relationships with multiple suppliers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">Regular staff training and retention programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">Maintain adequate insurance coverage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">Document and review business processes regularly</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}