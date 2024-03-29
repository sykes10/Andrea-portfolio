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
        <img src="/images/atriom/img-atriom.png" alt="Atriom design" loading="eager" fetchpriority="high"
          class="w-full mb-10 md:mb-14" />
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h1 class="mb-8">A startup looking for a clean and safe look</h1>
          <p class="mb-6">
            This Atriom is a small startup which provides technical
            documentation services in Barcelona, Spain. The client can request
            the documentation through the web or through a property
            administration. The final request will be sent to a service
            installer who will be the one filling the final document.
          </p>
          <span class="text-peach-500 uppercase">Branding - Illustration - UI Design - Web design</span>
        </div>
        <img src="/images/atriom/img-at-desktop.png" alt="Atriom Desktop" loading="lazy"
          class="w-full max-w-4xl mx-auto" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">The Project</h2>
          <p>
            Atriom required an small marketing Website to promote their service,
            mainly directed to the final client, and a simple Dashboard where
            property administrators would be able to make document requests and
            check the status of the documents.
          </p>
        </div>
        <img src="/images/atriom/img-at-wires.png" alt="Atriom wireframes" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">Marketing site</h2>
          <p class="mb-5">
            The service Atriom provides is “niche” and specific, the clients
            usually know what they want but don't know how to get it. Having
            this assumption in mind, the main screen was made as a short
            illustrated guide that will help the user to get access to the
            service.
          </p>
          <p>
            Their service’s proposal is something new, they are digitizing a
            documentation process that is usually made by hand and requires a
            certain level of legality. It would be understandable if a potential
            client feels hesitant on hiring the service. To increase the level
            of trust, we wanted the site to look friendly, calm and safe, using
            simple illustrations and a bright colour pallet.
          </p>
        </div>
        <img src="/images/atriom/img-at-full.png" alt="Atriom full page" loading="lazy"
          class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
      </article>
      <article class="mb-14 md:mb-24">
        <div class="max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 class="mb-8">Dashboard</h2>
          <p class="mb-10 md:mb-14">
            Inside the dashboard, the property administrators will be able to
            generate a service request directed to service installers. We
            created the first version of the dashboard with the most simple
            functionalities, where the user will only be able to generate
            requests and check the status of the previously generated requests.
          </p>
          <h3 class="mb-4">Step 1</h3>
          <p class="mb-10 md:mb-14">
            User logs in with a given User and Password
          </p>
          <img src="/images/atriom/img-at-step-1.png" alt="Atriom step 1" loading="lazy"
            class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
          <h3 class="mb-4">Step 2</h3>
          <p class="mb-10 md:mb-14">
            Gets instant access to their dashboard. Can see the status of the
            request and generate a new one
          </p>
          <img src="/images/atriom/img-at-step-2.png" alt="Atriom step 2" loading="lazy"
            class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
          <h3 class="mb-4">Step 3</h3>
          <p class="mb-5">
            Generate a document request by filling and sending the form.
          </p>
          <p class="mb-10 md:mb-14">
            Atriom will quickly receive the request and start with the
            documentation process
          </p>
          <img src="/images/atriom/img-at-step-3.png" alt="Atriom step 3" loading="lazy"
            class="w-full flex-shrink-0 flex-grow-0 mb-10 md:mb-14" />
        </div>
      </article>
      <divider class="mx-auto mb-14 md:mb-24" />
      <footer-nav :items="footerNav"></footer-nav>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import AppButton from '~/components/button.vue';
import FooterNav from '~/components/footer-nav.vue';
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
    title: 'AndreaDN. | Atriom case study',

  },
  computed: {
    stepsGrid() {
      return [
        { url: 'img-mc-mobile-posting-01', copy: '01. Start the journey' },
        {
          url: 'img-mc-mobile-posting-02',
          copy: '02. Choose your type of post',
        },
        { url: 'img-mc-mobile-posting-03', copy: '03. Customize it' },
      ]
    },
    stepsGrid2() {
      return [
        { url: 'img-mc-mobile-posting-04', copy: '04. Manage your content' },
        {
          url: 'img-mc-mobile-posting-05',
          copy: '05. Preview your post',
        },
      ]
    },
    footerNav() {
      return [
        footerNavEntries.vector, footerNavEntries.octopus
      ]
    },
  }
});
</script>
