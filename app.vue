<template>
  <div class="dark">
    <NuxtLoadingIndicator />
    <main>
      <PatternBackground
        :animate="true"
        :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
        :variant="PATTERN_BACKGROUND_VARIANT.Dot"
        class="flex w-full items-center justify-center"
        :speed="PATTERN_BACKGROUND_SPEED.Slow"
      >
        <HeroSection />
      </PatternBackground>
      <AboutSection />
      <ConnectSection />
      <FooterSection />
    </main>
  </div>
</template>

<script setup>
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
} from "~/components/pattern-background/config.ts";
</script>
