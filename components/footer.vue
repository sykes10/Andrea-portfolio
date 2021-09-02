<template>
  <footer>
    <div
      class="
        container
        flex flex-col
        md:flex-row
        justify-between
        items-center
        py-2
        text-gray
      "
    >
      <small class="uppercase text-base order-1 md:order-none mt-4 md:mt-0"
        >© {{ year }} Andrea De Armas</small
      >
      <ul class="flex space-x-6 font-bold">
        <li
          v-for="link in links"
          :key="link.href"
          class="rounded-full border border-gray py-2 px-5"
        >
          <a
            class="uppercase"
            :href="link.href"
            rel="noopener"
            noreferrer
            target="_blank"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
    <a
      class="
        border border-black
        rounded-full
        w-13
        h-13
        flex
        items-center
        justify-center
        mb-16
        mx-auto
      "
      href="#top"
    >
      <arrow-up />
    </a>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';
import ArrowUp from '~/assets/svg/arrow-up.svg';

export default defineComponent({
  name: 'app-header',
  components: {
    ArrowUp,
  },
  setup() {
    const links = computed(() => [
      {
        href: 'mailto:andrea.design@email.com',
        text: 'Email',
      },
      {
        href: 'https://www.linkedin.com/in/andrea-alejandra-de-armas-nu%C3%B1ez-200200ba/',
        text: 'Linkedin',
      },
    ]);
    const year = computed(() =>
      new Intl.DateTimeFormat('en-GB', { year: 'numeric' }).format(new Date())
    );

    return { links, year };
  },
});
</script>

<style scoped>
.underline-transition {
  @apply inline-block;
}
.underline-transition::after {
  content: '';
  @apply w-0;
  height: 2px;
  @apply block;
  @apply bg-black;
  @apply duration-300;
}
.underline-transition:hover::after {
  @apply w-full;
}
.nuxt-link-exact-active {
  @apply font-medium;
  @apply text-green-700;
}
</style>
