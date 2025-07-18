import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Slider } from '../ui/slider'
import { Badge } from '../ui/badge'
import { Calculator, TrendingUp, TrendingDown, RotateCcw, Play, Target, Zap } from 'lucide-react'

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
      changes: { revenueChange: 25, costReduction: 0, marketingSpend: 5000, priceIncrease: 0 },
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      name: "Cost Optimization",
      description: "Focus on reducing operational costs",
      changes: { revenueChange: 0, costReduction: 15, marketingSpend: 0, priceIncrease: 0 },
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      name: "Expansion Plan",
      description: "Hire more staff and increase marketing",
      changes: { revenueChange: 30, costReduction: 0, staffIncrease: 3, marketingSpend: 8000 },
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      name: "Price Increase",
      description: "Strategic price increase with quality focus",
      changes: { revenueChange: 12, costReduction: 0, marketingSpend: 2000, priceIncrease: 10 },
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
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
    <div className="p-8 space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Scenario Simulator
          </h1>
          <p className="text-slate-300 mt-3 text-lg">
            Model different business scenarios and see their impact on your finances
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" onClick={resetScenario} className="btn-secondary">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button onClick={calculateScenario} className="btn-primary">
            <Play className="w-4 h-4 mr-2" />
            Run Simulation
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Scenario Controls */}
        <div className="space-y-6">
          {/* Predefined Scenarios */}
          <Card className="glass card-hover border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white text-xl">Quick Scenarios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {predefinedScenarios.map((preset, index) => (
                <div key={index} className={`p-4 glass-light rounded-xl border ${preset.borderColor} hover-glow transition-all duration-300 cursor-pointer relative overflow-hidden`}
                     onClick={() => applyPredefinedScenario(preset.changes)}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${preset.color} opacity-20`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-white text-lg">{preset.name}</h4>
                        <p className="text-slate-300 mt-2 leading-relaxed">{preset.description}</p>
                      </div>
                      <Button size="sm" className="btn-primary">
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Custom Controls */}
          <Card className="glass card-hover border-slate-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-white">
                <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-slate-900" />
                </div>
                <span className="text-xl">Custom Scenario</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Revenue Change */}
              <div className="space-y-4">
                <Label className="text-slate-200 font-medium text-lg">Revenue Change (%)</Label>
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
                <div className="flex justify-between text-sm text-slate-400">
                  <span>-30%</span>
                  <span className="font-bold text-cyan-400 text-lg">{scenario.revenueChange}%</span>
                  <span>+50%</span>
                </div>
              </div>

              {/* Cost Reduction */}
              <div className="space-y-4">
                <Label className="text-slate-200 font-medium text-lg">Cost Reduction (%)</Label>
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
                <div className="flex justify-between text-sm text-slate-400">
                  <span>0%</span>
                  <span className="font-bold text-cyan-400 text-lg">{scenario.costReduction}%</span>
                  <span>25%</span>
                </div>
              </div>

              {/* Marketing Spend */}
              <div className="space-y-4">
                <Label className="text-slate-200 font-medium text-lg">Additional Marketing Spend (RM)</Label>
                <Input
                  type="number"
                  value={scenario.marketingSpend}
                  onChange={(e) => setScenario(prev => ({ ...prev, marketingSpend: Number(e.target.value) }))}
                  placeholder="0"
                  className="input-glass text-white text-lg"
                />
              </div>

              {/* Staff Increase */}
              <div className="space-y-4">
                <Label className="text-slate-200 font-medium text-lg">Additional Staff</Label>
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
                <div className="flex justify-between text-sm text-slate-400">
                  <span>0</span>
                  <span className="font-bold text-cyan-400 text-lg">{scenario.staffIncrease} people</span>
                  <span>10</span>
                </div>
              </div>

              {/* Price Increase */}
              <div className="space-y-4">
                <Label className="text-slate-200 font-medium text-lg">Price Increase (%)</Label>
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
                <div className="flex justify-between text-sm text-slate-400">
                  <span>0%</span>
                  <span className="font-bold text-cyan-400 text-lg">{scenario.priceIncrease}%</span>
                  <span>20%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {/* Current vs Projected */}
          <Card className="glass card-hover border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white text-xl">Current vs Projected</CardTitle>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  {/* Revenue */}
                  <div className="flex justify-between items-center p-4 glass-light rounded-xl border border-slate-600/30">
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Monthly Revenue</p>
                      <p className="font-bold text-white text-xl">
                        RM {results.revenue.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className={`font-medium ${
                        results.revenueChange >= 0 
                          ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                          : 'bg-red-500/20 text-red-300 border-red-500/30'
                      }`}>
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
                  <div className="flex justify-between items-center p-4 glass-light rounded-xl border border-slate-600/30">
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Monthly Profit</p>
                      <p className="font-bold text-white text-xl">
                        RM {results.profit.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className={`font-medium ${
                        results.profitChange >= 0 
                          ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                          : 'bg-red-500/20 text-red-300 border-red-500/30'
                      }`}>
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
                  <div className="flex justify-between items-center p-4 glass-light rounded-xl border border-slate-600/30">
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Profit Margin</p>
                      <p className="font-bold text-white text-xl">
                        {results.profitMargin.toFixed(1)}%
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className={`font-medium ${
                        results.profitMargin >= baseMetrics.profitMargin 
                          ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                          : 'bg-red-500/20 text-red-300 border-red-500/30'
                      }`}>
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
                  <div className="flex justify-between items-center p-4 glass-light rounded-xl border border-slate-600/30">
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Cash Flow</p>
                      <p className="font-bold text-white text-xl">
                        RM {results.cashFlow.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className={`font-medium ${
                        results.cashFlowChange >= 0 
                          ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                          : 'bg-red-500/20 text-red-300 border-red-500/30'
                      }`}>
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
                  <div className="flex justify-between items-center p-4 glass-light rounded-xl border border-slate-600/30">
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Break-even Days</p>
                      <p className="font-bold text-white text-xl">
                        {results.breakEvenDays} days
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className={`font-medium ${
                        results.breakEvenDays <= baseMetrics.breakEvenDays 
                          ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                          : 'bg-red-500/20 text-red-300 border-red-500/30'
                      }`}>
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
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-slate-700/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-slate-400" />
                  </div>
                  <p className="text-slate-400 text-lg">Run a simulation to see projected results</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Scenario Impact Summary */}
          {results && (
            <Card className="glass card-hover border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white text-xl">Impact Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                    <h4 className="font-bold text-white text-lg mb-4 flex items-center space-x-2">
                      <Target className="w-5 h-5 text-green-400" />
                      <span>Positive Impacts</span>
                    </h4>
                    <ul className="text-slate-200 space-y-2">
                      {results.profitChange > 0 && (
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Profit increased by RM {(results.profit - baseMetrics.monthlyProfit).toLocaleString()}</span>
                        </li>
                      )}
                      {results.revenueChange > 0 && (
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Revenue increased by RM {(results.revenue - baseMetrics.monthlyRevenue).toLocaleString()}</span>
                        </li>
                      )}
                      {results.breakEvenDays < baseMetrics.breakEvenDays && (
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Break-even achieved {baseMetrics.breakEvenDays - results.breakEvenDays} days faster</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  {(results.profitChange < 0 || results.revenueChange < 0) && (
                    <div className="p-6 bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-xl border border-red-500/30">
                      <h4 className="font-bold text-white text-lg mb-4 flex items-center space-x-2">
                        <Zap className="w-5 h-5 text-red-400" />
                        <span>Areas of Concern</span>
                      </h4>
                      <ul className="text-slate-200 space-y-2">
                        {results.profitChange < 0 && (
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <span>Profit decreased by RM {Math.abs(results.profit - baseMetrics.monthlyProfit).toLocaleString()}</span>
                          </li>
                        )}
                        {results.revenueChange < 0 && (
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <span>Revenue decreased by RM {Math.abs(results.revenue - baseMetrics.monthlyRevenue).toLocaleString()}</span>
                          </li>
                        )}
                        {results.breakEvenDays > baseMetrics.breakEvenDays && (
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <span>Break-even delayed by {results.breakEvenDays - baseMetrics.breakEvenDays} days</span>
                          </li>
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