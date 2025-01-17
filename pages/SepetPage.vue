<template>
  <div>
    <TheSepet :cart="cart" />
    <Toof />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '~/stores/cart';
import Toof from '~/components/Toof.vue';
import TheSepet from '~/components/TheSepet.vue';

export default defineComponent({
  components: {
    TheSepet,
    Toof,
  },
  setup() {
    const cartStore = useCartStore();
    return {
      cart: cartStore.cart,
    };
  },
});
</script>