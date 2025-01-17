// components/FooterComponent.vue
<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="footer-column">
        <h3>Kahve</h3>
        <ul>
          <li><nuxt-link to="#">Türk Kahvesi</nuxt-link></li>
          <li><nuxt-link to="#">Kapsül Kahveler</nuxt-link></li>
          <li><nuxt-link to="#">Filtre Kahve</nuxt-link></li>
          <li><nuxt-link to="#">Yöresel Kahve</nuxt-link></li>
          <li><nuxt-link to="#">Espresso</nuxt-link></li>
          <li><nuxt-link to="#">Hazır Kahveler</nuxt-link></li>
          <li><nuxt-link to="#">Salep ve Sıcak Çikolata</nuxt-link></li>
          <li><nuxt-link to="#">Şuruplar</nuxt-link></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Çikolata</h3>
        <ul>
          <li><nuxt-link to="#">Kutu Çikolata</nuxt-link></li>
          <li><nuxt-link to="#">Atıştırmalık ve Çikolata</nuxt-link></li>
          <li><nuxt-link to="#">Fit Lezzetler</nuxt-link></li>
          <li><nuxt-link to="#">Çikolata Kaplılar</nuxt-link></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Kampanyalar</h3>
        <ul>
          <li><nuxt-link to="#">Hikayemiz</nuxt-link></li>
          <li><nuxt-link to="#">Üretim</nuxt-link></li>
          <li><nuxt-link to="#">Kurumsal Çözümler</nuxt-link></li>
          <li><nuxt-link to="#">Kariyer</nuxt-link></li>
          <li><nuxt-link to="#">Atölye</nuxt-link></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Yardım</h3>
        <ul>
          <li><nuxt-link to="#">Üyelik</nuxt-link></li>
          <li><nuxt-link to="#">Sipariş İşlemleri</nuxt-link></li>
          <li><nuxt-link to="#">Ödeme İşlemleri</nuxt-link></li>
          <li><nuxt-link to="#">Teslimat Süreci</nuxt-link></li>
          <li><nuxt-link to="#">İade İşlemleri</nuxt-link></li>
          <li><nuxt-link to="#">Ürün Gamı</nuxt-link></li>
          <li><nuxt-link to="#">Teknik Konular</nuxt-link></li>
          <li><nuxt-link to="#">İletişim</nuxt-link></li>
          <li><nuxt-link to="#">Bilgi Toplumu Hizmetleri</nuxt-link></li>
        </ul>
      </div>
      <div class="footer-column contact">
        <h3>Bize Yazın</h3>
        <p>Öneri ve şikayetleriniz için mesaj bırakın</p>
        <button class="contact-button">Mesaj Yaz</button>
      </div>
    </div>
    <div class="footer-bottom">
      <nuxt-link to="#">Çağrı Merkezi Aydınlatma Metni</nuxt-link>
      <nuxt-link to="#">Çerez Politikası</nuxt-link>
      <nuxt-link to="#">Üyelik Sözleşmesi</nuxt-link>
      <div class="footer-icons">
        <nuxt-link to="#">Favorilerim</nuxt-link>
        <nuxt-link to="#">Mağazalar</nuxt-link>
        <nuxt-link to="#">Sipariş Takibi</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Gerekirse script özelliklerini buraya ekleyebilirsiniz.
</script>

<style scoped>
.footer {
  background-color: #750B40;
  color: white;
  padding: 2rem;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.footer-column {
  flex: 1;
  margin-right: 1.5rem;
}

.footer-column h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column li {
  margin-bottom: 0.5rem;
}

.footer-column a {
  color: white;
  text-decoration: none;
}

.footer-column a:hover {
  text-decoration: underline;
}

.contact {
  max-width: 200px;
}

.contact-button {
  background-color: #FFD700;
  border: none;
  color: black;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
}

.footer-icons a {
  margin-left: 1.5rem;
}
</style>