<template>
  <div class="card-order">
    <h4 class="card-order__title">{{ text }}</h4>
    <select @change="change" name="" id="" class="card-order__drop-down">
      <option value="lancamento">Lançamento</option>
      <option value="a-z">Nome A-Z</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SharedCardOrder',
  props: {
    text: String,
  },
  methods: {
    change(event) {
      this.$emit('changed', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-order {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    justify-content: center;
  }
  width: 95%;
  margin: 25px auto;
  &__title {
    font-weight: bold;
    margin-right: 15px;
    text-transform: uppercase;
  }
  &__drop-down {
    width: 150px;
    border: 2px solid rgba(161, 161, 161, 0.404);
    border-radius: 5px;
    height: 45px;
    font-size: 0.85rem;
    text-indent: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: white url("../assets/icons/sort-down.png") 90% 60% no-repeat;
    &:focus {
      outline: none;
    }
  }
}
</style>
