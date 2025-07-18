import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Building2, Save, Edit, TrendingUp, Users, DollarSign } from 'lucide-react'

export function BusinessProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    companyName: "Kedai Kopi Warisan Sdn Bhd",
    industry: "food-beverage",
    annualRevenue: "850000",
    employees: "12",
    yearEstablished: "2019",
    location: "Kuala Lumpur",
    businessType: "sdn-bhd"
  })

  const industries = [
    { value: "food-beverage", label: "Food & Beverage" },
    { value: "retail", label: "Retail" },
    { value: "technology", label: "Technology" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "services", label: "Professional Services" },
    { value: "healthcare", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "construction", label: "Construction" },
    { value: "logistics", label: "Logistics & Transportation" },
    { value: "other", label: "Other" }
  ]

  const businessTypes = [
    { value: "sdn-bhd", label: "Sdn Bhd" },
    { value: "sole-proprietorship", label: "Sole Proprietorship" },
    { value: "partnership", label: "Partnership" },
    { value: "llp", label: "Limited Liability Partnership (LLP)" },
    { value: "other", label: "Other" }
  ]

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to a database
    console.log('Profile saved:', profile)
  }

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="p-8 space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Business Profile
          </h1>
          <p className="text-slate-300 mt-3 text-lg">
            Manage your company information for accurate analytics
          </p>
        </div>
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)} className="btn-secondary">
                Cancel
              </Button>
              <Button onClick={handleSave} className="btn-primary">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)} className="btn-primary">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      {/* Profile Form */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-xl">Company Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div className="space-y-3">
              <Label htmlFor="companyName" className="text-slate-200 font-medium">Company Name</Label>
              <Input
                id="companyName"
                value={profile.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                disabled={!isEditing}
                placeholder="Enter company name"
                className="input-glass"
              />
            </div>

            {/* Industry */}
            <div className="space-y-3">
              <Label htmlFor="industry" className="text-slate-200 font-medium">Industry</Label>
              <Select
                value={profile.industry}
                onValueChange={(value) => handleInputChange('industry', value)}
                disabled={!isEditing}
              >
                <SelectTrigger className="input-glass">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent className="glass border-slate-600/50">
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value} className="text-slate-200 hover:bg-slate-700/50">
                      {industry.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Annual Revenue */}
            <div className="space-y-3">
              <Label htmlFor="annualRevenue" className="text-slate-200 font-medium">Annual Revenue (RM)</Label>
              <Input
                id="annualRevenue"
                type="number"
                value={profile.annualRevenue}
                onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                disabled={!isEditing}
                placeholder="Enter annual revenue"
                className="input-glass"
              />
            </div>

            {/* Number of Employees */}
            <div className="space-y-3">
              <Label htmlFor="employees" className="text-slate-200 font-medium">Number of Employees</Label>
              <Input
                id="employees"
                type="number"
                value={profile.employees}
                onChange={(e) => handleInputChange('employees', e.target.value)}
                disabled={!isEditing}
                placeholder="Enter number of employees"
                className="input-glass"
              />
            </div>

            {/* Year Established */}
            <div className="space-y-3">
              <Label htmlFor="yearEstablished" className="text-slate-200 font-medium">Year Established</Label>
              <Input
                id="yearEstablished"
                type="number"
                value={profile.yearEstablished}
                onChange={(e) => handleInputChange('yearEstablished', e.target.value)}
                disabled={!isEditing}
                placeholder="Enter year established"
                className="input-glass"
              />
            </div>

            {/* Location */}
            <div className="space-y-3">
              <Label htmlFor="location" className="text-slate-200 font-medium">Location</Label>
              <Select
                value={profile.location}
                onValueChange={(value) => handleInputChange('location', value)}
                disabled={!isEditing}
              >
                <SelectTrigger className="input-glass">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent className="glass border-slate-600/50">
                  <SelectItem value="Kuala Lumpur" className="text-slate-200 hover:bg-slate-700/50">Kuala Lumpur</SelectItem>
                  <SelectItem value="Selangor" className="text-slate-200 hover:bg-slate-700/50">Selangor</SelectItem>
                  <SelectItem value="Penang" className="text-slate-200 hover:bg-slate-700/50">Penang</SelectItem>
                  <SelectItem value="Johor" className="text-slate-200 hover:bg-slate-700/50">Johor</SelectItem>
                  <SelectItem value="Perak" className="text-slate-200 hover:bg-slate-700/50">Perak</SelectItem>
                  <SelectItem value="Kedah" className="text-slate-200 hover:bg-slate-700/50">Kedah</SelectItem>
                  <SelectItem value="Kelantan" className="text-slate-200 hover:bg-slate-700/50">Kelantan</SelectItem>
                  <SelectItem value="Terengganu" className="text-slate-200 hover:bg-slate-700/50">Terengganu</SelectItem>
                  <SelectItem value="Pahang" className="text-slate-200 hover:bg-slate-700/50">Pahang</SelectItem>
                  <SelectItem value="Negeri Sembilan" className="text-slate-200 hover:bg-slate-700/50">Negeri Sembilan</SelectItem>
                  <SelectItem value="Melaka" className="text-slate-200 hover:bg-slate-700/50">Melaka</SelectItem>
                  <SelectItem value="Perlis" className="text-slate-200 hover:bg-slate-700/50">Perlis</SelectItem>
                  <SelectItem value="Sabah" className="text-slate-200 hover:bg-slate-700/50">Sabah</SelectItem>
                  <SelectItem value="Sarawak" className="text-slate-200 hover:bg-slate-700/50">Sarawak</SelectItem>
                  <SelectItem value="Labuan" className="text-slate-200 hover:bg-slate-700/50">Labuan</SelectItem>
                  <SelectItem value="Putrajaya" className="text-slate-200 hover:bg-slate-700/50">Putrajaya</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Business Type */}
            <div className="space-y-3">
              <Label htmlFor="businessType" className="text-slate-200 font-medium">Business Type</Label>
              <Select
                value={profile.businessType}
                onValueChange={(value) => handleInputChange('businessType', value)}
                disabled={!isEditing}
              >
                <SelectTrigger className="input-glass">
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent className="glass border-slate-600/50">
                  {businessTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value} className="text-slate-200 hover:bg-slate-700/50">
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Industry Benchmarks Info */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white text-xl">Industry Benchmarks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <DollarSign className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2">Average Revenue</h4>
              <p className="text-3xl font-bold text-blue-400 mb-2">RM 720K</p>
              <p className="text-sm text-slate-300">Malaysian F&B SMEs</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2">Profit Margin</h4>
              <p className="text-3xl font-bold text-green-400 mb-2">15.8%</p>
              <p className="text-sm text-slate-300">Industry Average</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2">Growth Rate</h4>
              <p className="text-3xl font-bold text-purple-400 mb-2">8.2%</p>
              <p className="text-sm text-slate-300">Annual Growth</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}