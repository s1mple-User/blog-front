import { API_URL, getAuthUrl, getBlogUrl, getLoginUrl } from '@/config/api.config';
import { getAccses, getRefresh, removeToken, saveAccses, saveToken } from '@/config/cookis.config';
import axios from 'axios';

export const AuthService = {
    async register(form: any) {

    const response = await axios.post<any>(`${API_URL}${getAuthUrl('register')}`, form,{
        headers: {
          'Content-Type': 'multipart/form-data',
        }
    })
    return response.data;
    },
    async login(data:any){
      
      const response = await axios.post<any>(`${API_URL}${getLoginUrl('token')}`,data)
      saveToken(response.data) 

      const access = response.data.access

      const responseUser =await axios.get<any>(`${API_URL}${getAuthUrl('user')}`,
      {
      headers: {
        Authorization: `Bearer ${access}`
      }})

      return {"tokens":response.data,"user":responseUser.data} 
    },

    async getImage(url:string){
      const response = await axios.get<any>(`${API_URL}${url}`)

      return response.data
    },

    async getData(){
        const token =getAccses()
      
        const response =await axios.get<any>(`${API_URL}${getAuthUrl('user')}`,
      {
      headers: {
        Authorization: `Bearer ${token}`
      }})

     return response.data
    },

   async upDateToken() {
  const refresh = getRefresh();

  try {
    const response = await axios.post(`${API_URL}${getLoginUrl('token/refresh')}`, { refresh });

    const { access } = response.data;
    saveAccses(access)

    return response.data; 
  } catch (error) {
    console.error("Ошибка обновления токена:", error);
    throw error; 
  }
},

    async logout(refresh:any){
        const access = getAccses()
        const response =await axios.post(`${API_URL}${getAuthUrl('logout')}`, { refresh },
        {
           headers: {
        Authorization: `Bearer ${access}`,
      },
        }
      )
        console.log(response.data);
        
        await removeToken()
        return response.data
    },
} 