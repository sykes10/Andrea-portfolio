<template>
  <main class="lg:mb-24 mb-6">
    <section class="flex justify-between items-center mt-13 md:mt-24 mb-11">
      <nuxt-link to="/">
        <app-button>
          <arrow-left />
        </app-button>
      </nuxt-link>
      <a href="//emailoctopus.com/" target="_blank">
        <app-button class="flex items-center">
          Live site
          <open-in-new class="ml-2" />
        </app-button>
      </a>
    </section>
    <section>
      <article class="mb-14 md:mb-24">
        <img src="/images/emailoctopus.png" alt="EmailOctopus design" loading="eager" fetchpriority="high"
          class="w-full mb-10 md:mb-14" />
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h1 class="mb-8">Re-branding a trusted Email platform</h1>
          <p class="mb-5">
            After a few years building up success with little Otto - The
            friendly octupus - on the side, EmailOctopus decided to push their
            growth even more, by giving him and their brand a full makeover.
            Having worked with them before for a refreshment of their lading
            page, in Vector we had the oportunity to work with them again.
          </p>
          <p class="mb-6">
            This project was done remotely from start to finish. Brand,
            Marketing website and Social media presence where re-designed.
          </p>
          <span class="text-peach-500 uppercase">Branding - UX/UI Design</span>
        </div>
        <img src="/images/emailoctopus/img-eo-desktop-mobile.png" alt="EmailOctopus desktop mobile" loading="lazy"
          class="w-full" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">The Beginning</h2>
          <p class="mb-5">
            With the new values already established by the client, we made a
            group of workshops to define the direction we wanted to take with
            the brand and define a personality.
          </p>
          <p>
            We wanted a brand that could feel approchable, playfull, current and
            simple. With the client on front telling their story.
          </p>
        </div>
        <img src="/images/emailoctopus/img-eo-map@2x.png" alt="EmailOctopus mind map" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">Brand</h2>
          <p>
            We started this phase by developing a group of moodboards to define
            an initial look and feel for the brand. From this we started to
            sketch the new look for the little Otto, and explore colours and
            graphic elements.
          </p>
        </div>
        <img src="/images/emailoctopus/img-eo-moodboards@2x.png" alt="EmailOctopus moodboards" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <p class="mb-5">
            Brand wise, we agreed with the client an “Close to home” approach
            insted of a complete change, keept their sea theme and created the
            new visual language around it.
          </p>
          <p>
            The colour pallete was refreshed to a brigther one and a group of
            illustrations were created to be applied across all the different
            channels.
          </p>
        </div>
        <img src="/images/emailoctopus/img-eo-brand@2x.png" alt="EmailOctopus brand" loading="lazy"
          class="w-full mb-10 md:mb-14" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">Website</h2>
          <p>
            Once the basic brand elements were defined we started to generate
            wireframes and create components that were used as templates all
            over the website. To balance the graphic’s quirky style, we used a
            simple left and right layout to display text and graphic elements.
          </p>
        </div>
        <img src="/images/emailoctopus/img-eo-moodboards@2x.png" alt="EmailOctopus Styleboards" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <p class="mb-5">
            Brand wise, we agreed with the client an “Close to home” approach
            insted of a complete change, keept their sea theme and created the
            new visual language around it.
          </p>
          <p>
            The colour pallete was refreshed to a brigther one and a group of
            illustrations were created to be applied across all the different
            channels.
          </p>
        </div>
        <img src="/images/emailoctopus/img-eo-fulldesktop@2x.png" alt="EmailOctopus desktop full" loading="lazy"
          class="w-full mb-10 md:mb-14" />
        <img src="/images/emailoctopus/img-eo-mobile-group@2x.png" alt="EmailOctopus mobile" loading="lazy"
          class="w-full mb-10 md:mb-14" />
        <p class="mb-10 md:mb-14 max-w-4xl mx-auto">
          As mentioned previouly, one of the main objectives for the brand and
          the website was to bring the client and their emails to the main
          stage. We used real emails created by real clients across the website
          and pushed their stories over the product features.
        </p>
        <img src="/images/emailoctopus/img-eo-elements@2x.png" alt="EmailOctopus elements" loading="lazy"
          class="w-full mb-10 md:mb-14" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">Social media kit</h2>
          <p>
            Along with the brand and website, we created a design system for
            social media pieces. This piece of work included a detailed
            styleguide and a a group of templated that can be use to generate
            new pieces.
          </p>
        </div>
        <img src="/images/emailoctopus/img-eo-socials@2x.png" alt="EmailOctopus Socials" loading="lazy"
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
import { footerNavEntries } from '~/data/footer-nav';

export default Vue.extend({
  components: {
    AppButton,
    ArrowLeft,
    OpenInNew,
    Divider,
    FooterNav,
  },
  head: {
    title: 'AndreaDN. | EmailOctopus case study',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'EmailOctopus re-branding',
      },
    ],
  },
  computed: {
    footerNav() {
      return [
        footerNavEntries.vector,
        footerNavEntries.ticket
      ]
    }
  }
});
</script>
