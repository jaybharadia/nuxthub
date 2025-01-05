<template>
  <div
    class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
  >
    <!-- First Marquee -->
    <SectionsHeading
      title="My Values"
      desc="Values act as the foundation of who i am and what i stand for. They provide me a moral compass, guiding my decisions, shaping my behavior, and giving my lives purpose and meaning."
    />
    <Marquee pause-on-hover class="[--duration:20s]">
      <FlipCard
        description="I strongly believe being compassionate is a key value that everyone should have. It is important to be able to understand and help others."
        image="/img/values/compassion.jpeg"
        rotate="y"
        subtitle="Compassion in my Personality"
      />

      <FlipCard
        description="I am logical and practical person who approaches challenges with reason and clarity, focusing on actionable solutions."
        image="/img/values/logical.jpeg"
        rotate="y"
        subtitle="A logical and practical person"
      />

      <FlipCard
        description="I live as a disciplined person who thrives on consistency and self-control, staying committed"
        image="/img/values/discipline.jpeg"
        rotate="y"
        subtitle="Perseverance, balancing structure and dedication"
      />
    </Marquee>

    <!-- Left Gradient -->
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
    ></div>

    <!-- Right Gradient -->
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
    ></div>
  </div>
</template>

<script setup lang="ts"></script>
