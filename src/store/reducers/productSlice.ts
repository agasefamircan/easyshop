import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AppThunk } from "../../types";

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

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
      console.log("setProduct action payload:", action);
    },
    setFilteredProducts(state, action: PayloadAction<Product[]>) {
      state.filteredProducts = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});
export const { setProducts, setFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;

// export const fetchProducts = (): AppThunk => async (dispatch) => {
//     dispatch(setLoading(true));
//     try {
//       const response = await axios.get("https://fakestoreapi.com/products");
//       dispatch(setProducts(response.data));
//       dispatch(setLoading(false));
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       dispatch(setLoading(false));
//     }
//   };
