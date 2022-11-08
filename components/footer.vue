<template>
  <footer>
    <div class="
        container
        flex flex-col
        md:flex-row
        justify-between
        items-center
        py-2
      ">
      <small class="uppercase text-base order-1 md:order-none mt-4 md:mt-0">© {{ year }} Andrea De Armas</small>
      <ul class="flex space-x-6 font-bold">
        <li v-for="link in links" :key="link.href">
          <a class="uppercase" :href="link.href" rel="noopener" noreferrer target="_blank">
            <app-button>
              {{ link.text }}
            </app-button>
          </a>
        </li>
      </ul>
    </div>
    <a class="
        border border-black
        rounded-full
        w-13
        h-13
        flex
        items-center
        justify-center
        mb-16
        mx-auto
        hover:bg-[#E9C3B3]
      transition-colors
      duration-300
      hover:border-[#816E66]
      outline-[#D99079]
      outline-1
      focus:outline
      outline-offset-2
      " href="#top">
      <arrow-up />
    </a>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';
import AppButton from '~/components/button.vue';
import ArrowUp from '~/assets/svg/arrow-up.svg';

export default defineComponent({
  name: 'app-header',
  components: {
    ArrowUp,
    AppButton,
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
    ])
    const year = computed(() => new Intl.DateTimeFormat('en-GB', { year: 'numeric' }).format(new Date())
    )


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
