"use client"

import { useState, useMemo, Suspense } from "react"
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

// Component that uses search params
function ProcedureContent() {
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

  // Helper function to generate service details
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
      {
        title: "Anti-Ageing Treatments",
        description: "Advanced treatments to reduce fine lines, wrinkles, and restore youthful skin",
        icon: "✨",
        details: createServiceDetails(
          ["HIFU (High-Intensity Focused Ultrasound)", "Radiofrequency Skin Tightening", "Botox Injections", "Dermal Fillers", "Chemical Peels", "Microneedling with PRP"],
          [
            "Dermatologist consultation to assess skin condition, laxity, and ageing concerns",
            "Digital skin analysis to map fine lines, wrinkles, and texture",
            "Medical history review including lifestyle factors and skincare routine",
            "Customized treatment plan based on your specific needs and goals"
          ],
          [
            "Cleansing and preparation of the treatment area",
            "Application of numbing cream if required for comfort",
            "Energy-based device treatment (HIFU/RF) targeting deep tissue layers",
            "Injectable treatments (Botox/Fillers) for targeted volume restoration",
            "Cooling and soothing application to minimize discomfort"
          ],
          [
            "Immediate post-care instructions for optimal results",
            "Avoid sun exposure and use SPF 50+ daily",
            "Follow-up appointment scheduled for assessment",
            "Maintenance sessions recommended every 6-12 months"
          ],
          "Most clients notice improved skin firmness and reduced fine lines within 2-4 weeks. Full results develop over 3-6 months as collagen production increases.",
          "Initial results visible in 2-4 weeks, optimal results at 3-6 months",
          [
            { name: "Priya M.", rating: 5, comment: "Amazing results! My skin looks 10 years younger. The HIFU treatment was painless and effective.", date: "2024-01-15" },
            { name: "Rajesh K.", rating: 5, comment: "Professional team and excellent anti-ageing results. Highly recommend!", date: "2024-02-20" }
          ],
          [
            { question: "What is the cost of anti-ageing treatment?", answer: "Cost varies based on the treatment modality chosen. HIFU sessions start from ₹15,000, while injectables are priced per area. Consultation includes a detailed cost breakdown." },
            { question: "How many sessions are required?", answer: "Most clients see optimal results with 1-3 sessions spaced 4-6 weeks apart. Maintenance sessions are recommended every 6-12 months." },
            { question: "Is it painful?", answer: "Most treatments are well-tolerated. HIFU may cause mild discomfort, while injectables involve minimal pain. Topical numbing is available for sensitive areas." },
            { question: "When will I see results?", answer: "Initial improvements appear in 2-4 weeks. Full results develop over 3-6 months as collagen remodelling occurs." }
          ]
        ),
      },
      {
        title: "Acne & Scar Treatment",
        description: "Comprehensive solutions for acne and scar reduction",
        icon: "🌟",
        details: createServiceDetails(
          ["Prescription Medications", "Chemical Peels", "LED Light Therapy", "Subcision", "Microneedling RF", "Fractional Laser Resurfacing"],
          [
            "Detailed skin analysis to identify active acne and scar types",
            "Medical history review including previous treatments",
            "Blood tests if hormonal acne is suspected",
            "Photography for progress tracking"
          ],
          [
            "Active acne control using prescription topicals and oral medications",
            "Chemical peels to exfoliate and unclog pores",
            "LED therapy sessions to reduce inflammation",
            "Scar revision using subcision, microneedling RF, or fractional lasers",
            "Cooling and barrier repair application"
          ],
          [
            "Gentle skincare routine with prescribed products",
            "Sun protection mandatory (SPF 50+)",
            "Avoid picking or touching treated areas",
            "Follow-up appointments every 4-6 weeks"
          ],
          "Active acne typically improves within 4-8 weeks. Scar reduction shows progressive improvement over 3-6 months with multiple sessions.",
          "Acne improvement: 4-8 weeks | Scar reduction: 3-6 months with multiple sessions",
          [
            { name: "Ananya S.", rating: 5, comment: "My acne scars have improved significantly after 4 sessions. The team is very professional!", date: "2024-01-10" },
            { name: "Vikram R.", rating: 4, comment: "Great treatment for active acne. My skin is much clearer now.", date: "2024-03-05" }
          ],
          [
            { question: "How long does acne treatment take?", answer: "Active acne typically improves in 4-8 weeks with consistent treatment. Severe cases may require 3-6 months." },
            { question: "Can scars be completely removed?", answer: "While complete removal isn't always possible, significant improvement (60-80%) is achievable with proper treatment protocols." },
            { question: "Are there side effects?", answer: "Mild redness, dryness, or peeling may occur initially. These are temporary and subside with proper aftercare." }
          ]
        ),
      },
      {
        title: "Pigmentation Correction",
        description: "Treatment for uneven skin tone and dark spots",
        icon: "🎭",
        details: createServiceDetails(
          ["Q-Switched Laser Toning", "Pico Laser", "Chemical Peels", "Topical Depigmenting Agents", "PRP/GFC"],
          [
            "Trichoscopy and skin analysis to identify pigmentation type (melasma, PIH, sun damage)",
            "Assessment of skin type and sensitivity",
            "Discussion of treatment expectations and timeline",
            "Pre-treatment photos for comparison"
          ],
          [
            "Cleansing and preparation of the treatment area",
            "Application of protective eyewear",
            "Laser toning or chemical peel application",
            "Cooling and soothing serums",
            "Post-treatment barrier repair"
          ],
          [
            "Strict sun protection (SPF 50+, reapplied every 2 hours)",
            "Avoidance of sun exposure for 48-72 hours",
            "Use of prescribed depigmenting creams",
            "Monthly follow-up sessions"
          ],
          "Gradual lightening visible after 2-3 sessions. Significant improvement typically seen after 4-6 sessions spaced monthly.",
          "Initial improvement: 2-3 sessions | Optimal results: 4-6 monthly sessions",
          [
            { name: "Meera P.", rating: 5, comment: "My melasma has lightened significantly. Very happy with the results!", date: "2024-02-14" },
            { name: "Arjun T.", rating: 5, comment: "Excellent pigmentation treatment. Professional and effective.", date: "2024-01-28" }
          ],
          [
            { question: "How many sessions are needed?", answer: "Typically 4-6 sessions at monthly intervals for optimal results. Maintenance may be required." },
            { question: "Is it safe for Indian skin?", answer: "Yes, our dermatologists customize fluence and settings specifically for Indian skin types to minimize risks." },
            { question: "Will pigmentation return?", answer: "With proper sun protection and maintenance, results are long-lasting. Some conditions like melasma may require ongoing care." }
          ]
        ),
      },
      // Add more skin services with similar structure...
      {
        title: "Skin Rejuvenation",
        description: "Revitalizing treatments for brighter, more radiant skin",
        icon: "💫",
        details: createServiceDetails(
          ["Hydrafacial", "Chemical Peels", "PRP/GFC", "Vitamin C Infusion", "LED Therapy"],
          ["Skin analysis", "Consultation", "Treatment plan"],
          ["Cleansing", "Treatment application", "Mask application"],
          ["Moisturizing", "Sun protection", "Follow-up"],
          "Immediate glow and improved texture. Long-term benefits with regular sessions.",
          "Immediate glow | Long-term benefits with monthly sessions",
          [{ name: "Client A", rating: 5, comment: "Great results!", date: "2024-01-01" }],
          [{ question: "How often?", answer: "Monthly for best results." }]
        ),
      },
      {
        title: "Laser Scar Reduction",
        description: "Advanced laser treatments for scar reduction",
        icon: "⚡",
        details: createServiceDetails(
          ["Fractional CO2 Laser", "Erbium Laser", "Subcision", "Microneedling RF"],
          ["Scar assessment", "Skin type evaluation", "Treatment planning"],
          ["Laser treatment", "Cooling", "Barrier application"],
          ["Wound care", "Sun protection", "Follow-up"],
          "Progressive improvement over 3-6 months with multiple sessions.",
          "3-6 months with 4-6 sessions",
          [{ name: "Client B", rating: 5, comment: "Scars improved significantly!", date: "2024-01-01" }],
          [{ question: "Painful?", answer: "Minimal discomfort with numbing." }]
        ),
      },
      {
        title: "Skin Lifting & Tightening",
        description: "Non-surgical skin tightening and lifting treatments",
        icon: "🎯",
        details: createServiceDetails(
          ["HIFU", "Radiofrequency", "Thread Lifts"],
          ["Skin laxity assessment", "Consultation"],
          ["Energy treatment", "Cooling"],
          ["Gentle care", "Follow-up"],
          "Gradual improvement over 3-6 months.",
          "3-6 months",
          [{ name: "Client C", rating: 5, comment: "Skin feels tighter!", date: "2024-01-01" }],
          [{ question: "Downtime?", answer: "Minimal to none." }]
        ),
      },
      {
        title: "Hyperpigmentation Solutions",
        description: "Specialized treatments for hyperpigmentation issues",
        icon: "🌈",
        details: createServiceDetails(
          ["Chemical Peels", "Laser Toning", "Topical Agents"],
          ["Pigmentation analysis", "Consultation"],
          ["Treatment application", "Cooling"],
          ["Sun protection", "Topical care"],
          "Gradual lightening over 4-6 sessions.",
          "4-6 monthly sessions",
          [{ name: "Client D", rating: 5, comment: "Pigmentation reduced!", date: "2024-01-01" }],
          [{ question: "Safe?", answer: "Yes, customized for your skin." }]
        ),
      },
      {
        title: "Dull Skin Revitalisation",
        description: "Treatments to restore glow and vitality to dull skin",
        icon: "💎",
        details: createServiceDetails(
          ["Medifacials", "Vitamin C Infusion", "Chemical Peels"],
          ["Skin analysis", "Consultation"],
          ["Facial treatment", "Mask"],
          ["Moisturizing", "Protection"],
          "Immediate radiance boost.",
          "Immediate with monthly maintenance",
          [{ name: "Client E", rating: 5, comment: "Skin looks glowing!", date: "2024-01-01" }],
          [{ question: "Frequency?", answer: "Monthly recommended." }]
        ),
      },
      {
        title: "Laser Tanning Removal",
        description: "Effective laser treatments to remove tan and even out skin tone",
        icon: "☀️",
        details: createServiceDetails(
          ["Q-Switched Laser", "Pico Laser"],
          ["Tan assessment", "Consultation"],
          ["Laser treatment", "Cooling"],
          ["Sun protection", "Moisturizing"],
          "Tan reduction visible after 2-3 sessions.",
          "2-3 sessions",
          [{ name: "Client F", rating: 5, comment: "Tan removed effectively!", date: "2024-01-01" }],
          [{ question: "Sessions needed?", answer: "2-3 sessions typically." }]
        ),
      },
      {
        title: "Hydrafacial",
        description: "Deep cleansing and hydrating facial treatment",
        icon: "💧",
        details: createServiceDetails(
          ["Hydrafacial MD"],
          ["Skin analysis", "Consultation"],
          ["Vortex extraction", "Serum infusion"],
          ["Moisturizing", "Protection"],
          "Immediate glow and hydration.",
          "Immediate, monthly for maintenance",
          [{ name: "Client G", rating: 5, comment: "Best facial ever!", date: "2024-01-01" }],
          [{ question: "Downtime?", answer: "Zero downtime." }]
        ),
      },
      {
        title: "Vampire Facial",
        description: "PRP-based facial for skin rejuvenation",
        icon: "🧛",
        details: createServiceDetails(
          ["PRP Microneedling"],
          ["Blood draw", "PRP preparation"],
          ["Microneedling", "PRP application"],
          ["Gentle care", "Sun protection"],
          "Improvement over 3-4 weeks.",
          "3-4 weeks, 3-4 sessions",
          [{ name: "Client H", rating: 5, comment: "Skin feels firmer!", date: "2024-01-01" }],
          [{ question: "Painful?", answer: "Minimal with numbing." }]
        ),
      },
      {
        title: "Korean Facial",
        description: "Multi-step Korean skincare facial treatment",
        icon: "🇰🇷",
        details: createServiceDetails(
          ["K-Beauty Protocol"],
          ["Skin analysis", "Consultation"],
          ["Multi-step treatment", "Mask"],
          ["Moisturizing", "Protection"],
          "Immediate glass-skin effect.",
          "Immediate",
          [{ name: "Client I", rating: 5, comment: "Love the K-beauty glow!", date: "2024-01-01" }],
          [{ question: "Suitable for?", answer: "All skin types." }]
        ),
      },
      {
        title: "Medifacial",
        description: "Medical-grade facial with active ingredients",
        icon: "💉",
        details: createServiceDetails(
          ["Clinical Facials"],
          ["Skin analysis", "Consultation"],
          ["Active treatment", "Mask"],
          ["Prescribed care", "Follow-up"],
          "Targeted improvement for specific concerns.",
          "Immediate with progressive results",
          [{ name: "Client J", rating: 5, comment: "Effective medifacial!", date: "2024-01-01" }],
          [{ question: "Customized?", answer: "Yes, based on your needs." }]
        ),
      },
    ],
    hair: [
      {
        title: "Hair Loss Treatment",
        description: "Comprehensive solutions for hair loss and thinning",
        icon: "💪",
        details: createServiceDetails(
          ["PRP Therapy", "Minoxidil", "Finasteride", "LLLT", "Nutraceuticals", "Topical Solutions"],
          [
            "Detailed consultation with trichologist to understand hair loss pattern",
            "Trichoscopy using specialized tool to assess scalp condition and hair quality",
            "Medical investigation including blood tests for nutritional deficiencies and hormonal changes",
            "Assessment of family history and lifestyle factors"
          ],
          [
            "Collection of blood sample for PRP preparation (if PRP is part of treatment)",
            "Separation and activation of platelets from blood",
            "Application of topical medications or PRP injections to affected areas",
            "Low-level laser therapy session if included in treatment plan",
            "Post-treatment instructions and care guidelines"
          ],
          [
            "Gentle hair care routine with prescribed shampoos and serums",
            "Nutritional supplements as recommended",
            "Follow-up appointments every 4-6 weeks to monitor progress",
            "Lifestyle modifications including stress management and balanced diet"
          ],
          "Most clients notice a decrease in hair fall after 2-3 months. Increased density and new hair growth typically visible after 4-6 months of consistent treatment.",
          "Hair fall reduction: 2-3 months | New growth: 4-6 months | Optimal results: 8-12 months",
          [
            { name: "Rahul S.", rating: 5, comment: "My hair fall has reduced significantly. The PRP treatment worked wonders!", date: "2024-01-20" },
            { name: "Kavya M.", rating: 5, comment: "Professional team and effective treatment. My hair density has improved!", date: "2024-02-15" },
            { name: "Amit K.", rating: 4, comment: "Good results after 6 months. Patience is key with hair treatments.", date: "2024-03-10" }
          ],
          [
            { question: "What is the cost of hair loss treatment?", answer: "Cost depends on the type and severity of hair loss. After evaluation, your doctor decides the treatment modality. PRP sessions start from ₹5,000. Contact us for personalized pricing." },
            { question: "How many sessions are required?", answer: "Doctors recommend 6-8 sessions at monthly intervals for optimal results. Maintenance sessions may be advised every 3-6 months." },
            { question: "What is the average duration of each session?", answer: "Hair loss treatment is a quick procedure with zero downtime. Each session typically lasts less than an hour." },
            { question: "Are there any side effects?", answer: "No significant side effects. Hair loss treatment is 100% safe. Some clients may experience transient discomfort or heaviness, which is manageable." },
            { question: "Is it painful?", answer: "It's a non-surgical treatment with no cuts, blood loss, or pain. Minimal discomfort may be experienced, which is bearable." },
            { question: "How soon can I see results?", answer: "Most clients see decreased hair fall after 2-3 months. Increased density and new growth typically appear after completing 4-6 sessions." },
            { question: "Can I use home remedies along with treatment?", answer: "It's advisable to consult your dermatologist before using any home remedies to ensure they don't interfere with the treatment." }
          ]
        ),
      },
      {
        title: "PRP Therapy for Hair Growth",
        description: "Platelet-rich plasma therapy to stimulate natural hair growth",
        icon: "💉",
        details: createServiceDetails(
          ["PRP Injections", "Microneedling with PRP"],
          [
            "Blood sample collection (typically 20-30ml)",
            "Centrifugation to separate platelet-rich plasma",
            "Activation of PRP for optimal growth factor release"
          ],
          [
            "Collection of blood sample",
            "Separation of platelets using centrifuge",
            "Extraction and activation of PRP from blood",
            "Insertion of PRP into affected scalp areas with microinjections",
            "Cooling and soothing application"
          ],
          [
            "Avoid washing hair for 24 hours",
            "Gentle hair care routine",
            "Follow-up session scheduled in 4-6 weeks",
            "Post-care instructions for sustainable results"
          ],
          "Clients typically notice reduced hair fall after 2-3 sessions. New hair growth and increased density visible after 4-6 sessions. Results continue to improve over 8-12 months.",
          "Initial results: 2-3 sessions | Optimal results: 6-8 sessions at monthly intervals",
          [
            { name: "Shiva K.", rating: 5, comment: "PRP therapy has been amazing! My hair is thicker and stronger now.", date: "2024-01-25" },
            { name: "Priya N.", rating: 5, comment: "Excellent PRP treatment. Worth every session!", date: "2024-02-18" }
          ],
          [
            { question: "How many PRP sessions are needed?", answer: "Doctors recommend 6-8 sessions at monthly intervals for optimal hair regrowth results." },
            { question: "Is PRP painful?", answer: "Minimal discomfort during injections. Topical numbing can be applied for sensitive scalps." },
            { question: "When will I see PRP results?", answer: "Most clients see decreased hair fall after 2-3 sessions. New growth typically appears after 4-6 sessions." }
          ]
        ),
      },
      {
        title: "Hair Regrowth & Transplantation",
        description: "Comprehensive hair regrowth and transplant solutions",
        icon: "🌱",
        details: createServiceDetails(
          ["FUE Hair Transplant", "DHI Hair Transplant", "Sapphire FUE", "PRP Boosters"],
          [
            "Trichoscopy and detailed scalp analysis",
            "Blood tests to assess donor area quality",
            "Hairline design consultation",
            "Graft count estimation and treatment planning"
          ],
          [
            "Local anesthesia administration",
            "Follicular unit extraction from donor area",
            "Graft preparation and sorting",
            "Recipient site creation and implantation",
            "PRP application to enhance graft survival"
          ],
          [
            "Post-operative care instructions",
            "Medications for pain and infection prevention",
            "First wash after 48 hours",
            "Follow-up appointments at 7 days, 1 month, 3 months, 6 months, and 1 year"
          ],
          "Transplanted hair sheds in 2-3 weeks (shock loss). New growth begins at 3-4 months. Full results visible at 8-12 months with natural-looking density.",
          "Shock loss: 2-3 weeks | New growth: 3-4 months | Full results: 8-12 months",
          [
            { name: "Vikram R.", rating: 5, comment: "Best decision! My hair transplant looks completely natural. Excellent work!", date: "2024-01-12" },
            { name: "Anjali P.", rating: 5, comment: "Professional team and amazing results. Highly recommend!", date: "2024-02-22" }
          ],
          [
            { question: "What is the cost of hair transplant?", answer: "Cost depends on the number of grafts required, typically ₹40-80 per graft. FUE and DHI techniques may vary in pricing." },
            { question: "Is hair transplant permanent?", answer: "Yes, transplanted hair is permanent as it's taken from the permanent donor zone. However, existing hair may continue to thin." },
            { question: "What is the recovery time?", answer: "Most clients return to work in 3-5 days. Strenuous activities should be avoided for 2 weeks." }
          ]
        ),
      },
      // Add remaining hair services...
      {
        title: "Exosome Therapy",
        description: "Advanced exosome therapy for hair restoration",
        icon: "🔬",
        details: createServiceDetails(
          ["Exosome Injections"],
          ["Consultation", "Scalp analysis"],
          ["Exosome preparation", "Injection"],
          ["Gentle care", "Follow-up"],
          "Enhanced hair growth with cutting-edge technology.",
          "3-4 months",
          [{ name: "Client K", rating: 5, comment: "Advanced treatment works!", date: "2024-01-01" }],
          [{ question: "How it works?", answer: "Exosomes deliver growth signals to follicles." }]
        ),
      },
      {
        title: "Anti-Dandruff Treatments",
        description: "Effective solutions for dandruff and scalp conditions",
        icon: "❄️",
        details: createServiceDetails(
          ["Medicated Shampoos", "Scalp Peels", "Antifungal Treatments"],
          ["Scalp examination", "Consultation"],
          ["Treatment application", "Massage"],
          ["Prescribed care", "Follow-up"],
          "Dandruff control within 2-4 weeks.",
          "2-4 weeks",
          [{ name: "Client L", rating: 5, comment: "Dandruff gone!", date: "2024-01-01" }],
          [{ question: "Permanent?", answer: "Requires maintenance." }]
        ),
      },
      {
        title: "Alopecia & Psoriasis Care",
        description: "Specialized care for alopecia and psoriasis conditions",
        icon: "🏥",
        details: createServiceDetails(
          ["Immunomodulators", "Phototherapy", "Topical Treatments"],
          ["Diagnosis", "Consultation"],
          ["Treatment application", "Monitoring"],
          ["Medication", "Follow-up"],
          "Condition management and hair regrowth support.",
          "3-6 months",
          [{ name: "Client M", rating: 5, comment: "Condition managed well!", date: "2024-01-01" }],
          [{ question: "Curable?", answer: "Manageable with treatment." }]
        ),
      },
      {
        title: "Hair Patch Integration",
        description: "Custom hair patch solutions for natural-looking coverage",
        icon: "🎭",
        details: createServiceDetails(
          ["Custom Hair Systems"],
          ["Consultation", "Color matching"],
          ["Patch fitting", "Integration"],
          ["Maintenance training", "Follow-up"],
          "Immediate natural-looking coverage.",
          "Immediate",
          [{ name: "Client N", rating: 5, comment: "Looks completely natural!", date: "2024-01-01" }],
          [{ question: "Maintenance?", answer: "Regular maintenance required." }]
        ),
      },
      {
        title: "Advanced Laser Hair Reduction",
        description: "Permanent hair reduction using advanced laser technology",
        icon: "⚡",
        details: createServiceDetails(
          ["Diode Laser", "Nd:YAG Laser"],
          ["Patch test", "Consultation"],
          ["Laser treatment", "Cooling"],
          ["Sun protection", "Follow-up"],
          "Progressive hair reduction over 6-8 sessions.",
          "6-8 sessions, 4-6 weeks apart",
          [{ name: "Client O", rating: 5, comment: "Hair reduction works great!", date: "2024-01-01" }],
          [{ question: "Permanent?", answer: "Long-lasting reduction." }]
        ),
      },
      {
        title: "Low Level Laser Therapy (LLLT)",
        description: "Non-invasive laser therapy for hair growth stimulation",
        icon: "🔴",
        details: createServiceDetails(
          ["LLLT Caps", "In-Clinic LLLT"],
          ["Consultation", "Scalp analysis"],
          ["LLLT session", "Monitoring"],
          ["Home care", "Follow-up"],
          "Hair growth stimulation over 3-6 months.",
          "3-6 months with regular sessions",
          [{ name: "Client P", rating: 5, comment: "LLLT helped my hair!", date: "2024-01-01" }],
          [{ question: "Frequency?", answer: "2-3 times per week." }]
        ),
      },
    ],
    laser: [
      {
        title: "Full Body Laser Hair Removal",
        description: "Complete body laser hair removal treatment",
        icon: "⚡",
        details: createServiceDetails(
          ["Diode Laser", "Nd:YAG Laser", "Alexandrite Laser"],
          [
            "Consultation to assess skin and hair type",
            "Patch test to determine appropriate settings",
            "Pre-treatment instructions (shaving, avoiding sun exposure)",
            "Photography for progress tracking"
          ],
          [
            "Shaving of treatment area (if needed)",
            "Application of cooling gel",
            "Laser treatment with appropriate wavelength for your skin type",
            "Cooling and soothing application",
            "Post-treatment care instructions"
          ],
          [
            "Avoid sun exposure and use SPF 50+",
            "No waxing or plucking between sessions",
            "Gentle exfoliation after 48 hours",
            "Follow-up sessions every 4-6 weeks"
          ],
          "Hair reduction becomes noticeable after 2-3 sessions. Significant reduction (70-90%) typically achieved after 6-8 sessions. Maintenance sessions may be needed annually.",
          "Noticeable reduction: 2-3 sessions | Significant results: 6-8 sessions | Maintenance: Annual",
          [
            { name: "Sneha T.", rating: 5, comment: "Best investment! Smooth skin with minimal sessions. Highly professional team!", date: "2024-01-18" },
            { name: "Rohit M.", rating: 5, comment: "Excellent laser hair removal. Worth every session!", date: "2024-02-25" }
          ],
          [
            { question: "How many sessions are needed?", answer: "Typically 6-8 sessions spaced 4-6 weeks apart for optimal results. Maintenance sessions may be required annually." },
            { question: "Is it painful?", answer: "Most clients describe it as a mild rubber band snap. Cooling technology minimizes discomfort." },
            { question: "Is it permanent?", answer: "Laser hair removal provides long-lasting reduction (70-90%). Some fine hair may regrow, requiring occasional maintenance." },
            { question: "Suitable for all skin types?", answer: "Yes, we use different laser wavelengths (Diode, Nd:YAG, Alexandrite) suitable for all Indian skin types." }
          ]
        ),
      },
      {
        title: "Face, Underarms & Bikini Laser",
        description: "Targeted laser hair removal for face, underarms, and bikini area",
        icon: "✨",
        details: createServiceDetails(
          ["Precision Laser Treatment"],
          [
            "Detailed consultation for sensitive areas",
            "Patch test on small area",
            "Pre-treatment preparation guidelines"
          ],
          [
            "Precise laser targeting with specialized tips",
            "Lower fluence settings for sensitive zones",
            "Enhanced cooling for comfort",
            "Soothing application"
          ],
          [
            "Extra gentle care for sensitive areas",
            "Avoid tight clothing",
            "Use recommended soothing products",
            "Regular follow-up sessions"
          ],
          "Effective hair reduction in sensitive areas with customized settings. Results visible after 4-6 sessions.",
          "4-6 sessions for optimal results",
          [
            { name: "Divya K.", rating: 5, comment: "Perfect for sensitive areas. Very comfortable treatment!", date: "2024-01-30" },
            { name: "Neha R.", rating: 5, comment: "Great results on face and underarms. Professional service!", date: "2024-02-12" }
          ],
          [
            { question: "Safe for facial hair?", answer: "Yes, with appropriate settings and experienced technicians. We use specialized protocols for facial areas." },
            { question: "Downtime?", answer: "Minimal to none. You can resume normal activities immediately." }
          ]
        ),
      },
    ],
    plastic: [
      {
        title: "Botox & Fillers",
        description: "Natural-looking facial enhancement and volume restoration",
        icon: "💉",
        details: createServiceDetails(
          ["Botox Injections", "Dermal Fillers", "Lip Fillers", "Cheek Fillers"],
          [
            "Facial analysis and consultation",
            "Discussion of desired outcomes",
            "Assessment of facial anatomy",
            "Treatment plan customization"
          ],
          [
            "Cleansing and marking of injection sites",
            "Topical numbing if required",
            "Precise injection technique",
            "Massage and assessment",
            "Post-treatment instructions"
          ],
          [
            "Avoid touching treated areas for 4-6 hours",
            "No lying down for 4 hours",
            "Avoid strenuous exercise for 24 hours",
            "Follow-up appointment in 2 weeks"
          ],
          "Botox results appear in 3-7 days, full effect at 2 weeks, lasting 3-4 months. Fillers provide immediate results, lasting 9-18 months depending on type.",
          "Botox: 3-7 days | Fillers: Immediate | Duration: 3-18 months",
          [
            { name: "Pooja S.", rating: 5, comment: "Natural-looking results! The team is very skilled with injectables.", date: "2024-01-22" },
            { name: "Aditya N.", rating: 5, comment: "Excellent Botox and filler work. Very satisfied!", date: "2024-02-28" }
          ],
          [
            { question: "How long do results last?", answer: "Botox lasts 3-4 months. Fillers last 9-18 months depending on the product used and area treated." },
            { question: "Is it painful?", answer: "Minimal discomfort. Topical numbing and fine needles make the procedure comfortable." },
            { question: "Are there side effects?", answer: "Mild bruising or swelling may occur, which typically resolves in 2-3 days." }
          ]
        ),
      },
      {
        title: "Hair Transplant (FUE / DHI / Sapphire)",
        description: "Advanced hair transplant techniques for natural-looking results",
        icon: "🌱",
        details: createServiceDetails(
          ["FUE Technique", "DHI Technique", "Sapphire FUE"],
          [
            "Comprehensive consultation and scalp analysis",
            "Hairline design",
            "Graft count estimation",
            "Technique selection based on requirements"
          ],
          [
            "Local anesthesia",
            "Graft extraction",
            "Graft preparation",
            "Recipient site creation",
            "Graft implantation",
            "PRP application"
          ],
          [
            "Post-operative medications",
            "First wash after 48 hours",
            "Avoid strenuous activities",
            "Regular follow-ups"
          ],
          "Transplanted hair sheds in 2-3 weeks. New growth begins at 3-4 months. Full natural-looking results at 8-12 months.",
          "Shock loss: 2-3 weeks | Growth: 3-4 months | Full results: 8-12 months",
          [
            { name: "Raj K.", rating: 5, comment: "Amazing FUE transplant! Looks completely natural.", date: "2024-01-15" },
            { name: "Suresh M.", rating: 5, comment: "Best decision! DHI technique worked perfectly for me.", date: "2024-02-20" }
          ],
          [
            { question: "Which technique is best?", answer: "FUE, DHI, and Sapphire FUE each have advantages. Your surgeon will recommend based on your specific needs." },
            { question: "Is it permanent?", answer: "Yes, transplanted hair is permanent as it comes from the permanent donor zone." }
          ]
        ),
      },
      // Add remaining plastic surgery services...
      {
        title: "Eyebrow & Beard Transplant",
        description: "Specialized transplant procedures for eyebrows and beard",
        icon: "👨",
        details: createServiceDetails(
          ["FUE for Facial Hair"],
          ["Design consultation", "Graft planning"],
          ["Extraction", "Implantation"],
          ["Gentle care", "Follow-up"],
          "Natural-looking facial hair restoration.",
          "3-4 months for growth",
          [{ name: "Client Q", rating: 5, comment: "Perfect eyebrows!", date: "2024-01-01" }],
          [{ question: "Natural?", answer: "Yes, matches natural growth." }]
        ),
      },
      {
        title: "Rhinoplasty (Nose Surgery)",
        description: "Cosmetic and functional nose reshaping surgery",
        icon: "👃",
        details: createServiceDetails(
          ["Open Rhinoplasty", "Closed Rhinoplasty"],
          ["Consultation", "3D simulation", "Pre-op tests"],
          ["Surgery", "Splinting"],
          ["Recovery care", "Follow-up"],
          "Final results visible after 6-12 months as swelling subsides.",
          "6-12 months for final results",
          [{ name: "Client R", rating: 5, comment: "Perfect nose shape!", date: "2024-01-01" }],
          [{ question: "Recovery?", answer: "1-2 weeks initial recovery." }]
        ),
      },
      {
        title: "Lip Augmentation",
        description: "Natural-looking lip enhancement and volume restoration",
        icon: "💋",
        details: createServiceDetails(
          ["Hyaluronic Fillers"],
          ["Consultation", "Design"],
          ["Injection", "Assessment"],
          ["Gentle care", "Follow-up"],
          "Immediate results, lasting 9-12 months.",
          "Immediate, 9-12 months duration",
          [{ name: "Client S", rating: 5, comment: "Perfect lips!", date: "2024-01-01" }],
          [{ question: "Natural?", answer: "Yes, natural-looking enhancement." }]
        ),
      },
      {
        title: "Brazilian Butt Lift",
        description: "Body contouring procedure for enhanced curves",
        icon: "🍑",
        details: createServiceDetails(
          ["Fat Transfer"],
          ["Consultation", "Body analysis"],
          ["Liposuction", "Fat transfer"],
          ["Compression", "Recovery"],
          "Final results at 3-6 months.",
          "3-6 months",
          [{ name: "Client T", rating: 5, comment: "Amazing results!", date: "2024-01-01" }],
          [{ question: "Recovery?", answer: "2-3 weeks initial recovery." }]
        ),
      },
      {
        title: "Cosmetic Gynecology",
        description: "Specialized cosmetic procedures in gynecology",
        icon: "🌸",
        details: createServiceDetails(
          ["Vaginal Rejuvenation", "Labiaplasty"],
          ["Private consultation", "Assessment"],
          ["Procedure", "Recovery"],
          ["Post-care", "Follow-up"],
          "Improved comfort and aesthetics.",
          "4-6 weeks recovery",
          [{ name: "Client U", rating: 5, comment: "Professional and discreet!", date: "2024-01-01" }],
          [{ question: "Private?", answer: "Complete privacy maintained." }]
        ),
      },
      {
        title: "Scar Revision & Management",
        description: "Advanced techniques for scar reduction and management",
        icon: "🔧",
        details: createServiceDetails(
          ["Surgical Revision", "Laser Treatment", "Fillers"],
          ["Scar assessment", "Consultation"],
          ["Treatment", "Application"],
          ["Wound care", "Follow-up"],
          "Progressive improvement over 6-12 months.",
          "6-12 months",
          [{ name: "Client V", rating: 5, comment: "Scars much improved!", date: "2024-01-01" }],
          [{ question: "Complete removal?", answer: "Significant improvement possible." }]
        ),
      },
      {
        title: "Breast Surgery",
        description: "Comprehensive breast enhancement and reconstruction procedures",
        icon: "💎",
        details: createServiceDetails(
          ["Augmentation", "Reduction", "Lift"],
          ["Consultation", "Implant selection", "Planning"],
          ["Surgery", "Recovery"],
          ["Post-op care", "Follow-up"],
          "Final results at 3-6 months.",
          "3-6 months",
          [{ name: "Client W", rating: 5, comment: "Perfect results!", date: "2024-01-01" }],
          [{ question: "Recovery?", answer: "2-4 weeks initial recovery." }]
        ),
      },
      {
        title: "Gynecomastia Correction",
        description: "Male breast reduction surgery",
        icon: "👔",
        details: createServiceDetails(
          ["Liposuction", "Gland Excision"],
          ["Consultation", "Assessment"],
          ["Surgery", "Recovery"],
          ["Compression", "Follow-up"],
          "Flatter, contoured chest.",
          "2-3 weeks recovery",
          [{ name: "Client X", rating: 5, comment: "Confidence restored!", date: "2024-01-01" }],
          [{ question: "Permanent?", answer: "Yes, with healthy lifestyle." }]
        ),
      },
    ],
  }

  const [openService, setOpenService] = useState<Service | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-amber-900 text-white">
        <div className="absolute inset-0 bg-[url('/procedure-hero-bg.png')] bg-cover bg-center opacity-30"></div>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-amber-900/20 to-amber-900/30"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">Our Procedure</h1>
          <p className="text-xl md:text-2xl text-amber-50 max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Experience our streamlined process designed for your comfort and satisfaction
          </p>
        </div>
      </div>

      {/* Procedure Steps */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-14 h-14 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6 mt-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>

                {/* Check Icon */}
                <div className="mt-6 text-amber-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-600 italic">
              Each step is carefully designed to ensure your comfort and satisfaction throughout the treatment process
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <Tabs defaultValue={defaultTab} className="max-w-6xl mx-auto">
            <TabsList className="bg-white shadow-md p-1 grid w-full grid-cols-2 sm:grid-cols-4 mb-8 gap-1 h-auto">
              <TabsTrigger value="skin" className="text-xs sm:text-sm md:text-base lg:text-lg px-2 py-2 sm:px-3 md:px-4 whitespace-normal sm:whitespace-nowrap data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">✨ Skin</TabsTrigger>
              <TabsTrigger value="hair" className="text-xs sm:text-sm md:text-base lg:text-lg px-2 py-2 sm:px-3 md:px-4 whitespace-normal sm:whitespace-nowrap data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">💇 Hair</TabsTrigger>
              <TabsTrigger value="plastic" className="text-xs sm:text-sm md:text-base lg:text-lg px-2 py-2 sm:px-3 md:px-4 whitespace-normal sm:whitespace-nowrap data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">🏥 Plastic Surgery</TabsTrigger>
              <TabsTrigger value="laser" className="text-xs sm:text-sm md:text-base lg:text-lg px-2 py-2 sm:px-3 md:px-4 whitespace-normal sm:whitespace-nowrap data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">⚡ Laser</TabsTrigger>
            </TabsList>

            <TabsContent value="skin">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.skin.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenService(service)}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-left"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hair">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.hair.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenService(service)}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-left"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="plastic">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.plastic.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenService(service)}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-left"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="laser">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.laser.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenService(service)}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-left"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Service Detail Modal */}
      <Dialog open={Boolean(openService)} onOpenChange={(open) => !open && setOpenService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {openService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold flex items-center gap-2">
                  <span className="text-4xl">{openService.icon}</span>
                  {openService.title}
                </DialogTitle>
                <DialogDescription className="text-lg text-gray-600 mt-2">
                  {openService.description}
                </DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="treatments" className="mt-6">
                <TabsList className="bg-white shadow-md p-1 grid w-full grid-cols-3 sm:grid-cols-5 gap-1 h-auto">
                  <TabsTrigger value="treatments" className="text-xs sm:text-sm px-2 py-2 whitespace-nowrap data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">Treatments</TabsTrigger>
                  <TabsTrigger value="procedure" className="text-xs sm:text-sm px-2 py-2 whitespace-nowrap data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">Procedure</TabsTrigger>
                  <TabsTrigger value="results" className="text-xs sm:text-sm px-2 py-2 whitespace-nowrap data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">Results</TabsTrigger>
                  <TabsTrigger value="reviews" className="text-xs sm:text-sm px-2 py-2 whitespace-nowrap col-span-3 sm:col-span-1 data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">Reviews</TabsTrigger>
                  <TabsTrigger value="faqs" className="text-xs sm:text-sm px-2 py-2 whitespace-nowrap col-span-3 sm:col-span-1 data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">FAQs</TabsTrigger>
                </TabsList>

                <TabsContent value="treatments" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Available Treatments</h3>
                  <ul className="space-y-2">
                    {openService.details.treatments.map((treatment, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="procedure" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Treatment Process</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-amber-700 mb-3">Before the Procedure</h4>
                      <ul className="space-y-2">
                        {openService.details.procedure.before.map((step, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-amber-700 mb-3">During the Procedure</h4>
                      <ul className="space-y-2">
                        {openService.details.procedure.during.map((step, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-amber-700 mb-3">After the Procedure</h4>
                      <ul className="space-y-2">
                        {openService.details.procedure.after.map((step, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="results" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Expected Results</h3>
                  <div className="bg-amber-50 rounded-lg p-6 space-y-4">
                    <p className="text-gray-700 leading-relaxed">{openService.details.results.description}</p>
                    <div className="border-t border-amber-200 pt-4">
                      <p className="text-sm font-semibold text-amber-900">Timeline:</p>
                      <p className="text-gray-700 mt-1">{openService.details.results.timeline}</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Client Reviews</h3>
                  <div className="space-y-4">
                    {openService.details.reviews.map((review, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900">{review.name}</span>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-gray-300"
                                    }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="faqs" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {openService.details.faqs.map((faq, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger className="text-left font-semibold text-gray-900">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 pt-2">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Main page component with Suspense boundary
export default function ProcedurePage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen">
        <div className="relative bg-amber-900 text-white">
          <div className="absolute inset-0 bg-[url('/procedure-hero-bg.png')] bg-cover bg-center opacity-30"></div>
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-amber-900/20 to-amber-900/30"></div>
          <div className="container mx-auto px-4 py-20 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">Our Procedure</h1>
            <p className="text-xl md:text-2xl text-amber-50 max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Loading...
            </p>
          </div>
        </div>
      </div>
    }>
      <ProcedureContent />
    </Suspense>
  )
} 
