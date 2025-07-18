import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  AlertTriangle,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

export function DashboardHome() {
  // Mock data for demonstration
  const businessProfile = {
    name: "Kedai Kopi Warisan Sdn Bhd",
    industry: "Food & Beverage",
    revenue: "RM 850,000",
    employees: 12,
    established: 2019
  }

  const keyMetrics = [
    {
      title: "Monthly Revenue",
      value: "RM 71,250",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Net Profit Margin",
      value: "18.2%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Cash Flow",
      value: "RM 45,800",
      change: "-5.3%",
      trend: "down",
      icon: TrendingDown,
      color: "text-red-600"
    },
    {
      title: "Break-even Days",
      value: "23 days",
      change: "-2 days",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600"
    }
  ]

  const riskAlerts = [
    {
      type: "warning",
      title: "Inventory Costs Rising",
      description: "Coffee bean costs increased 15% above industry average",
      severity: "Medium"
    },
    {
      type: "success",
      title: "Strong Revenue Growth",
      description: "Q3 revenue exceeded Malaysian F&B SME benchmark by 8%",
      severity: "Positive"
    }
  ]

  const quickRecommendations = [
    "Launch Ramadan promotional menu to boost Q2 sales",
    "Negotiate bulk coffee bean purchase to reduce costs by 12%",
    "Apply for SME Digital Grant (RM 5,000 available)"
  ]

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Financial Dashboard</h1>
          <p className="text-slate-600 mt-2">
            Comprehensive analytics for {businessProfile.name}
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            View Full Report
          </Button>
          <Button>
            Export Dashboard
          </Button>
        </div>
      </div>

      {/* Business Profile Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <span>Business Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-slate-500">Company</p>
              <p className="font-semibold text-slate-900">{businessProfile.name}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Industry</p>
              <Badge variant="secondary">{businessProfile.industry}</Badge>
            </div>
            <div>
              <p className="text-sm text-slate-500">Annual Revenue</p>
              <p className="font-semibold text-slate-900">{businessProfile.revenue}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Employees</p>
              <p className="font-semibold text-slate-900">{businessProfile.employees} staff</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => {
          const Icon = metric.icon
          const TrendIcon = metric.trend === 'up' ? ArrowUpRight : ArrowDownRight
          
          return (
            <Card key={index} className="metric-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{metric.title}</p>
                      <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-1 ${metric.color}`}>
                    <TrendIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">{metric.change}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Risk Alerts & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Risk Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <span>Risk Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {riskAlerts.map((alert, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border ${
                  alert.type === 'warning' ? 'warning-alert' : 'success-alert'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{alert.title}</h4>
                  <Badge 
                    variant={alert.type === 'warning' ? 'destructive' : 'default'}
                    className="text-xs"
                  >
                    {alert.severity}
                  </Badge>
                </div>
                <p className="text-sm opacity-90">{alert.description}</p>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Risk Analysis
            </Button>
          </CardContent>
        </Card>

        {/* Quick Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-green-600" />
              </div>
              <span>Quick Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickRecommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-green-800">{recommendation}</p>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Recommendations
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <span>Run Scenario Analysis</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <DollarSign className="w-6 h-6 text-green-600" />
              <span>Update Financial Data</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Users className="w-6 h-6 text-purple-600" />
              <span>Compare with Industry</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}