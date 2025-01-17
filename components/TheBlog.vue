<template>
  <div class="carousel-container">
    <div class="carousel" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="carousel-slide" v-for="(slide, index) in slides" :key="index">
        <div class="carousel-item">
          <a :href="slide.link" target="_blank" rel="noopener noreferrer">
            <img 
              :src="slide.src" 
              :alt="slide.alt" 
              :title="slide.title" 
              class="v-lazy-image v-lazy-image-loaded" 
              :style="slide.style" 
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="controls">
      <button @click="prevSlide">←</button>
      <button @click="nextSlide">→</button>
    </div>

    <!-- Navigation -->
    <div class="navigation">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: index === currentSlide }"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: "TheBlog",
  setup() {
    const slides = ref([
      {
        link: "https://www.kahvedunyasi.com/blog/citir-fontetinli-findik-kremasi-137",
        src: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/4f359e60bef5cb35eb27456a830a5df0.jpg",
        alt: "Çıtır Föyetinli Fındık Kreması",
        title: "Çıtır Föyetinli Fındık Kreması",
        style: "width: 100%; height: 100%;",
      },
      {
        link: "https://www.kahvedunyasi.com/blog/kahve-dunyasi-granola-ve-musli-ile-sa%C4%9Fl%C4%B1kli-lezzetler-120",
        src: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/0b2388191140fd32501ec941876a4f81.jpg",
        alt: "Kahve Dünyası Granola ve Müsli ile Sağlıklı Lezzetler",
        title: "Kahve Dünyası Granola ve Müsli ile Sağlıklı Lezzetler",
        style: "width: 100%; height: 100%;",
      },
      {
        link: "https://www.kahvedunyasi.com/blog/seker-ilavesiz-beyaz-cikolatali-ve-granolali-muhallebi-84",
        src: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/0b931b70a50dc41a9dc8fc220b0fcde7.jpg",
        alt: "Şeker İlavesiz Beyaz Çikolatalı ve Granolalı Muhallebi",
        title: "Şeker İlavesiz Beyaz Çikolatalı ve Granolalı Muhallebi",
        style: "width: 100%; height: 100%;",
      },
    ]);

    const currentSlide = ref(0);

    const prevSlide = () => {
      currentSlide.value =
        (currentSlide.value - 1 + slides.value.length) % slides.value.length;
    };

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % slides.value.length;
    };

    const goToSlide = (index: number) => {
      currentSlide.value = index;
    };

    return {
      slides,
      currentSlide,
      prevSlide,
      nextSlide,
      goToSlide,
    };
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-item img {
  border-radius: 10px;
}

.controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.controls button {
  background-color: black;
  color: white;
  border: none;
  padding: 20px;
  cursor: pointer;
}

.navigation {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.navigation span {
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.navigation .active {
  background-color: white;
}
</style>
