import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TreePine, Users, MapPin, Clock } from "lucide-react"

export function OntologySection() {
  const ontologyStructure = {
    "Primary Categories": [
      {
        name: "Preventable Deaths",
        subcategories: [
          "Behavioral Risk Factors",
          "Environmental Factors",
          "Social Determinants",
          "Policy-Related Factors",
        ],
        color: "bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-200",
      },
      {
        name: "Treatable Deaths",
        subcategories: ["Healthcare Access", "Healthcare Quality", "Diagnostic Delays", "Treatment Effectiveness"],
        color: "bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200",
      },
    ],
    "Demographic Dimensions": [
      {
        name: "Age Groups",
        categories: ["0-14 years", "15-44 years", "45-64 years", "65-74 years", "75+ years"],
        icon: <Clock className="h-4 w-4" />,
      },
      {
        name: "Gender",
        categories: ["Male", "Female", "Gender-specific conditions"],
        icon: <Users className="h-4 w-4" />,
      },
      {
        name: "Geographic",
        categories: ["Urban", "Rural", "Provincial variations", "Socioeconomic areas"],
        icon: <MapPin className="h-4 w-4" />,
      },
    ],
    "Cause-Specific Domains": [
      {
        domain: "Traffic & Transport",
        causes: ["Motor vehicle accidents", "Bicycle accidents", "Pedestrian accidents", "Public transport"],
        preventability: "High",
        rate: "~4 per 100,000",
      },
      {
        domain: "Healthcare-Related",
        causes: ["Medical errors", "Hospital-acquired infections", "Diagnostic delays", "Treatment complications"],
        preventability: "Medium-High",
        rate: "<50 per 100,000",
      },
      {
        domain: "Lifestyle-Related",
        causes: ["Smoking-related", "Alcohol-related", "Drug-related", "Obesity-related"],
        preventability: "High",
        rate: "Variable",
      },
      {
        domain: "Environmental",
        causes: ["Air pollution", "Occupational hazards", "Environmental toxins", "Climate-related"],
        preventability: "Medium",
        rate: "Variable",
      },
    ],
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TreePine className="h-6 w-6 text-primary" />
            Preventable Deaths Ontology
          </CardTitle>
          <CardDescription>
            Systematic classification framework for analyzing preventable mortality in the Netherlands
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Primary Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Primary Classification</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {ontologyStructure["Primary Categories"].map((category, index) => (
              <div key={index} className={`p-4 rounded-lg ${category.color}`}>
                <h4 className="font-semibold mb-3">{category.name}</h4>
                <div className="space-y-2">
                  {category.subcategories.map((sub, i) => (
                    <Badge key={i} variant="secondary" className="mr-2 mb-1">
                      {sub}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Demographic Dimensions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Demographic Dimensions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {ontologyStructure["Demographic Dimensions"].map((dimension, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  {dimension.icon}
                  {dimension.name}
                </h4>
                <div className="space-y-1">
                  {dimension.categories.map((cat, i) => (
                    <div key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {cat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cause-Specific Domains */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Cause-Specific Domains</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {ontologyStructure["Cause-Specific Domains"].map((domain, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold">{domain.domain}</h4>
                  <div className="flex gap-2">
                    <Badge variant={domain.preventability === "High" ? "default" : "secondary"}>
                      {domain.preventability} Preventability
                    </Badge>
                    <Badge variant="outline">{domain.rate}</Badge>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {domain.causes.map((cause, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {cause}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ontology Relationships */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Key Relationships</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Age-Domain Correlations</h4>
              <p className="text-sm text-muted-foreground">
                Traffic accidents peak in 15-44 age group; healthcare-related deaths increase with age (65+);
                lifestyle-related deaths span middle age (45-64)
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Gender-Specific Patterns</h4>
              <p className="text-sm text-muted-foreground">
                Males show higher rates in traffic accidents and occupational hazards; females show different patterns
                in healthcare-related preventable deaths
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Prevention Intervention Points</h4>
              <p className="text-sm text-muted-foreground">
                Primary prevention (lifestyle, environment), secondary prevention (screening, early detection), tertiary
                prevention (treatment optimization, care coordination)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
