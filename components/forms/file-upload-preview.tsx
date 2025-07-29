import { X } from "lucide-react"
import { CustomFileUploader } from "./custom-form-uploder"

interface Props {
  file: File | string | null
  setFile: (file: File | null) => void
  errorFile?: string
  handleChange: (file: File) => void
  formik:any
}

export function FileUploadPreview({ file, setFile, errorFile, handleChange,formik }: Props) {
  const renderImageSrc = () => {
    if (!file) return ''
    return typeof file === 'string' ? file : URL.createObjectURL(file)
  }

  return (
    <div className="w-60">
      {file ? (
        <div className="relative w-full h-36 rounded-lg overflow-hidden border border-gray-200 shadow-sm ring-1 ring-gray-100">
          <img
            src={renderImageSrc()}
            alt="preview"
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <button
            type="button"
              onClick={() => {
              setFile(null)
            formik.setFieldValue('image', null)}}
            className="absolute top-2 right-2 p-1 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full shadow hover:bg-white transition"
          >
            <X className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      ) : (
        <div className="w-full h-36 rounded-lg overflow-hidden border border-gray-200 shadow-sm ring-1 ring-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center text-gray-500 text-sm">
          <CustomFileUploader
            handleChange={handleChange}
            name="image"
            types={['JPG', 'PNG', 'GIF']}
            classes="file-uploader w-full h-full flex items-center justify-center outline-none focus:outline-none"
            label="Click here"
            formik={formik}
          />
        </div>
      )}
      {errorFile && (
        <p className="mt-2 text-sm text-red-500 text-center">{errorFile}</p>
      )}
    </div>
  )
}