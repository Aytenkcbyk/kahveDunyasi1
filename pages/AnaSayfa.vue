<template>
     <Header1></Header1>
    <TheCookies></TheCookies>
    <TheMenu></TheMenu>
    <TheComp4></TheComp4>
    <YeniUrunler></YeniUrunler>
    <TheKoleksiyon></TheKoleksiyon>
    <TheBlog></TheBlog>
    <TheOzellikler></TheOzellikler>
    <Toof></Toof>
      </template>
  
  <script lang='ts'>
  import Header1 from '~/components/Header1.vue';
  import TheMenu from '~/components/TheMenu.vue';
  import TheComp4 from '~/components/TheComp4.vue';
  import YeniUrunler from '~/components/YeniUrunler.vue';
  import TheCookies from '~/components/TheCookies.vue';
  import TheKoleksiyon from '~/components/TheKoleksiyon.vue';
  import TheBlog from '~/components/TheBlog.vue';
  import TheOzellikler from '~/components/TheOzellikler.vue';
  import Toof from '~/components/Toof.vue';


  

  
  export default {
    components: {
    TheMenu,
    TheComp4,
    YeniUrunler,
    TheKoleksiyon,
    TheBlog,
    TheOzellikler,
    TheCookies
 
}
  };
  </script>
  <style scoped>
  /* TheComp4 bileşeninin stil kısmı */
  .TheComp4 {
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 450px;  /* Kartların üst kısmından belli bir uzaklık bırakma */
  }
  </style>