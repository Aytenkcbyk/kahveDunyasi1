<template>
  <div>
    <div class="cart-header">
      <div class="cart-header-content">
        <img src="/assets/images/cargo-car.png" alt="Kargo Arabası" class="cart-header-image" />
        <a href="#" class="free-shipping-link">
          <strong>&nbsp; &nbsp; 500 TL VE ÜZERİ SİPARİŞLERİNİZDE KARGO BEDAVA</strong>
        </a>
      </div>
    </div>

    <div v-if="isCartEmpty" class="empty-cart">
      <p>
        Sepetinizde herhangi bir ürün bulunmamaktadır. <br />
        Alışverişe devam etmek için
        <router-link to="/anasayfa" class="continue-shopping-link">tıklayınız.</router-link>
      </p>
    </div>
    
    <div v-else class="cart-items">
      <div v-for="product in cart" :key="product.id" class="cart-item">
        <img :src="product.image" :alt="product.name" class="cart-item-image" />
        <div class="cart-item-details">
          <p class="cart-item-name">{{ product.name }}</p>
          <p class="cart-item-price">{{ product.price }}</p>
          <div class="quantity-controls">
            <button @click="decrementQuantity(product.id)" :disabled="product.quantity <= 1">-</button>
            <span>{{ product.quantity }}</span>
            <button @click="incrementQuantity(product.id)">+</button>
          </div>
          <button @click="removeFromCart(product.id)" class="remove-button">Sil</button>
        </div>
      </div>
      
      <div class="cart-summary">
        <p>Toplam: {{ cartTotal }}TL</p>
        <button class="checkout-button">Ödemeye Geç</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useCartStore } from '~/stores/cart';

export default defineComponent({
  name: 'TheSepet',
  setup() {
    const cartStore = useCartStore();

    onMounted(() => {
      cartStore.fetchCartItems();
    });

    return {
      cart: cartStore.cart,
      isCartEmpty: cartStore.isCartEmpty,
      cartTotal: cartStore.cartTotal,
      removeFromCart: cartStore.removeFromCart,
      incrementQuantity: cartStore.incrementQuantity,
      decrementQuantity: cartStore.decrementQuantity,
    };
  },
});
</script>
    
  
  
  <style scoped>
  /* Üst Kısım (Kargo Mesajı) */
  .cart-header {
      background-color: #f7f8f9;
      padding: 20px;
  }
  
  .cart-header-content {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  .cart-header-image {
      max-width: 32px;
      max-height: 20px;
  }
  
  .free-shipping-link {
      text-decoration: none;
      color: #005e5c;
      font-weight: 530;
      font-family: Gotham-Bold, sans-serif;
  }
  
  /* Ek Bölüm */
  .additional-section {
      background-color: #ffffff;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  
  .link-wrapper {
      display: flex;
      align-items: center;
  }
  
  .back-to-shopping-link {
      text-decoration: none;
      margin-left: 5px;
      color: #6c0c33;
  }
  
  .logo-image {
      width: 92.5px;
      height: 92.5px;
  }
  
  .secure-payment-image {
      max-width: 150px;
      max-height: 40.44px;
  }
  
  /* Boş Sepet Durumu */
  .empty-cart {
      background-color: #f7f8f9;
      padding: 20px;
      text-align: center;
      font-family: Gotham-Book, sans-serif;
      font-size: 15px;
      height: 220px;
  }
  
  .continue-shopping-link {
      text-decoration: none;
      color: black;
  }
  
  .continue-shopping-link:hover {
      text-decoration: underline;
  }
  
  /* Alt Sol Köşe Resmi */
  .bottom-left-image {
      position: fixed;
      width: 42.5px;
      height: 42.5px;
      bottom: 10px;
      left: 10px;
  }
  
  .corner-image {
      width: 100%;
      height: 100%;
  }
  </style>