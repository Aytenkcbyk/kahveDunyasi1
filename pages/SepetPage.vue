<template>
  <div>
    <Sepet :cart="cart" />
    <Toof />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '~/stores/cart';
import Sepet from '~/components/Sepet.vue';
import Toof from '~/components/Toof.vue';

export default defineComponent({
  components: {
    Sepet,
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