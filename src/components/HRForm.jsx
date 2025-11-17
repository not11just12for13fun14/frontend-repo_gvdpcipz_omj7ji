import React, { useState } from 'react'
import { Info } from 'lucide-react'

const Label = ({ children, htmlFor, withInfo }) => (
  <label htmlFor={htmlFor} className="flex items-center gap-2 text-sm font-medium text-gray-700">
    <span>{children}</span>
    {withInfo && (
      <span className="inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-200 h-4 w-4 text-[10px]" title="Informasi">
        i
      </span>
    )}
  </label>
)

const HRForm = ({ onSubmit }) => {
  const [driveLink, setDriveLink] = useState('')
  const [folderName, setFolderName] = useState('')
  const [jobDesc, setJobDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) onSubmit({ driveLink, folderName, jobDesc })
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Google Drive Link */}
        <div className="space-y-1.5">
          <Label htmlFor="drive" >Google Drive Link<span className="text-red-500">*</span></Label>
          <input
            id="drive"
            type="url"
            required
            value={driveLink}
            onChange={(e) => setDriveLink(e.target.value)}
            placeholder="https://drive.google.com/drive/folders/…"
            className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
          />
          <p className="text-xs text-gray-500">Masukkan link folder Google Drive yang berisi file CV</p>
        </div>

        {/* Nama Folder */}
        <div className="space-y-1.5">
          <Label htmlFor="folder">Nama Folder<span className="text-red-500">*</span></Label>
          <input
            id="folder"
            type="text"
            required
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            placeholder="Data Analyst [08/08/2025]"
            className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
          />
          <p className="text-xs text-gray-500">Nama folder harus sama dengan nama folder di Google Drive</p>
        </div>

        {/* Job Description */}
        <div className="space-y-1.5">
          <Label htmlFor="jd" withInfo>
            Job Description / Requirements<span className="text-red-500">*</span>
          </Label>
          <textarea
            id="jd"
            required
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            placeholder="Contoh: Strong proficiency in PHP (Laravel)…"
            rows={5}
            className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition resize-y"
          />
          <p className="text-xs text-gray-500">Masukkan deskripsi pekerjaan atau requirements</p>
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-3 w-full sm:w-2/3 lg:w-1/2 shadow-sm transition-colors"
          >
            <span className="text-lg" role="img" aria-label="search">🔍</span>
            <span>Analisis CV</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default HRForm
