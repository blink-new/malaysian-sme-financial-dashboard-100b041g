import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Badge } from '../ui/badge'
import { BarChart3, TrendingUp, PieChart, Calendar, Filter, Activity, Target } from 'lucide-react'

export function Visualizations() {
  const [selectedPeriod, setSelectedPeriod] = useState('12months')
  const [selectedMetric, setSelectedMetric] = useState('revenue')

  // Mock chart data
  const revenueData = [
    { month: 'Jan', revenue: 65000, expenses: 45000, profit: 20000 },
    { month: 'Feb', revenue: 72000, expenses: 48000, profit: 24000 },
    { month: 'Mar', revenue: 68000, expenses: 46000, profit: 22000 },
    { month: 'Apr', revenue: 75000, expenses: 50000, profit: 25000 },
    { month: 'May', revenue: 82000, expenses: 52000, profit: 30000 },
    { month: 'Jun', revenue: 78000, expenses: 49000, profit: 29000 },
    { month: 'Jul', revenue: 85000, expenses: 53000, profit: 32000 },
    { month: 'Aug', revenue: 88000, expenses: 55000, profit: 33000 },
    { month: 'Sep', revenue: 92000, expenses: 57000, profit: 35000 },
    { month: 'Oct', revenue: 89000, expenses: 56000, profit: 33000 },
    { month: 'Nov', revenue: 95000, expenses: 58000, profit: 37000 },
    { month: 'Dec', revenue: 98000, expenses: 60000, profit: 38000 }
  ]

  const expenseCategories = [
    { category: 'Raw Materials', amount: 180000, percentage: 35, color: 'bg-blue-500', borderColor: 'border-blue-500/30' },
    { category: 'Staff Salaries', amount: 120000, percentage: 23, color: 'bg-green-500', borderColor: 'border-green-500/30' },
    { category: 'Rent & Utilities', amount: 72000, percentage: 14, color: 'bg-yellow-500', borderColor: 'border-yellow-500/30' },
    { category: 'Marketing', amount: 48000, percentage: 9, color: 'bg-purple-500', borderColor: 'border-purple-500/30' },
    { category: 'Equipment', amount: 36000, percentage: 7, color: 'bg-red-500', borderColor: 'border-red-500/30' },
    { category: 'Other', amount: 60000, percentage: 12, color: 'bg-gray-500', borderColor: 'border-gray-500/30' }
  ]

  const industryComparison = [
    { metric: 'Revenue Growth', yourBusiness: 12.5, industryAvg: 8.2, status: 'above' },
    { metric: 'Profit Margin', yourBusiness: 18.2, industryAvg: 15.8, status: 'above' },
    { metric: 'Cash Flow Ratio', yourBusiness: 0.85, industryAvg: 0.92, status: 'below' },
    { metric: 'Inventory Turnover', yourBusiness: 6.2, industryAvg: 7.1, status: 'below' }
  ]

  return (
    <div className="p-8 space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Financial Visualizations
          </h1>
          <p className="text-slate-300 mt-3 text-lg">
            Interactive charts and graphs to understand your business performance
          </p>
        </div>
        <div className="flex space-x-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40 input-glass">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="glass border-slate-600/50">
              <SelectItem value="3months" className="text-slate-200 hover:bg-slate-700/50">Last 3 Months</SelectItem>
              <SelectItem value="6months" className="text-slate-200 hover:bg-slate-700/50">Last 6 Months</SelectItem>
              <SelectItem value="12months" className="text-slate-200 hover:bg-slate-700/50">Last 12 Months</SelectItem>
              <SelectItem value="24months" className="text-slate-200 hover:bg-slate-700/50">Last 24 Months</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="btn-secondary">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Revenue Trend Chart */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-xl">Revenue & Profit Trend</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 glass-light rounded-xl flex items-center justify-center mb-6 border border-slate-600/30 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 data-grid"></div>
            
            <div className="text-center relative z-10">
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-slate-900" />
              </div>
              <p className="text-white text-lg font-semibold">Interactive Revenue Chart</p>
              <p className="text-slate-300 mt-2">
                Showing monthly revenue, expenses, and profit trends
              </p>
            </div>
          </div>
          
          {/* Chart Legend */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-slate-200 font-medium">Revenue</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-slate-200 font-medium">Expenses</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-slate-200 font-medium">Profit</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expense Breakdown & Industry Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass card-hover border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
                <PieChart className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-xl">Expense Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 glass-light rounded-xl flex items-center justify-center mb-6 border border-slate-600/30 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10 data-grid"></div>
              
              <div className="text-center relative z-10">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-green-500/30">
                  <PieChart className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-white font-semibold">Expense Distribution Chart</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {expenseCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-3 glass-light rounded-lg border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${category.color} glow`}></div>
                    <span className="font-medium text-white">{category.category}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white">RM {category.amount.toLocaleString()}</p>
                    <p className="text-xs text-slate-400">{category.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Industry Comparison */}
        <Card className="glass card-hover border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                <Target className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-xl">Industry Benchmark</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {industryComparison.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">{item.metric}</span>
                    <Badge 
                      className={`font-medium ${
                        item.status === 'above' 
                          ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                          : 'bg-red-500/20 text-red-300 border-red-500/30'
                      }`}
                    >
                      {item.status === 'above' ? 'Above Average' : 'Below Average'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-slate-300">
                      <span className="font-medium">Your Business</span>
                      <span className="font-bold">{item.yourBusiness}{item.metric.includes('Ratio') ? '' : '%'}</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3 border border-slate-600/30">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          item.status === 'above' ? 'bg-gradient-to-r from-green-500 to-emerald-400 glow' : 'bg-gradient-to-r from-red-500 to-rose-400'
                        }`}
                        style={{ width: `${Math.min(item.yourBusiness / Math.max(item.yourBusiness, item.industryAvg) * 100, 100)}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>Industry Average</span>
                      <span>{item.industryAvg}{item.metric.includes('Ratio') ? '' : '%'}</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3 border border-slate-600/30">
                      <div 
                        className="bg-gradient-to-r from-slate-500 to-slate-400 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(item.industryAvg / Math.max(item.yourBusiness, item.industryAvg) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Performance Indicators */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
              <Activity className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-xl">Key Performance Indicators</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 hover-glow transition-all duration-300">
              <h4 className="font-bold text-white text-lg mb-2">Revenue Growth</h4>
              <p className="text-4xl font-bold text-blue-400 mb-2">+12.5%</p>
              <p className="text-sm text-slate-300">vs last year</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 hover-glow transition-all duration-300">
              <h4 className="font-bold text-white text-lg mb-2">Profit Margin</h4>
              <p className="text-4xl font-bold text-green-400 mb-2">18.2%</p>
              <p className="text-sm text-slate-300">current month</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30 hover-glow transition-all duration-300">
              <h4 className="font-bold text-white text-lg mb-2">Cash Flow</h4>
              <p className="text-4xl font-bold text-yellow-400 mb-2">RM 45.8K</p>
              <p className="text-sm text-slate-300">monthly average</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 hover-glow transition-all duration-300">
              <h4 className="font-bold text-white text-lg mb-2">Break-even</h4>
              <p className="text-4xl font-bold text-purple-400 mb-2">23 days</p>
              <p className="text-sm text-slate-300">current month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}