<template>
  <main class="lg:mb-24 mb-6">
    <section class="
        max-w-4xl
        my-10
        lg:my-32
        flex flex-col
        justify-center
        items-center
        lg:gap-24
        md:gap-12
        mx-auto
      ">
      <img src="/images/andrea-header.png" alt="Andrea De Armas ilustration" class="w-4/5 md:w-100 h-full md:h-120" />
      <div class="mt-10 md:mt-0">
        <h1 class="mb-10 md:mb-13">
          That’s me on the back, a UI designer, geek and awkward tourist settle
          in London, who enjoys creating beautiful and intuitive digital
          products.
        </h1>
        <a href="#works" class="block">
          <app-button class="flex items-center mx-auto md:mx-0">
            Selected work
            <arrow-down class="ml-2" />
          </app-button>
        </a>
      </div>
    </section>
    <section id="works" class="space-y-9 md:space-y-44 max-w-screen-lg mx-auto">
      <div class="flex flex-col md:flex-row gap-9 md:gap-20 md:mb-44 mb-9">
        <nuxt-link class="w-full md:w-1/2" to="">
          <article>
            <img src="/images/Fidel API.png" alt="Coming soon" loading="lazy" class="w-full mb-4 md:mb-10" />
            <h3 class="mb-3">Supporting payment experiences</h3>
            <span class="text-peach-500 uppercase">Visual Design - UI Design</span>
          </article>
        </nuxt-link>
        <nuxt-link class="w-full md:w-1/2" to="/case-study/vector">
          <article>
            <img src="/images/Vector.png" alt="Vector re-design" loading="lazy" class="w-full mb-4 md:mb-10" />
            <h3 class="mb-3">New brand for new beginnings</h3>
            <span class="text-peach-500 uppercase">Branding - UX/UI Design</span>
          </article>
        </nuxt-link>
      </div>
      <nuxt-link to="/case-study/emailoctopus" class="block">
        <article>
          <img src="/images/emailoctopus.png" alt="emailoctopus design" loading="lazy" class="w-full mb-4 md:mb-10" />
          <h3 class="mb-3">Re-branding a trusted Email platform</h3>
          <span class="text-peach-500 uppercase">Branding - UX/UI Design</span>
        </article>
      </nuxt-link>
      <nuxt-link to="/case-study/ticket-tailor" class="block">
        <article class="max-w-4xl mx-auto">
          <img src="/images/ticket-tailor.png" alt="emailoctopus design" loading="lazy" class="w-full mb-4 md:mb-10" />
          <h3 class="mb-3">A new identity for a group of dreamers</h3>
          <span class="text-peach-500 uppercase">UX/UI Design</span>
        </article>
      </nuxt-link>
      <div class="flex flex-col md:flex-row gap-9 md:gap-20 md:mb-44 mb-9">
        <nuxt-link class="w-full md:w-1/2" to="/case-study/football-app">
          <article>
            <img src="/images/football-app.png" alt="football app design" loading="lazy" class="w-full mb-4 md:mb-10" />
            <h3 class="mb-3">Making a space or the ultimate fan</h3>
            <span class="text-peach-500 uppercase">UX/UI Design</span>
          </article>
        </nuxt-link>
        <nuxt-link class="w-full md:w-1/2" to="/case-study/small-bussiness">
          <article>
            <img src="/images/bussiness.png" alt="bussiness design" loading="lazy" class="w-full mb-4 md:mb-10" />
            <h3 class="mb-3">Giving a hand to the small business</h3>
            <span class="text-peach-500 uppercase">UX/UI Design</span>
          </article>
        </nuxt-link>
      </div>
      <nuxt-link to="/case-study/atriom" class="mb-44 block">
        <article>
          <img src="/images/atriom.png" alt="atriom design" loading="lazy" class="w-full mb-4 md:mb-10" />
          <h3 class="mb-3">A startup looking for a clean and safe look</h3>
          <span class="text-peach-500 uppercase">UX/UI Design</span>
        </article>
      </nuxt-link>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import AppButton from '~/components/button.vue';
import ArrowDown from '~/assets/svg/arrow-down.svg';

export default defineComponent({
  mponents: {
    AppButton,
    ArrowDown,
  },
});
</script>

<style scoped>
#works {
  scroll-margin-top: 1rem;
}
</style>
