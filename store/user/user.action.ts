
import { rejectError } from "@/helper /reject-error";
import { AuthService } from "@/service/author.api.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginResponse } from "./user.interface";

export const register = createAsyncThunk<
	any,
	any
>('auth/register', async ({ form, callback }, thunkApi) => {
	try {
		const response = await AuthService.register(form);
		if (callback) callback()
		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue(rejectError(error));
	}
});

export const login = createAsyncThunk<any,any>("auth/login",async (data,thunkApi)=>{
	try {
		const {values,callback} = data
		const response = await AuthService.login(values)
		
		callback()
		return response
	} catch (error) {
		return thunkApi.rejectWithValue(rejectError(error))
	}
})

export const getImage = createAsyncThunk<any,any>("auth/image",async (url,thunkApi) =>{
		try {
		const response = await AuthService.getImage(url)
		
		return response
	} catch (error) {
		return thunkApi.rejectWithValue(rejectError(error))
	}
})


export const getData = createAsyncThunk<any,any>("auth/getData",async (_,thunkApi) =>{
		try {
		const response = await AuthService.getData()
		
		return response
	} catch (error) {
		return thunkApi.rejectWithValue(rejectError(error))
	}
})

export const upDateToken =createAsyncThunk<any,any>("auth/upDateToken",async (data,thunkApi)=>{
	try {
		const response = await AuthService.upDateToken()
		
		return response
	} catch (error) {
		return thunkApi.rejectWithValue(rejectError(error))
	}
})

export const logout =createAsyncThunk<any,any>("auth/upDateToken",async (refresh,thunkApi)=>{
	try {
		const response = await AuthService.logout(refresh)
		
		return response
	} catch (error) {
		return thunkApi.rejectWithValue(rejectError(error))
	}
})
