<template>
    <div class="card-container">
        <!-- Kahve Kartı -->
        <div class="card" @click="handleCardClick('coffee')">
            <img src="/assets/images/coffee.jpg" class="card-image" alt="Kahve">
            <div class="card-overlay">
                <img src="/assets/images/coffee.svg" class="card-icon" alt="Kahve Icon">
                <b>&nbsp; Kahve</b>
            </div>
        </div>

        <!-- Çikolata Kartı -->
        <div class="card" @click="handleCardClick('chocolate')">
            <img src="/assets/images/chocolate.jpg" class="card-image" alt="Çikolata">
            <div class="card-overlay">
                <img src="/assets/images/chocolate.svg" class="card-icon" alt="Çikolata Icon">
                <b>&nbsp; Çikolata</b>
            </div>
        </div>

        <!-- Aksesuar Kartı -->
        <div class="card" @click="handleCardClick('accesory')">
            <img src="/assets/images/accesory.jpg" class="card-image" alt="Aksesuar">
            <div class="card-overlay">
                <img src="/assets/images/accesory.svg" class="card-icon" alt="Aksesuar Icon">
                <b>&nbsp; Aksesuar</b>
            </div>
        </div>

        <!-- Fit Lezzetler Kartı -->
        <div class="card" @click="handleCardClick('diet')">
            <img src="/assets/images/diet.jpg" class="card-image" alt="Fit Lezzetler">
            <div class="card-overlay">
                <img src="/assets/images/diet.svg" class="card-icon" alt="Fit Lezzetler Icon">
                <b>&nbsp; Fit Lezzetler</b>
            </div>
        </div>

        <!-- Fırsatlar Kartı -->
        <div class="card" @click="handleCardClick('promo')">
            <img src="/assets/images/promo.jpg" class="card-image" alt="Fırsatlar">
            <div class="card-overlay">
                <img src="/assets/images/promo.svg" class="card-icon" alt="Fırsatlar Icon">
                <b>&nbsp; Fırsatlar</b>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CardComponent',
    setup() {
        const handleCardClick = (imageName: string) => {
            // Kart tıklama işlemleri
            console.log(`Tıklanan kart: ${imageName}`);
        };

        return {
            handleCardClick,
        };
    },
});
</script>

<style scoped>
/* Kart Container */
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
}

/* Kart Genel Stilleri */
.card {
    position: relative;
    width: 100%;
    max-width: 250px;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
}

.card:hover {
    transform: scale(1.05);
}

/* Kart Resmi */
.card-image {
    width: 100%;
    height: auto;
    display: block;
}

/* Kart Üstü Yazı ve İkon */
.card-overlay {
    position: absolute;
    top: 50px;
    right: 50px;
    color: white;
    font-size: 20px;
    font-family: Gotham-Black, sans-serif;
    display: flex;
    align-items: center;
}

.card-icon {
    width: 29px;
}
</style>
