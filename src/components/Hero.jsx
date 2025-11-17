import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative h-[42vh] sm:h-[52vh] lg:h-[60vh] w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft top overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/10 pointer-events-none" />

      <div className="relative z-10 mx-auto h-full max-w-6xl px-4 sm:px-6 flex items-center">
        <div className="w-full text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-600 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
            HR Dashboard • Seleksi Karyawan
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-800">
            Kelola Rekrutmen dengan Tampilan Modern Putih–Abu
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Visual minimalis, fokus pada proses screening kandidat. Unggah link folder, deskripsi pekerjaan, dan mulai analisis CV secara cepat.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
