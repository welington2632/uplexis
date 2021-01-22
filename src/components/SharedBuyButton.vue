<template>
  <button
    class="buy-button"
    v-bind:class="{ 'buy-button--disabled': haveProduct }"
    @click="clickBuy"
  >
    {{ text }}
  </button>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'SharedBuyButton',
  props: {
    product: Object,
  },
  data() {
    return {
      text: 'Habilitar',
      haveProduct: false,
    };
  },
  computed: { ...mapState(['avaiableProducts']) },
  methods: {
    ...mapActions(['pushProduct']),
    clickBuy() {
      if (!this.haveProduct) this.pushProduct(this.product);
      this.verifyAvaibleProducts();
    },
    verifyAvaibleProducts() {
      const product = this.avaiableProducts.find(
        (element) => element.id === this.product.id,
      );
      this.haveProduct = !(product === undefined);
    },
  },
  watch: {
    haveProduct(newValue) {
      this.text = newValue === true ? 'Habilitado' : 'Habilitar';
    },
  },
  mounted() {
    this.verifyAvaibleProducts();
  },
};
</script>

<style lang='scss' scoped>
.buy-button {
  background-image: linear-gradient(39deg, #ff8e49 0%, #f0690a 100%);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  &--disabled {
    background-image: linear-gradient(
      39deg,
      rgb(172, 172, 172),
      rgb(129, 129, 129)
    );
    font-weight: normal;
  }
  &:focus {
    outline: none;
  }
}
</style>
