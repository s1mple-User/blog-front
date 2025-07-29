import { rejectError } from "@/helper /reject-error";
import { BlogService } from "@/service/blog.api.service";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const create_Blog =createAsyncThunk<any,any>("auth/upDateToken",async (data,thunkApi)=>{
    try {
        
        const response = await BlogService.create_blog(data)
        
        return response
    } catch (error) {
        return thunkApi.rejectWithValue(rejectError(error))
    }
})

export const get_all =createAsyncThunk<any,any>("auth/get_all",async (data,thunkApi)=>{
    try {
        
        const response = await BlogService.get_all(data)
        
        return response
    } catch (error) {
        return thunkApi.rejectWithValue(rejectError(error))
    }
})

export const deleteBlog = createAsyncThunk<any,any>("blog/delete",async (slug,thunkApi)=>{
    try {
        
        const response = await BlogService.deleteBlog(slug)
        
        return response
    } catch (error) {
        return thunkApi.rejectWithValue(rejectError(error))
    }
})


export const upDateBlog =createAsyncThunk<any,any>("auth/upDateBlog",async (data,thunkApi)=>{
	try {
         console.log("update:",data);
		const response = await BlogService.upDateBlog(data)
		
		return response
	} catch (error) {
		return thunkApi.rejectWithValue(rejectError(error))
	}
})

export const get_all_blogs = createAsyncThunk<any,any>("blog/getAllBlog",async (data,thunkApi)=>{
	try {
		const response = await BlogService.get_all_blogs()
		
		return response
	} catch (error) {
		return thunkApi.rejectWithValue(rejectError(error))
	}
})


export const detail_blog = createAsyncThunk<any,any>("blog/getSlugBlog",async (slug,thunkApi)=>{
	try {
		const response = await BlogService.detail_blog(slug)
		
		return response
	} catch (error) {
		return thunkApi.rejectWithValue(rejectError(error))
	}
})

export const searchBlog = createAsyncThunk<any,any>("blog/search",async (text,thunkApi)=>{
	try {
		const response = await BlogService.searchBlog(text)
		
		return response
	} catch (error) {
		return thunkApi.rejectWithValue(rejectError(error))
	}
})