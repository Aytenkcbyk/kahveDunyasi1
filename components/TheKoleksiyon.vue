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
  justify-content: space-between;
  align-items: center;
  gap: 10px; /* Kampanyalar arası boşluk */
  padding: 10px;
}

.campaign {
  flex: 1;
}

.campaign-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px; /* Köşe yuvarlatma */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  transition: transform 0.2s ease-in-out; /* Hover animasyonu */
}

.campaign-image:hover {
  transform: scale(1.05); /* Hover büyütme efekti */
}
</style>
