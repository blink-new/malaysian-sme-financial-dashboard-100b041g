import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Lightbulb, TrendingUp, DollarSign, Users, Calendar, ExternalLink, CheckCircle, Star } from 'lucide-react'

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
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800'
      case 'new':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
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
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Recommendations</h1>
          <p className="text-slate-600 mt-2">
            Personalized, actionable advice to improve your business performance
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            Export Action Plan
          </Button>
          <Button>
            Generate New Insights
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="flex items-center space-x-2"
              >
                <span>{category.label}</span>
                <Badge variant="secondary" className="ml-2">
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
          <Card key={recommendation.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{recommendation.title}</CardTitle>
                    <div className="flex items-center space-x-3 mt-2">
                      <Badge className={getPriorityColor(recommendation.priority)}>
                        {recommendation.priority} Priority
                      </Badge>
                      <Badge variant="outline">
                        {recommendation.category}
                      </Badge>
                      <Badge className={getStatusColor(recommendation.status)}>
                        {getStatusIcon(recommendation.status)}
                        <span className="ml-1 capitalize">{recommendation.status.replace('-', ' ')}</span>
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-700">{recommendation.description}</p>

              {/* Impact Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-sm text-slate-600">Expected Impact</p>
                    <p className="font-semibold text-slate-900">{recommendation.impact}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="text-sm text-slate-600">Effort Required</p>
                    <p className="font-semibold text-slate-900">{recommendation.effort}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  <div>
                    <p className="text-sm text-slate-600">Timeline</p>
                    <p className="font-semibold text-slate-900">{recommendation.timeline}</p>
                  </div>
                </div>
              </div>

              {/* Action Steps */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Action Steps:</h4>
                <div className="space-y-2">
                  {recommendation.actionSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-blue-600">{index + 1}</span>
                      </div>
                      <p className="text-sm text-slate-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              {recommendation.resources.length > 0 && (
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Helpful Resources:</h4>
                  <div className="space-y-2">
                    {recommendation.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{resource.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
                {recommendation.status === 'new' && (
                  <>
                    <Button variant="outline" size="sm">
                      Not Interested
                    </Button>
                    <Button size="sm">
                      Start Implementation
                    </Button>
                  </>
                )}
                {recommendation.status === 'in-progress' && (
                  <>
                    <Button variant="outline" size="sm">
                      View Progress
                    </Button>
                    <Button size="sm">
                      Mark Complete
                    </Button>
                  </>
                )}
                {recommendation.status === 'completed' && (
                  <Button variant="outline" size="sm" disabled>
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span>Quick Wins (Low Effort, High Impact)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Menu Price Optimization</h4>
              <p className="text-sm text-green-800 mb-3">
                Increase prices on high-demand items by 8-12% for immediate revenue boost.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-green-700">Impact: RM 12,000</span>
                <Button size="sm" variant="outline">
                  Implement Now
                </Button>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Supplier Negotiation</h4>
              <p className="text-sm text-blue-800 mb-3">
                Contact current suppliers for bulk purchase discounts this week.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-blue-700">Impact: RM 18,000</span>
                <Button size="sm" variant="outline">
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