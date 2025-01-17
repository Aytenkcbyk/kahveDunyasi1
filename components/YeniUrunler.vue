<template>
  <div>
    <!-- Product Listing Section -->
    <div class="product-listing">
      <div class="product" v-for="(product, index) in products" :key="index">
        <div class="card">
          <div class="card-image">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="product-details">
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-price">{{ product.price }}</p>
          </div>
          <div class="card-actions">
            <button class="add-to-cart-btn" @click="addToCart(product)">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useCartStore } from '~/stores/cart';

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
}

export default defineComponent({
  name: 'YeniUrunler',
  setup() {
    const cartStore = useCartStore();

    const products = ref<Product[]>([
      {
        id: '1',
        name: 'Popçik Patırdak Çikolata 250g Kova',
        image: 'https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/500x500/a2c89a82f6_popcik-patirdak-cikolata-250g-kova.webp',
        price: '185TL',
        quantity: 1,
      },
      {
        id: '2',
        name: 'Beyoğlu Sütlü Antep Fıstıklı Krokanlı 40g',
        image: 'https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/669687462f_beyoglu-suetlue-antep-fistikli-krokanli-40g.webp',
        price: '65TL',
        quantity: 1,
      },
      {
        id: '3',
        name: 'Çubuklu Sıcak Çikolata 39g',
        image: 'https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/cd28e2e39d_cubuklu-sicak-cikolata-39g.webp',
        price: '39TL',
        quantity: 1,
      },
      {
        id: '4',
        name: 'Selection Kapsül Kahve ve Çubuk Portakal Özel Kutu',
        image: 'https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/f65a26eb7a_selection-kapsul-kahve-ve-cubuk-portakal-kutusu.webp',
        price: '785TL',
        quantity: 1,
      },
    ]);

    const addToCart = (product: Product) => {
      cartStore.addToCart(product);
    };

    return {
      products,
      addToCart,
    };
  },
});
</script>
  
  <style scoped>
  .product-listing {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin: 20px;
  }
  
  .product {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 10px;
    background-color: #fff;
  }
  
  .card-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .product-name {
    font-size: 16px;
    margin: 10px 0;
    font-weight: bold;
  }
  
  .product-price {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
  }
  
  .card-actions .add-to-cart-btn {
    padding: 8px 12px;
    font-size: 14px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .card-actions .add-to-cart-btn:hover {
    background-color: #0056b3;
  }
  
  .empty-cart {
    text-align: center;
    margin-top: 20px;
  }
  
  .cart-items {
    margin: 20px;
  }
  </style>