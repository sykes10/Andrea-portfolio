<template>
  <main class="lg:mb-24 mb-6">
    <section
      class="
        my-4
        lg:my-32
        flex flex-col
        justify-center
        items-center
        lg:gap-24
        md:gap-12
      "
    >
      <img
        src="/images/andrea-header.png"
        alt="Andrea de armas ilustration"
        loading="lazy"
        class="w-3/5 md:w-100 h-full md:h-120 object-cover"
      />
      <section class="space-y-13 mt-10 md:mt-0 max-w-4xl mx-auto mb-32">
        <h2 class="md:text- text-6xl leading-tight font-bold">
          That’s me on the back, a UI designer, geek and awkward tourist settle
          in London, who enjoys creating beautiful and intuitive digital
          products.
        </h2>
        <app-button>Selected work</app-button>
      </section>
      <article>
        <img
          src="/images/emailoctopus.png"
          alt="Andrea de armas ilustration"
          loading="lazy"
          class="w-full h-full object-cover mb-10"
        />
        <h3 class="text-4xl mb-3">Re-branding a trusted Email platform</h3>
        <p class="text-peach uppercase">Branding - UX/UI Design</p>
      </article>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api';
import AppButton from '~/components/button.vue';

export default defineComponent({
  components: {
    AppButton,
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
