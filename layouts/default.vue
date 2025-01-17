<template>
    <div>
        <header>
            <button @click="toggleSidebar">Toggle Sidebar</button>
            <h1>Nuxt.js App</h1>
        </header>
        <div>
            <aside v-if="isSidebarVisible">
                <ul>
                    <li v-for="link in componentLinks" :key="link.link">
                        <nuxt-link :to="link.link">{{ link.title }}</nuxt-link>
                    </li>
                </ul>
            </aside>
            <main>
                <nuxt /> <!-- Sayfa içeriği burada yüklenecek -->
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isSidebarVisible = ref(true);
const componentLinks = [
    { title: 'Sepet', link: '/sepet' },
    { title: 'Giriş', link: '/giris' },
    { title: 'Menü', link: '/menu' },
    { title: 'Kahve Çikolata', link: '/comp4' },
    { title: 'Kurumsal Hediyeler', link: '/comp5' }
];

function toggleSidebar() {
    isSidebarVisible.value = !isSidebarVisible.value;
}
</script>

<style scoped>
header {
    background-color: #f1f1f1;
    padding: 20px;
}

aside {
    width: 200px;
    background-color: #e0e0e0;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    margin: 10px 0;
}

main {
    margin-left: 220px;
    padding: 20px;
}
</style>
