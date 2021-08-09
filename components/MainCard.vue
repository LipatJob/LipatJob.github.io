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
      <span class="text-2xl font-medium">Hi, my name is</span>
      <span class="text-6xl font-bold my-4"> Job Lipat </span>
      <span class="text-xl font-normal">
        I'm a Computer Science student <br />
        at Malayan Colleges Laguna
      </span>
    </div>
    <div
      class="
        mt-4
        flex flex-row
        justify-evenly
        mt-8
        sm:mt-0
      "
    >
      <SocialIcon
        v-for="(social, index) in socials"
        :key="index"
        :data="social"
      />
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