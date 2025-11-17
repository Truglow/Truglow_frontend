import { Suspense } from "react"
import ProcedurePageClient from "./ProcedurePageClient"

export default function ProcedurePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-700">
          Loading procedures...
        </div>
      }
    >
      <ProcedurePageClient />
    </Suspense>
  )
}
