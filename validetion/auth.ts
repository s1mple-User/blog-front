import * as Yup from "yup"

export const AuthSchema = Yup.object().shape({
    email: Yup.string().email('Неверный email').required('Email обязателен'),
    password: Yup.string().min(6, 'Минимум 6 символов').required('Пароль обязателен'),
    name: Yup.string().required('Имя обязательно'),
    bio: Yup.string(),
  })


export const createBlog = Yup.object({
  title: Yup.string().required("title is required"),
  content: Yup.string().required("Content is required"),
  description: Yup.string().required("description is required "),
  image: Yup.mixed().required("Image is required"),
})