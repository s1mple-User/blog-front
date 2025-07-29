import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getData, getImage, login, logout, register } from './user.action'
import { LoginResponse, Token, UserIntialStateType, UserType } from './user.interface'

const initialState: UserIntialStateType = {
  user: null,
  isLoading: false,
  error: null,
  tokens:null,
  callback: () => {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    setCallback: (state, action: PayloadAction<() => void>) => {
      state.callback = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.isLoading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.user = null
        state.error = action.payload
      })

      
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.isLoading = false
		    state.tokens = action.payload.tokens
        state.user = action.payload.user
        state.error = null
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.user = null
        state.error = action.payload
      })

      .addCase(getData.pending, (state, action: PayloadAction<any>) => {
        state.isLoading = true
        state.error = null
      })

      .addCase(getData.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.user = action.payload
        state.error = null
      })

      .addCase(getData.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.error = action.payload
      })

      .addCase(logout.pending, (state, action: PayloadAction<any>) => {
        state.isLoading = true
        state.error = null
      })

      .addCase(logout.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.user =null
        state.error = null
      })

      .addCase(logout.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})


export const userReducer = userSlice.reducer;
export const userSliceAction = userSlice.actions;