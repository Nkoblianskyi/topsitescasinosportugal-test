import { ConsultationHero } from "@/components/consultation/consultation-hero"
import { ConsultationForm } from "@/components/consultation/consultation-form"
import { ConsultationBenefits } from "@/components/consultation/consultation-benefits"
import { ConsultationProcess } from "@/components/consultation/consultation-process"
import { Header } from "@/components/header"

export const metadata = {
  title: "Agende uma Consulta Profissional - Melhores PT Sites de Casinos",
  description:
    "Reserve uma consulta personalizada com nossos especialistas em casinos online. Orientação profissional para escolher a melhor plataforma para você.",
}

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ConsultationHero />
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-12">
            <ConsultationBenefits />
            <ConsultationProcess />
          </div>
          <div className="lg:sticky lg:top-8">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  )
}
