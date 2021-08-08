<template>
  <div class="border-4 border-gray-800 rounded-lg p-0 overflow-hidden">
    <img :src="thumbnail" alt="" />
    <div class="flex flex-col p-4 pt-2">
      <span> {{ moment(date).format("MMMM YYYY") }} </span>
      <span class="font-bold text-xl"> {{ title }} </span>
      <span> {{ summary }} </span>
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
      type: Date,
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