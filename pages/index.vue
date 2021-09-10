<template>
  <main class="lg:mb-24 mb-6">
    <section
      class="
        max-w-4xl
        my-4
        lg:my-32
        flex flex-col
        justify-center
        items-center
        lg:gap-24
        md:gap-12
        mx-auto
      "
    >
      <img
        src="~/assets/images/andrea-header.png"
        alt="Andrea de armas ilustration"
        loading="lazy"
        class="w-3/5 md:w-100 h-full md:h-120"
      />
      <div class="space-y-13 mt-10 md:mt-0">
        <h2 class="text-6xl font-bold">
          That’s me on the back, a UI designer, geek and awkward tourist settle
          in London, who enjoys creating beautiful and intuitive digital
          products.
        </h2>
        <a href="#works" class="block">
          <app-button class="flex items-center">
            Selected work
            <arrow-down class="ml-2" />
          </app-button>
        </a>
      </div>
    </section>
    <section id="works" class="space-y-44 max-w-screen-lg mx-auto">
      <nuxt-link to="/case-study/emailoctopus">
        <article>
          <img
            src="~/assets/images/emailoctopus.png"
            alt="emailoctopus design"
            loading="lazy"
            class="w-full mb-10"
          />
          <h3 class="text-4xl mb-3 font-bold">
            Re-branding a trusted Email platform
          </h3>
          <p class="text-peach uppercase">Branding - UX/UI Design</p>
        </article>
      </nuxt-link>
      <article class="max-w-4xl mx-auto">
        <img
          src="~/assets/images/ticket-tailor.png"
          alt="emailoctopus design"
          loading="lazy"
          class="w-full mb-10"
        />
        <h3 class="text-4xl mb-3 font-bold">
          A new identity for a group of dreamers
        </h3>
        <p class="text-peach uppercase">UX/UI Design</p>
      </article>
      <div class="flex gap-20 mb-44">
        <article class="w-1/2">
          <img
            src="~/assets/images/football-app.png"
            alt="football app design"
            loading="lazy"
            class="w-full mb-10"
          />
          <h3 class="text-4xl mb-3 font-bold">
            Making a space or the ultimate fan
          </h3>
          <p class="text-peach uppercase">UX/UI Design</p>
        </article>
        <article class="w-1/2">
          <img
            src="~/assets/images/bussiness.png"
            alt="bussiness design"
            loading="lazy"
            class="w-full mb-10"
          />
          <h3 class="text-4xl mb-3 font-bold">
            Giving a hand to the small business
          </h3>
          <p class="text-peach uppercase">UX/UI Design</p>
        </article>
      </div>
      <article class="mb-44">
        <img
          src="~/assets/images/atriom.png"
          alt="atriom design"
          loading="lazy"
          class="w-full mb-10"
        />
        <h3 class="text-4xl mb-3 font-bold">
          A startup looking for a clean and safe look
        </h3>
        <p class="text-peach uppercase">UX/UI Design</p>
      </article>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api';
import AppButton from '~/components/button.vue';
import ArrowDown from '~/assets/svg/arrow-down.svg';

export default defineComponent({
  components: {
    AppButton,
    ArrowDown,
  },
  head: {},
  setup() {
    useMeta({
      title: 'AndreaDA. | Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is a portfolio',
        },
      ],
    });
    return {};
  },
});
</script>

<style scoped>
#works {
  scroll-margin-top: 1rem;
}
</style>
