import create from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * User Store - Global user state
 */
export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,

      setUser: (user) => set({ user, isLoggedIn: !!user }),
      setToken: (token) => set({ token }),
      logout: () => set({ user: null, token: null, isLoggedIn: false }),
      updateUser: (userData) => set({ user: userData }),
    }),
    {
      name: 'user-store',
    }
  )
);

/**
 * Product Store - Global product state
 */
export const useProductStore = create((set) => ({
  products: [],
  categories: [],
  filters: {
    category: null,
    priceRange: [0, 100000000],
    material: null,
    sortBy: 'newest',
    search: '',
  },
  loading: false,
  error: null,

  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setFilters: (filters) => set((state) => ({ filters: { ...state.filters, ...filters } })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  clearFilters: () =>
    set({
      filters: {
        category: null,
        priceRange: [0, 100000000],
        material: null,
        sortBy: 'newest',
        search: '',
      },
    }),
}));

/**
 * Cart Store - Global cart state
 */
export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      itemCount: 0,

      addItem: (product, quantity = 1, variant = {}) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) =>
              item.id === product.id &&
              JSON.stringify(item.variant) === JSON.stringify(variant)
          );

          let newItems;
          if (existingItem) {
            newItems = state.items.map((item) =>
              item.id === product.id &&
              JSON.stringify(item.variant) === JSON.stringify(variant)
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
          } else {
            newItems = [...state.items, { ...product, quantity, variant }];
          }

          const total = newItems.reduce((sum, item) => sum + item.salePrice * item.quantity, 0);
          const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

          return { items: newItems, total, itemCount };
        });
      },

      removeItem: (productId, variant = {}) => {
        set((state) => {
          const newItems = state.items.filter(
            (item) =>
              !(
                item.id === productId &&
                JSON.stringify(item.variant) === JSON.stringify(variant)
              )
          );

          const total = newItems.reduce((sum, item) => sum + item.salePrice * item.quantity, 0);
          const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

          return { items: newItems, total, itemCount };
        });
      },

      updateQuantity: (productId, quantity, variant = {}) => {
        if (quantity <= 0) {
          get().removeItem(productId, variant);
          return;
        }

        set((state) => {
          const newItems = state.items.map((item) =>
            item.id === productId &&
            JSON.stringify(item.variant) === JSON.stringify(variant)
              ? { ...item, quantity }
              : item
          );

          const total = newItems.reduce((sum, item) => sum + item.salePrice * item.quantity, 0);
          const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

          return { items: newItems, total, itemCount };
        });
      },

      clearCart: () => set({ items: [], total: 0, itemCount: 0 }),

      getCartSummary: () => {
        const state = get();
        const subtotal = state.total;
        const shippingCost = subtotal >= 1000000 ? 0 : 50000;
        const tax = subtotal * 0.1;
        const total = subtotal + shippingCost + tax;

        return { subtotal, shippingCost, tax, total };
      },
    }),
    {
      name: 'cart-store',
    }
  )
);

/**
 * Order Store - Global order state
 */
export const useOrderStore = create((set) => ({
  orders: [],
  currentOrder: null,
  loading: false,
  error: null,

  setOrders: (orders) => set({ orders }),
  setCurrentOrder: (order) => set({ currentOrder: order }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),

  addOrder: (order) =>
    set((state) => ({
      orders: [order, ...state.orders],
    })),

  updateOrder: (orderId, updatedOrder) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId ? updatedOrder : order
      ),
    })),
}));

/**
 * UI Store - Global UI state
 */
export const useUIStore = create((set) => ({
  sidebarOpen: false,
  mobileMenuOpen: false,
  filterOpen: false,
  theme: 'light',

  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),

  setFilterOpen: (open) => set({ filterOpen: open }),
  toggleFilter: () => set((state) => ({ filterOpen: !state.filterOpen })),

  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

/**
 * Wishlist Store - Global wishlist state
 */
export const useWishlistStore = create(
  persist(
    (set) => ({
      items: [],

      addItem: (product) =>
        set((state) => {
          if (state.items.find((item) => item.id === product.id)) {
            return state;
          }
          return { items: [...state.items, product] };
        }),

      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),

      clearWishlist: () => set({ items: [] }),

      isInWishlist: (productId) => (state) =>
        state.items.some((item) => item.id === productId),
    }),
    {
      name: 'wishlist-store',
    }
  )
);
