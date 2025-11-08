import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CalculatorTools from "@/components/sections/calculator-tools";
import EmiCalculator from "@/components/calculators/emi-calculator";
import BudgetCalculator from "@/components/calculators/budget-calculator";
import LoanEligibility from "@/components/calculators/loan-eligibility";
import AreaConverter from "@/components/calculators/area-converter";

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-[120px]">
        <CalculatorTools />
        <div className="container mx-auto px-4 py-20 space-y-20">
          <EmiCalculator />
          <BudgetCalculator />
          <LoanEligibility />
          <AreaConverter />
        </div>
      </main>
      <Footer />
    </div>
  );
}
