<template>
  <router-link class="back-title" :to="redirect">
    <font-awesome-icon icon="chevron-left" class="back-title__icon" />
    <span class="back-title__text">{{ text }} </span>
  </router-link>
</template>

<script>
export default {
  name: 'SharedBackTitle',
  props: {
    text: String,
    redirect: {
      type: String,
      default: '/',
    },
  },
};
</script>

<style lang="scss" scoped>
$base-color: #f26f14;

.back-title {
  color: $base-color;
  cursor: pointer;
  text-decoration: none;
  &__icon {
    margin-right: 10px;
  }
}
</style>
