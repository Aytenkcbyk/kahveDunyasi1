<template>
    <Header1></Header1>
    <GirisHead></GirisHead>
    <TheGiris></TheGiris>
    <Toof></Toof>

  </template>
  
  <script lang='ts'>
  import Header1 from '~/components/Header1.vue';
  import GirisHead from '~/components/GirisHead.vue';
  import TheGiris from '~/components/TheGiris.vue';
  import Toof from '~/components/Toof.vue';  

  export default {
    components: {
    Header1,
    GirisHead,
    TheGiris,
    Toof

}
  };
  </script>
  
  