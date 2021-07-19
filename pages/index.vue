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
      <div class="space-y-5 mt-10 md:mt-0 max-w-4xl mx-auto">
        <p class="md:text- text-6xl leading-tight font-baske font-bold">
          That’s me on the back, a UI designer, geek and awkward tourist settle
          in London, who enjoys creating beautiful and intuitive digital
          products.
        </p>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api';

export default defineComponent({
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
