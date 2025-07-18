import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { AlertTriangle, TrendingDown, DollarSign, Clock, Shield, CheckCircle } from 'lucide-react'

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
      color: "bg-red-100 text-red-800"
    },
    {
      category: "Operational Risk",
      count: 2,
      highRisk: 0,
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      category: "Market Risk",
      count: 1,
      highRisk: 0,
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "Compliance Risk",
      count: 0,
      highRisk: 0,
      color: "bg-green-100 text-green-800"
    }
  ]

  const riskMetrics = [
    {
      title: "Overall Risk Score",
      value: "6.8/10",
      status: "medium",
      description: "Moderate risk level requiring attention"
    },
    {
      title: "Financial Health",
      value: "7.2/10",
      status: "good",
      description: "Strong financial position with minor concerns"
    },
    {
      title: "Cash Flow Risk",
      value: "5.5/10",
      status: "medium",
      description: "Monitor cash flow patterns closely"
    },
    {
      title: "Market Position",
      value: "8.1/10",
      status: "good",
      description: "Strong competitive position in local market"
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return <AlertTriangle className="w-4 h-4 text-red-600" />
      case 'medium':
        return <Clock className="w-4 h-4 text-yellow-600" />
      case 'low':
        return <Shield className="w-4 h-4 text-blue-600" />
      default:
        return <CheckCircle className="w-4 h-4 text-gray-600" />
    }
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Risk Analysis</h1>
          <p className="text-slate-600 mt-2">
            Identify potential financial risks and get actionable recommendations
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            Generate Report
          </Button>
          <Button>
            Set Risk Alerts
          </Button>
        </div>
      </div>

      {/* Risk Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {riskMetrics.map((metric, index) => (
          <Card key={index} className="metric-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-slate-700">{metric.title}</h4>
                <div className={`w-3 h-3 rounded-full ${
                  metric.status === 'good' ? 'bg-green-500' : 
                  metric.status === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
              </div>
              <p className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</p>
              <p className="text-sm text-slate-600">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Risk Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span>Risk Categories</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {riskCategories.map((category, index) => (
              <div key={index} className="text-center p-4 border border-slate-200 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">{category.category}</h4>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-slate-700">{category.count}</p>
                  <p className="text-sm text-slate-600">Total Risks</p>
                  {category.highRisk > 0 && (
                    <Badge variant="destructive" className="text-xs">
                      {category.highRisk} High Risk
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <span>Active Risk Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {riskAlerts.map((risk) => (
            <div key={risk.id} className={`p-6 rounded-lg border-2 ${getSeverityColor(risk.severity)}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  {getSeverityIcon(risk.severity)}
                  <div>
                    <h4 className="font-semibold text-lg">{risk.title}</h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {risk.category}
                      </Badge>
                      <span className="text-sm opacity-75">
                        Detected: {risk.detectedDate}
                      </span>
                    </div>
                  </div>
                </div>
                <Badge 
                  variant={risk.severity === 'high' ? 'destructive' : 'secondary'}
                  className="capitalize"
                >
                  {risk.severity} Risk
                </Badge>
              </div>

              <p className="mb-4 opacity-90">{risk.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 opacity-75" />
                  <span className="text-sm">
                    <strong>Financial Impact:</strong> {risk.impact}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingDown className="w-4 h-4 opacity-75" />
                  <span className="text-sm">
                    <strong>Trend:</strong> {risk.trend}
                  </span>
                </div>
              </div>

              <div className="bg-white bg-opacity-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">💡 Recommended Action:</h5>
                <p className="text-sm">{risk.recommendation}</p>
              </div>

              <div className="flex justify-end space-x-2 mt-4">
                <Button size="sm" variant="outline">
                  Mark as Reviewed
                </Button>
                <Button size="sm">
                  Create Action Plan
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Risk Prevention Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Prevention Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Financial Risk Management</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Maintain 3-6 months of operating expenses in cash reserves</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Diversify revenue streams to reduce dependency risks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Monitor key financial ratios monthly</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Implement early warning systems for cash flow</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Operational Risk Management</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Establish relationships with multiple suppliers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Regular staff training and retention programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Maintain adequate insurance coverage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Document and review business processes regularly</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}