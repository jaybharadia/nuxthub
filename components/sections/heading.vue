<template>
  <div class="py-4">
    <div class="text-4xl text-center">
      {{ title }}
    </div>
    <p v-if="desc" class="mt-4 max-w-2xl text-center mx-auto">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: "",
    },
  },
};
</script>
