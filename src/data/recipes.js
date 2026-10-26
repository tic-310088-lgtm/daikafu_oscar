// Fotografías optimizadas de Unsplash, bajo la licencia de Unsplash.
// Carbonara: https://unsplash.com/photos/photo-1612874742237-6526221588e3
// Salmón:   https://unsplash.com/photos/photo-1467003909585-2f8a72700288

export const recipes = [
  {
    slug: 'pasta-carbonara-italiana-original',
    number: '01',
    title: 'Pasta Carbonara Italiana Original',
    shortTitle: 'Pasta Carbonara',
    category: 'Italiana',
    origin: 'Roma, Italia',
    tagline: 'El clásico romano en su versión más honesta.',
    cardDescription:
      'Guanciale crujiente, pecorino y una crema de huevo sin nata. La carbonara de verdad, con sus cuatro ingredientes esenciales.',
    description:
      'Sin nata, sin atajos y sin miedo al huevo. Esta es la carbonara romana de verdad: guanciale dorado, pecorino y una salsa sedosa que nace del calor de la pasta. Sencilla, pero implacable con la técnica.',
    image: {
      src: '/images/carbonara-900.webp',
      srcSet:
        '/images/carbonara-900.webp 900w, /images/carbonara-1600.webp 1600w',
      alt: 'Plato de pasta carbonara con guanciale crujiente, pecorino rallado y pimienta negra',
    },
    prepTime: '15 min',
    cookTime: '15 min',
    totalTime: '30 min',
    difficulty: 'Intermedia',
    servings: '4 porciones',
    tags: ['Sin nata', 'Guanciale', 'Clásico romano'],
    ingredients: [
      {
        group: 'La pasta',
        items: [
          '400 g de spaghetti o rigatoni',
          'Sal gruesa para el agua de cocción',
        ],
      },
      {
        group: 'La salsa',
        items: [
          '4 yemas de huevo + 1 huevo entero, a temperatura ambiente',
          '100 g de pecorino romano DOP rallado fino',
          'Pimienta negra recién molida, generosa',
        ],
      },
      {
        group: 'El guanciale',
        items: ['180 g de guanciale en tiras o dados'],
      },
      {
        group: 'Para servir',
        items: [
          'Pecorino romano extra para rallar',
          'Pimienta negra recién molida',
          '250 ml del agua de cocción reservada',
        ],
      },
    ],
    steps: [
      {
        title: 'Pon el agua a hervir',
        text: 'Llena una olla grande de agua y llévala a ebullición. Añade sal gruesa, pero no en exceso: el pecorino y el guanciale ya aportan bastante sabor. Cuece la pasta hasta que esté al dente.',
      },
      {
        title: 'Dora el guanciale',
        text: 'Coloca el guanciale en una sartén fría, sin aceite, y llévala a fuego medio-bajo. Cocínalo entre 8 y 10 minutos, removiendo de vez en cuando, hasta que la grasa se funda y los bordes queden dorados y crujientes. Retira del fuego y conserva la grasa en la sartén.',
      },
      {
        title: 'Prepara la crema de huevo',
        text: 'En un bol, bate las yemas y el huevo entero con el pecorino rallado y una buena cantidad de pimienta negra. Mezcla hasta obtener una pasta homogénea, sin batir en exceso ni buscar espuma.',
      },
      {
        title: 'Reserva el agua de cocción',
        text: 'Antes de escurrir la pasta, guarda unos 250 ml del agua de cocción. Es el ingrediente secreto que emulsiona la salsa y le da ese brillo sedoso. Escurre la pasta sin enjuagarla.',
      },
      {
        title: 'Mezcla la pasta con el guanciale',
        text: 'Con la sartén apartada del fuego, incorpora la pasta escurrida y remueve para que se impregne de la grasa del guanciale. Si la sartén está muy caliente, espera un minuto: el huevo nunca debe cuajar como una tortilla.',
      },
      {
        title: 'Crea la salsa',
        text: 'Añade la mezcla de huevo y queso sobre la pasta y remueve enérgicamente y sin parar. Ve incorporando el agua de cocción cucharada a cucharada hasta lograr una crema brillante que envuelva cada hebra.',
      },
      {
        title: 'Sirve al momento',
        text: 'Reparte en platos calientes, termina con más pecorino y pimienta negra recién molida. La carbonara no espera: se sirve inmediatamente, cuando la salsa está en su punto más sedoso.',
      },
    ],
    tip: 'El calor residual es tu aliado. Retira la sartén del fuego antes de añadir el huevo y remueve sin descanso. Si la mezcla se calienta demasiado, un chorrito de agua de cocción la devuelve a su punto.',
  },
  {
    slug: 'salmon-al-horno-costra-hierbas-limon',
    number: '02',
    title: 'Salmón al Horno con Costra de Hierbas y Limón',
    shortTitle: 'Salmón al horno',
    category: 'Pescado',
    origin: 'Cocina de temporada',
    tagline: 'Hierbas frescas, limón y una costra que cruje.',
    cardDescription:
      'Un lomo de salmón jugoso bajo una costra dorada de panko, perejil, eneldo y limón. Cena elegante en una sola bandeja.',
    description:
      'Salmón en su punto, con una costra de pan y hierbas frescas que se dora en el horno y un toque de limón que lo alegra todo. Una cena de restaurante que se prepara en una bandeja y en menos de media hora.',
    image: {
      src: '/images/salmon-900.webp',
      srcSet: '/images/salmon-900.webp 900w, /images/salmon-1400.webp 1400w',
      alt: 'Salmón al horno con hierbas frescas y limón, servido sobre verduras',
      objectPosition: '50% 58%',
    },
    prepTime: '15 min',
    cookTime: '15 min',
    totalTime: '30 min',
    difficulty: 'Fácil',
    servings: '4 porciones',
    tags: ['En una bandeja', 'Omega-3', 'Cena rápida'],
    ingredients: [
      {
        group: 'El salmón',
        items: [
          '4 lomos de salmón fresco de 180–200 g cada uno, con piel',
          '1 cucharada de aceite de oliva virgen extra',
          'Sal fina y pimienta negra recién molida',
        ],
      },
      {
        group: 'La costra de hierbas',
        items: [
          '50 g de panko o pan rallado',
          '30 g de mantequilla derretida',
          '2 cucharadas de perejil fresco picado',
          '1 cucharada de eneldo fresco picado',
          '1 cucharadita de tomillo fresco',
          '1 diente de ajo rallado',
          'La ralladura de 1 limón',
          '20 g de parmesano rallado',
        ],
      },
      {
        group: 'Para acompañar',
        items: [
          '1 limón cortado en gajos',
          'Un puñado de hierbas frescas',
          '250 g de espárragos verdes (opcional)',
        ],
      },
    ],
    steps: [
      {
        title: 'Prepara el horno',
        text: 'Precalienta el horno a 200 °C con la rejilla en la parte superior. Forra una bandeja con papel de horno y pincélala ligeramente con aceite de oliva.',
      },
      {
        title: 'Seca y sazona el salmón',
        text: 'Seca muy bien los lomos con papel de cocina: la superficie seca es clave para que la costra se adhiera. Sazona ambos lados con sal y pimienta y colócalos en la bandeja con la piel hacia abajo, separados entre sí.',
      },
      {
        title: 'Mezcla la costra',
        text: 'En un bol, combina el panko, el perejil, el eneldo, el tomillo, el ajo, la ralladura de limón y el parmesano. Añade la mantequilla derretida y mezcla hasta obtener una textura arenosa. Prueba y ajusta de sal y pimienta.',
      },
      {
        title: 'Cubre los lomos',
        text: 'Reparte la mezcla sobre la parte superior de cada lomo y presiónala suavemente con los dedos para que quede compacta. Un chorrito de aceite de oliva por encima ayudará a que la costra se dore de manera uniforme.',
      },
      {
        title: 'Hornea hasta que esté en su punto',
        text: 'Hornea entre 12 y 15 minutos, según el grosor de los lomos, hasta que el salmón esté opaco y se separe en lascas. Si buscas una costra más dorada, activa el gratinado durante 1 o 2 minutos y vigílalo de cerca.',
      },
      {
        title: 'Reposa y sirve',
        text: 'Deja reposar el salmón 3 minutos fuera del horno para que los jugos se asienten. Sirve con gajos de limón, hierbas frescas y los espárragos asados junto al pescado, si los usas.',
      },
    ],
    tip: 'El punto exacto está en el centro: 50–52 °C para un salmón jugoso. Si no tienes termómetro, retíralo del horno cuando el centro aún se vea ligeramente translúcido; el calor residual terminará de cocinarlo.',
  },
];

export function getRecipeBySlug(slug) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getOtherRecipe(slug) {
  return recipes.find((recipe) => recipe.slug !== slug);
}
