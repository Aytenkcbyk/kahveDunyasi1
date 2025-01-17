<template>
  <div>
    <!-- Küçük Çerez İkonu -->
    <div class="cookie-icon" @click="showCookieDisclaimer = true">
      <img src="../assets/images/cerez.jpeg" alt="Çerez İkonu" class="icon-image" />
    </div>

    <!-- Çerez Bildirimi -->
    <div v-if="showCookieDisclaimer" class="cookie-disclaimer">
      <div class="col1">
        <a href="https://www.example.com" class="your-class-name">
        </a>
      </div>

      <div class="col">
        <p>
          Size daha iyi bir alışveriş deneyimi sunabilmek için yasal düzenlemelere uygun çerezler (cookies) kullanıyoruz.
          Detaylı bilgi için
          <a href="https://www.kahvedunyasi.com/sozlesmeler/cerez-politikasi-2c04" target="_blank">
            <span class="link">Çerez Politikası</span>
          </a>
          açıklama metnini inceleyebilirsiniz.
        </p>
        <div class="button-group">
          <button @click="manageCookies" class="btn manage">Çerezleri Yönet</button>
          <button @click="rejectAllCookies" class="btn reject">Tümünü Reddet</button>
          <button @click="acceptAllCookies" class="btn accept">Tümünü Kabul Et</button>
        </div>
      </div>

      <div class="col3">
        <button @click="openLiveSupport" class="live-support-btn">Canlı Destek</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showCookieDisclaimer: false, // Çerez bildirimi başlangıçta gizlenir
    };
  },
  methods: {
    manageCookies() {
      alert("Çerez yönetimi açıldı.");
    },
    rejectAllCookies() {
      alert("Tüm çerezler reddedildi.");
      this.showCookieDisclaimer = false; // Bildirimi kapat
    },
    acceptAllCookies() {
      alert("Tüm çerezler kabul edildi.");
      this.showCookieDisclaimer = false; // Bildirimi kapat
    },
    openLiveSupport() {
      alert("Canlı destek açılıyor...");
    },
  },
};
</script>

<style scoped>
/* Küçük çerez ikonu */
.cookie-icon {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  cursor: pointer;
}

.icon-image {
  width: 50px;
  height: 50px;
}

/* Çerez bildirimi stili */
.cookie-disclaimer {
  position: fixed;
  background-color: #6c0c33;
  color: #fff;
  bottom: 20px;
  left: 20px;
  right: 20px;
  padding: 20px;
  font-size: 17px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  z-index: 1001;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.col1 {
  padding-right: 20px;
}

.col {
  flex-grow: 1;
}

.link {
  color: white;
  text-decoration: underline;
}

.button-group {
  margin-top: 10px;
}

.btn {
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
}

.btn.manage {
  background-color: white;
  color: #6c0c33;
}

.btn.reject {
  background-color:white;
  color: #6c0c33;
}

.btn.accept {
  background-color: white;
  color: #6c0c33;
}

.live-support-btn {
  background-color: #43a047;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.live-support-btn:hover {
  background-color: #1565c0;
}
</style>
