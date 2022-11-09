<template>
  <header class="container flex justify-between items-center py-4 md:py-6 mt-4 md:mt-0">
    <nuxt-link to="/" class="no-colour">
      <h1 class="font-bold md:text-3xl text-2xl leading-tight">Andrea<br />DN.</h1>
    </nuxt-link>
    <div class="flex items-center">
      <work-svg class="mr-3 opacity-40" />
      <div>
        <p class="inline">
          Work status: <span class="font-bold">Available</span>
        </p>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import WorkSvg from '~/assets/svg/work.svg';

export default Vue.extend({
  name: 'app-header',
  components: { WorkSvg },
});
</script>
