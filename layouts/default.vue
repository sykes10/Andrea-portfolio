<template>
  <div class="bg-background h-auto min-h-screen overflow-hidden">
    <app-header />
    <nuxt class="container" />
    <app-footer />
  </div>
</template>
<script>
import Vue from 'vue'
import AppHeader from '~/components/header.vue';
import AppFooter from '~/components/footer.vue';

export default Vue.extend({
  transition: 'home',
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>
