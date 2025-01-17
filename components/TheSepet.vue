<template>
    <div>
        <!-- Üst Kısım (Kargo Mesajı) -->
        <div class="cart-header">
            <div class="cart-header-content">
                <img src="/assets/images/cargo-car.png" alt="Kargo Arabası" class="cart-header-image" />
                <a href="#" class="free-shipping-link">
                    <strong>&nbsp; &nbsp; 500 TL VE ÜZERİ SİPARİŞLERİNİZDE KARGO BEDAVA</strong>
                </a>
            </div>
        </div>

        <!-- Ek Bölüm -->
        <div class="additional-section">
            <div class="link-wrapper">
                <i class="fas fa-arrow-left"></i>
                <!-- Font Awesome sol ok ikonu -->
                <nuxt-link to="/comp3" class="back-to-shopping-link">Alışverişe Dön</nuxt-link>
            </div>
            <a href="#" class="logo-container">
                <img src="/assets/images/logo.svg" alt="Logo" class="logo-image" />
            </a>
            <img src="/assets/images/guvenliodeme.png" alt="Güvenli Ödeme" class="secure-payment-image" />
        </div>

        <!-- Boş Sepet Durumu -->
        <div class="empty-cart" v-if="isCartEmpty">
            <p>
                Sepetinizde herhangi bir ürün bulunmamaktadır. <br />
                Alışverişe devam etmek için
                <nuxt-link to="/comp3" class="continue-shopping-link">tıklayınız.</nuxt-link>
            </p>
        </div>

        <!-- Alt Sol Köşe Resmi -->
        <a href="#" class="bottom-left-image">
            <img src="/assets/images/cerez.jpeg" alt="Alt Sol Köşe Resmi" class="corner-image" />
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "CartHeader",
    props: {
        totalPrice: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        // Sepetin boş olup olmadığını kontrol etmek için bir değişken
        const isCartEmpty = ref(true); // Sepet boş olduğunu varsayalım
        const freeShippingThreshold = 500; // Bedava kargo eşik değeri
        const freeShipping = ref(props.totalPrice >= freeShippingThreshold);

        return {
            isCartEmpty,
            freeShipping,
        };
    },
});
</script>

<style scoped>
/* Üst Kısım (Kargo Mesajı) */
.cart-header {
    background-color: #f7f8f9;
    padding: 20px;
}

.cart-header-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.cart-header-image {
    max-width: 32px;
    max-height: 20px;
}

.free-shipping-link {
    text-decoration: none;
    color: #005e5c;
    font-weight: 530;
    font-family: Gotham-Bold, sans-serif;
}

/* Ek Bölüm */
.additional-section {
    background-color: #ffffff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.link-wrapper {
    display: flex;
    align-items: center;
}

.back-to-shopping-link {
    text-decoration: none;
    margin-left: 5px;
    color: #6c0c33;
}

.logo-image {
    width: 92.5px;
    height: 92.5px;
}

.secure-payment-image {
    max-width: 150px;
    max-height: 40.44px;
}

/* Boş Sepet Durumu */
.empty-cart {
    background-color: #f7f8f9;
    padding: 20px;
    text-align: center;
    font-family: Gotham-Book, sans-serif;
    font-size: 15px;
    height: 220px;
}

.continue-shopping-link {
    text-decoration: none;
    color: black;
}

.continue-shopping-link:hover {
    text-decoration: underline;
}

/* Alt Sol Köşe Resmi */
.bottom-left-image {
    position: fixed;
    width: 42.5px;
    height: 42.5px;
    bottom: 10px;
    left: 10px;
}

.corner-image {
    width: 100%;
    height: 100%;
}
</style>
