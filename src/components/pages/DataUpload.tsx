import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Upload, FileText, Download, CheckCircle, AlertCircle } from 'lucide-react'

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
      filename: "revenue_template.csv"
    },
    {
      name: "Expense Tracking Template",
      description: "Monitor operational costs, supplier payments, and overhead",
      fields: ["Date", "Category", "Amount", "Vendor", "Description"],
      filename: "expenses_template.csv"
    },
    {
      name: "Payroll Data Template",
      description: "Employee salaries, benefits, and HR-related costs",
      fields: ["Employee ID", "Salary", "Benefits", "Department"],
      filename: "payroll_template.csv"
    },
    {
      name: "Inventory Template",
      description: "Stock levels, purchase costs, and inventory turnover",
      fields: ["Item", "Quantity", "Cost Price", "Selling Price", "Supplier"],
      filename: "inventory_template.csv"
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
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Upload Financial Data</h1>
        <p className="text-slate-600 mt-2">
          Import your business data for comprehensive analysis and insights
        </p>
      </div>

      {/* Upload Zone */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Upload className="w-5 h-5 text-blue-600" />
            <span>Upload Files</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Drag and drop your files here
            </h3>
            <p className="text-slate-600 mb-4">
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
              <Button asChild>
                <span className="cursor-pointer">Choose Files</span>
              </Button>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Data Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-green-600" />
            <span>Data Templates</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataTemplates.map((template, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-slate-900">{template.name}</h4>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                <p className="text-sm text-slate-600 mb-3">{template.description}</p>
                <div className="flex flex-wrap gap-2">
                  {template.fields.map((field, fieldIndex) => (
                    <Badge key={fieldIndex} variant="secondary" className="text-xs">
                      {field}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span>Uploaded Files</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {uploadedFiles.length > 0 ? (
            <div className="space-y-4">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">{file.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <span>{file.type}</span>
                        <span>{file.size}</span>
                        <span>Uploaded: {file.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge 
                      variant={file.status === 'processed' ? 'default' : 'secondary'}
                      className="capitalize"
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
                    <Button size="sm" variant="ghost">
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">No files uploaded yet</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Data Processing Status */}
      <Card>
        <CardHeader>
          <CardTitle>Data Processing Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Supported File Types</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>CSV files (.csv)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Excel files (.xlsx, .xls)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>PDF reports</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Data Requirements</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Include date columns for time-series analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Use consistent currency format (RM)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Ensure data covers at least 6 months</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}