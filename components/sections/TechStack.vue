<template>
  <div>
    <LampEffect>
      <AnimatedLogo :logos title="Tech Stack" />
    </LampEffect>
  </div>
</template>

<script lang="ts" setup>
import LampEffect from "../LampEffect.vue";

const logos = [
  {
    name: "Vue.js",
    path: "/img/vue.svg",
  },
  {
    name: "Nuxt.js",
    path: "/img/nuxt.svg",
  },
  {
    name: "Tailwind CSS",
    path: "/img/tailwind-css.svg",
  },
  {
    name: "Vite",
    path: "/img/vitejs.svg",
  },
  {
    name: "Vercel",
    path: "/img/vercel.svg",
  },
  {
    name: "GitHub",
    path: "/img/github.svg",
  },
  {
    name: "OpenAI",
    path: "/img/openai.svg",
  },
];
</script>
