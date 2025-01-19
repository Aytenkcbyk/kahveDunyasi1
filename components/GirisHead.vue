<template>
    <div class="name: 'GirisHead',">
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
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'GirisHead',
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
      };
    },
    methods: {
      handleItemClick(item: string): void {
        console.log('Tıklanan öğe:', item);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Menü Stil */

  .giris-head {
  /* Arka plan resmi ve tonunu artırmak için stil */
  background-image: url('../assets/images/your-background-image.jpg'); /* Arka plan resminizin yolu */
  background-size: cover;
  background-position: center;
  filter: brightness(5); /* Tonu artırmak için parlaklık filtresi */
  height: 30px; /* Yüksekliği ayarlayın */
  width: 50%;
}
  .menu {
    display: flex;
    justify-content: flex-start; /* Öğeleri eşit aralıklarla yerleştir */
    align-items: center; /* Dikeyde ortalamak için */
    height: 70px; /* Yüksekliği arttırarak daha rahat görünmesini sağlıyoruz */
    padding: 20px 10px; /* Menü elemanları arasında boşluk bırak */
    margin-bottom: -0.2px;
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