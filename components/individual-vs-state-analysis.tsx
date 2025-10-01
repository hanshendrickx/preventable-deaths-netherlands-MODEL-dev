"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useState } from "react"

// Simple icon components to replace lucide-react
const ScaleIcon = () => <span className="text-lg">⚖️</span>
const AlertTriangleIcon = () => <span className="text-lg">⚠️</span>
const HeartIcon = () => <span className="text-lg">❤️</span>
const UsersIcon = () => <span className="text-lg">👥</span>
const GavelIcon = () => <span className="text-lg">⚖️</span>
const ShieldAlertIcon = () => <span className="text-lg">🛡️</span>

// Categorization based on primary responsibility and moral obligation
const responsibilityData = [
  {
    category: "Individual Responsibility",
    domains: [
      {
        name: "Alcohol-Related Deaths",
        deaths: 2720,
        preventable: 2448,
        responsibility: "Individual",
        description: "Personal lifestyle choices, addiction treatment access varies",
        moralComplexity: "Medium - addiction has biological/social components",
        stateRole: "Education, treatment programs, regulation",
      },
      {
        name: "Lifestyle/Smoking",
        deaths: 2100,
        preventable: 1785,
        responsibility: "Individual",
        description: "Personal smoking choices, though influenced by policy",
        moralComplexity: "Medium - addiction, but clear personal agency",
        stateRole: "Prevention campaigns, taxation, cessation support",
      },
    ],
    totalDeaths: 4820,
    totalPreventable: 4233,
    color: "#3b82f6",
    icon: "👤",
  },
  {
    category: "State Responsibility",
    domains: [
      {
        name: "Healthcare System Failures",
        deaths: 850,
        preventable: 595,
        responsibility: "State",
        description: "ER delays, 'Passende Zorg' rationing, diagnostic delays",
        moralComplexity: "High - direct state policy causing preventable deaths",
        stateRole: "Ensure timely, adequate healthcare access",
        passendeZorgImpact: 1000, // Additional deaths from ER delays
      },
      {
        name: "Traffic Safety Infrastructure",
        deaths: 684,
        preventable: 650,
        responsibility: "State",
        description: "Road design, traffic laws, enforcement, cycling infrastructure",
        moralComplexity: "Low - clear state infrastructure responsibility",
        stateRole: "Safe infrastructure, effective traffic management",
      },
      {
        name: "Environmental Protection",
        deaths: 400,
        preventable: 240,
        responsibility: "State",
        description: "Air quality, industrial regulation, occupational safety",
        moralComplexity: "Medium - balancing economic vs health interests",
        stateRole: "Environmental regulation, workplace safety standards",
      },
      {
        name: "Public Health Systems",
        deaths: 380,
        preventable: 323,
        responsibility: "State",
        description: "Vaccination programs, infection control, pandemic response",
        moralComplexity: "Low - clear public health mandate",
        stateRole: "Disease prevention, healthcare system preparedness",
      },
    ],
    totalDeaths: 2314,
    totalPreventable: 1808,
    color: "#ef4444",
    icon: "🏛️",
  },
]

// Calculate totals including Passende Zorg impact
const individualTotal = responsibilityData[0].totalDeaths
const stateTotal = responsibilityData[1].totalDeaths + 1000 // Add Passende Zorg deaths
const individualPreventable = responsibilityData[0].totalPreventable
const statePreventable = responsibilityData[1].totalPreventable + 700 // 70% of Passende Zorg deaths preventable

const totalDeaths = individualTotal + stateTotal
const totalPreventable = individualPreventable + statePreventable

export function IndividualVsStateAnalysis() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const pieData = [
    {
      name: "Individual Responsibility",
      value: individualTotal,
      preventable: individualPreventable,
      percentage: ((individualTotal / totalDeaths) * 100).toFixed(1),
      color: "#3b82f6",
    },
    {
      name: "State Responsibility",
      value: stateTotal,
      preventable: statePreventable,
      percentage: ((stateTotal / totalDeaths) * 100).toFixed(1),
      color: "#ef4444",
    },
  ]

  const comparisonData = [
    {
      category: "Individual",
      current: individualTotal,
      preventable: individualPreventable,
      unavoidable: individualTotal - individualPreventable,
    },
    {
      category: "State",
      current: stateTotal,
      preventable: statePreventable,
      unavoidable: stateTotal - statePreventable,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ScaleIcon />
            Individual vs State Responsibility: Moral Analysis of Preventable Deaths
          </CardTitle>
          <CardDescription>
            Ethical framework distinguishing personal choices from state obligations in preventable mortality (Peacetime
            data, Netherlands 2023)
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Passende Zorg Alert */}
      <Alert className="border-red-200 bg-red-50 dark:bg-red-950">
        <AlertTriangleIcon />
        <AlertDescription className="text-red-800 dark:text-red-200">
          <strong>Passende Zorg Impact:</strong> An estimated 1,000 additional preventable deaths annually from ER
          delays and diagnostic rationing. This represents state-imposed healthcare limitations that directly contradict
          the physician's duty to "first, do no harm" and violates the European Convention on Human Rights (Article 2:
          Right to Life) and the Oviedo Convention (Article 3: Equitable access to healthcare).
        </AlertDescription>
      </Alert>

      {/* Summary Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <UsersIcon />
              <div>
                <p className="text-2xl font-bold">{individualTotal.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Individual Responsibility</p>
                <p className="text-xs text-blue-600">{((individualTotal / totalDeaths) * 100).toFixed(1)}% of total</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <GavelIcon />
              <div>
                <p className="text-2xl font-bold">{stateTotal.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">State Responsibility</p>
                <p className="text-xs text-red-600">{((stateTotal / totalDeaths) * 100).toFixed(1)}% of total</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <ShieldAlertIcon />
              <div>
                <p className="text-2xl font-bold">1,000</p>
                <p className="text-sm text-muted-foreground">Passende Zorg Deaths</p>
                <p className="text-xs text-orange-600">State-induced rationing</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <HeartIcon />
              <div>
                <p className="text-2xl font-bold">{((statePreventable / totalPreventable) * 100).toFixed(1)}%</p>
                <p className="text-sm text-muted-foreground">State Prevention Potential</p>
                <p className="text-xs text-purple-600">Moral obligation</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Responsibility Visualization */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Responsibility Distribution</CardTitle>
            <CardDescription>Individual choices vs state obligations in preventable deaths</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-80 h-80 mx-auto">
              <div
                className="w-full h-full rounded-full border-8 border-gray-200"
                style={{
                  background: `conic-gradient(
                    #3b82f6 0% ${(individualTotal / totalDeaths) * 100}%,
                    #ef4444 ${(individualTotal / totalDeaths) * 100}% 100%
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
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500" />
                  <span className="text-sm">
                    Individual Responsibility: {individualTotal.toLocaleString()} (
                    {((individualTotal / totalDeaths) * 100).toFixed(1)}%)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500" />
                  <span className="text-sm">
                    State Responsibility: {stateTotal.toLocaleString()} ({((stateTotal / totalDeaths) * 100).toFixed(1)}
                    %)
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Prevention Potential by Responsibility</CardTitle>
            <CardDescription>Moral obligation to prevent deaths within each domain</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Individual Responsibility</span>
                  <span className="text-sm text-muted-foreground">{individualTotal.toLocaleString()} total deaths</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: "100%" }} />
                  <div
                    className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                    style={{ width: `${(individualPreventable / individualTotal) * 100}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                    {individualPreventable.toLocaleString()} preventable (
                    {((individualPreventable / individualTotal) * 100).toFixed(1)}%)
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">State Responsibility</span>
                  <span className="text-sm text-muted-foreground">{stateTotal.toLocaleString()} total deaths</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
                  <div className="h-full bg-red-400 rounded-full" style={{ width: "100%" }} />
                  <div
                    className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                    style={{ width: `${(statePreventable / stateTotal) * 100}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                    {statePreventable.toLocaleString()} preventable (
                    {((statePreventable / stateTotal) * 100).toFixed(1)}%)
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analysis by Category */}
      <div className="grid gap-6 lg:grid-cols-2">
        {responsibilityData.map((category, categoryIndex) => (
          <Card key={categoryIndex} className={selectedCategory === category.category ? "ring-2 ring-primary" : ""}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">{category.icon}</span>
                {category.category}
                <Badge variant={category.category === "State Responsibility" ? "destructive" : "default"}>
                  {category.totalDeaths.toLocaleString()} deaths
                </Badge>
              </CardTitle>
              <CardDescription>
                {category.totalPreventable.toLocaleString()} preventable deaths (
                {((category.totalPreventable / category.totalDeaths) * 100).toFixed(1)}% preventable)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.domains.map((domain, domainIndex) => (
                  <div key={domainIndex} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{domain.name}</h4>
                      <div className="text-right">
                        <Badge variant="outline">{domain.deaths.toLocaleString()}</Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {domain.preventable.toLocaleString()} preventable
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{domain.description}</p>
                    <div className="space-y-1 text-xs">
                      <p>
                        <strong>Moral Complexity:</strong> {domain.moralComplexity}
                      </p>
                      <p>
                        <strong>State Role:</strong> {domain.stateRole}
                      </p>
                      {domain.passendeZorgImpact && (
                        <p className="text-red-600 font-medium">
                          <strong>Passende Zorg Impact:</strong> +{domain.passendeZorgImpact} additional deaths from
                          rationing
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Moral and Legal Framework */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Moral and Legal Framework Analysis</CardTitle>
          <CardDescription>Ethical obligations and legal standards for preventing deaths</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Individual Responsibility Domain
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                  <strong>4,820 deaths</strong> primarily from lifestyle choices (alcohol, smoking)
                </p>
                <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                  <li>• Personal autonomy and choice</li>
                  <li>• State role: education, support, regulation</li>
                  <li>• Complex addiction/biological factors</li>
                  <li>• 87.8% preventable with individual action</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Historical Parallel: Medical Resistance 1941-1942
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  300 Dutch physicians refused to join the German Physicians Chamber (DAK), published in{" "}
                  <em>Medisch Contact</em>, demonstrating moral courage against state interference in medical ethics.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">State Responsibility Domain</h4>
                <p className="text-sm text-red-700 dark:text-red-300 mb-2">
                  <strong>3,314 deaths</strong> including 1,000 from "Passende Zorg" rationing
                </p>
                <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
                  <li>• EVRM Article 2: Right to Life</li>
                  <li>• Oviedo Convention Article 3: Equitable healthcare access</li>
                  <li>• State duty to provide adequate healthcare</li>
                  <li>• 76.8% preventable with proper state action</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  Passende Zorg: Modern Ethical Crisis
                </h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  The principle "must be payable" creates deliberate healthcare rationing, causing preventable deaths
                  through ER delays and diagnostic limitations - a form of state-induced mortality that violates
                  fundamental medical ethics and human rights.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Insights and Call to Action */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Critical Insights: State Moral Obligation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert className="border-red-200 bg-red-50 dark:bg-red-950">
              <GavelIcon />
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>State-Induced Deaths:</strong> The 1,000 annual deaths from "Passende Zorg" rationing represent
                a deliberate policy choice that prioritizes cost containment over human life. This violates the
                fundamental principle that healthcare decisions should be based on medical need, not financial
                constraints.
              </AlertDescription>
            </Alert>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Legal Violation</h4>
                <p className="text-sm text-muted-foreground">
                  EVRM Article 2 requires states to protect life. Deliberate healthcare rationing that causes
                  preventable deaths may constitute a violation of this fundamental right.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Medical Ethics</h4>
                <p className="text-sm text-muted-foreground">
                  "Primum non nocere" - First, do no harm. State policies that prevent physicians from providing
                  necessary care (CT scans, timely treatment) force doctors to violate their ethical obligations.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Moral Imperative</h4>
                <p className="text-sm text-muted-foreground">
                  Just as 300 physicians resisted the DAK in 1942, modern physicians must resist policies that
                  subordinate medical judgment to financial considerations when lives are at stake.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
