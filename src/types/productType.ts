import {ThunkAction } from "@reduxjs/toolkit";
import { RootState,AppDispatch } from "../store/store";

export type AppThunk<ReturnType=void>=ThunkAction<

ReturnType,
RootState,
unknown
Action<string>
>;

interface Product {
    id: number;
    title: string;
    category: string;
  }
  
  interface ProductsState {
    products: Product[];
    filteredProducts: Product[];
    loading: boolean;
  }