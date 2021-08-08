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
  height: 75px;
  width: 75px;
}
</style>