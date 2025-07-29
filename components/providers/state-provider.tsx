"use client"

import React, { ReactNode, useEffect } from "react"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import { useAppDispatch } from "@/hooks/use-app-dispatch"
import { useActions } from "@/hooks/useActions"
import { getAccses, getRefresh } from "@/config/cookis.config"


interface StateProviderProps {
  children: ReactNode
}

const StateProvider = ({ children }: StateProviderProps) => {
  const dispatch = useAppDispatch()
  const { getData, upDateToken } = useActions()
  const { user } = useTypedSelector(state => state.user)
  const {blog} = useTypedSelector(state => state.blog)
  const access = getAccses()

  useEffect(() => {
    const refresh = getRefresh()
     const access = getAccses()
    const tryLoadUser = async () => {
      try {
        if (!access && refresh) {
          await upDateToken(refresh)
        }

        const updatedAccess = getAccses()
        if (updatedAccess && !user) {
          await dispatch(getData(updatedAccess)).unwrap()
          console.log("Пользователь загружен")
        }
      } catch (err) {
        console.error("Ошибка при инициализации пользователя:", err)
      }
    }

    tryLoadUser()
  }, [dispatch,blog,user,access])


  return <>{children}</>
}

export default StateProvider