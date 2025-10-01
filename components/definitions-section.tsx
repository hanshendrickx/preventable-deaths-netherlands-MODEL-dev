import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Heart, Shield } from "lucide-react"

export function DefinitionsSection() {
  const definitions = [
    {
      term: "Preventable Deaths",
      definition:
        "Deaths that can be avoided through effective public health and prevention interventions, including lifestyle modifications, environmental improvements, and primary prevention measures.",
      icon: <Shield className="h-5 w-5" />,
      examples: ["Lung cancer from smoking", "Traffic accidents", "Alcohol-related deaths", "Drug overdoses"],
      source: "WHO/OECD Classification",
    },
    {
      term: "Treatable Deaths",
      definition:
        "Deaths that can be avoided through timely and effective healthcare interventions, assuming healthcare services are accessible and of sufficient quality.",
      icon: <Heart className="h-5 w-5" />,
      examples: ["Ischemic heart disease", "Breast cancer", "Diabetes complications", "Stroke"],
      source: "WHO/OECD Classification",
    },
    {
      term: "Avoidable Mortality",
      definition:
        "The combined measure of both preventable and treatable deaths, representing the total burden of deaths that could theoretically be avoided.",
      icon: <AlertCircle className="h-5 w-5" />,
      examples: ["All preventable causes", "All treatable causes", "Combined mortality burden"],
      source: "WHO/OECD Standard",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-primary" />
            Key Definitions
          </CardTitle>
          <CardDescription>
            Standardized definitions based on WHO and OECD classifications for preventable mortality analysis
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {definitions.map((def, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                {def.icon}
                {def.term}
              </CardTitle>
              <Badge variant="outline" className="w-fit">
                {def.source}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{def.definition}</p>
              <div>
                <h4 className="font-medium mb-2">Examples:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {def.examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Netherlands Context (2020-2023)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Preventable Deaths Performance</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                21% lower than EU average in 2020, with lung cancer and COVID-19 accounting for 40% of preventable
                deaths
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Treatable Deaths Performance</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Lowest mortality rate from treatable causes in EU (&lt;50 per 100,000 vs 79 OECD average)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
