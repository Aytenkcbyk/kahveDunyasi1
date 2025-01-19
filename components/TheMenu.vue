<template>
  <div class="main-content">
    <div class="menu">
      <!-- Menü Bileşeni -->
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        @click="handleItemClick(item)"
        :class="{
          'menu-item': true,
          'special-item': item === 'YILBAŞI ÖZEL',
          'green-text': item === 'DONDURMA',
          dropdown: item === 'KAHVE',
        }"
      >
        <img
          v-if="item === 'YILBAŞI ÖZEL'"
          src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/icons/menu/tree2.gif"
          alt="Yılbaşı özel"
          class="menu-icon"
        />
        <img
          v-if="item === 'DONDURMA'"
          src="../assets/images/dondurma.svg"
          alt="Dondurma"
          class="menu-icon"
        />

        <img
          v-if="item === 'HAKKIMIZDA'"
          src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/icons/menu/hakkimizda.svg"
          alt="Hakkımızda"
          class="menu-icon"
        />
        {{ item }}
        <div v-if="item === 'KAHVE'" class="dropdown-content">
          <!-- Add your dropdown menu items here -->
          <a
            style="font-size: 12px"
            href="https://www.kahvedunyasi.com/turk-kahvesi-c-3400"
          >
            <img
              src="../assets/images/turk_kahvesi.svg"
              alt="Türk Kahvesi"
              style="width: 50px; height: 50px; top: 1px"
            />
            TÜRK KAHVESİ</a
          >
          <a href="https://www.kahvedunyasi.com/filtre-kahve-c-3401">
            <img
              src="../assets/images/filtre_kahve.svg"
              alt="Filtre Kahve"
              style="width: 50px; height: 50px; top: 1px"
            />
            FİLTRE KAHVE</a
          >
          <a href="https://www.kahvedunyasi.com/yoresel-kahve-c-3402">
            <img
              src="../assets/images/yoresel_kahve.svg"
              alt="Yöresel Kahve"
              style="width: 50px; height: 50px; top: 1px"
            />
            YÖRESEL KAHVE</a
          >
          <a href="https://www.kahvedunyasi.com/espresso-c-3403">
            <img
              src="../assets/images/espresso.svg"
              alt="Espresso"
              style="width: 50px; height: 50px; top: 1px"
            />
            ESPRESSO</a
          >
          <a href="https://www.kahvedunyasi.com/hazir-kahveler-c-3404">
            <img
              src="../assets/images/hazir_kahve.svg"
              alt="Hazır Kahve"
              style="width: 50px; height: 50px; top: 1px"
            />
            HAZIR KAHVELER</a
          >
          <a href="https://www.kahvedunyasi.com/salep-ve-sicak-cikolata-c-3405">
            <img
              src="../assets/images/sahlep_sicakcikolata.svg"
              alt="Salep ve Sıcak Çikolata"
              style="width: 50px; height: 50px; top: 1px"
            />
            SALEP VE SICAK ÇİKOLATA</a
          >
          <a href="https://www.kahvedunyasi.com/suruplar-c-3406">
            <img
              src="../assets/images/surup.svg"
              alt="Şuruplar"
              style="width: 50px; height: 50px; top: 1px"
            />
            ŞURUPLAR</a
          >
        </div>
      </div>
    </div>

    <!-- Slider Bileşeni -->
    <div class="carousel-container">
      <div class="carousel" :style="{ transform: 'translateX(-' + (slide - 1) * 100 + '%)' }">
        <div class="carousel-item" v-for="(item, index) in slides" :key="index">
          <a :href="item.link" target="_blank" rel="noopener noreferrer">
            <img :src="item.src" :alt="item.alt" />
          </a>
        </div>
      </div>
      <div class="controls">
        <button @click="prevSlide">←</button>
        <button @click="nextSlide">→</button>
      </div>
      <div class="navigation">
        <span
          v-for="(item, index) in slides"
          :key="index"
          @click="goToSlide(index + 1)"
          :class="{ active: index + 1 === slide }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      menuItems: [
        'YILBAŞI ÖZEL',
        'DONDURMA',
        'KAHVE',
        'ÇİKOLATA',
        'AKSESUAR',
        'PASTACILIK',
        'KAMPANYALAR',
        'HAKKIMIZDA',
      ],
      slide: 1, // Varsayılan slider başlangıç
      slides: [
        {
          src: '/images/1.jpg',
          alt: 'Slide 1',
          link: 'https://www.kahvedunyasi.com/yilbasi-ozel-cl-195',
        },
        {
          src: '/images/2.jpg',
          alt: 'Slide 2',
          link: 'https://www.kahvedunyasi.com/arama/Rochetta',
        },
        {
          src: '/images/3.jpg',
          alt: 'Slide 3',
          link: 'https://www.kahvedunyasi.com/arama/%C3%87%C4%B1t%C4%B1r%20Ceviz',
        },
        {
          src: '/images/4.jpg',
          alt: 'Slide 4',
          link: 'https://www.kahvedunyasi.com/sonbahar-lezzetleri-cl-174',
        },
        {
          src: '/images/5.jpg',
          alt: 'Slide 5',
          link: 'https://www.kahvedunyasi.com/yilbasi-ozel-cl-195',
        },
      ],
    };
  },
  methods: {
    handleItemClick(item: string): void {
      console.log('Tıklanan öğe:', item);
    },
    prevSlide() {
      this.slide = this.slide - 1 < 1 ? this.slides.length : this.slide - 1;
    },
    nextSlide() {
      this.slide = this.slide + 1 > this.slides.length ? 1 : this.slide + 1;
    },
    goToSlide(index: number) {
      this.slide = index;
    },
  },
};
</script>

<style scoped>
/* Menü Stil */
.menu {
  display: flex;
  justify-content: flex-start; /* Öğeleri eşit aralıklarla yerleştir */
  align-items: center; /* Dikeyde ortalamak için */
  height: 70px; /* Yüksekliği arttırarak daha rahat görünmesini sağlıyoruz */
  padding: 20px 10px; /* Menü elemanları arasında boşluk bırak */
  margin-bottom: 0.5px;
  margin-left: 100px;
}


.menu-item {
  padding: 10px 8px; /* Daha küçük padding ile menü öğelerini yerleştir */
  cursor: pointer;
  margin-right: 50px; /* Menü öğeleri arasındaki boşluğu arttır */
  display: flex;
  align-items: center;
  font-size: 13px;
  position: relative;
}

.menu-item:hover {
  background-color: white;
  color: #9a385f;
}

.special-item {
  color: #e9255d;
}

.green-text {
  color: #00ccc2;
}

.menu-icon {
  width: 24px;
  margin-right: 5px;
}

/* Slider Stil */
.carousel-container {
  position: relative;
  width: 100%; /* Genişlik küçültüldü */
  max-width: 1200px; /* Maksimum genişlik ayarlandı */
  height: 650px; /* Daha küçük bir yükseklik belirlendi */
  overflow: hidden;
  margin: 10px auto; /* Slider'ı yatayda ve dikeyde ortaladı */
  border-radius: 10px; /* Hafif köşeler için */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Hafif gölge eklendi */
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel-item img {
  width: 100%;
  height: 600px; /* Dikeyde 70px uzattım */
  object-fit: contain;
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
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px;
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

/* Dropdown Menü Tasarımı */
.dropdown-content {
  display: flex; /* Öğeleri yatayda hizalar */
  flex-direction: row;
  position: absolute; /* Sabit yerine mutlak konum kullan */
  top: 100%; /* Menü öğesinin hemen altında olacak şekilde hizala */
  left: -360px;
  right: 0; /* Kapsayıcıyı sağa sola göre hizala */
  background-color: #800000;
  width: 82vw;
  color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 20px 10px;
  z-index: 1000;
  justify-content: space-around; /* Öğeleri yatayda eşit aralıklarla yerleştir */
  gap: 0.1px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
}

.menu-item:hover .dropdown-content {
  display: flex; /* Yatayda görünmesini sağla */
  opacity: 1;
  visibility: visible;
}

/* Menü öğelerinin üzerine gelindiğinde yazı rengi sarı olacak */
.dropdown-content a {
  display: flex;
  flex-direction: column; /* İkon ve yazıyı dikey olarak hizala */
  align-items: center; /* Merkezi hizalama */
  text-decoration: none;
  color: white; /* Başlangıçta yazı rengi beyaz */
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s ease, color 0.3s ease; /* Renk değişimi ekledik */
  text-align: center; /* Yazıyı ortala */
}

/* Menü öğesi üzerine gelindiğinde arkaplan rengini değiştirme, sadece yazı rengi sarı olacak */
.dropdown-content a:hover {
  background-color: transparent; /* Arkaplan rengini değiştirmiyoruz */
  color: yellow; /* Yazıyı sarı yap */
}
</style>