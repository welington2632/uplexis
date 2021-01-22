<template>
  <button
    @click="handleClick"
    class="menu-item"
    v-bind:class="{ 'menu-item--active': active }"
  >
    <SharedIcon class="menu-item__icon" :name="name" />
    <span class="menu-item__name">{{ name }}</span>
  </button>
</template>

<script>
export default {
  name: 'SharedMenuItem',
  props: {
    name: String,
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      icon: String,
    };
  },
  methods: {
    handleClick() {
      this.$emit('itemSelecionado', this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  flex: 1 1 0px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.95rem;
  background-color: transparent;
  border: 1px solid #ececec;
  color: #696969;
  cursor: pointer;
  &--active {
    background: #f26f14;
    color: white;
    border-radius: 5px;
    box-shadow: 0 0 3px rgba(0, 0, 5, 0.3);
  }
  &:focus {
    outline: none;
  }
  &__icon {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
}
</style>
