import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Slider } from '../ui/slider'
import { Badge } from '../ui/badge'
import { Calculator, TrendingUp, TrendingDown, RotateCcw, Play } from 'lucide-react'

export function ScenarioSimulator() {
  const [scenario, setScenario] = useState({
    revenueChange: 0,
    costReduction: 0,
    staffIncrease: 0,
    marketingSpend: 0,
    priceIncrease: 0
  })

  const [results, setResults] = useState(null)

  // Base metrics
  const baseMetrics = {
    monthlyRevenue: 85000,
    monthlyCosts: 68000,
    monthlyProfit: 17000,
    profitMargin: 20,
    breakEvenDays: 23,
    cashFlow: 45800,
    employees: 12
  }

  const calculateScenario = () => {
    const newRevenue = baseMetrics.monthlyRevenue * (1 + scenario.revenueChange / 100)
    const newCosts = (baseMetrics.monthlyCosts * (1 - scenario.costReduction / 100)) + scenario.marketingSpend
    const newProfit = newRevenue - newCosts
    const newProfitMargin = (newProfit / newRevenue) * 100
    const newCashFlow = baseMetrics.cashFlow + (newProfit - baseMetrics.monthlyProfit)
    const newBreakEvenDays = Math.round((newCosts / newRevenue) * 30)

    setResults({
      revenue: newRevenue,
      costs: newCosts,
      profit: newProfit,
      profitMargin: newProfitMargin,
      cashFlow: newCashFlow,
      breakEvenDays: newBreakEvenDays,
      revenueChange: ((newRevenue - baseMetrics.monthlyRevenue) / baseMetrics.monthlyRevenue) * 100,
      profitChange: ((newProfit - baseMetrics.monthlyProfit) / baseMetrics.monthlyProfit) * 100,
      cashFlowChange: ((newCashFlow - baseMetrics.cashFlow) / baseMetrics.cashFlow) * 100
    })
  }

  const resetScenario = () => {
    setScenario({
      revenueChange: 0,
      costReduction: 0,
      staffIncrease: 0,
      marketingSpend: 0,
      priceIncrease: 0
    })
    setResults(null)
  }

  const predefinedScenarios = [
    {
      name: "Ramadan Boost",
      description: "Seasonal promotion with increased marketing",
      changes: { revenueChange: 25, costReduction: 0, marketingSpend: 5000, priceIncrease: 0 }
    },
    {
      name: "Cost Optimization",
      description: "Focus on reducing operational costs",
      changes: { revenueChange: 0, costReduction: 15, marketingSpend: 0, priceIncrease: 0 }
    },
    {
      name: "Expansion Plan",
      description: "Hire more staff and increase marketing",
      changes: { revenueChange: 30, costReduction: 0, staffIncrease: 3, marketingSpend: 8000 }
    },
    {
      name: "Price Increase",
      description: "Strategic price increase with quality focus",
      changes: { revenueChange: 12, costReduction: 0, marketingSpend: 2000, priceIncrease: 10 }
    }
  ]

  const applyPredefinedScenario = (scenarioData: any) => {
    setScenario({
      revenueChange: scenarioData.revenueChange || 0,
      costReduction: scenarioData.costReduction || 0,
      staffIncrease: scenarioData.staffIncrease || 0,
      marketingSpend: scenarioData.marketingSpend || 0,
      priceIncrease: scenarioData.priceIncrease || 0
    })
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Scenario Simulator</h1>
          <p className="text-slate-600 mt-2">
            Model different business scenarios and see their impact on your finances
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" onClick={resetScenario}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button onClick={calculateScenario}>
            <Play className="w-4 h-4 mr-2" />
            Run Simulation
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Scenario Controls */}
        <div className="space-y-6">
          {/* Predefined Scenarios */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Scenarios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {predefinedScenarios.map((preset, index) => (
                <div key={index} className="p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
                     onClick={() => applyPredefinedScenario(preset.changes)}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-slate-900">{preset.name}</h4>
                      <p className="text-sm text-slate-600 mt-1">{preset.description}</p>
                    </div>
                    <Button size="sm" variant="ghost">
                      Apply
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Custom Controls */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                <span>Custom Scenario</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Revenue Change */}
              <div className="space-y-3">
                <Label>Revenue Change (%)</Label>
                <div className="px-3">
                  <Slider
                    value={[scenario.revenueChange]}
                    onValueChange={(value) => setScenario(prev => ({ ...prev, revenueChange: value[0] }))}
                    max={50}
                    min={-30}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>-30%</span>
                  <span className="font-medium">{scenario.revenueChange}%</span>
                  <span>+50%</span>
                </div>
              </div>

              {/* Cost Reduction */}
              <div className="space-y-3">
                <Label>Cost Reduction (%)</Label>
                <div className="px-3">
                  <Slider
                    value={[scenario.costReduction]}
                    onValueChange={(value) => setScenario(prev => ({ ...prev, costReduction: value[0] }))}
                    max={25}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>0%</span>
                  <span className="font-medium">{scenario.costReduction}%</span>
                  <span>25%</span>
                </div>
              </div>

              {/* Marketing Spend */}
              <div className="space-y-3">
                <Label>Additional Marketing Spend (RM)</Label>
                <Input
                  type="number"
                  value={scenario.marketingSpend}
                  onChange={(e) => setScenario(prev => ({ ...prev, marketingSpend: Number(e.target.value) }))}
                  placeholder="0"
                />
              </div>

              {/* Staff Increase */}
              <div className="space-y-3">
                <Label>Additional Staff</Label>
                <div className="px-3">
                  <Slider
                    value={[scenario.staffIncrease]}
                    onValueChange={(value) => setScenario(prev => ({ ...prev, staffIncrease: value[0] }))}
                    max={10}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>0</span>
                  <span className="font-medium">{scenario.staffIncrease} people</span>
                  <span>10</span>
                </div>
              </div>

              {/* Price Increase */}
              <div className="space-y-3">
                <Label>Price Increase (%)</Label>
                <div className="px-3">
                  <Slider
                    value={[scenario.priceIncrease]}
                    onValueChange={(value) => setScenario(prev => ({ ...prev, priceIncrease: value[0] }))}
                    max={20}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>0%</span>
                  <span className="font-medium">{scenario.priceIncrease}%</span>
                  <span>20%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {/* Current vs Projected */}
          <Card>
            <CardHeader>
              <CardTitle>Current vs Projected</CardTitle>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  {/* Revenue */}
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm text-slate-600">Monthly Revenue</p>
                      <p className="font-semibold text-slate-900">
                        RM {results.revenue.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant={results.revenueChange >= 0 ? "default" : "destructive"}>
                        {results.revenueChange >= 0 ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {results.revenueChange.toFixed(1)}%
                      </Badge>
                    </div>
                  </div>

                  {/* Profit */}
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm text-slate-600">Monthly Profit</p>
                      <p className="font-semibold text-slate-900">
                        RM {results.profit.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant={results.profitChange >= 0 ? "default" : "destructive"}>
                        {results.profitChange >= 0 ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {results.profitChange.toFixed(1)}%
                      </Badge>
                    </div>
                  </div>

                  {/* Profit Margin */}
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm text-slate-600">Profit Margin</p>
                      <p className="font-semibold text-slate-900">
                        {results.profitMargin.toFixed(1)}%
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant={results.profitMargin >= baseMetrics.profitMargin ? "default" : "destructive"}>
                        {results.profitMargin >= baseMetrics.profitMargin ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {(results.profitMargin - baseMetrics.profitMargin).toFixed(1)}%
                      </Badge>
                    </div>
                  </div>

                  {/* Cash Flow */}
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm text-slate-600">Cash Flow</p>
                      <p className="font-semibold text-slate-900">
                        RM {results.cashFlow.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant={results.cashFlowChange >= 0 ? "default" : "destructive"}>
                        {results.cashFlowChange >= 0 ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {results.cashFlowChange.toFixed(1)}%
                      </Badge>
                    </div>
                  </div>

                  {/* Break-even Days */}
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm text-slate-600">Break-even Days</p>
                      <p className="font-semibold text-slate-900">
                        {results.breakEvenDays} days
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant={results.breakEvenDays <= baseMetrics.breakEvenDays ? "default" : "destructive"}>
                        {results.breakEvenDays <= baseMetrics.breakEvenDays ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {results.breakEvenDays - baseMetrics.breakEvenDays} days
                      </Badge>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calculator className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">Run a simulation to see projected results</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Scenario Impact Summary */}
          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Impact Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">Positive Impacts</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      {results.profitChange > 0 && (
                        <li>• Profit increased by RM {(results.profit - baseMetrics.monthlyProfit).toLocaleString()}</li>
                      )}
                      {results.revenueChange > 0 && (
                        <li>• Revenue increased by RM {(results.revenue - baseMetrics.monthlyRevenue).toLocaleString()}</li>
                      )}
                      {results.breakEvenDays < baseMetrics.breakEvenDays && (
                        <li>• Break-even achieved {baseMetrics.breakEvenDays - results.breakEvenDays} days faster</li>
                      )}
                    </ul>
                  </div>

                  {(results.profitChange < 0 || results.revenueChange < 0) && (
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">Areas of Concern</h4>
                      <ul className="text-sm text-red-800 space-y-1">
                        {results.profitChange < 0 && (
                          <li>• Profit decreased by RM {Math.abs(results.profit - baseMetrics.monthlyProfit).toLocaleString()}</li>
                        )}
                        {results.revenueChange < 0 && (
                          <li>• Revenue decreased by RM {Math.abs(results.revenue - baseMetrics.monthlyRevenue).toLocaleString()}</li>
                        )}
                        {results.breakEvenDays > baseMetrics.breakEvenDays && (
                          <li>• Break-even delayed by {results.breakEvenDays - baseMetrics.breakEvenDays} days</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}