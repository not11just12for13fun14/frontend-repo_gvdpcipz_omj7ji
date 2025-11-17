import React from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import HRForm from './components/HRForm'

function App() {
  const handleAnalyze = (payload) => {
    console.log('Form submitted:', payload)
    // Placeholder for future backend call
    // fetch(`${import.meta.env.VITE_BACKEND_URL}/analyze`, { method: 'POST', body: JSON.stringify(payload) })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <Hero />
      <main className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        <Stats />

        <section className="mt-8 sm:mt-12">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Isi Form</h2>
              <p className="text-sm text-gray-500">Lengkapi detail berikut untuk memulai analisis CV secara otomatis.</p>
            </div>
            <HRForm onSubmit={handleAnalyze} />
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HR Dashboard • Dibuat dengan gaya modern putih–abu
      </footer>
    </div>
  )
}

export default App
