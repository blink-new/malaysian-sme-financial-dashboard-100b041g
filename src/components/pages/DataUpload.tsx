import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Upload, FileText, Download, CheckCircle, AlertCircle, Cloud, Database } from 'lucide-react'

export function DataUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      name: "monthly_revenue_2024.csv",
      type: "Revenue Data",
      size: "2.3 KB",
      status: "processed",
      uploadDate: "2024-01-15"
    },
    {
      name: "expenses_q3_2024.xlsx",
      type: "Expense Data",
      size: "5.7 KB",
      status: "processed",
      uploadDate: "2024-01-10"
    }
  ])

  const dataTemplates = [
    {
      name: "Monthly Revenue Template",
      description: "Track monthly sales, revenue streams, and seasonal patterns",
      fields: ["Date", "Revenue", "Product Category", "Payment Method"],
      filename: "revenue_template.csv",
      icon: Database,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      name: "Expense Tracking Template",
      description: "Monitor operational costs, supplier payments, and overhead",
      fields: ["Date", "Category", "Amount", "Vendor", "Description"],
      filename: "expenses_template.csv",
      icon: FileText,
      color: "from-red-500/20 to-rose-500/20",
      borderColor: "border-red-500/30"
    },
    {
      name: "Payroll Data Template",
      description: "Employee salaries, benefits, and HR-related costs",
      fields: ["Employee ID", "Salary", "Benefits", "Department"],
      filename: "payroll_template.csv",
      icon: Upload,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      name: "Inventory Template",
      description: "Stock levels, purchase costs, and inventory turnover",
      fields: ["Item", "Quantity", "Cost Price", "Selling Price", "Supplier"],
      filename: "inventory_template.csv",
      icon: Cloud,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    }
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      // Handle file upload logic here
      console.log('Files selected:', files)
    }
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    const files = event.dataTransfer.files
    console.log('Files dropped:', files)
  }

  return (
    <div className="p-8 space-y-8 animate-fade-in-up">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
          Upload Financial Data
        </h1>
        <p className="text-slate-300 mt-3 text-lg">
          Import your business data for comprehensive analysis and insights
        </p>
      </div>

      {/* Upload Zone */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center">
              <Upload className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-xl">Upload Files</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="border-2 border-dashed border-slate-600/50 rounded-xl p-12 text-center hover:border-cyan-400/50 transition-all duration-300 bg-gradient-to-br from-slate-800/20 to-blue-900/20"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Drag and drop your files here
            </h3>
            <p className="text-slate-300 mb-6 text-lg">
              Supports CSV, Excel (.xlsx), and PDF files up to 10MB
            </p>
            <input
              type="file"
              multiple
              accept=".csv,.xlsx,.xls,.pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <Button asChild className="btn-primary text-lg px-8 py-3">
                <span className="cursor-pointer">Choose Files</span>
              </Button>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Data Templates */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
              <FileText className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-xl">Data Templates</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataTemplates.map((template, index) => {
              const Icon = template.icon
              return (
                <div key={index} className={`glass-light rounded-xl p-6 hover-glow transition-all duration-300 border ${template.borderColor} relative overflow-hidden`}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-20`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${template.color} rounded-xl flex items-center justify-center border ${template.borderColor}`}>
                          <Icon className="w-5 h-5 text-slate-300" />
                        </div>
                        <h4 className="font-bold text-white text-lg">{template.name}</h4>
                      </div>
                      <Button size="sm" className="btn-secondary">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">{template.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {template.fields.map((field, fieldIndex) => (
                        <Badge key={fieldIndex} className="bg-slate-700/50 text-slate-200 border-slate-600/50 text-xs font-medium">
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-xl">Uploaded Files</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {uploadedFiles.length > 0 ? (
            <div className="space-y-4">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-6 glass-light rounded-xl border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                      <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">{file.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-slate-400 mt-1">
                        <span className="font-medium">{file.type}</span>
                        <span>{file.size}</span>
                        <span>Uploaded: {file.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge 
                      className={`font-medium ${
                        file.status === 'processed' 
                          ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                          : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                      }`}
                    >
                      {file.status === 'processed' ? (
                        <>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Processed
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Processing
                        </>
                      )}
                    </Badge>
                    <Button size="sm" variant="ghost" className="text-slate-400 hover:text-red-400 hover:bg-red-500/10">
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-700/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-400 text-lg">No files uploaded yet</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Data Processing Guidelines */}
      <Card className="glass card-hover border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white text-xl">Data Processing Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-white text-lg mb-4">Supported File Types</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">CSV files (.csv)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">Excel files (.xlsx, .xls)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">PDF reports</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-4">Data Requirements</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">Include date columns for time-series analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">Use consistent currency format (RM)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">Ensure data covers at least 6 months</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}