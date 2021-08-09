<template>
  <a :href="data.link">
    <img :src="data.icon" :alt="data.alt" class="social-icon" />
  </a>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.social-icon {
  height: 70px;
  width: 70px;
}
</style>