import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DefinitionsSection } from "@/components/definitions-section"
import { OntologySection } from "@/components/ontology-section"
import { StatisticsSection } from "@/components/statistics-section"
import { DataAnalysisSection } from "@/components/data-analysis-section"
import { CircularDomainsAnalysis } from "@/components/circular-domains-analysis"
import { IndividualVsStateAnalysis } from "@/components/individual-vs-state-analysis"
import { ReviewSection } from "@/components/review-section"
import { CampaignSection } from "@/components/campaign-section"

export default function PreventableDeathsReview() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Preventable Deaths in the Netherlands
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive review and analysis of preventable mortality patterns, healthcare impacts, and prevention
            strategies in Dutch society
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">WHO Standards</Badge>
            <Badge variant="secondary">OECD Data</Badge>
            <Badge variant="secondary">CBS Statistics</Badge>
            <Badge variant="destructive">Ethical Analysis</Badge>
          </div>
        </div>

        <Tabs defaultValue="definitions" className="w-full">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="definitions">Definitions</TabsTrigger>
            <TabsTrigger value="ontology">Ontology</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
            <TabsTrigger value="domains">Domains</TabsTrigger>
            <TabsTrigger value="responsibility">Ethics</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
            <TabsTrigger value="campaign">Campaign</TabsTrigger>
          </TabsList>

          <TabsContent value="definitions" className="mt-6">
            <DefinitionsSection />
          </TabsContent>

          <TabsContent value="ontology" className="mt-6">
            <OntologySection />
          </TabsContent>

          <TabsContent value="statistics" className="mt-6">
            <StatisticsSection />
          </TabsContent>

          <TabsContent value="domains" className="mt-6">
            <CircularDomainsAnalysis />
          </TabsContent>

          <TabsContent value="responsibility" className="mt-6">
            <IndividualVsStateAnalysis />
          </TabsContent>

          <TabsContent value="analysis" className="mt-6">
            <DataAnalysisSection />
          </TabsContent>

          <TabsContent value="review" className="mt-6">
            <ReviewSection />
          </TabsContent>

          <TabsContent value="campaign" className="mt-6">
            <CampaignSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
