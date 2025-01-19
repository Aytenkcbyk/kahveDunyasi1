<template>
  <div>
    <!-- Carousel Container -->
    <div class="carousel-container">
      <h1 class="new-products-heading">Yeni Ürünler</h1>
      <div class="heading-underline"></div>
      <div class="carousel-wrapper">
        <div v-for="product in visibleProducts" :key="product.id" class="carousel-item">
          <div class="card">
            <div class="card-image">
              <img :src="product.image" :alt="product.name" />
              <div class="overlay">
                
              </div>
            </div>
            <div class="product-details">
              <h2 class="product-name">{{ product.name }}</h2>
              <p class="product-price">{{ product.price }}</p>
            </div>
            <div class="additional-info">
              <p class="product-info">{{ product.additionalInfo }}</p>
            </div>
            <button class="add-to-cart-btn" @click="addToCart(product)">
                  Sepete Ekle
                </button>
          </div>
        </div>
      </div>
      <div class="carousel-controls">
        <button class="prev" @click="prevSlide">‹</button>
        <button class="next" @click="nextSlide">›</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useCartStore } from "~/stores/cart";

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
  additionalInfo: string; // Yeni yazıyı tutacak alan
}

export default defineComponent({
  name: "YeniUrunler",
  setup() {
    const cartStore = useCartStore();

    const products = ref<Product[]>([
      {
        id: "1",
        name: "Yılbaşı Keçe Sepeti",
        image: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/6991342552_yilbasi-kece-sepeti.webp",
        price: "595,00 TL",
        quantity: 1,
        additionalInfo: "Yılbaşı özel!",
      },
      {
        id: "2",
        name: "İleri Dönüşüm Omuz Çantası",
        image: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/0b310822d8_ileri-donusum-omuz-cantasi.webp",
        price: "870,00 TL",
        quantity: 2,
        additionalInfo: "İleri Dönüşüm Projesi!",
      },
      {
        id: "3",
        name: "İleri Dönüşüm El Çantası",
        image: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/13f7aaf63f_ileri-donusum-el-cantasi.webp",
        price: "370,00 TL",
        quantity: 3,
        additionalInfo: "İleri Dönüşüm Projesi!",
      },
      {
        id: "4",
        name: "İleri Dönüşüm Laptop Çantası",
        image: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/8a5456acec_ileri-donusum-laptop-cantasi.webp",
        price: "850,00 TL",
        quantity: 4,
        additionalInfo: "İleri Dönüşüm Projesi!",
      },
      {
        id: "5",
        name: "24'lü Sütlü Gofrik",
        image: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/13.330.3030.0072-1.png",
        price: "570,00 TL",
        quantity: 1,
        additionalInfo: "%23 Boz Antep Fıstıklı",
      },
      {
        id: "6",
        name: "2'li Filtre Kahve 250g",
        image: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/78ddef0162_2li-filtre-kahve-250g.webp",
        price: "370,00 TL",
        quantity: 2,
        additionalInfo: "Bez Filtre Hediye!",
      },
      {
        id: "7",
        name: "Granola Müsli Fındık Kreması",
        image: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/552d5_3lu_Set_Granola_Musli_Findik_Kremasi.jpg",
        price: "600,00 TL",
        quantity: 3,
        additionalInfo: "Bez Filtre Hediye!",
      },
      {
        id: "8",
        name: "Yöresel Filtre Kahve Deneme Seti",
        image: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/94317_5li_Yoresel_Filtre_Kahve_Deneme_Seti_80g.jpg",
        price: "300,00 TL",
        quantity: 4,
        additionalInfo: "Bez Filtre Hediye!",
      },
      {
        id: "9",
        name: "Badem Ezmesi Sütlü 225 gr",
        image: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/2c4f1_Badem_Ezmesi_Sutlu_225_gr.jpg",
        price: "405,00 TL",
        quantity: 2,
        additionalInfo: "Bez Filtre Hediye!",
      },
      {
        id: "10",
        name: "Bitter Çikolata Kaplı Çubuk",
        image: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/da7fd_Bitter_Cikolata_Kapli_Cubuk_Portakal_250g.jpg",
        price: "730,00 TL",
        quantity: 3,
        additionalInfo: "Bez Filtre Hediye!",
      },
    ]);

    const currentIndex = ref(0);

    const visibleProducts = computed(() => {
      // Sadece currentIndex'ten başlayarak 4 ürün görüntülenir
      return products.value.slice(currentIndex.value, currentIndex.value + 4);
    });

    const addToCart = (product: Product) => {
      cartStore.addToCart(product);
    };

    const nextSlide = () => {
      if (currentIndex.value < products.value.length - 4) {
        currentIndex.value++;
      } else {
        currentIndex.value = 0; // İlk başa döner
      }
    };

    const prevSlide = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      } else {
        currentIndex.value = products.value.length - 4; // Son gruba geçer
      }
    };

    return {
      products,
      addToCart,
      currentIndex,
      visibleProducts,
      nextSlide,
      prevSlide,
    };
  },
});
</script>

<style scoped>
.new-products-heading {
  font-family: 'Arial', sans-serif; 
  font-size: 1.2rem; 
  /*font-weight: bold; */
  color: #333; 
  text-align: center;
  margin-bottom: 5px; 
  text-transform: capitalize; 
}
.heading-underline {
  width: 7%; 
  height: 3px; /* Çizgi kalınlığı */
  background-color: #333; 
  margin: 0 auto 20px; 
}
.carousel-container {
  position: relative;
  width: 85%;
  overflow: hidden;
  margin: 0 auto; 
}

.carousel-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 sütunlu düzen */
  gap: 2px; /* Ürünler arasındaki boşluk */
  justify-items: center; /* Ürünlerin ortalanması için */
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  width: 85%;
  flex-shrink: 0;
}

.card {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  text-align: center;
  border: none; /* Çerçeveyi kaldırdık */
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-image {
  position: relative;
  flex-grow: 1;
}

.card-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .overlay {
  opacity: 1;
}



.product-details {
  padding: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Butonu alt tarafa itmeye yarar */
}

.product-name {
  font-size: 15px;
  font-weight: bold;
  margin-top: 1px;
}

.product-price {
  font-size: 16px;
  color: #b60a0a;
  font-weight: bold;
  margin-bottom: 1px;
}

.additional-info {
  background-color: #f0e45e;
  padding: 0.3px; 
  font-size: 11px; 
  font-weight: bold;
  color: #7e0808;
  margin-bottom: 1px;
}

.add-to-cart-btn {
  padding: 15px 15px; /* Buton iç boşluğu */
  font-size: 20px; /* Yazı boyutu */
  color: #011e08; /* Yeşil yazı rengi */
  background-color: transparent; /* Arka planı boş */
  border: 1px solid #011e08; /* Yeşil çerçeve */
  cursor: pointer; /* Tıklanabilir işaretçi */
  transition: all 0.3s ease-in-out; /* Hover animasyonu */
  margin-top: auto; /* Butonun daha yukarıda olmasını sağladık */
 /*  margin-bottom: 1px; Butonun altındaki boşluk */
}

.add-to-cart-btn:hover {
  background-color: #011e08; /* Arka planı yeşil yap */
  color: #fff; /* Yazı rengini beyaz yap */
  border-color: #011e08; /* Çerçeve rengini koru */
}

.carousel-controls {
  position: absolute;
  top: 50%;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.prev, .next {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 50%;
}

.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
