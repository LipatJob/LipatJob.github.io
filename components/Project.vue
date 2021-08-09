<template>
  <div class="border-2 border-gray-700 rounded-lg overflow-hidden" style="margin:-1px;">
    <img :src="thumbnail" alt="" class="" />
    <div class="flex flex-col p-4 pt-2">
      <span> {{ moment(date).format("MMMM YYYY") }} </span>
      <span class="font-bold text-xl"> {{ title }} </span>
      <span class="mt-2"> {{ summary }} </span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    thumbnail: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: String,
    },
    summary: {
      required: true,
      type: String,
    },
  },
  methods:{
    moment:moment,
  }
};
</script>

<style lang="scss" scoped>
</style>