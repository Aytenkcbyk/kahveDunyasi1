<template>
    <div class="layout-container">
        <!-- Sol Taraf: Navigation Bar -->
        <nav class="nav-bar" :class="{ expanded: isNavOpen }">
            <button class="toggle-button" @click="toggleNav">
                {{ isNavOpen ? "← Kapat" : "Menü" }}
            </button>
            <div v-if="isNavOpen" class="nav-buttons">
                <button v-for="(button, index) in buttons" :key="index" @click="setActiveComponent(index)">
                    {{ button }}
                </button>
            </div>
        </nav>

        <!-- Sağ Taraf: Main Content -->
        <main class="main-bar">
            <component v-for="(component, index) in components" :key="index" :is="component"
                v-show="activeComponent === index" />
        </main>
    </div>
</template>

<script setup lang="ts">
import Giris from '~/components/TheGiris.vue';
import Menu from '~/components/TheMenu.vue';
import TheSepet from '~/components/TheSepet.vue';
import TheComp4 from '~/components/TheComp4.vue';
import TheComp5 from '~/components/TheComp5.vue';
import TheKoleksiyon from '../components/TheKoleksiyon.vue';
import TheOzellikler from '../components/TheOzellikler.vue';
import TheBlog from '../components/TheBlog.vue';
import TheCookies from '../components/TheCookies.vue';
import YeniUrunler from '../components/YeniUrunler.vue';

import { ref } from 'vue';

const activeComponent = ref(0);
const isNavOpen = ref(false); // Menü başlangıçta kapalı
const buttons = Array.from({ length: 10 }, (_, i) => `Button ${i + 1}`);
const components = [Giris, Menu, TheSepet,TheComp4,TheComp5,TheKoleksiyon,TheOzellikler,TheBlog,TheCookies,YeniUrunler ];

const setActiveComponent = (index: number) => {
    console.log('Tıklanan buton:', index);
    activeComponent.value = index;
};

const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value; // Menü açık/kapalı durumu değişir
};
</script>

<style scoped>
.layout-container {
    display: flex;
    height: 100vh;
}

/* Navigation Bar */
.nav-bar {
    background-color: #f4f4f4;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    transition: width 0.3s ease-in-out;
    /* Geçiş animasyonu */
    width: 60px;
    /* Kapalı halde genişlik */
}

.nav-bar.expanded {
    width: 200px;
    /* Açıldığında genişlik */
}

.nav-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
}

.nav-bar button {
    width: 100%;
    padding: 10px 5px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
}

.nav-bar button:hover {
    background-color: #ddd;
}

.toggle-button {
    font-size: 14px;
    font-weight: bold;
    background: #ccc;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
}

/* Main Content */
.main-bar {
    flex: 1;
    padding: 20px;
    overflow: auto;
}
</style>
