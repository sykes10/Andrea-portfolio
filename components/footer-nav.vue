<template>
  <section class="flex flex-col md:flex-row justify-between gap-14 md:gap-20">
    <nuxt-link class="w-full md:w-1/2" :to="`/case-study/${item.to}`" v-for="(item, index) in items" :key="index">
      <img :src="`/images/previews/${item.img}@2x.png`" :alt="item.alt" loading="lazy" class="mb-8" />
      <h2 class="mb-3">{{ item.description }}</h2>
      <span class="text-peach-500 uppercase">{{ item.tag }}</span>
    </nuxt-link>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export type Item = {
  to: string;
  img: string;
  alt: string;
  description: string;
  tag: string;
}

export default Vue.extend({
  name: 'footer-nav',
  props: {
    items: {
      required: true,
      type: Array as () => Item[]
    },
  },
});
</script>
