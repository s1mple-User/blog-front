'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import { register } from '@/store/user/user.action'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { FileUploadPreview } from '@/components/forms/file-upload-preview'
import { rejectError } from '@/helper /reject-error'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { AuthSchema } from '@/validetion/auth'

function RegisterPage() {
  const [file, setFile] = useState<File | string | null>(null)
  const [errorFile, setErrorFile] = useState<string>('')
  const dispatch = useAppDispatch()
  const router = useRouter()

  const validateFile = (file: File | null) => {
    if (!file) return 'file required'
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
    if (!allowedTypes.includes(file.type)) return 'Только JPG, PNG или GIF файлы разрешены.'
    return ''
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      bio: '',
      image: null,
    },
    validationSchema: AuthSchema,
    onSubmit: async (values) => {
      const fileError = validateFile(file instanceof File ? file : null)
      setErrorFile(fileError)
      if (fileError) return

      const form = new FormData()
      form.append('email', values.email)
      form.append('password', values.password)
      form.append('name', values.name)
      if (values.bio) form.append('bio', values.bio)
      if (file instanceof File) form.append('image', file)

      try {
        await dispatch(register({
          form,
          callback: () => router.push('/auth/login'),
        })).unwrap()
      } catch (error) {
        const err = rejectError(error)
        if (typeof err === 'object' && !Array.isArray(err)) {
          Object.entries(err).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              formik.setFieldError(key, value[0])
            } else if (typeof value === 'string') {
              formik.setFieldError(key, value)
            }
          })
        }
      }
    },
  })

  const handleChange = (file: File) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      setErrorFile('Только JPG, PNG или GIF файлы разрешены.')
      setFile(null)
      return
    }
    setErrorFile('')
    formik.setFieldValue('image', file)
    setFile(file)
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[600px]">
        <CardHeader>
          <h1 className="text-2xl font-creteRound">Register</h1>
        </CardHeader>

        <form onSubmit={formik.handleSubmit}>
          <CardContent className="flex items-center gap-6">
            <div className="space-y-4">
              <h2 className="font-creteRound">Email:</h2>
              {formik.errors.email && (
  <h2 className="text-sm text-red-500 mt-1">{formik.errors.email}</h2>
)}
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={formik.errors.email || 'email'}
                className={formik.errors.email ? 'border-red-500 border focus:border-red-500' : 'p-3'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              <h2 className="font-creteRound">Password:</h2>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder={formik.errors.password || 'password'}
                className={formik.errors.password ? 'border-red-500 border focus:border-red-500' : 'p-3'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />

              <h2 className="font-creteRound">Name:</h2>
              <Input
                id="name"
                name="name"
                placeholder={formik.errors.name || 'name'}
                className={formik.errors.name ? 'border-red-500 border focus:border-red-500' : 'p-3'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>

            <div>
              <h2 className="font-creteRound">Bio:</h2>
              <Textarea
                id="bio"
                name="bio"
                placeholder={formik.errors.bio || 'bio'}
                className={formik.errors.bio ? 'max-h-32 mb-4 w-60 resize-none border-red-500 border focus:border-red-500' : 'resize-none mb-4'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bio}
              />

              <FileUploadPreview
                file={file}
                formik={formik}
             setFile={setFile}
                errorFile={errorFile}
                handleChange={handleChange}
              />
              {formik.errors.image}
            </div>
          </CardContent>

          <CardFooter className="mb-6 mt-6">
            <div className="flex justify-center gap-5 w-full ml-20">
              <Link href="/auth/login">
                <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-400 w-28">
                  Logining
                </Button>
              </Link>
              <Button type="submit" variant="outline" className="shadow-md shadow-blue-700 w-28">
                Registering
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default RegisterPage
