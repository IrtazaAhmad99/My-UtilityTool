import { taxSlab } from "../utils/taxSlab";

export function calculateTax(monthlySalary) {
    const anualSalary = monthlySalary * 12;

    const slab = taxSlab.find((slab) => anualSalary > slab.min && anualSalary <= slab.max)

    if (!slab) {
        throw new Error("Tax slab not found")
    }

    const taxableAmount = anualSalary - slab.min;

    const tax = slab.fixedTax + taxableAmount * slab.rate;

    const anualTax = Math.round(tax);
    const monthlyTax = Math.round(tax / 12);
    const netAnualIncome = Math.round(anualSalary - tax);
    const netMonthlyIncome = Math.round((anualSalary - tax) / 12)

    return {
        anualSalary,
        anualTax,
        monthlyTax,
        netAnualIncome,
        netMonthlyIncome,
    }


}