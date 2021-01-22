<template>
  <div class="card-product">
    <div class="card-product__top-info">
      <SharedIcon :name="name" class="card-product__icon" />
      <h4 class="card-product__title">{{ name }}</h4>
      <span class="card-product__description">{{ description }}</span>
    </div>
    <div class="card-product__bottom-info">
      <span class="card-product__value">{{ valorRealFormatado }}</span>
      <router-link :to="'/produto/' + id" class="card-product__more-info"
        >Saiba mais</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SharedCardProduct',
  props: {
    id: Number,
    name: String,
    description: String,
    valor: Number,
  },
  computed: {
    valorRealFormatado() {
      return this.valor.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$base-color: #f26f14;

.card-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  padding: 0;
  width: 300px;
  height: 350px;
  background-color: white;
  border-radius: 5px;
  &__top-info {
    padding: 25px;
    height: 85%;
  }
  &__icon {
    color: $base-color;
    font-size: 2rem;
  }
  &__title {
    color: #444;
    font-size: 1.2rem;
  }
  &__description {
    color: rgba(4, 4, 4, 0.6);
  }
  &__bottom-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background: $base-color;
    width: 100%;
    color: white;
    height: 15%;
    background-image: linear-gradient(39deg, #ff8e49 0%, #f0690a 100%);
    border-radius: 0 0 5px 5px;
  }
  &__value {
    font-size: 1.2rem;
  }
  &__more-info {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
}
</style>
