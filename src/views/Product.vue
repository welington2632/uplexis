<template>
  <div class="product">
    <img
      src="../assets/banner_2.png"
      alt="product banner"
      class="product__banner"
    />
    <div class="product__content" v-if="product">
      <SharedBackTitle
        v-if="product"
        :text="product.name"
        redirect="/"
        class="product__title"
      />
      <span class="product__description">
        {{ product.description }}
      </span>
      <div class="product__buy-box">
        <span class="product__value">{{ value | formatToReal }} </span>
        <SharedBuyButton class="product__buy-button" :product="product" />
      </div>
    </div>
    <div class="product__not-found" v-else-if="product === undefined">
      <h4 class="product__not-found-title">
        O produto que você está procurando não foi encontrado.
      </h4>
      <SharedBackTitle
        text="Clique aqui para voltar"
        redirect="/"
        class="product__not-found-link"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SharedBackTitle from '../components/SharedBackTitle.vue';
import SharedBuyButton from '../components/SharedBuyButton.vue';

export default {
  name: 'product',
  components: {
    SharedBackTitle,
    SharedBuyButton,
  },
  data() {
    return {
      product: '',
      value: 40,
    };
  },
  methods: {
    fetchproductId(id) {
      // Faz um GET na API para buscar os produtos, logo após ele fazer um filtro do produto que possui o ID disponibilizado na URL
      axios.get('https://demo3241810.mockable.io/sources').then((response) => {
        const products = response.data.sources;
        const filterProduct = products.filter(
          (product) => product.id === Number(id),
        );
        [this.product] = filterProduct;
      });
    },
  },
  mounted() {
    this.fetchproductId(this.$route.params.id);
  },
  filters: {
    // Formatar valor para a moeda REAL
    formatToReal(value) {
      return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        currency: 'BRL',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$base-color: #f26f14;

.product {
  &__banner {
    margin: auto;
    display: block;
    width: 100%;
  }
  &__content {
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  &__title {
    margin: 25px 0;
    display: block;
    font-size: 1.5rem;
  }
  &__description {
    color: #8a8a8a;
    margin: 25px 0;
  }
  &__buy-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__buy-button {
    margin: 25px 0 25px 15px;
    width: 150px;
    font-size: 1.2rem;
  }
  &__value {
    font-weight: normal;
    font-size: 2rem;
    &:before {
      content: "R$";
      font-size: 1rem;
      margin-right: 10px;
    }
  }
}
.product__not-found {
  width: 95%;
  margin: auto;
  &-title {
    font-size: 1.5rem;
    color: #444;
    text-decoration: none;
    font-weight: normal;
  }
}
</style>
