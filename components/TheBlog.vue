<template>
  <div class="carousel-container">
    <!-- Blog Başlığı -->
    <h1 class="blog-title">Blog</h1>
    <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }">
      <div
        v-for="(blog, index) in blogs"
        :key="index"
        class="carousel-item"
      >
        <img :src="blog.imageUrl" :alt="blog.title" class="carousel-image" />
        <div class="carousel-content">
          <h3 class="carousel-title">{{ blog.title }}</h3>
          <p class="carousel-description">{{ blog.description }}</p>
          <a href="#" class="carousel-link">Detay</a>
        </div>
      </div>
    </div>
    <div class="carousel-dots">
      <span
        v-for="(blog, index) in blogs"
        :key="index"
        class="dot"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Carousel",
  setup() {
    interface Blog {
      imageUrl: string;
      title: string;
      description: string;
    }

    const blogs = ref<Blog[]>([
      {
        imageUrl: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/cacaonly_410x589_1.jpg",
        title: "BİZDEN HABERLER",
        description: "Kakao Meyvesinin Eşsiz Suyunu Denediniz mi? Kahve Dünyası'ndan Türkiye'de Bir İlk: Cacaonly!",
      },
      {
        imageUrl: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/7046d31ff2d5352f341dbe238a874a1d.jpg",
        title: "ÇİKOLATA",
        description: "Kahve Dünyası'ndan türünün ilk ve tek örneği",
      },
      {
        imageUrl: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/4f359e60bef5cb35eb27456a830a5df0.jpg",
        title: "BİZDEN HABERLER",
        description: "Çıtır Föyetinli Fındık Kreması",
      },
      {
        imageUrl: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/0b2388191140fd32501ec941876a4f81.jpg",
        title: "TARİF",
        description: "Kahve Dünyası Granola ve Müsli ile Sağlıklı Lezzetler",
      },
      {
        imageUrl: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/0b931b70a50dc41a9dc8fc220b0fcde7.jpg",
        title: "TARİF",
        description: "Şeker İlevesiz Beyaz Çikolatalı ve Granolalı Muhallebi",
      },
      {
        imageUrl: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/4e2f7c16725754d99308ef8cdeade6cd.jpg",
        title: "BİZDEN HABERLER",
        description: "Kahve Dünyası Algötür Tekne",
      },
      {
        imageUrl: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/905200ac32f75a79448aba002b9410c6.jpg",
        title: "TARİF",
        description: "Colombia Espresso Kapsülü ile Mocha",
      },
      {
        imageUrl: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/963d4845d78defe8f6b69062d2986d75.jpg",
        title: "BİZDEN HABERLER",
        description: "Kahve Dünyası'na en iyi kahve Kategorisi'nde AYD Ödülü",
      },
      {
        imageUrl: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/164b86673fce4a244c74c5406fc5e92a.jpg",
        title: "KAHVE",
        description: "Kahve Keyfinin Tamamlayıcıları: Termos ve Aksesuarlar",
      },
      {
        imageUrl: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/796d9f0220ecfa0a140044ad237125d1.jpg",
        title: "TARİF",
        description: "Fındık Aromalı Filtre Kahve ile Macchiato",
      },
    ]);

    const currentIndex = ref(0);

    const goToSlide = (index: number) => {
      currentIndex.value = index;
    };

    return {
      blogs,
      currentIndex,
      goToSlide,
    };
  },
};
</script>

<style scoped>
.blog-title {
  font-family: 'Arial', sans-serif;
  text-align: center;
  font-size: 2.9rem;
  font-weight: bold;
  margin-bottom: 25px;
  color: #333;
}

.carousel-container {
  width: 85%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  margin: 0 auto; 
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
  justify-items: center;
}

.carousel-item {
  flex: 0 0 calc(33.33% - 20px); /* Ekranda 3 resim */
  margin: 0 10px;
  position: relative;
}

.carousel-image {
  width: 100%;
  height: auto;
  display: block;
  filter: brightness(0.9);
  transition: filter 0.3s ease-in-out;
}

.carousel-content {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  padding: 10px;
}

.carousel-title {
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 40px;
}

.carousel-description {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 100px;
}

.carousel-link {
  font-size: 0.9rem;
  color: #fff;
  text-decoration: underline;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.dot {
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: #333;
}
</style>
