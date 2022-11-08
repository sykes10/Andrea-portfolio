<template>
  <main class="lg:mb-24 mb-6">
    <section class="flex justify-between items-center mt-24 mb-11">
      <nuxt-link to="/">
        <app-button>
          <arrow-left />
        </app-button>
      </nuxt-link>
    </section>
    <section>
      <article class="mb-14 md:mb-24">
        <img src="/images/small-bussiness/img-bussiness.png" alt="Small bussiness design" loading="eager"
          fetchpriority="high" class="w-full mb-10 md:mb-14" />
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h1 class="mb-8">Giving a hand to the small business</h1>

          <p class="mb-5">
            A few years back I was involved in a project called Āgora Gracia, a
            wallet designed as a commercial guide for the area of Gracia in
            Barcelona, Spain. Inside the wallet, you could save all your
            favourite establishments, had access to their news, promotions, and
            fidelity cards activated by NFC technology.
          </p>
          <p class="mb-5">
            Alongside the wallet there was a dashboard for the business owners,
            a space where they could create and upload content, only available
            on desktop.
          </p>
          <p class="mb-5">
            After some time we realised that users weren’t creating content and
            after speaking with some of them, many reported that the desktop
            version was a limitation, they didn’t have the time to set content
            in the computer or didn’t have one available.
          </p>
          <p class="mb-6">
            To solve these issues I was tasked to condense the existing
            dashboard in an app form. This project was discarded for budget
            issues but I took the opportunity to revisit it and clean up some of
            my mistakes.
          </p>
          <span class="text-peach-500 uppercase">UX/UI Design</span>
        </div>
        <img src="/images/small-bussiness/img-mc-mobile-group.png" alt="Small bussiness mobile" loading="lazy"
          class="w-full" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">The Beginning</h2>
          <p class="mb-5">
            As metioned before, the wallet already had a functional dashboard on
            desktop, but we needed a solution for the small and mid business
            owner that had no time to waste on that version. The main goal of
            the dashboard was create content, either post information, send
            notifications about relevant events or offers or even create flash
            sales.
          </p>
          <p class="mb-5">
            I had the challenge to condensate every aspect of the desktop and
            make it fast and easy to use. With the goal of increasing the
            merchant's movement on the wallet and their interest in the project.
          </p>
          <p class="mb-5">
            In my first visit to this project I was just starting my path into
            UI and UX design. The initial screens were rough, clumsy and hard to
            use if you weren't familiar with the desktop counterpart, many
            things were hidden and unnecessary. But the general idea was still
            pretty interesting at the time.
          </p>
          <p>
            Some time later, I found this project as a good opportunity to clean
            the mistakes I made in the past, fixing the experience, re-centred
            the main goal of the app and cleaning the old rusty design.
          </p>
        </div>
        <img src="/images/small-bussiness/img-mc-wireframes-old.png" alt="Small bussiness wires old" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">Wireframes</h2>
          <p class="mb-5">
            I already had in hands all the functionalities this dashboard
            needed, so after a time of research, I started to re-arrange the
            flow.
          </p>
          <p>
            Instead of having the content creation section as the landing page
            as I have it inicially, I decided to have the metrics as the initial
            screen and content creation one on the center of the navigation
          </p>
        </div>
        <img src="/images/small-bussiness/img-mc-wires-1.png" alt="Small bussiness wires new" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">New style</h2>
          <p>
            The new design has to look clean with no many components that could
            distract the user from their main goal. Also should be adaptable for
            any brand, since initially we wanted to integrate part of the
            identity of each brand inside the dashboard.
          </p>
        </div>
        <img src="/images/small-bussiness/img-mc-transition.png" alt="Small-bussiness transition" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">Posting flow</h2>
          <p class="mb-10 md:mb-14">
            The new design has to look clean with no many components that could
            distract the user from their main goal. Also should be adaptable for
            any brand, since initially we wanted to integrate part of the
            identity of each brand inside the dashboard.
          </p>
          <h3 class="font-karla mb-4">01. Start the journey</h3>
          <p class="mb-10 md:mb-14">
            Get into the Dashboard and have a quick look at your statistics
            before you start posting.
          </p>
          <h3 class="font-karla mb-4">02. Choose your type of post</h3>
          <p class="mb-10 md:mb-14">
            Do you have something to say, sell or notify? By pressing the new
            content button you can choose between a normal, a flash sale or a
            notification.
          </p>
          <h3 class="font-karla mb-4">03. Customize it</h3>
          <p class="mb-10 md:mb-14">
            Upload a picture, put a title, describe a little bit and set any
            other characteristic of your post and by pressing the button, it
            goes live!
          </p>
        </div>
        <div class="mb-10 md:mb-14 flex overflow-x-auto md:justify-center">
          <div class="
              flex flex-col
              justify-center
              items-center
              flex-shrink-0 flex-grow-0
              w-10/12
              md:w-[30%] md:px-10
              px-6
              mb-14
            " v-for="(item, index) in stepsGrid" :key="index">
            <img :src="`/images/small-bussiness/${item.url}.png`" alt="Small bussiness design" loading="lazy"
              class="w-full flex-shrink-0 flex-grow-0 mb-4" />
            <p class="text-lg">{{ item.copy }}</p>
          </div>
        </div>
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h3 class="font-karla mb-4">04. Manage your content</h3>
          <p class="mb-10 md:mb-14">
            Go to the Manage tab and review, edit or reorder all the content
            that will be shown in your space in the wallet.
          </p>
          <h3 class="font-karla mb-4">05. Preview your post</h3>
          <p class="mb-10 md:mb-14">
            Make sure that all the information of your post is in place, in the
            case that you need to change something, you will always have the
            option to edit.
          </p>
        </div>
        <div class="mb-10 md:mb-14 flex overflow-x-auto md:justify-center">
          <div class="
              flex flex-col
              justify-center
              items-center
              flex-shrink-0 flex-grow-0
              w-10/12
              md:w-[30%] md:px-10
              px-6
              mb-14
            " v-for="(item, index) in stepsGrid2" :key="index">
            <img :src="`/images/small-bussiness/${item.url}.png`" alt="Small bussiness design" loading="lazy"
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
import { defineComponent } from '@nuxtjs/composition-api';
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
    title: 'AndreaDN. | Small bussiness case study',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Concept design',
      },
    ],
  },
  setup() {

    const stepsGrid = [
      { url: 'img-mc-mobile-posting-01', copy: '01. Start the journey' },
      {
        url: 'img-mc-mobile-posting-02',
        copy: '02. Choose your type of post',
      },
      { url: 'img-mc-mobile-posting-03', copy: '03. Customize it' },
    ];
    const stepsGrid2 = [
      { url: 'img-mc-mobile-posting-04', copy: '04. Manage your content' },
      {
        url: 'img-mc-mobile-posting-05',
        copy: '05. Preview your post',
      },
    ];
    const footerNav = [
      footerNavEntries.football,
      footerNavEntries.atriom
    ];
    return { stepsGrid, stepsGrid2, footerNav };
  },
});
</script>
