import { defineStore } from 'pinia';
import { ref, onUnmounted } from 'vue';
import { collection, query, getDocs, doc, addDoc, deleteDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { firestore } from '~/boot/firebase';

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Product[],
    items: [] as Product[],
    $fire: firestore,
  }),
  
  getters: {
    isCartEmpty: (state) => state.cart.length === 0,
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('TL', ''));
        return total + price * item.quantity;
      }, 0);
    },
  },
  
  actions: {
    addToCart(product: Product) {
      const existingProduct = this.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    
    removeFromCart(productId: string) {
      this.cart = this.cart.filter(item => item.id !== productId);
    },
    
    updateQuantity(productId: string, newQuantity: number) {
      const product = this.cart.find(item => item.id === productId);
      if (product && newQuantity > 0) {
        product.quantity = newQuantity;
      }
    },
    
    incrementQuantity(productId: string) {
      const product = this.cart.find(item => item.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    
    decrementQuantity(productId: string) {
      const product = this.cart.find(item => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    async fetchCartItems() {
      try {
        const q = query(collection(this.$fire, 'cart'));
        const querySnapshot = await getDocs(q);
        this.cart = querySnapshot.docs.map(doc => ({
          ...(doc.data() as Product),
          id: doc.id
        }));
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    },
  },
});