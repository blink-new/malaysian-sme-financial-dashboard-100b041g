import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Building2, Save, Edit } from 'lucide-react'

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
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Business Profile</h1>
          <p className="text-slate-600 mt-2">
            Manage your company information for accurate analytics
          </p>
        </div>
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      {/* Profile Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            <span>Company Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                value={profile.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                disabled={!isEditing}
                placeholder="Enter company name"
              />
            </div>

            {/* Industry */}
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select
                value={profile.industry}
                onValueChange={(value) => handleInputChange('industry', value)}
                disabled={!isEditing}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value}>
                      {industry.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Annual Revenue */}
            <div className="space-y-2">
              <Label htmlFor="annualRevenue">Annual Revenue (RM)</Label>
              <Input
                id="annualRevenue"
                type="number"
                value={profile.annualRevenue}
                onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                disabled={!isEditing}
                placeholder="Enter annual revenue"
              />
            </div>

            {/* Number of Employees */}
            <div className="space-y-2">
              <Label htmlFor="employees">Number of Employees</Label>
              <Input
                id="employees"
                type="number"
                value={profile.employees}
                onChange={(e) => handleInputChange('employees', e.target.value)}
                disabled={!isEditing}
                placeholder="Enter number of employees"
              />
            </div>

            {/* Year Established */}
            <div className="space-y-2">
              <Label htmlFor="yearEstablished">Year Established</Label>
              <Input
                id="yearEstablished"
                type="number"
                value={profile.yearEstablished}
                onChange={(e) => handleInputChange('yearEstablished', e.target.value)}
                disabled={!isEditing}
                placeholder="Enter year established"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Select
                value={profile.location}
                onValueChange={(value) => handleInputChange('location', value)}
                disabled={!isEditing}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Kuala Lumpur">Kuala Lumpur</SelectItem>
                  <SelectItem value="Selangor">Selangor</SelectItem>
                  <SelectItem value="Penang">Penang</SelectItem>
                  <SelectItem value="Johor">Johor</SelectItem>
                  <SelectItem value="Perak">Perak</SelectItem>
                  <SelectItem value="Kedah">Kedah</SelectItem>
                  <SelectItem value="Kelantan">Kelantan</SelectItem>
                  <SelectItem value="Terengganu">Terengganu</SelectItem>
                  <SelectItem value="Pahang">Pahang</SelectItem>
                  <SelectItem value="Negeri Sembilan">Negeri Sembilan</SelectItem>
                  <SelectItem value="Melaka">Melaka</SelectItem>
                  <SelectItem value="Perlis">Perlis</SelectItem>
                  <SelectItem value="Sabah">Sabah</SelectItem>
                  <SelectItem value="Sarawak">Sarawak</SelectItem>
                  <SelectItem value="Labuan">Labuan</SelectItem>
                  <SelectItem value="Putrajaya">Putrajaya</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Business Type */}
            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type</Label>
              <Select
                value={profile.businessType}
                onValueChange={(value) => handleInputChange('businessType', value)}
                disabled={!isEditing}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
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
      <Card>
        <CardHeader>
          <CardTitle>Industry Benchmarks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900">Average Revenue</h4>
              <p className="text-2xl font-bold text-blue-600 mt-2">RM 720K</p>
              <p className="text-sm text-blue-700 mt-1">Malaysian F&B SMEs</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900">Profit Margin</h4>
              <p className="text-2xl font-bold text-green-600 mt-2">15.8%</p>
              <p className="text-sm text-green-700 mt-1">Industry Average</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900">Growth Rate</h4>
              <p className="text-2xl font-bold text-purple-600 mt-2">8.2%</p>
              <p className="text-sm text-purple-700 mt-1">Annual Growth</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}