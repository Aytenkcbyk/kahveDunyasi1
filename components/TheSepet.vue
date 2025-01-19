<template>
  <div class="cart-wrapper">
    <!-- Sepet Başlığı -->
    <div class="cart-header">
      <div class="cart-header-content">
        <img src="/assets/images/cargo-car.png" alt="Kargo Arabası" class="cart-header-image" />
        <a href="#" class="free-shipping-link">
          <strong>500 TL VE ÜZERİ SİPARİŞLERİNİZDE KARGO BEDAVA</strong>
        </a>
      </div>
    </div>
  </div>

  <div class="common-header">
    <router-link to="/anasayfa" class="continue-shopping-link">&lt;  ALIŞVERİŞE DÖN</router-link>
    <img src="/assets/images/logo.svg" alt="Logo" class="logo-image" />
    <img src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/icons/icon-secure.png" alt="Güvenli Alışveriş"
      class="secure-icon" />
  </div>

  <!-- Sepet Boş Durumu -->
  <div v-if="isCartEmpty" class="empty-cart">
    <p>
      Sepetinizde herhangi bir ürün bulunmamaktadır. <br />
      Alışverişe devam etmek için
      <router-link to="/anasayfa" class="continue-shopping-link">tıklayınız.</router-link>
    </p>
  </div>
  <!-- Sepet Ürünlü Durum -->
  <div v-else class="cart-container">
      <!-- Poşet Ekle Butonu -->
      <button class="add-bag-button">Poşet Ekle</button>

      <!-- Ürünler -->
      <div class="cart-product" v-for="product in cart" :key="product.id">
        <img :src="product.image" alt="Ürün Görseli" class="product-image" />
        <div class="product-details">
          <p class="product-name">{{ product.name }}</p>
          <div class="product-quantity-controls">
            <button @click="decreaseQuantity(product.id)" class="quantity-button">-</button>
            <span class="quantity">{{ product.quantity }}</span>
            <button @click="increaseQuantity(product.id)" class="quantity-button">+</button>
          </div>
        </div>
        <p class="product-price">{{ product.price }} TL</p>
      </div>

      <!-- Sepet Özeti -->
      <div class="cart-summary">
        <div class="total-title">Ödenecek Tutar</div>
        <div class="total-price">{{ cartTotal }} TL</div>
        <button class="checkout-button">Alışverişi Tamamla</button>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useCartStore } from '~/stores/cart';

export default defineComponent({
  name: 'Sepet',
  setup() {
    const cartStore = useCartStore();

    onMounted(() => {
      cartStore.fetchCartItems();
    });

    const increaseQuantity = (id: string) => {
      cartStore.incrementQuantity(id);
    };

    const decreaseQuantity = (id: string) => {
      cartStore.decrementQuantity(id);
    };

    return {
      cart: cartStore.cart,
      isCartEmpty: cartStore.isCartEmpty,
      cartTotal: cartStore.cartTotal,
      increaseQuantity,
      decreaseQuantity,
    };
  },
});
</script>

<style scoped>
/* Genel Ayarlar */
.cart-wrapper {
  background-color: #f9f9f9;
  padding: 20px;
  max-width: 800px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.add-bag-button {
  position: absolute;
  top: -40px;
  right: 0;
  padding: 10px 20px;
  font-size: 14px;
  background-color: #005e5c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cart-product {
  background-color: #f0f0f0; /* Hafif gri arka plan */
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: 50%; /* Sayfanın yarısı kadar genişlik */
  margin: 10px auto; /* Ortalamak için */
}

/* Sepet Başlığı */
.cart-header {
  text-align: center;
  background-color: #f1f1f1;
  padding: 10px 0;
}

.cart-header-image {
  width: 30px;
  margin-right: 10px;
}

.empty-cart-logo {
  margin-bottom: 20px;
  /* Logo için margin */
}

.logo-image {
  width: 75px;
  /* Logo boyutunu küçültme */
  height: auto;
  /* Logo resmi stilleri */
}

.free-shipping-link {
  font-size: 14px;
  color: #005e5c;
  font-weight: bold;
  text-decoration: none;
}

/* Boş Sepet */
.empty-cart {
  text-align: center;
  color: #666;
  font-size: 20px;
  margin-top: 100px;
}

/* Sepet Ürünlü Durum */
.cart-container {
  margin-top: 20px;
}

.cart-product {
  background-color: #f0f0f0; /* Hafif gri arka plan */
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: 50%; /* Sayfanın yarısı kadar genişlik */
  margin: 10px auto; /* Ortalamak için */
}

.cart-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.product-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.product-details {
  flex-grow: 1;
}

.product-name {
  font-size: 14px;
  font-weight: bold;
}

.product-quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-button {
  background-color: #005e5c;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
}

.quantity {
  margin: 0 10px;
}

.common-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  margin-top: 20px;
  /* Başlığın biraz altında */
}

.secure-icon {
  width: 200px;
  /* Orijinal boyutundan daha küçük yapın */
}

.product-price {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

/* Promosyon ve Sepet Özeti */
.cart-summary {
  margin-top: 20px;
}

.promo-container {
  display: flex;
  align-items: center;
}

.promo-input {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

.promo-button {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #005e5c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.summary-details {
  margin-top: 20px;
}

.add-bag-button {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #005e5c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
}

.cart-summary {
  background-color: #f0f0f0; /* Hafif gri arka plan */
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  width: 20%; /* Daha küçük boyut */
  margin-left: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.total-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.total-price {
  font-size: 18px;
  font-weight: bold;
}
.checkout-button {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #005e5c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>