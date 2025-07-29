import { API_URL, getAuthUrl, getBlogUrl, getLoginUrl } from "@/config/api.config";
import { getAccses } from "@/config/cookis.config";
import axios from "axios";


export const BlogService = {
    async create_blog(data:any){
         console.log('blog', data);

        
      const access = getAccses()

     const response = await axios.post<any>(`${API_URL}${getLoginUrl('blog/create')}`, data,{
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${access}`
        }
    })
    console.log(response.data);
    
    return response.data;
    },
    

    async get_all(id:string){
       const access = getAccses()

        const response = await axios.get<any>(`${API_URL}${getAuthUrl(`author/${id}`)}`,{
        headers: {
          Authorization: `Bearer ${access}`
        }
    })

    return response.data;
    },

    async deleteBlog(slug:string){
      const deleteData =await axios.delete(`${API_URL}${getBlogUrl(slug)}`)
     return
    },
   async upDateBlog(formData: FormData): Promise<any> {
  const access = getAccses()

  const slug = formData.get("slug")
  if (!slug || typeof slug !== "string") {
    throw new Error("Slug is missing or invalid in FormData")
  }

  const response = await axios.patch<any>(
    `${API_URL}${getBlogUrl(slug)}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${access}`,
      },
    }
  )
  return response.data},

  async get_all_blogs() {
    const response = await axios.get<any>(`${API_URL}${getBlogUrl("get_all")}`)
    return response.data
  },

  async detail_blog(slug:string){
    const response = await axios.get<any>(`${API_URL}${getBlogUrl(slug)}`)
    return response.data
  },

  async searchBlog(text:string){

    const response = await axios.get<any>(`${API_URL}${getBlogUrl("search/")}`,
     {
      params: {
        search: text
      }
    }
  )
    return response.data
  }
}
