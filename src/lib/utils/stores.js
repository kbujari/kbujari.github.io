import { writable, readable } from 'svelte/store';

function createAside() {
  const { subscribe, update } = writable(false);

  return {
    subscribe,
    toggle: () => update((n) => !n)
  };
}

export const aside = createAside();

export const routes = readable([
  { name: 'Home', src: '/' },
  { name: 'Info', src: '/info' },
  { name: 'Blog', src: '/blog' },
  { name: 'Photos', src: '/photos' }
]);
