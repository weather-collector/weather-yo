import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {IUser} from '../../models/IUser'


export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(`${process.env.API_URL}/users`)
      await new Promise(resolve => setTimeout(resolve, 5000)); // timeout
      return response.data
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue('Не вдалося завантажити користувачів')
      }
    }
  }
)
