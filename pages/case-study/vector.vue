<template>
  <main class="lg:mb-24 mb-6">
    <section class="flex justify-between items-center mt-13 md:mt-24 mb-11">
      <nuxt-link to="/">
        <app-button>
          <arrow-left />
        </app-button>
      </nuxt-link>
      <a href="//vector-digital.co.uk/" target="_blank">
        <app-button class="flex items-center">
          Live site
          <open-in-new class="ml-2" />
        </app-button>
      </a>
    </section>
    <section>
      <article class="mb-14 md:mb-24">
        <img src="/images/vector/img-vector.png" alt="Vector design" loading="eager" fetchpriority="high"
          class="w-full mb-10 md:mb-14" />
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h1 class="mb-8">New brand for new beginnings</h1>
          <p class="mb-5">
            Vector is a London based Design agency specialized on SaaS products where I had the oportunity to work as a
            UI/UX Designer for 3 years.
          </p>
          <p class="mb-5">
            During these years we made small changes to the former site, but after a while we realized that Vector’s
            brand was due to a redesign.
          </p>
          <p class="mb-6">
            It wasn’t just a brand refreshment, Vector wanted to change, to grow and show its potential clients that
            they are not just web designers, they are a now specialist SaaS design studio focussing on retention.
          </p>
          <span class="text-peach-500 uppercase">Branding - UX/UI Design</span>
        </div>
        <img src="/images/vector/img-v-desktop-mobile.png" alt="Vector Desktop Mobile design" loading="lazy"
          class="w-full" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">The Beginning</h2>
          <p class="mb-5">
            With the help of Treacle – a specialist brand and copy agency for agencies - Vector’s new positioning and
            voice was on the way but its visual appearance was barely beginning.
          </p>
          <p>
            We started to look out for keywords and concepts that would help us to bring the new vision to light. We
            wanted the brand to be honest, inspirational, Fun and a little daring.
          </p>
        </div>
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">Brand</h2>
          <p class="mb-5">
            On the initial exploration I came up with 2 concepts for the visual language. The first one was thinking in
            Vector as guides that would help your product to grow. The second one was more focused on retention and how
            we wanted to help you (the client) to keep your users around you.
          </p>
          <p class="mb-5">In terms of personality we juggle in between a quirky image or a more mature approach. A
            quirky personality
            was in-line with us internally, but a more mature look and feel felt like the right path to take if we
            really wanted to grow and attract a broader target. </p>
          <p>These three below where initial draft created to have an idea of the approach we wanted to take:</p>
        </div>
        <img src="/images/vector/img-v-drafts.png" alt="vector drafts" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <p>
            After a few back and forwards we decided that retention was more inline with the direction Treacle was
            proposing and decided to represent this with “Orbits”, the client being the center and its users the
            elements around it.
          </p>
        </div>
        <video src="/video/vid-v-case.mp4" autoplay loop playsinline class="w-full mb-10 md:mb-14"></video>
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <p>
            Along with the brand elements we also revamped the logo. We wanted something simple, with a little of
            uniqueness that also displayed the company's full name.
          </p>
        </div>
        <img src="/images/vector/img-v-logos.png" alt="vector logo before and after" loading="lazy"
          class="w-full mb-10 md:mb-14" />
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <p class="mb-5">
            For colour I wanted to bring this idea of growth through the greens, introduce some warmth with yellow CTAs
            and balance it out with a cream that would also help us to display projects with minimal colour clashes.
          </p>
          <p>In terms of typography we wanted something stylish that combined with the vibe we were looking for. We
            picked Tenor Sans with its moderness and Work Sans for a bit of contrast.</p>
        </div>
        <img src="/images/vector/img-v-type-logo.png" alt="vector type colours" loading="lazy"
          class="w-full mb-10 md:mb-14" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">Website</h2>
          <p class="mb-5">
            The website’s layout was designed alongside the brand elements. We wanted a layout that felt uncommon
            without being hard to navigate.
          </p>
          <p>For this reason I proposed a collapsable lateral navigation, it was uncommon compared with other agencies
            we looked at but also has a familiarity with dashboards that are part of many Saas products.</p>
        </div>
        <img src="/images/vector/img-v-layout.png" alt="vector layout design" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <p>
            Along with our skills in visual design we also wanted to show potential clients that we were able to create
            solutions that required extra thinking on behaviours and interactions.
          </p>
        </div>
        <video src="/video/vid-v-interaction.mp4" autoplay loop playsinline class="w-full mb-10 md:mb-14"></video>
        <p class="mb-10 md:mb-14 max-w-4xl mx-auto">
          The case study pages where the most important pages to design. We wanted our case studies to have and impact
          combining great imagery with animations.
        </p>
        <video src="/video/vid-v-case.mp4" autoplay loop playsinline class="w-full mb-10 md:mb-14"></video>
      </article>
      <divider class="mx-auto mb-14 md:mb-24" />
      <footer-nav :items="footerNav"></footer-nav>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';
import FooterNav from '~/components/footer-nav.vue';
import AppButton from '~/components/button.vue';
import ArrowLeft from '~/assets/svg/arrow-left.svg';
import OpenInNew from '~/assets/svg/open.svg';
import Divider from '~/assets/svg/divider.svg';
import { footerNavEntries } from '~/data/footer-nav';

export default defineComponent({
  components: {
    AppButton,
    ArrowLeft,
    OpenInNew,
    Divider,
    FooterNav,
  },
  head: {
    title: 'AndreaDN. | Vector case study',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Vector re-design case study',
      },
    ],
  },
  setup() {
    const footerNav = computed(() => [
      footerNavEntries.octopus,
      footerNavEntries.ticket
    ]);

    return { footerNav };
  },
});
</script>
