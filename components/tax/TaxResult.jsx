export default function TaxResults({ results }) {
  const cards = [
    {
      title: "Annual Salary",
      value: results.anualSalary,
    },
    {
      title: "Annual Tax",
      value: results.anualTax,
    },
    {
      title: "Monthly Tax",
      value: results.monthlyTax,
    },
    {
      title: "Net Annual Income",
      value: results.netAnualIncome,
    },
    {
      title: "Net Monthly Income",
      value: results.netMonthlyIncome,
    },
  ];

  return (
    <div className="mt-10">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Your Tax Breakdown
        </h2>
        <p className="text-sm text-slate-500">
          Based on latest Pakistan income tax slabs
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className={`
              bg-white
              rounded-2xl
              p-6
              border
              border-slate-200
              shadow-sm
              hover:shadow-md
              transition
              ${index === 1 ? "ring-2 ring-red-100" : ""}
            `}
          >
            <h3 className="text-sm text-slate-500">
              {card.title}
            </h3>

            <p className="text-2xl font-bold mt-3 text-slate-900">
              PKR{" "}
              {Number(card.value || 0).toLocaleString("en-PK")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}