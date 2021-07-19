<template>
  <header class="container flex justify-between items-center py-2 mt-8 md:mt-0">
    <nuxt-link to="/" class="no-colour">
      <h1 class="font-medium text-2xl font-baske leading-tight">
        Andrea<br />DN.
      </h1>
    </nuxt-link>
    <p class="font-karla uppercase font-bold">
      <span class="block sm:inline">{{ weekday }},</span> {{ month }}
      {{ monthDay }}
    </p>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'app-header',
  setup() {
    const weekday = computed(() => {
      return new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
      }).format(new Date());
    });
    const month = computed(() => {
      return new Intl.DateTimeFormat('en-GB', {
        month: 'long',
      }).format(new Date());
    });
    const monthDay = computed(() => {
      return new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
      }).format(new Date());
    });

    return { weekday, month, monthDay };
  },
});
</script>
