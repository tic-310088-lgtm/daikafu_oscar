import { useEffect, useRef, useState } from 'react';

export function parseRoute(hash) {
  const clean = hash.replace(/^#\/?/, '').replace(/\/+$/, '');

  if (clean.startsWith('receta/')) {
    return {
      page: 'recipe',
      slug: decodeURIComponent(clean.slice('receta/'.length)),
      section: null,
    };
  }

  if (clean === 'recetas') {
    return { page: 'home', slug: null, section: 'recetas' };
  }

  if (clean === 'filosofia') {
    return { page: 'home', slug: null, section: 'filosofia' };
  }

  return { page: 'home', slug: null, section: null };
}

export default function useHashRoute() {
  const [route, setRoute] = useState(() => parseRoute(window.location.hash));
  const previousPage = useRef(route.page);

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute(window.location.hash));

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const cameFromRecipe = previousPage.current === 'recipe';

    if (route.page === 'recipe') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } else if (route.section) {
      const timeout = window.setTimeout(() => {
        document.getElementById(route.section)?.scrollIntoView({
          behavior: cameFromRecipe ? 'auto' : 'smooth',
          block: 'start',
        });
      }, 60);

      previousPage.current = route.page;
      return () => window.clearTimeout(timeout);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    previousPage.current = route.page;
    return undefined;
  }, [route]);

  return route;
}
