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
  ArrowDownRight,
  Zap,
  Target,
  BarChart3
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
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Net Profit Margin",
      value: "18.2%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Cash Flow",
      value: "RM 45,800",
      change: "-5.3%",
      trend: "down",
      icon: TrendingDown,
      color: "text-red-400",
      bgColor: "from-red-500/20 to-rose-500/20"
    },
    {
      title: "Break-even Days",
      value: "23 days",
      change: "-2 days",
      trend: "up",
      icon: CheckCircle,
      color: "text-cyan-400",
      bgColor: "from-cyan-500/20 to-blue-500/20"
    }
  ]

  const riskAlerts = [
    {
      type: "warning",
      title: "Inventory Costs Rising",
      description: "Coffee bean costs increased 15% above industry average",
      severity: "Medium",
      icon: AlertTriangle
    },
    {
      type: "success",
      title: "Strong Revenue Growth",
      description: "Q3 revenue exceeded Malaysian F&B SME benchmark by 8%",
      severity: "Positive",
      icon: CheckCircle
    }
  ]

  const quickRecommendations = [
    {
      text: "Launch Ramadan promotional menu to boost Q2 sales",
      impact: "High",
      icon: Target
    },
    {
      text: "Negotiate bulk coffee bean purchase to reduce costs by 12%",
      impact: "Medium",
      icon: DollarSign
    },
    {
      text: "Apply for SME Digital Grant (RM 5,000 available)",
      impact: "High",
      icon: Zap
    }
  ]

  return (
    <div className="p-8 space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Financial Dashboard
          </h1>
          <p className="text-slate-300 mt-3 text-lg">
            Comprehensive analytics for <span className="text-cyan-400 font-semibold">{businessProfile.name}</span>
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="btn-secondary border-slate-600/50 hover:border-cyan-400/50">
            View Full Report
          </Button>
          <Button className="btn-primary">
            Export Dashboard
          </Button>
        </div>
      </div>

      {/* Business Profile Card */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-xl">Business Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-slate-400 font-medium">Company</p>
              <p className="font-semibold text-white text-lg">{businessProfile.name}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-slate-400 font-medium">Industry</p>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 font-medium">
                {businessProfile.industry}
              </Badge>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-slate-400 font-medium">Annual Revenue</p>
              <p className="font-bold text-white text-lg">{businessProfile.revenue}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-slate-400 font-medium">Employees</p>
              <p className="font-bold text-white text-lg">{businessProfile.employees} staff</p>
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
            <Card key={index} className="metric-card card-hover border-slate-700/50 relative overflow-hidden">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.bgColor} opacity-30`}></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 glass-light rounded-xl flex items-center justify-center border border-slate-600/30">
                    <Icon className="w-6 h-6 text-slate-300" />
                  </div>
                  <div className={`flex items-center space-x-1 ${metric.color} font-semibold`}>
                    <TrendIcon className="w-4 h-4" />
                    <span className="text-sm">{metric.change}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1">{metric.title}</p>
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Risk Alerts & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Risk Alerts */}
        <Card className="glass card-hover border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-white">
              <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
              </div>
              <span className="text-xl">Risk Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {riskAlerts.map((alert, index) => {
              const Icon = alert.icon
              return (
                <div 
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    alert.type === 'warning' 
                      ? 'bg-orange-500/10 border-orange-500/30 hover:border-orange-400/50' 
                      : 'bg-green-500/10 border-green-500/30 hover:border-green-400/50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-5 h-5 ${alert.type === 'warning' ? 'text-orange-400' : 'text-green-400'}`} />
                      <h4 className="font-semibold text-white">{alert.title}</h4>
                    </div>
                    <Badge 
                      className={`text-xs font-medium ${
                        alert.type === 'warning' 
                          ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' 
                          : 'bg-green-500/20 text-green-300 border-green-500/30'
                      }`}
                    >
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{alert.description}</p>
                </div>
              )
            })}
            <Button variant="outline" className="w-full btn-secondary">
              View All Risk Analysis
            </Button>
          </CardContent>
        </Card>

        {/* Quick Recommendations */}
        <Card className="glass card-hover border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-white">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-xl">Quick Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quickRecommendations.map((recommendation, index) => {
              const Icon = recommendation.icon
              return (
                <div key={index} className="flex items-start space-x-4 p-4 bg-green-500/10 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30 flex-shrink-0">
                    <Icon className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-200 leading-relaxed">{recommendation.text}</p>
                    <Badge className="mt-2 bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs">
                      {recommendation.impact} Impact
                    </Badge>
                  </div>
                </div>
              )
            })}
            <Button variant="outline" className="w-full btn-secondary">
              View All Recommendations
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white text-xl">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button variant="outline" className="h-auto p-6 flex flex-col items-center space-y-3 btn-secondary group hover-glow">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <span className="font-semibold">Run Scenario Analysis</span>
            </Button>
            <Button variant="outline" className="h-auto p-6 flex flex-col items-center space-y-3 btn-secondary group hover-glow">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                <DollarSign className="w-6 h-6 text-green-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <span className="font-semibold">Update Financial Data</span>
            </Button>
            <Button variant="outline" className="h-auto p-6 flex flex-col items-center space-y-3 btn-secondary group hover-glow">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center border border-purple-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                <BarChart3 className="w-6 h-6 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <span className="font-semibold">Compare with Industry</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}