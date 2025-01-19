<template>
  <div class="campaign-section">
    <!-- First Campaign Section -->
    <div class="campaign">
      <a href="https://www.kahvedunyasi.com/hediye-gonder">
        <img
          src="https://img-kahvedunyasi.mncdn.com/mncropresize/524/331/kahvedunyasi/static/img/banner/hediye-banner.jpg?=v1"
          alt="Sevdiklerinize en tatlı hediyeler!"
          class="campaign-image"
        />
      </a>
    </div>

    <!-- Second Campaign Section -->
    <div class="campaign">
      <a href="https://www.kahvedunyasi.com/sosyal-sorumluluk-cl-108">
        <img
          src="https://img-kahvedunyasi.mncdn.com/mncropresize/524/331/kahvedunyasi/static/img/banner/hediye-banner-ss.jpg?=v1"
          alt="Çocukların eğitimine destek olun"
          class="campaign-image"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CampaignSection',
};
</script>

<style scoped>
.campaign-section {
  display: flex;
  justify-items: center; /* Ortalanmış */
  align-items: center;
  gap: 60px; /* Kampanyalar arasındaki boşluk azaltıldı */
  padding: 90px;
}

.campaign {
  flex: 1;
  display: flex;
  justify-items: center; /* İçeriği ortaladı */
}

.campaign-image {
  width: 120%; /* Boyut biraz daha büyütüldü */
  height: auto;
  display: block;
  box-shadow: none; /* Gölgeleme kaldırıldı */
}

.campaign-image:hover {
  transform: none; /* Hover efekti kaldırıldı */
}
</style>
