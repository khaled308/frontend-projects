import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
    }),
  decrementQuantity: (id) =>
    set((state) => {
      return {
        cartItems: state.cartItems
          .map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
          .filter((cartItem) => cartItem.quantity > 0),
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem.id !== id),
    })),

  clearCart: () => set({ cartItems: [] }),
  getCartTotalPrice: () =>
    useCartStore
      .getState()
      .cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
}));
