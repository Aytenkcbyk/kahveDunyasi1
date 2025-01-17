// components/HeaderComponent.vue
<template>
  <header class="header">
    <div class="header-top">
      <div class="free-shipping">
        750 TL ve üzeri siparişlerinizde kargo bedava!
      </div>
    </div>
    <div class="header-main">
      <div class="search-container">
        <input type="text" placeholder="Arama Yap" class="search-input" />
        <button class="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
            <path d="M10 2a8 8 0 0 1 6.32 12.906l4.387 4.387a1 1 0 0 1-1.414 1.414l-4.387-4.387A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12z" />
          </svg>
        </button>
      </div>
        <img src="~/assets/images/logo.svg" alt="Logo" class="logo" />
      <div class="nav-links">
        <nuxt-link to="/Comp5Page" class="nav-item">Kurumsal Hediyeler</nuxt-link>
        <nuxt-link to="/TheGirisPage" class="nav-item">Giriş</nuxt-link>
        <nuxt-link to="/SepetPage" class="nav-item">Sepet</nuxt-link>
      </div>
    </div>
  </header>
</template>


<script setup lang="ts">
// Eğer TypeScript ile özel tipler veya özellikler eklemek istersen buraya ekleyebilirsin
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
}

.search-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
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
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-item {
  color: #700;
  text-decoration: none;
  font-size: 1rem;
}

.nav-item:hover {
  text-decoration: underline;
}
</style>