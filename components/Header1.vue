<template>
  <header class="header">
    <div class="header-top">
      <!-- Top header content -->
    </div>
    <div class="header-main">
      <!-- Arama Yap Section -->
      <div class="search-container" style="margin-left: 100px;">
        <input type="text" placeholder="Arama Yap" class="search-input" />
        <button class="search-button">Ara</button>
      </div>

      <!-- Logo -->
      <div class="logo">
        <img src="../assets/images/logo.svg" alt="Logo" />
      </div>

      <!-- Sağ Taraf -->
      <div class="right-section" style="margin-right: 70px;">
        <div class="menu-item" @click="handleItemClick('Kurumsal Hediyeler')" style="color: #6c0c33;">
          <img src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/icons/icon-gift-red.svg"
            alt="Kurumsal Hediyeler" class="menu-icon" />
          <nuxt-link to="/Comp5Page" class="nav-item" style="color: #6c0c33; text-decoration: none;">Kurumsal
            Hediyeler</nuxt-link>
        </div>
        <div class="menu-item" @click="handleItemClick('Giriş Yap')" style="color: #6c0c33;">
          <img src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/icons/icon-user.svg" alt="Giriş Yap"
            class="menu-icon" />
          <nuxt-link to="/TheGirisPage" class="nav-item"
            style="color: #6c0c33; text-decoration: none;">Giriş</nuxt-link>
        </div>
        <div class="menu-item" @click="handleItemClick('Sepet')" style="color: #6c0c33;">
          <img src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/icons/icon-basket.svg" alt="Sepet"
            class="menu-icon" />
          <nuxt-link to="/SepetPage" class="nav-item" style="color: #6c0c33; text-decoration: none;">Sepet</nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header1',
  methods: {
    handleItemClick(item: string): void {
      console.log('Tıklanan öğe:', item);
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.header-top {
  background-color: #f7f7f7;
  text-align: center;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  color: #333;
}

.header-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.search-container {
  display: flex;
  align-items: center;
  margin-right: auto;
  color: #6c0c33;
  /* Push the search section to the left */
}

.search-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
  width: 220px;
  /* Increase the width of the search input */
}

.search-button {
  background-color: #700;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 0.5rem;
  cursor: pointer;
}

.logo {
  width: 80px;
  height: auto;
  margin: 0 auto;
  /* Center the logo */
}

.right-section {
  display: flex;
  align-items: center;
  margin-left: auto;
  /* Push the right section to the right */
}

.menu-item {
  margin-left: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.menu-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>