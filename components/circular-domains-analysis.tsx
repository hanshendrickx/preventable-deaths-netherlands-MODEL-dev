"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

// Simple icon components
const TargetIcon = () => <span className="text-lg">🎯</span>
const TrendingUpIcon = () => <span className="text-lg">📈</span>
const AlertTriangleIcon = () => <span className="text-lg">⚠️</span>
const CheckCircleIcon = () => <span className="text-lg">✅</span>

const domainsData = [
  {
    domain: "Alcohol-Related",
    deaths: 2720,
    rate: 15.5,
    preventability: 90,
    reasonableGains: 2448,
    color: "#ef4444",
    icon: "🍷",
    description: "Alcohol-related diseases, accidents, and behavioral disorders",
  },
  {
    domain: "Lifestyle/Smoking",
    deaths: 2100,
    rate: 12.0,
    preventability: 85,
    reasonableGains: 1785,
    color: "#f97316",
    icon: "🚬",
    description: "Smoking-related cancers, COPD, and cardiovascular diseases",
  },
  {
    domain: "Healthcare-Related",
    deaths: 850,
    rate: 4.8,
    preventability: 70,
    reasonableGains: 595,
    color: "#eab308",
    icon: "🏥",
    description: "Medical errors, delayed treatment, and system failures",
  },
  {
    domain: "Traffic Accidents",
    deaths: 684,
    rate: 3.9,
    preventability: 95,
    reasonableGains: 650,
    color: "#22c55e",
    icon: "🚗",
    description: "Road traffic accidents, cycling incidents, and pedestrian deaths",
  },
  {
    domain: "Environmental",
    deaths: 400,
    rate: 2.3,
    preventability: 60,
    reasonableGains: 240,
    color: "#3b82f6",
    icon: "🏭",
    description: "Air pollution, occupational hazards, and toxic exposures",
  },
  {
    domain: "Infectious Diseases",
    deaths: 380,
    rate: 2.2,
    preventability: 85,
    reasonableGains: 323,
    color: "#8b5cf6",
    icon: "🦠",
    description: "Vaccine-preventable diseases and healthcare-associated infections",
  },
]

const totalDeaths = domainsData.reduce((sum, domain) => sum + domain.deaths, 0)
const totalReasonableGains = domainsData.reduce((sum, domain) => sum + domain.reasonableGains, 0)

export function CircularDomainsAnalysis() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null)

  // Calculate percentages for circular visualization
  const pieData = domainsData.map((domain) => ({
    ...domain,
    percentage: (domain.deaths / totalDeaths) * 100,
    gainsPercentage: (domain.reasonableGains / totalReasonableGains) * 100,
  }))

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TargetIcon />
            Circular Domain Analysis: Preventable Deaths Netherlands 2023
          </CardTitle>
          <CardDescription>
            Interactive visualization of 6 major domains showing total deaths vs reasonable prevention gains
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Summary Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangleIcon />
              <div>
                <p className="text-2xl font-bold">{totalDeaths.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Deaths</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircleIcon />
              <div>
                <p className="text-2xl font-bold">{totalReasonableGains.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Preventable Deaths</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUpIcon />
              <div>
                <p className="text-2xl font-bold">{((totalReasonableGains / totalDeaths) * 100).toFixed(1)}%</p>
                <p className="text-sm text-muted-foreground">Prevention Potential</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TargetIcon />
              <div>
                <p className="text-2xl font-bold">{(totalDeaths - totalReasonableGains).toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Unavoidable Deaths</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CSS-based Circular Visualization */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Domain Distribution (Total Deaths)</CardTitle>
            <CardDescription>Proportional representation of deaths by domain</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-80 h-80 mx-auto">
              {/* CSS-based pie chart using conic-gradient */}
              <div
                className="w-full h-full rounded-full border-8 border-gray-200"
                style={{
                  background: `conic-gradient(
                    ${pieData[0].color} 0% ${pieData[0].percentage}%,
                    ${pieData[1].color} ${pieData[0].percentage}% ${pieData[0].percentage + pieData[1].percentage}%,
                    ${pieData[2].color} ${pieData[0].percentage + pieData[1].percentage}% ${pieData[0].percentage + pieData[1].percentage + pieData[2].percentage}%,
                    ${pieData[3].color} ${pieData[0].percentage + pieData[1].percentage + pieData[2].percentage}% ${pieData[0].percentage + pieData[1].percentage + pieData[2].percentage + pieData[3].percentage}%,
                    ${pieData[4].color} ${pieData[0].percentage + pieData[1].percentage + pieData[2].percentage + pieData[3].percentage}% ${pieData[0].percentage + pieData[1].percentage + pieData[2].percentage + pieData[3].percentage + pieData[4].percentage}%,
                    ${pieData[5].color} ${pieData[0].percentage + pieData[1].percentage + pieData[2].percentage + pieData[3].percentage + pieData[4].percentage}% 100%
                  )`,
                }}
              >
                <div className="absolute inset-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{totalDeaths.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Total Deaths</p>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                {pieData.map((domain, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: domain.color }} />
                    <span className="truncate">{domain.domain}</span>
                    <span className="text-muted-foreground">({domain.percentage.toFixed(1)}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Prevention Potential Analysis</CardTitle>
            <CardDescription>Current deaths vs preventable deaths by domain</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pieData.map((domain, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span>{domain.icon}</span>
                      <span className="font-medium text-sm">{domain.domain}</span>
                    </div>
                    <div className="text-right text-xs">
                      <div>{domain.deaths.toLocaleString()} total</div>
                      <div className="text-green-600">{domain.reasonableGains.toLocaleString()} preventable</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6 relative overflow-hidden">
                    <div className="h-full bg-red-400 rounded-full" style={{ width: "100%" }} />
                    <div
                      className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                      style={{ width: `${domain.preventability}%` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                      {domain.preventability}% preventable
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Domain Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Domain Analysis Details</CardTitle>
          <CardDescription>Comprehensive breakdown of each preventable death domain</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {domainsData.map((domain, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg transition-all cursor-pointer ${
                  selectedDomain === domain.domain ? "ring-2 ring-primary" : ""
                }`}
                onMouseEnter={() => setSelectedDomain(domain.domain)}
                onMouseLeave={() => setSelectedDomain(null)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: domain.color }} />
                  <h4 className="font-semibold">{domain.domain}</h4>
                  <span className="text-lg">{domain.icon}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-3">{domain.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Total Deaths:</span>
                    <Badge variant="destructive">{domain.deaths.toLocaleString()}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Rate/100k:</span>
                    <Badge variant="outline">{domain.rate}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Preventability:</span>
                    <Badge variant="secondary">{domain.preventability}%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Reasonable Gains:</span>
                    <Badge variant="default" className="bg-green-600">
                      {domain.reasonableGains.toLocaleString()}
                    </Badge>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <div className="flex justify-between text-sm">
                    <span>Prevention Impact:</span>
                    <span className="font-medium">
                      {((domain.reasonableGains / totalReasonableGains) * 100).toFixed(1)}% of total gains
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Key Data Science Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Highest Impact Domain</h4>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Alcohol-Related Deaths</strong> offer the largest absolute prevention potential with 2,448
                  preventable deaths (90% preventability rate)
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Highest Prevention Rate</h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  <strong>Traffic Accidents</strong> have 95% preventability but lower absolute numbers (650 preventable
                  deaths)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Combined Lifestyle Impact</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Alcohol + Smoking domains together represent <strong>4,233 preventable deaths</strong> (65% of total
                  prevention potential)
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Healthcare vs Traffic</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Healthcare deaths (850) exceed traffic (684), but traffic has higher prevention potential (95% vs 70%)
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
