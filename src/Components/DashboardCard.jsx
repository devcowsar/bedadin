import React from "react";

const cards = [
  {
    title: "Total Players",
    value: "1,204",
    bg: "bg-blue-100",
    text: "text-blue-800",
  },
  {
    title: "Total Bets",
    value: "5,421",
    bg: "bg-green-100",
    text: "text-green-800",
  },
  {
    title: "Revenue",
    value: "$84,200",
    bg: "bg-yellow-100",
    text: "text-yellow-800",
  },
  {
    title: "Pending Withdrawals",
    value: "$3,500",
    bg: "bg-red-100",
    text: "text-red-800",
  },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className={`p-4 rounded-xl shadow ${card.bg}`}>
          <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
          <p className={`mt-1 text-2xl font-bold ${card.text}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
