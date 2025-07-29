import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlogIntialStateType, TypeBlog } from "./blog.interface";
import { create_Blog, deleteBlog, detail_blog, get_all, get_all_blogs, searchBlog, upDateBlog } from "./blog.action";


const initialState: BlogIntialStateType = {
  blog: [],
  blog_profile:[],
  blog_detail:null,
  isLoading: false,
  error: null,
  search_blog:[],
  callback: () => {}
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
      clearError: (state) => {
        state.error = null
      },
      setCallback: (state, action: PayloadAction<() => void>) => {
        state.callback = action.payload
      },
    },

    extraReducers(builder) {
        builder
              .addCase(create_Blog.pending,  (state, action) => {
                state.isLoading = true
                state.error = null
              })
              .addCase(create_Blog.fulfilled, (state, action: PayloadAction<TypeBlog[]>) => {
                state.isLoading = false
                state.error = null
              })
              .addCase(create_Blog.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = action.payload
              })

              .addCase(deleteBlog.pending,(state, action) => {
                state.isLoading = true
                state.error = null
              })
              .addCase(deleteBlog.fulfilled, (state, action: PayloadAction<TypeBlog[]>) => {
                state.isLoading = false
                state.error = null
              })
              .addCase(deleteBlog.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = action.payload
              })


              .addCase(get_all.pending, (state) => {
                state.isLoading = true
              })
              .addCase(get_all.fulfilled, (state, action: PayloadAction<TypeBlog[]>) => {
                state.isLoading = false
                state.blog_profile = action.payload
                state.error = null
              })
              .addCase(get_all.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = action.payload
              })

              .addCase(upDateBlog.pending, (state) => {
                state.isLoading = true
                state.error =null
              })  
              
              .addCase(upDateBlog.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = null
              })       
              
              .addCase(upDateBlog.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = action.payload
              })   
              
              .addCase(get_all_blogs.pending, (state) => {
                state.isLoading = true
                state.error =null
              })  
              
              .addCase(get_all_blogs.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.blog = action.payload
                state.error = null
              })       
              
              .addCase(get_all_blogs.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = action.payload
              })  

              .addCase(detail_blog.pending, (state) => {
                state.isLoading = true
                state.error =null
              })  
              
              .addCase(detail_blog.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.blog_detail = action.payload
                state.error = null
              })       
              
              .addCase(detail_blog.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = action.payload
              })  

              .addCase(searchBlog.pending, (state) => {
                state.isLoading = true
                state.error =null
              })  
              
              .addCase(searchBlog.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.search_blog = action.payload
                state.error = null
              })       
              
              .addCase(searchBlog.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = action.payload
              })  
    }, 
})

export const blogReducer = blogSlice.reducer;
export const blogSliceAction = blogSlice.actions;