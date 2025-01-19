<template>
  <div>
    <TheSepet :cart="cart" />
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '~/stores/cart';
import TheSepet from '~/components/TheSepet.vue';

export default defineComponent({
  components: {
    TheSepet,
  },
  setup() {
    const cartStore = useCartStore();
    return {
      cart: cartStore.cart,
    };
  },
});
</script>