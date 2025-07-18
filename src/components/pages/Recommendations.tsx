import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Lightbulb, TrendingUp, DollarSign, Users, Calendar, ExternalLink, CheckCircle, Star, Target, Zap } from 'lucide-react'

export function Recommendations() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const recommendations = [
    {
      id: 1,
      title: "Launch Ramadan Digital Promotions",
      description: "Capitalize on the upcoming Ramadan season with targeted digital marketing campaigns. Historical data shows 40% revenue increase during this period for F&B businesses.",
      category: "Marketing",
      priority: "high",
      impact: "RM 25,000 potential revenue increase",
      effort: "Medium",
      timeline: "2-3 weeks",
      actionSteps: [
        "Create Ramadan-themed menu items",
        "Design social media campaign",
        "Partner with food delivery platforms",
        "Offer iftar catering packages"
      ],
      resources: [
        { name: "Malaysia Digital Marketing Guide", url: "#" },
        { name: "Ramadan F&B Trends 2024", url: "#" }
      ],
      status: "new"
    },
    {
      id: 2,
      title: "Negotiate Bulk Coffee Bean Purchase",
      description: "Your coffee bean costs are 20% above industry average. Negotiating bulk purchase agreements could reduce costs by 12-15%.",
      category: "Cost Reduction",
      priority: "high",
      impact: "RM 18,000 annual savings",
      effort: "Low",
      timeline: "1-2 weeks",
      actionSteps: [
        "Research alternative suppliers",
        "Calculate bulk purchase requirements",
        "Negotiate payment terms",
        "Secure storage arrangements"
      ],
      resources: [
        { name: "Malaysian Coffee Suppliers Directory", url: "#" },
        { name: "Bulk Purchase Contract Template", url: "#" }
      ],
      status: "in-progress"
    },
    {
      id: 3,
      title: "Apply for SME Digital Grant",
      description: "You're eligible for the Malaysian SME Digital Grant offering up to RM 5,000 for digital transformation initiatives.",
      category: "Funding",
      priority: "medium",
      impact: "RM 5,000 grant funding",
      effort: "Medium",
      timeline: "4-6 weeks",
      actionSteps: [
        "Prepare business documentation",
        "Submit online application",
        "Attend grant interview",
        "Implement approved digital initiatives"
      ],
      resources: [
        { name: "SME Digital Grant Application", url: "#" },
        { name: "Grant Application Checklist", url: "#" }
      ],
      status: "new"
    },
    {
      id: 4,
      title: "Implement Staff Retention Program",
      description: "Your staff turnover is 35% above industry average. A retention program could reduce recruitment costs and improve service quality.",
      category: "Human Resources",
      priority: "medium",
      impact: "RM 8,000 cost savings",
      effort: "High",
      timeline: "6-8 weeks",
      actionSteps: [
        "Conduct employee satisfaction survey",
        "Design competitive benefits package",
        "Implement performance recognition system",
        "Create career development pathways"
      ],
      resources: [
        { name: "Employee Retention Best Practices", url: "#" },
        { name: "Malaysian Labor Law Guide", url: "#" }
      ],
      status: "new"
    },
    {
      id: 5,
      title: "Optimize Menu Pricing Strategy",
      description: "Analysis shows you can increase prices by 8-12% on high-demand items without significant customer loss, based on local market data.",
      category: "Revenue",
      priority: "medium",
      impact: "RM 12,000 additional revenue",
      effort: "Low",
      timeline: "1 week",
      actionSteps: [
        "Analyze item-level profitability",
        "Research competitor pricing",
        "Test price increases on select items",
        "Monitor customer response"
      ],
      resources: [
        { name: "Menu Engineering Guide", url: "#" },
        { name: "Pricing Psychology Tips", url: "#" }
      ],
      status: "completed"
    }
  ]

  const categories = [
    { value: 'all', label: 'All Recommendations', count: recommendations.length },
    { value: 'Marketing', label: 'Marketing', count: recommendations.filter(r => r.category === 'Marketing').length },
    { value: 'Cost Reduction', label: 'Cost Reduction', count: recommendations.filter(r => r.category === 'Cost Reduction').length },
    { value: 'Revenue', label: 'Revenue', count: recommendations.filter(r => r.category === 'Revenue').length },
    { value: 'Funding', label: 'Funding', count: recommendations.filter(r => r.category === 'Funding').length },
    { value: 'Human Resources', label: 'HR', count: recommendations.filter(r => r.category === 'Human Resources').length }
  ]

  const filteredRecommendations = selectedCategory === 'all' 
    ? recommendations 
    : recommendations.filter(r => r.category === selectedCategory)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-300 border-red-500/30'
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      case 'low':
        return 'bg-green-500/20 text-green-300 border-green-500/30'
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      case 'new':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30'
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />
      case 'in-progress':
        return <Calendar className="w-4 h-4" />
      case 'new':
        return <Star className="w-4 h-4" />
      default:
        return <Lightbulb className="w-4 h-4" />
    }
  }

  return (
    <div className="p-8 space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            AI Recommendations
          </h1>
          <p className="text-slate-300 mt-3 text-lg">
            Personalized, actionable advice to improve your business performance
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="btn-secondary">
            Export Action Plan
          </Button>
          <Button className="btn-primary">
            Generate New Insights
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <Card className="glass card-hover border-slate-700/50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center space-x-2 ${
                  selectedCategory === category.value 
                    ? "btn-primary" 
                    : "btn-secondary"
                }`}
              >
                <span>{category.label}</span>
                <Badge className="bg-slate-700/50 text-slate-200 border-slate-600/50 ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations List */}
      <div className="space-y-6">
        {filteredRecommendations.map((recommendation) => (
          <Card key={recommendation.id} className="glass card-hover border-slate-700/50 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 data-grid"></div>
            
            <CardHeader className="relative z-10">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl mb-3">{recommendation.title}</CardTitle>
                    <div className="flex items-center space-x-3">
                      <Badge className={`font-medium ${getPriorityColor(recommendation.priority)}`}>
                        {recommendation.priority} Priority
                      </Badge>
                      <Badge className="bg-slate-700/50 text-slate-200 border-slate-600/50">
                        {recommendation.category}
                      </Badge>
                      <Badge className={`font-medium ${getStatusColor(recommendation.status)}`}>
                        {getStatusIcon(recommendation.status)}
                        <span className="ml-1 capitalize">{recommendation.status.replace('-', ' ')}</span>
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <p className="text-slate-200 leading-relaxed text-lg">{recommendation.description}</p>

              {/* Impact Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 glass-light rounded-xl border border-slate-600/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
                    <DollarSign className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Expected Impact</p>
                    <p className="font-bold text-white">{recommendation.impact}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Effort Required</p>
                    <p className="font-bold text-white">{recommendation.effort}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                    <Calendar className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Timeline</p>
                    <p className="font-bold text-white">{recommendation.timeline}</p>
                  </div>
                </div>
              </div>

              {/* Action Steps */}
              <div>
                <h4 className="font-bold text-white text-lg mb-4 flex items-center space-x-2">
                  <Target className="w-5 h-5 text-cyan-400" />
                  <span>Action Steps</span>
                </h4>
                <div className="space-y-3">
                  {recommendation.actionSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-slate-900 font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-slate-200 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              {recommendation.resources.length > 0 && (
                <div>
                  <h4 className="font-bold text-white text-lg mb-4 flex items-center space-x-2">
                    <ExternalLink className="w-5 h-5 text-cyan-400" />
                    <span>Helpful Resources</span>
                  </h4>
                  <div className="space-y-3">
                    {recommendation.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 p-3 glass-light rounded-lg border border-slate-600/30 hover:border-cyan-400/30"
                      >
                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                        <span className="font-medium">{resource.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 pt-6 border-t border-slate-700/50">
                {recommendation.status === 'new' && (
                  <>
                    <Button variant="outline" size="sm" className="btn-secondary">
                      Not Interested
                    </Button>
                    <Button size="sm" className="btn-primary">
                      Start Implementation
                    </Button>
                  </>
                )}
                {recommendation.status === 'in-progress' && (
                  <>
                    <Button variant="outline" size="sm" className="btn-secondary">
                      View Progress
                    </Button>
                    <Button size="sm" className="btn-primary">
                      Mark Complete
                    </Button>
                  </>
                )}
                {recommendation.status === 'completed' && (
                  <Button variant="outline" size="sm" disabled className="opacity-50">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Completed
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Wins Section */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
              <Zap className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-xl">Quick Wins (Low Effort, High Impact)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
              <h4 className="font-bold text-white text-lg mb-3">Menu Price Optimization</h4>
              <p className="text-slate-200 mb-4 leading-relaxed">
                Increase prices on high-demand items by 8-12% for immediate revenue boost.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-green-300">Impact: RM 12,000</span>
                <Button size="sm" className="btn-primary">
                  Implement Now
                </Button>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <h4 className="font-bold text-white text-lg mb-3">Supplier Negotiation</h4>
              <p className="text-slate-200 mb-4 leading-relaxed">
                Contact current suppliers for bulk purchase discounts this week.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-blue-300">Impact: RM 18,000</span>
                <Button size="sm" className="btn-primary">
                  Start Today
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}