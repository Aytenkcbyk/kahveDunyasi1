<template>
    <div>
        <!-- Başlık -->
        <div class="header">
            <div class="header-background"></div>
            <div class="header-content">
                <h1>Kurumsal Hediye</h1>
            </div>
        </div>

        <!-- Açıklama Metni -->
        <p class="header-description">
            Kurumsal Hediyeler İçin Kahve Dünyası Lezzetleri Harika Bir Seçenek! <br /><br />
            Kurumsal firmalara özel fiyat avantajlarıyla, birbirinden farklı Kahve Dünyası
            lezzetleri hakkında bilgi almak için çikolata kataloğumuza
            <a href="#" class="link">buradan</a>, kahve kataloğumuza
            <a href="#" class="link">buradan</a> göz atabilirsiniz. Özel günler ve bayramlarda,
            müşterilerinizi veya çalışanlarınızı mutlu edecek hediye alternatiflerini size
            anlatabilmemiz için aşağıdaki formu doldurarak bize ulaşabilirsiniz.
        </p>

        <!-- Form Alanı -->
        <div class="form-container">
            <form @submit.prevent="handleSubmit">
                <input v-model="formData.name" type="text" placeholder="İsim" required />
                <input v-model="formData.surname" type="text" placeholder="Soyisim" required />
                <input v-model="formData.phone" type="tel" placeholder="Telefon" required />
                <input v-model="formData.email" type="email" placeholder="E-posta" required />
                <input v-model="formData.companyName" type="text" placeholder="Firma İsmi" required />

                <label class="checkbox-container">
                    <input v-model="formData.specialBox" type="checkbox" />
                    <span>Özel kutu tasarımı istiyorum.</span>
                </label>

                <p class="info-text">
                    Özel kutu tasarım isteği minimum 1.000 adet olan siparişlerde geçerlidir.
                </p>

                <textarea v-model="formData.message" placeholder="Mesajınızı yazın" maxlength="1000"
                    @input="updateCharacterCount"></textarea>
                <p class="character-counter">{{ remainingCharacters }} karakter kaldı</p>

                <label class="checkbox-container">
                    <input v-model="formData.dataProcessingConsent" type="checkbox" required />
                    <span>Kişisel verilerimin aydınlatma metninde belirtilen işleme amaçlarıyla yurtdışına aktarılmasına
                        açık rızamla kabul ediyorum.</span>
                </label>

                <p class="info-text">
                    Bu sayfadaki bilgiler sizinle iletişime geçebilmek için alınmaktadır.
                    <a href="#">Kişisel verilerin Korunması Kanunu Aydınlatma Metni</a>'ni buradan okuyabilirsiniz.
                </p>

                <div class="captcha-container">
                    <!-- CAPTCHA alanı -->
                    <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?...&amp;hl=tr"
                        frameborder="0" scrolling="no"></iframe>
                </div>

                <button type="submit">GÖNDER</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: "",
                surname: "",
                phone: "",
                email: "",
                companyName: "",
                specialBox: false,
                message: "",
                dataProcessingConsent: false,
            },
            maxCharacters: 1000,
        };
    },
    computed: {
        remainingCharacters() {
            return this.maxCharacters - this.formData.message.length;
        },
    },
    methods: {
        updateCharacterCount() {
            // Karakter sayacını güncellemek için
        },
        handleSubmit() {
            console.log("Form gönderildi:", this.formData);
            // Form gönderim işlemleri burada yapılabilir
        },
    },
};
</script>

<style scoped>
/* Başlık Stilleri */
.header {
    position: relative;
    width: 100%;
    height: 145px;
    color: white;
    text-align: center;
}

.header-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #69042d;
    opacity: 0.8;
}

.header-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.header-description {
    text-align: center;
    color: #6c0c33;
    font-size: 24px;
    font-family: Gotham-Light, sans-serif;
    margin: 20px auto;
}

/* Form Stilleri */
.form-container {
    max-width: 550px;
    margin: 20px auto;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

textarea {
    resize: none;
}

.checkbox-container {
    display: flex;
    align-items: center;
    margin: 10px 0;
}

.checkbox-container span {
    margin-left: 10px;
    font-family: Gotham-Medium, sans-serif;
    font-size: 14px;
}

.info-text {
    font-size: 14px;
    color: #333;
    margin: 10px 0;
}

.captcha-container {
    margin: 20px 0;
}

button {
    display: block;
    width: 100%;
    background-color: #005e5c;
    color: white;
    font-size: 16px;
    padding: 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #004f4e;
}
</style>
