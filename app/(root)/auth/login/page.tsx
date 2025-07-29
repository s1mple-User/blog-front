"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LoginFormValues } from '@/types'
import { login } from '@/store/user/user.action'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { useRouter } from 'next/navigation'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required'),
})

function LoginPage() {
  const { isLoading, error, user } = useTypedSelector(state => state.user)
  const [loginError, setLoginError] = useState('')
  const dispatch = useAppDispatch()
  const router =useRouter() 

  useEffect(() => {
    if (error?.message === 'incorect password or email') {
      setLoginError('Incorrect email or password')
    }
  }, [error])

const sendDate = async (
  values: LoginFormValues,
  { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
) => {
  setLoginError('')

  try {
    
    await dispatch(login({
      values,
      callback:() => router.push('/')
  })).unwrap() 
  

  } catch (err: any) {
    if (typeof err?.detail === 'string') {
    setLoginError(err.detail); 
  } else {
      console.log(err);
      
      setLoginError('Login failed. Please try again.')
    }
  } finally {
    setSubmitting(false)
  }
}


  return (
    <div className="flex items-center  min-h-screen ml-[740px]">
      <Card className="w-[400px]">
        <CardHeader>
          <h1 className="text-2xl font-creteRound text m-0 p-0">Login</h1>
        </CardHeader>
   <Formik
  initialValues={{ email: '', password: '' }}
  validationSchema={LoginSchema}
  onSubmit={sendDate}
>
  {(formik) => (
    <Form>
      <CardContent className="space-y-4 mt-3">
        <div>
            <div className={`text-red-600 text-sm h-5 ${loginError ? 'visible' : 'invisible'}`}>
      {loginError ?? '\u00A0'}
    </div>
        <Input
  placeholder={
    formik.touched.email && formik.errors.email
      ? formik.errors.email
      : 'Email'
  }
  className={`p-3 transition-all ${
    formik.touched.email && formik.errors.email
      ? 'border-red-500 border focus:border-red-500'
      : ''
  }`}
  {...formik.getFieldProps('email')}
/>

        </div>

        <div>
       <Input
  placeholder={
    formik.touched.email && formik.errors.email
      ? formik.errors.email
      : 'password'
  }
  className={`p-3 transition-all ${
    formik.touched.email && formik.errors.email
      ? 'border-red-500 border focus:border-red-500'
      : ''
  }`}
  {...formik.getFieldProps('password')}
/>

        </div>
      </CardContent>

      <CardFooter className="mb-6 mt-6">
        <div className="flex justify-center gap-5 w-full ml-20">
          <Link href="/auth/register">
            <Button
              variant="outline"
              className="bg-blue-600 text-white hover:bg-blue-400 w-28"
            >
              Register
            </Button>
          </Link>
          <Button
            type="submit"
            variant="outline"
            className="shadow-md shadow-blue-700 w-28"
            disabled={formik.isSubmitting || isLoading}
          >
            {formik.isSubmitting || isLoading ? 'Loading...' : 'Login'}
          </Button>
        </div>
      </CardFooter>
    </Form>
  )}
</Formik>
      </Card>
    </div>
  )
}

export default LoginPage
