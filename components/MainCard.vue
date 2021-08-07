<template>
  <div
    class="
      grid grid-cols-1
      sm:grid-cols-2
      items-center
      sm:my-auto
      mt-4
      sm:mt-12
    "
  >
    <div class="flex flex-col text-center sm:text-left">
      <span class="text-3xl font-medium font-body">Hi, my name is</span>
      <span class="text-7xl font-bold font-body my-4"> Job Lipat </span>
      <span class="text-xl font-medium font-body">
        I'm a Computer Science student <br />
        at Malayan Colleges Laguna
      </span>
    </div>
    <div
      class="
        mt-4
        flex flex-row
        gap-6
        justify-center
        sm:justify-start
        mt-8
        sm:mt-0
      "
    >
      <a v-for="social in socials" :key="social.link" :href="social.link">
        <img :src="social.icon" :alt="social.alt" height="75" width="75" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    socials: [
      {
        icon: require("@/assets/facebook.png"),
        link: "https://fb.me/job.lipat",
        alt: "Facebook",
      },
      {
        icon: require("@/assets/github.png"),
        link: "https://github.com/LipatJob",
        alt: "Github",
      },
      {
        icon: require("@/assets/mail.png"),
        link: "mailto:lipatjobj@gmail.com",
        alt: "Email",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
</style>