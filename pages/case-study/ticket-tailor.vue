<template>
  <main class="lg:mb-24 mb-6">
    <section class="flex justify-between items-center mt-24 mb-11">
      <nuxt-link to="/">
        <app-button>
          <arrow-left />
        </app-button>
      </nuxt-link>
      <a href="//www.tickettailor.com/" target="_blank">
        <app-button class="flex items-center">
          Live site
          <open-in-new class="ml-2" />
        </app-button>
      </a>
    </section>
    <section>
      <article class="mb-14 md:mb-24">
        <img src="/images/ticket-tailor/img-tickettailor.png" alt="TicketTailor design" loading="eager"
          fetchpriority="high" class="w-full mb-10 md:mb-14" />
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h1 class="mb-8">A new identity for a group of dreamers</h1>

          <p class="mb-5">
            Ticket Tailor approached Vector with a new vision for their brand
            and website. They wanted to put their old style to rest and bring
            some soul to their product.
          </p>
          <p class="mb-6">
            Our work was centred on the development of a new graphic language
            and the design of their new website. Mantainig only two existing
            elements, their logo and their signature purple.
          </p>
          <span class="text-peach-500 uppercase">Branding - UX/UI Design</span>
        </div>
        <img src="/images/ticket-tailor/img-tt-desktop-mobile.png" alt="TicketTailor desktop mobile" loading="lazy"
          class="w-full" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">The Beginning</h2>
          <p class="mb-5">
            We started with an stablished group of values, the new design should
            be Simple, Soulful, Supportive and Stellar.
          </p>
          <p>
            After a 3 day of workshops we set all the directions we needed to
            take, beeing one of the main goals to make sure the Event organisers
            persieve the product as an easy and flexible tool to create their
            events.
          </p>
        </div>
        <img src="/images/ticket-tailor/img-tt-words.png" alt="TicketTailor key words" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">Brand</h2>
          <p>
            As mentioned previously, the logo and brand colours remained the
            same, so we worked arround them. We created a series of moodboards
            and worked together with the clients to select the most appropiate
            style for them.
          </p>
        </div>
        <img src="/images/ticket-tailor/img-tt-moodboards.png" alt="TicketTailor Moodboards" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
        <p class="max-w-4xl mx-auto mb-10 md:mb-14">
          To bring the new values - Simple, Soulful, Supportive and Stellar - to
          the brand we opted for a warm complementary pallet mixed with quirky
          illustrations that brought a sense of community and diversity.
        </p>
        <img src="/images/ticket-tailor/img-tt-brand.png" alt="TicketTailor brand" loading="lazy"
          class="w-full mb-10 md:mb-14" />
        <p class="max-w-4xl mx-auto mb-10 md:mb-14">
          With <a href="https://www.linkedin.com/in/beatrixhatcher/" target="_blank"
            class="font-bold hover:underline">illustrator Beatrix
            Hatcher</a>
          collaboration, a
          group of
          characters, icons and accents
          where created. Each character illustration is representing a different
          type of event since Ticket Tailor is a place for everyone who wants to
          create an event - as they say “You dream it. We’ll ticket it“.
        </p>
        <img src="/images/ticket-tailor/img-tt-characters.png" alt="TicketTailor characters" loading="lazy"
          class="w-full mb-10 md:mb-14" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">Website</h2>
          <p>
            With the initial brand elements defined we started to wireframe
            pages and create a visual language by implementing some of the
            graphic elements created.
          </p>
        </div>
        <img src="/images/ticket-tailor/img-tt-full.png" alt="TicketTailor full" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14 bg-peach-400" />
        <img src="/images/ticket-tailor/img-tt-mobile-group.png" alt="TicketTailor mobile" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
        <p class="max-w-4xl mx-auto mb-10 md:mb-14">
          The pricing page became the most challenging page to create since the
          pricing system changed a few times in the course of the project. After
          a few explorations and test we, with the client’s help, came up with a
          solution adjusted to their system and goals.
        </p>

        <img src="/images/ticket-tailor/img-tt-pricing.png" alt="TicketTailor pricing" loading="lazy"
          class="w-full mb-10 md:mb-14" />
      </article>
      <divider class="mx-auto mb-14 md:mb-24" />
      <footer-nav :items="footerNav"></footer-nav>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import FooterNav from '~/components/footer-nav.vue';
import AppButton from '~/components/button.vue';
import ArrowLeft from '~/assets/svg/arrow-left.svg';
import OpenInNew from '~/assets/svg/open.svg';
import Divider from '~/assets/svg/divider.svg';
import { footerNavEntries } from '~/data/footer-nav'

export default Vue.extend({
  components: {
    AppButton,
    ArrowLeft,
    OpenInNew,
    Divider,
    FooterNav,
  },
  head: {
    title: 'AndreaDN. | TicketTailor case study',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'TicketTailor website re-design case study',
      },
    ],
  },
  computed: {
    footerNav() {
      return [
        footerNavEntries.octopus,
        footerNavEntries.football
      ]
    }
  }
});
</script>
