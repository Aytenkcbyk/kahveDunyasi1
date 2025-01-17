<template>
    <div>
        <header>
            <button @click="toggleSidebar">Toggle Sidebar</button>
            <h1>Nuxt App</h1>
        </header>
        <div>
            <Sidebar :links="essentialLinks" v-if="isSidebarVisible" />
            <main>
                <nuxt />
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from '~/components/Sidebar.vue'; // Sidebar'ı oluşturmaya devam edebilirsiniz.

const isSidebarVisible = ref(true);
const essentialLinks = [
    { title: 'Docs 2', link: 'https://.dev' },
    { title: 'Github 2', link: 'https://github.com/' },
    { title: 'Discord Chat', link: 'https://chat.dev' },
    { title: 'Forum 2', link: 'https://forum.dev' },
    { title: 'Twitter 2', link: 'https://twitter.dev' }
];

function toggleSidebar() {
    isSidebarVisible.value = !isSidebarVisible.value;
}
</script>
