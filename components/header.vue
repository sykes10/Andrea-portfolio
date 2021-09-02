<template>
  <header class="container flex justify-between items-center py-2 mt-8 md:mt-0">
    <nuxt-link to="/" class="no-colour">
      <h1 class="font-bold text-2xl leading-tight">Andrea<br />DN.</h1>
    </nuxt-link>
    <div class="flex items-center">
      <work-svg class="mr-3 opacity-40" />
      <div>
        <p class="inline">Working at:</p>
        <strong class="text-xl">Vector</strong>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import WorkSvg from '~/assets/svg/work.svg';

export default defineComponent({
  name: 'app-header',
  components: { WorkSvg },
});
</script>
