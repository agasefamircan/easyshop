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