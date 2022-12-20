import { writable } from 'svelte/store';

function createAside() {
  const { subscribe, update } = writable(false);

  return {
    subscribe,
    toggle: () => update((n) => !n)
  };
}

export const aside = createAside();
