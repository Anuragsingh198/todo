import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEmployees = createAsyncThunk('employees/fetch', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const employeesSlice = createSlice({
  name: 'employees',
  initialState: { employees: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default employeesSlice.reducer;