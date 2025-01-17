<template>
    <div class="container">
      <div class="feature-row">
        <div class="feature-item">
          <div class="caption">
            <img
              src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/icons/icon-1.svg"
              alt="Daima Taze"
              class="icon"
            />
            <h2>Daima<br />Taze</h2>
            <p>
              Ürünlerimiz direkt fabrikadan gönderilir, tedarik süreci olmadan taze
              taze hazırlanır.
            </p>
          </div>
        </div>
  
        <div class="feature-item">
          <div class="caption">
            <img
              src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/icons/icon-3.svg"
              alt="Güvenli Taşıma"
              class="icon"
            />
            <h2>Güvenli<br />Taşıma</h2>
            <p>
              Darbeye ve ısı değişimine karşı tam korunma sağlayan özel paketler ile
              gönderilir.
            </p>
          </div>
        </div>
  
        <div class="feature-item">
          <div class="caption">
            <img
              src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/icons/icon-5-v2.svg"
              alt="Çekirdek Puan"
              class="icon"
            />
            <h2>Çekirdek<br />Puan</h2>
            <p>
              Profilinize telefon numaranızı girin, siparişiniz teslim edilince
              Çekirdek kazanın.
            </p>
          </div>
        </div>
      </div>
  
      <div class="download-section">
        <div class="caption">
          <h1>Mobil Uygulamamızı İndirin</h1>
          <p>
            Mobil uygulamamıza özel kampanyalardan yararlanabilmek için uygulamamızı
            indirin.
          </p>
        </div>
        <div class="download-logos">
          <a href="https://play.google.com/store/apps/details?id=com.kahvedunyasi.app&hl=tr_TR&pli=1">
            <img src="../assets/images/google.png" alt="Google Play" class="store-logo" />
          </a>
          <a href="https://apps.apple.com/us/app/kahve-d%C3%BCnyas%C4%B1-%C3%A7ekirdek-kazan/id1364478029">
            <img src="../assets/images/apple.png" alt="Apple Store" class="store-logo" />
          </a>
          <a href="https://appgallery.huawei.com/app/C100896347?sharePrepath=ag&channelId=kahvedunyasi.com&id=d6a728280c304319a0ce47af5da076ba&s=D8C73A1C75463CCAAF75F399E99817574D048927F8138F441D6BD23E242462CB&detailType=0&v=">
            <img src="../assets/images/huawei.png" alt="Huawei Store" class="store-logo" />
          </a>
        </div>
      </div>
  
      <div class="qr-section">
        <div class="qr-image">
          <img src="../assets/images/qr.png" alt="QR Code" class="qr" />
        </div>
        <div class="qr-text">
          <p>Uygulamamızı QR kod ile hemen indirin.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'TheOzellikler',
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  
  .feature-row {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  
  .feature-item {
    text-align: center;
    margin: 20px;
  }
  
  .caption {
    text-align: center;
    margin-top: 10px;
  }
  
  .icon {
    width: 60px;
    height: 60px;
  }
  
  h2 {
    font-weight: bold;
    font-size: 1.7em;
    color: #333;
  }
  
  p {
    color: #666;
  }
  
  .download-section {
    margin-top: 50px;
    text-align: center;
  }
  
  h1 {
    font-weight: bold;
    font-size: 2.7em;
    color: #333;
  }
  
  .download-logos {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .store-logo {
    height: 50px;
  }
  
  .qr-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  
  .qr-image {
    margin-top: 20px;
  }
  
  .qr-text {
    margin-top: 20px;
  }
  </style>
  