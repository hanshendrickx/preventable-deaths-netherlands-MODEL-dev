import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertTriangle, Heart, Shield, Users } from "lucide-react"

export function ReviewSection() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Comprehensive Review & Analysis
          </CardTitle>
          <CardDescription>
            Critical assessment of preventable deaths in the Netherlands and societal implications
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Domain Comparison Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Domain Analysis: Traffic vs Healthcare</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Traffic Accidents
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Annual Deaths (2023):</span>
                    <Badge variant="outline">684</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Rate per 100,000:</span>
                    <Badge variant="outline">3.9</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Preventability:</span>
                    <Badge variant="default">95%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Primary Demographics:</span>
                    <span className="text-orange-700 dark:text-orange-300">Young males</span>
                  </div>
                </div>
              </div>

              <div className="p-3 border border-orange-200 dark:border-orange-800 rounded">
                <h5 className="font-medium mb-2">Key Characteristics:</h5>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Highly preventable through infrastructure and behavior</li>
                  <li>• Immediate, visible impact</li>
                  <li>• Strong public awareness and policy focus</li>
                  <li>• Cyclist deaths: 270 (39% of total)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Healthcare-Related Deaths
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Estimated Annual Deaths:</span>
                    <Badge variant="outline">~850</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Rate per 100,000:</span>
                    <Badge variant="outline">4.8</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Preventability:</span>
                    <Badge variant="secondary">70%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Primary Demographics:</span>
                    <span className="text-blue-700 dark:text-blue-300">Elderly patients</span>
                  </div>
                </div>
              </div>

              <div className="p-3 border border-blue-200 dark:border-blue-800 rounded">
                <h5 className="font-medium mb-2">Key Characteristics:</h5>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Complex causation, system-dependent</li>
                  <li>• Less visible, often underreported</li>
                  <li>• Requires systemic healthcare improvements</li>
                  <li>• Netherlands has lowest EU rate for treatable deaths</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Conclusion: Domain Comparison
            </h4>
            <p className="text-sm leading-relaxed">
              <strong>Healthcare-related deaths slightly exceed traffic accidents in absolute numbers</strong> (~850 vs
              684), but traffic accidents have higher preventability rates (95% vs 70%). Both domains are significant,
              but traffic accidents receive disproportionate public attention relative to their impact compared to
              healthcare-related preventable deaths.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Medicine's Net Impact */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Medicine's Net Impact: Saves vs Causes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Lives Saved by Medicine
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Treatable Deaths Prevented:</strong>
                    <p className="text-green-700 dark:text-green-300">
                      Netherlands: 47/100k vs OECD average: 79/100k
                      <br />
                      Difference: 32 deaths per 100,000 = ~5,600 lives saved annually
                    </p>
                  </div>
                  <div>
                    <strong>Historical Impact:</strong>
                    <p className="text-green-700 dark:text-green-300">
                      Life expectancy increased from 70.3 (1960) to 82.3 (2023) = 12 years gained
                    </p>
                  </div>
                  <div>
                    <strong>Specific Achievements:</strong>
                    <ul className="text-green-700 dark:text-green-300 ml-4 list-disc">
                      <li>Cardiovascular mortality: -75% since 1980</li>
                      <li>Cancer survival rates: +40% improvement</li>
                      <li>Infant mortality: 3.6/1000 (among world's lowest)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Deaths Caused by Medicine
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Medical Errors:</strong>
                    <p className="text-red-700 dark:text-red-300">
                      Estimated 1-3% of hospital deaths (~200-600 annually)
                    </p>
                  </div>
                  <div>
                    <strong>Healthcare-Associated Infections:</strong>
                    <p className="text-red-700 dark:text-red-300">~150-300 deaths annually</p>
                  </div>
                  <div>
                    <strong>Adverse Drug Reactions:</strong>
                    <p className="text-red-700 dark:text-red-300">~100-200 deaths annually</p>
                  </div>
                  <div>
                    <strong>Total Estimated:</strong>
                    <p className="text-red-700 dark:text-red-300 font-medium">
                      ~450-1,100 deaths annually (0.5-0.6/100k)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-lg border-2 border-green-200 dark:border-green-800">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Net Impact Analysis
              </h4>
              <div className="grid gap-4 md:grid-cols-3 text-sm">
                <div className="text-center p-3 bg-white dark:bg-gray-900 rounded">
                  <div className="text-2xl font-bold text-green-600">+5,600</div>
                  <div className="text-muted-foreground">Lives Saved</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-900 rounded">
                  <div className="text-2xl font-bold text-red-600">-850</div>
                  <div className="text-muted-foreground">Lives Lost</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-900 rounded">
                  <div className="text-2xl font-bold text-blue-600">+4,750</div>
                  <div className="text-muted-foreground">Net Benefit</div>
                </div>
              </div>
              <p className="mt-4 text-center font-medium">
                <strong>Medicine saves approximately 6.6 times more lives than it causes to be lost</strong>
                <br />
                <span className="text-muted-foreground">
                  This represents a positive benefit-risk ratio of 6.6:1, demonstrating medicine's overwhelming net
                  positive impact
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Societal Opinion */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Opinion: Societal Preventable Deaths</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="prose prose-sm max-w-none">
              <h4 className="font-semibold mb-3">The Paradox of Preventable Deaths in a High-Performing System</h4>
              <p className="leading-relaxed text-muted-foreground">
                The Netherlands presents a fascinating case study in preventable mortality. Despite having one of the
                world's most effective healthcare systems and achieving the lowest treatable death rates in the EU, the
                country still faces significant challenges in preventable deaths, particularly in lifestyle-related
                causes.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950">
                <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Systemic Strengths</h5>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Excellent healthcare access and quality</li>
                  <li>• Strong public health infrastructure</li>
                  <li>• Evidence-based policy making</li>
                  <li>• Comprehensive social safety net</li>
                  <li>• High health literacy rates</li>
                </ul>
              </div>
              <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950">
                <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Persistent Challenges</h5>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Individual behavioral choices (smoking, alcohol)</li>
                  <li>• Aging population increasing complexity</li>
                  <li>• Traffic safety in cycling culture</li>
                  <li>• Health inequalities by socioeconomic status</li>
                  <li>• Mental health and suicide prevention</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-semibold mb-3">Key Societal Observations</h5>
              <div className="space-y-3 text-sm">
                <p>
                  <strong>1. The Limits of System Performance:</strong> Even in a high-performing system like the
                  Netherlands, preventable deaths persist, highlighting that beyond a certain point, further reductions
                  require addressing complex behavioral, social, and environmental factors rather than just healthcare
                  improvements.
                </p>
                <p>
                  <strong>2. The Attention Paradox:</strong> Traffic accidents receive significant public and policy
                  attention despite representing a smaller absolute burden than healthcare-related preventable deaths,
                  suggesting that visibility and perceived controllability influence societal response more than
                  statistical impact.
                </p>
                <p>
                  <strong>3. The Individual vs. System Tension:</strong> Many remaining preventable deaths involve
                  individual choices (smoking, risky behavior) within systemic contexts (social determinants, policy
                  environments), requiring balanced approaches that respect autonomy while creating supportive
                  environments.
                </p>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Recommendations for Society</h5>
              <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
                <li>
                  <strong>Reframe the narrative:</strong> Focus on "health promotion" rather than just "death
                  prevention" to create positive, life-affirming approaches
                </li>
                <li>
                  <strong>Address root causes:</strong> Invest in social determinants of health, education, and
                  environmental improvements
                </li>
                <li>
                  <strong>Maintain perspective:</strong> Celebrate the Netherlands' achievements while continuing
                  targeted improvements
                </li>
                <li>
                  <strong>Evidence-based prioritization:</strong> Allocate resources based on impact potential rather
                  than public visibility
                </li>
                <li>
                  <strong>Integrated approaches:</strong> Combine individual empowerment with systemic support for
                  sustainable change
                </li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
