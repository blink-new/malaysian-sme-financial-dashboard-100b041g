import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Badge } from '../ui/badge'
import { BarChart3, TrendingUp, PieChart, Calendar, Filter } from 'lucide-react'

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
    { category: 'Raw Materials', amount: 180000, percentage: 35, color: 'bg-blue-500' },
    { category: 'Staff Salaries', amount: 120000, percentage: 23, color: 'bg-green-500' },
    { category: 'Rent & Utilities', amount: 72000, percentage: 14, color: 'bg-yellow-500' },
    { category: 'Marketing', amount: 48000, percentage: 9, color: 'bg-purple-500' },
    { category: 'Equipment', amount: 36000, percentage: 7, color: 'bg-red-500' },
    { category: 'Other', amount: 60000, percentage: 12, color: 'bg-gray-500' }
  ]

  const industryComparison = [
    { metric: 'Revenue Growth', yourBusiness: 12.5, industryAvg: 8.2, status: 'above' },
    { metric: 'Profit Margin', yourBusiness: 18.2, industryAvg: 15.8, status: 'above' },
    { metric: 'Cash Flow Ratio', yourBusiness: 0.85, industryAvg: 0.92, status: 'below' },
    { metric: 'Inventory Turnover', yourBusiness: 6.2, industryAvg: 7.1, status: 'below' }
  ]

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Financial Visualizations</h1>
          <p className="text-slate-600 mt-2">
            Interactive charts and graphs to understand your business performance
          </p>
        </div>
        <div className="flex space-x-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="12months">Last 12 Months</SelectItem>
              <SelectItem value="24months">Last 24 Months</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Revenue Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span>Revenue & Profit Trend</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 bg-slate-50 rounded-lg flex items-center justify-center mb-6">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">Interactive Revenue Chart</p>
              <p className="text-sm text-slate-500 mt-2">
                Showing monthly revenue, expenses, and profit trends
              </p>
            </div>
          </div>
          
          {/* Chart Legend */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-sm text-slate-600">Revenue</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm text-slate-600">Expenses</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm text-slate-600">Profit</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expense Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="w-5 h-5 text-green-600" />
              <span>Expense Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <PieChart className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                <p className="text-slate-600">Expense Distribution Chart</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {expenseCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    <span className="text-sm font-medium text-slate-700">{category.category}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">RM {category.amount.toLocaleString()}</p>
                    <p className="text-xs text-slate-500">{category.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Industry Comparison */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              <span>Industry Benchmark</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {industryComparison.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-700">{item.metric}</span>
                    <Badge 
                      variant={item.status === 'above' ? 'default' : 'secondary'}
                      className={item.status === 'above' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                    >
                      {item.status === 'above' ? 'Above Average' : 'Below Average'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Your Business</span>
                      <span>{item.yourBusiness}{item.metric.includes('Ratio') ? '' : '%'}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.status === 'above' ? 'bg-green-500' : 'bg-red-500'}`}
                        style={{ width: `${Math.min(item.yourBusiness / Math.max(item.yourBusiness, item.industryAvg) * 100, 100)}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Industry Average</span>
                      <span>{item.industryAvg}{item.metric.includes('Ratio') ? '' : '%'}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-slate-400 h-2 rounded-full"
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
      <Card>
        <CardHeader>
          <CardTitle>Key Performance Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900">Revenue Growth</h4>
              <p className="text-3xl font-bold text-blue-600 mt-2">+12.5%</p>
              <p className="text-sm text-blue-700 mt-1">vs last year</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900">Profit Margin</h4>
              <p className="text-3xl font-bold text-green-600 mt-2">18.2%</p>
              <p className="text-sm text-green-700 mt-1">current month</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-900">Cash Flow</h4>
              <p className="text-3xl font-bold text-yellow-600 mt-2">RM 45.8K</p>
              <p className="text-sm text-yellow-700 mt-1">monthly average</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900">Break-even</h4>
              <p className="text-3xl font-bold text-purple-600 mt-2">23 days</p>
              <p className="text-sm text-purple-700 mt-1">current month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}