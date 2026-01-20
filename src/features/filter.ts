import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../types/Status';

export interface FilterType {
  query: string;
  status: Status;
}
const initialState: FilterType = {
  query: '',
  status: 'all',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
});
