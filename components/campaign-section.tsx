import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Users, Calendar, TrendingUp, Heart, Shield, AlertTriangle } from "lucide-react"

export function CampaignSection() {
  const campaignStrategies = [
    {
      title: "Levensjaren Tellen (Life Years Count)",
      tagline: "Every year of life matters - let's make them count",
      target: "General Population",
      focus: "Lifestyle Prevention",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800",
      components: [
        "Smoking cessation programs with personalized support",
        "Alcohol awareness campaigns targeting middle-aged adults",
        "Nutrition and exercise programs in workplaces",
        "Mental health first aid training in communities",
      ],
    },
    {
      title: "Veilig Nederland (Safe Netherlands)",
      tagline: "Together we create the safest roads in the world",
      target: "Traffic Safety",
      focus: "Infrastructure & Behavior",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800",
      components: [
        "Smart cycling infrastructure with AI-powered safety systems",
        "Elderly cyclist safety programs and e-bike training",
        "Young driver education with VR simulation training",
        "Community-based traffic safety ambassadors",
      ],
    },
    {
      title: "Zorg Zonder Schade (Care Without Harm)",
      tagline: "Excellence in healthcare, safety in every interaction",
      target: "Healthcare System",
      focus: "Medical Safety",
      icon: <AlertTriangle className="h-6 w-6" />,
      color: "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800",
      components: [
        "AI-powered early warning systems for patient deterioration",
        "Medication safety protocols with digital verification",
        "Patient engagement in safety through shared decision-making",
        "Healthcare worker wellness programs to reduce errors",
      ],
    },
  ]

  const implementationPhases = [
    {
      phase: "Phase 1: Foundation",
      duration: "Months 1-6",
      activities: [
        "Stakeholder engagement and coalition building",
        "Baseline data collection and system setup",
        "Pilot program development and testing",
        "Public awareness campaign launch",
      ],
    },
    {
      phase: "Phase 2: Scale-Up",
      duration: "Months 7-18",
      activities: [
        "National rollout of core interventions",
        "Community partnership development",
        "Digital platform deployment",
        "Healthcare system integration",
      ],
    },
    {
      phase: "Phase 3: Optimization",
      duration: "Months 19-36",
      activities: [
        "Data-driven program refinement",
        "Sustainability planning and funding",
        "International knowledge sharing",
        "Long-term impact evaluation",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Campaign for Prevention of Preventable Deaths
          </CardTitle>
          <CardDescription>
            Comprehensive, evidence-based campaign strategies to reduce preventable mortality in the Netherlands
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Campaign Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            Campaign Vision: "Nederland Leeft Langer" (Netherlands Lives Longer)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <div className="text-2xl font-bold text-primary">-25%</div>
              <div className="text-sm text-muted-foreground">Preventable deaths by 2030</div>
            </div>
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <div className="text-2xl font-bold text-primary">+2.5</div>
              <div className="text-sm text-muted-foreground">Years healthy life expectancy</div>
            </div>
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <div className="text-2xl font-bold text-primary">€2.8B</div>
              <div className="text-sm text-muted-foreground">Healthcare savings over 10 years</div>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Core Philosophy</h4>
            <p className="text-sm leading-relaxed">
              Rather than focusing solely on preventing deaths, this campaign emphasizes{" "}
              <strong>promoting life quality and longevity</strong>
              through evidence-based interventions that address the root causes of preventable mortality. The approach
              combines individual empowerment with systemic improvements, leveraging the Netherlands' strengths while
              addressing persistent challenges.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Three-Pillar Strategy */}
      <div className="grid gap-6">
        {campaignStrategies.map((strategy, index) => (
          <Card key={index} className={strategy.color}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {strategy.icon}
                <div>
                  <div className="text-lg">{strategy.title}</div>
                  <div className="text-sm font-normal text-muted-foreground italic">"{strategy.tagline}"</div>
                </div>
              </CardTitle>
              <div className="flex gap-2">
                <Badge variant="secondary">{strategy.target}</Badge>
                <Badge variant="outline">{strategy.focus}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {strategy.components.map((component, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded border">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">{component}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Implementation Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Implementation Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="relative">
                {index < implementationPhases.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-16 bg-border" />
                )}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold">{phase.phase}</h4>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                    <div className="grid gap-2 md:grid-cols-2">
                      {phase.activities.map((activity, i) => (
                        <div key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Success Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Success Metrics & KPIs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Primary Outcomes</h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Preventable death rate reduction</li>
                <li>• Life expectancy increase</li>
                <li>• Quality-adjusted life years gained</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Process Indicators</h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Program participation rates</li>
                <li>• Healthcare system adoption</li>
                <li>• Community engagement levels</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Economic Impact</h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Healthcare cost savings</li>
                <li>• Productivity gains</li>
                <li>• Return on investment</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Social Outcomes</h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Health equity improvements</li>
                <li>• Community resilience</li>
                <li>• Public awareness levels</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Next Steps & Call to Action</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-primary/10 rounded-lg">
              <h4 className="font-semibold mb-2">Immediate Actions (Next 30 Days)</h4>
              <div className="grid gap-2 md:grid-cols-2">
                <div className="text-sm">
                  <strong>Policy Makers:</strong> Review evidence and initiate stakeholder consultations
                </div>
                <div className="text-sm">
                  <strong>Healthcare Leaders:</strong> Assess current safety systems and identify improvement
                  opportunities
                </div>
                <div className="text-sm">
                  <strong>Community Organizations:</strong> Engage local networks and assess readiness for participation
                </div>
                <div className="text-sm">
                  <strong>Researchers:</strong> Establish baseline measurements and evaluation frameworks
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button size="lg" className="px-8">
                <Users className="h-4 w-4 mr-2" />
                Join the Coalition
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Full Strategy
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Together, we can make the Netherlands a global leader in preventable death reduction while maintaining our
              commitment to individual freedom and high-quality healthcare.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
