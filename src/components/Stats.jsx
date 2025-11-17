import React from 'react'

const StatCard = ({ label, value, trend }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
    <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
    <div className="mt-1 flex items-baseline gap-2">
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
      {trend && (
        <span className={`text-xs font-medium ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{trend}</span>
      )}
    </div>
  </div>
)

const Stats = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 -mt-6 relative z-20">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <StatCard label="Total Kandidat" value="128" trend="+12%" />
        <StatCard label="Disaring" value="76" trend="+6%" />
        <StatCard label="Interview" value="24" trend="-3%" />
        <StatCard label="Hired" value="8" trend="+2%" />
      </div>
    </section>
  )
}

export default Stats
