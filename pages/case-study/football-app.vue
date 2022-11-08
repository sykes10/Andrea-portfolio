<template>
  <main class="lg:mb-24 mb-6">
    <section class="flex justify-between items-center mt-13 md:mt-24 mb-11">
      <nuxt-link to="/">
        <app-button>
          <arrow-left />
        </app-button>
      </nuxt-link>
    </section>
    <section>
      <article class="mb-14 md:mb-24">
        <img src="/images/football-app/img-football-app.png" alt="Football app design" loading="eager"
          fetchpriority="high" class="w-full mb-10 md:mb-14" />
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h1 class="mb-8">Concept: Making a space for the ultimate fan</h1>
          <p class="mb-6">
            After working on a Football related app and taking a good look at
            the Spanish football app market at that time (Around 2018) I wanted
            to make my own Football app version. For this project, I chose
            Girona F.C. as the team since they had no existing app, they are
            fairly recognized in Spain and their brand it's well developed.
          </p>
          <span class="text-peach-500 uppercase">Wireframes - UX - UI</span>
        </div>
        <img src="/images/football-app/img-ft-mobile-group.png" alt="Football app mobile" loading="lazy"
          class="w-full" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">The Beginning</h2>
          <p class="mb-5">
            To have an idea of the basic functionalities needed for the project,
            I gathered information by looking for patterns and common
            fuctionalities on the Football app market and discussing the project
            with possible users - The die-hard fan, The regular fan and The
            occasional user. After the study, I listed the common use cases for
            a football app:
          </p>
          <ul class="mb-5 list-disc pl-8">
            <li>Search for upcoming matches</li>
            <li>Check resume of the played matches</li>
            <li>Check the latest news</li>
            <li>Team's position on the classification table</li>
            <li>Merchandise purchase</li>
            <li>Ticket purchase</li>
          </ul>
          <p>
            With the information gathered and important points defined it was
            time to make the map for the app and start defining flows.
          </p>
        </div>
        <img src="/images/football-app/img-ft-journey.png" alt="Football app journey" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">Wireframing</h2>
          <p>
            Having the research in mind, I took three user flows and developed
            some wireframes. These flows were:
          </p>
        </div>
        <img src="/images/football-app/img-ft-wires-1.png" alt="Football app wires" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0 mb-6" />
        <div class="max-w-4xl mx-auto mb-10 md:mb-14 text-center">
          <h3 class="font-karla">01. Exploring the team’s area</h3>
        </div>
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">Brand and final screens</h2>
          <p>
            Maintaining the existing brand was another priority for this
            project. It’s not a secret that real fans are proud of their team’s
            colours, so I took the time to make a review of Girona F.C’s - My
            chosen team - existing brand, website and social network accounts to
            be sure that my designs will be consistent.
          </p>
        </div>
        <img src="/images/football-app/img-ft-style.png" alt="Football app style" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h3 class="font-karla">01. Team area</h3>
          <p>All the information about the team in one place.</p>
        </div>
        <img src="/images/football-app/img-ft-mobile-team-01.png" alt="Football app team section" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
        <p class="max-w-4xl mx-auto mb-10 md:mb-14">
          The team's section offers a smooth review of the team matches,
          classification and players profile.
        </p>
        <div class="mb-10 md:mb-14 flex overflow-x-auto">
          <div class="
              flex flex-col
              justify-center
              items-center
              flex-shrink-0 flex-grow-0
              w-10/12
              md:w-1/4
              px-4
              mb-14
            " v-for="(item, index) in teamAreaGrid" :key="index">
            <img :src="`/images/football-app/${item.url}.png`" alt="Football app" loading="lazy"
              class="w-full flex-shrink-0 flex-grow-0 mb-4" />
            <p class="text-lg">{{ item.copy }}</p>
          </div>
        </div>
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h3 class="font-karla">02. Match resume</h3>
          <p class="mb-5">Latest matches result in the very beginning.</p>
          <p>
            You can access the result of the latest match on the main screen.
            Check all the important moments of the game, line up strategy and
            the stats of the teams.
          </p>
        </div>
        <div class="mb-10 md:mb-14 flex overflow-x-auto">
          <div class="
              flex flex-col
              justify-center
              items-center
              flex-shrink-0 flex-grow-0
              w-10/12
              md:w-1/4
              px-4
              mb-14
            " v-for="(item, index) in matchResumeGrid" :key="index">
            <img :src="`/images/football-app/${item.url}.png`" alt="Football app" loading="lazy"
              class="w-full flex-shrink-0 flex-grow-0 mb-4" />
            <p class="text-lg">{{ item.copy }}</p>
          </div>
        </div>
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h3 class="font-karla">03. Official store</h3>
          <p>Integrated official store for Merchandise and tickets.</p>
        </div>
        <img src="/images/football-app/img-ft-mobile-store-01.png" alt="Football app store" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
        <p class="max-w-4xl mx-auto mb-10 md:mb-14">
          The team's section offers a smooth review of the team matches,
          classification and players profile.
        </p>
        <div class="mb-10 md:mb-14 flex overflow-x-auto">
          <div class="
              flex flex-col
              justify-center
              items-center
              flex-shrink-0 flex-grow-0
              w-10/12
              md:w-1/4
              px-4
              mb-14
            " v-for="(item, index) in officialStoreGrid" :key="index">
            <img :src="`/images/football-app/${item.url}.png`" alt="Football app" loading="lazy"
              class="w-full flex-shrink-0 flex-grow-0 mb-4" />
            <p class="text-lg">{{ item.copy }}</p>
          </div>
        </div>
        <div class="mb-10 md:mb-14 flex overflow-x-auto">
          <div class="
              flex flex-col
              justify-center
              items-center
              flex-shrink-0 flex-grow-0
              w-10/12
              md:w-1/4
              px-4
              mb-14
            " v-for="(item, index) in officialStoreGrid2" :key="index">
            <img :src="`/images/football-app/${item.url}.png`" alt="Football app" loading="lazy"
              class="w-full flex-shrink-0 flex-grow-0 mb-4" />
            <p class="text-lg">{{ item.copy }}</p>
          </div>
        </div>
      </article>

      <divider class="mx-auto mb-14 md:mb-24" />
      <footer-nav :items="footerNav"></footer-nav>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useMeta, computed } from '@nuxtjs/composition-api';
import FooterNav from '~/components/footer-nav.vue';
import AppButton from '~/components/button.vue';
import ArrowLeft from '~/assets/svg/arrow-left.svg';
import OpenInNew from '~/assets/svg/open.svg';
import Divider from '~/assets/svg/divider.svg';
import { footerNavEntries } from '~/data/footer-nav'
export default defineComponent({
  components: {
    AppButton,
    ArrowLeft,
    OpenInNew,
    Divider,
    FooterNav,
  },
  head: {
    title: 'AndreaDN. | Football app case study',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Football app concept design',
      },
    ],
  },
  setup() {
    const teamAreaGrid = [
      { url: 'img-ft-mobile-team-02', copy: 'All matches' },
      { url: 'img-ft-mobile-team-03', copy: 'Clasification table' },
      { url: 'img-ft-mobile-team-04', copy: 'Team’s players' },
      { url: 'img-ft-mobile-team-05', copy: 'Player profile' },
    ];
    const matchResumeGrid = [
      { url: 'img-ft-mobile-resume-01', copy: 'Home' },
      { url: 'img-ft-mobile-resume-02', copy: 'Live resume' },
      { url: 'img-ft-mobile-resume-03', copy: 'Game line up' },
      { url: 'img-ft-mobile-resume-04', copy: 'Game stats' },
    ];
    const officialStoreGrid = [
      { url: 'img-ft-mobile-store-02', copy: 'Product category' },
      { url: 'img-ft-mobile-store-03', copy: 'Product detail' },
      { url: 'img-ft-mobile-store-04', copy: 'Size selector' },
      { url: 'img-ft-mobile-store-05', copy: 'Product added' },
    ];
    const officialStoreGrid2 = [
      { url: 'img-ft-mobile-store-06', copy: 'Product on the bag' },
      { url: 'img-ft-mobile-store-07', copy: 'Shopping bag' },
      { url: 'img-ft-mobile-store-08', copy: 'Checkout' },
      { url: 'img-ft-mobile-store-09', copy: 'Confirmation screen' },
    ];
    const footerNav = [
      footerNavEntries.ticket,
      footerNavEntries.pret
    ];
    return {
      teamAreaGrid,
      matchResumeGrid,
      officialStoreGrid,
      officialStoreGrid2,
      footerNav,
    };
  },
});
</script>
