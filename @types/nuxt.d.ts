import '@nuxt/types';

declare module '@nuxt/types' {
  interface Context {
    $content: any;
  }
}
