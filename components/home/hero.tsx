import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative bg-amber-900 text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Advanced Hair Transplant & Restoration Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-50">
            Regain your confidence with our cutting-edge hair restoration techniques performed by expert specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
              <Link href="/contact">Book Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline"
              className="border-[3px] border-[hsl(30,40%,26%)] bg-transparent text-[hsl(30,40%,26%)] rounded-full shadow-md px-8 py-3 font-bold tracking-widest uppercase transition-all duration-200 ease-in-out hover:bg-[hsl(42,40%,92%)] hover:text-[hsl(30,40%,26%)] hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[hsl(30,40%,26%)] focus:ring-offset-2">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
