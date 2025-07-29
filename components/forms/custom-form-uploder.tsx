import React, { useState } from 'react'

interface CustomFileUploaderProps {
  handleChange: (file: File) => void
  name?: string
  types?: string[]
  classes?: string
  label?: string
  formik:any
}

export function CustomFileUploader({
  handleChange,
  name = "file-upload",
  types = ["image/png", "image/jpeg", "image/gif"],
  classes = "",
  label = "Click here"
}: CustomFileUploaderProps) {
  const [dragging, setDragging] = useState(false)

  const onDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setDragging(true)
  }

  const onDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setDragging(false)
  }

  const onDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleChange(e.dataTransfer.files[0])
    }
  }

  return (
    <label
      htmlFor={name}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`w-full h-36 rounded-lg overflow-hidden border border-gray-200 shadow-sm ring-1 ring-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex flex-col items-center justify-center cursor-pointer
        ${dragging ? 'bg-gray-200' : ''}
        ${classes}
      `}
    >
      <span className="text-sm text-gray-500">{label}</span>
      <input
        id={name}
        name={name}
        type="file"
        accept={types.join(", ")}
        onChange={(e) => {
          if (e.target.files?.[0]) handleChange(e.target.files[0])
        }}
        className="hidden"
      />
    </label>
  )
}
