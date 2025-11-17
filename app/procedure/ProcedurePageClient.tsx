"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle2, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type ServiceDetails = {
  treatments: string[]
  procedure: {
    before: string[]
    during: string[]
    after: string[]
  }
  results: {
    description: string
    timeline: string
  }
  reviews: {
    name: string
    rating: number
    comment: string
    date: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

type Service = {
  title: string
  description: string
  icon: string
  details: ServiceDetails
}

type ServicesByCategory = {
  skin: Service[]
  hair: Service[]
  plastic: Service[]
  laser: Service[]
}

export default function ProcedurePageClient() {
  const params = useSearchParams()
  const defaultTab = useMemo(() => {
    const tabParam = params?.get("tab")
    const allowed = ["skin", "hair", "plastic", "laser"] as const
    return allowed.includes(tabParam as any) ? (tabParam as (typeof allowed)[number]) : "skin"
  }, [params])

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Meet with our experts to discuss your concerns and goals",
      icon: "👋",
    },
    {
      number: "02",
      title: "Treatment Plan",
      description: "Personalized treatment plan tailored to your needs",
      icon: "📋",
    },
    {
      number: "03",
      title: "Procedure",
      description: "Expert execution of your chosen treatment",
      icon: "✨",
    },
    {
      number: "04",
      title: "Aftercare",
      description: "Comprehensive post-treatment care and support",
      icon: "💆",
    },
  ]

  const createServiceDetails = (
    treatments: string[],
    before: string[],
    during: string[],
    after: string[],
    resultsDesc: string,
    timeline: string,
    reviews: ServiceDetails["reviews"],
    faqs: ServiceDetails["faqs"]
  ): ServiceDetails => ({
    treatments,
    procedure: { before, during, after },
    results: { description: resultsDesc, timeline },
    reviews,
    faqs,
  })

  const services: ServicesByCategory = {
    skin: [
      // skin services will be filled by importing or refactoring if needed
    ],
    hair: [],
    plastic: [],
    laser: [],
  }

  const [openService, setOpenService] = useState<Service | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      {/* TODO: move the full JSX from page.tsx into this client component */}
    </div>
  )
}


