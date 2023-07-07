import { configureStore } from '@reduxjs/toolkit'
import {authSliceReducer} from '../features/Authentication/slices/useauthslice'

export default configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});