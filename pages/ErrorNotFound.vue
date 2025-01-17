<template>
    <div class="fullscreen error-page">
        <div class="content">
            <div class="status-code">
                404
            </div>
            <div class="message">
                Oops. Nothing here...
            </div>
            <NuxtLink to="/" class="go-home-btn">
                Go Home
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
// Bu bileşende herhangi bir ek işlevsellik yok
</script>

<style scoped>
.fullscreen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #007bff;
    /* Quasar'ın bg-blue sınıfının eşdeğeri */
    color: white;
    text-align: center;
    padding: 1rem;
}

.content {
    text-align: center;
}

.status-code {
    font-size: 30vh;
    font-weight: bold;
}

.message {
    font-size: 1.5rem;
    opacity: 0.6;
}

.go-home-btn {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #007bff;
    background-color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
}

.go-home-btn:hover {
    background-color: #0056b3;
    color: white;
}
</style>