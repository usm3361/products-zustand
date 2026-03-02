import { create } from "zustand";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export type CartState = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: Product["id"]) => void;
  clear: () => void;
};

export const useCart = create<CartState>((set) => ({
  cart: [],
  addToCart: (product: Product) =>
    set((prevState: CartState) => ({
      ...prevState,
      cart: [...prevState.cart, product],
    })),
  removeFromCart: (id: Product["id"]) =>
    set((prevState: CartState) => ({
      ...prevState,
      cart: prevState.cart.filter((product: Product) => product.id !== id),
    })),
  clear: () => set({ cart: [] }),
}));
