<template>
  <div class="flex flex-col">
    <span class="text-2xl font-bold mb-4">Projects</span>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <Project
        v-for="(project, index) in projects"
        :key="index"
        v-bind="project"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  async fetch() {
    this.projects = await this.$content("projects")
      .sortBy("date", "desc")
      .where({ hidden: false })
      .fetch();
  },
};
</script>

<style lang="scss" scoped>
</style>