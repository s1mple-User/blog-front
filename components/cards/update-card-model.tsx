"use client"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from "react"
import Select from "react-select"
import { FileUploadPreview } from "../forms/file-upload-preview"
import { createBlog } from "@/validetion/auth"
import { useAppDispatch } from "@/hooks/use-app-dispatch"
import { create_Blog, upDateBlog } from "@/store/blog/blog.action"
import { useTypedSelector } from "@/hooks/useTypedSelector"

export default function BlogUpdateModel({ data, onClose }: { data:any,onClose: () => void }) {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<File | string | null>(null)
  const [errorFile, setErrorFile] = useState<string>('')
  const {error} = useTypedSelector(state => state.blog)

   const dispatch = useAppDispatch()

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

  const Blog_update = async (values:any) => {
      const formData = new FormData()
      formData.append("title", values.title)
      formData.append("description", values.description)
      formData.append("content", values.content)
      formData.append("slug", data.slug)
      if (values.image) formData.append("image", values.image)

      try {
        console.log(formData);
        
     await dispatch(upDateBlog(formData)).unwrap()
        setFile(null)
      onClose()
        window.location.reload() 
      } catch (err) {
        console.error(err)
        alert("Ошибка сети")
      }
    }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
    title: data?.title || "",
    description: data?.description || "",
    content: data?.content || "",
    image: null,
  },
    validationSchema: createBlog,
    onSubmit:async (values) => await Blog_update(values)
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
    
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Update</DialogTitle>
            <DialogDescription>Blog</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-5">
            
            <div>
               {error?.slug && (
    <p className="text-red-500 text-xs mt-1">{error.slug}</p>
  )}
          <Input
            name="title"
            placeholder={formik.errors.title ? formik.errors.title as string : "title"}
            value={formik.values.title}
            onChange={formik.handleChange}
            className="mb-4 mt-2"
          />
  
        </div>
        <div>
            {formik.touched.image && formik.errors.image && (
            <div className="text-red-500 text-sm mb-2">{formik.errors.image}</div>
          )}

          <FileUploadPreview
                       file={file}
                       formik={formik}
                        setFile={setFile}
                       errorFile={errorFile}
                       handleChange={handleChange}/>
        </div>
          </div>
          <Textarea
            name="description"
            placeholder={formik.errors.description ? formik.errors.description as string : "description"}
            value={formik.values.description}
            onChange={formik.handleChange}
          />

          <Textarea
            name="content"
            placeholder={formik.errors.content ? formik.errors.content as string : "content"}
            value={formik.values.content}
            onChange={formik.handleChange}
          />

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              cancellation
            </Button>
            <Button type="submit" className="text-white">Update</Button>
          </DialogFooter>
        </form>
      
    </Dialog>
  )
}