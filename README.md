# Oliva & Sal — Recetario de cocina

Recetario culinario moderno, elegante y 100% responsivo construido con **React + Vite + Tailwind CSS**.

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abrir en la dirección que muestra Vite (por defecto `http://localhost:5173/`).

Otros comandos:

```bash
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build de producción
```

## Qué incluye

- **Pantalla de inicio** con banner de bienvenida, composición editorial de imagen y dos recetas destacadas.
- **Pasta Carbonara Italiana Original** e **Salmón al Horno con Costra de Hierbas y Limón**, con ingredientes tradicionales y pasos numerados.
- **Vista de detalle** con imagen grande, tarjetas de tiempo/dificultad/porciones, ingredientes agrupados con viñetas, preparación paso a paso y botón para volver a la lista.
- **Enrutado ligero por hash** (`#/receta/<slug>`), así los enlaces funcionan y el botón "atrás" del navegador también.
- Newsletter en el pie con validación de correo, revelados al hacer scroll, animaciones suaves y soporte de `prefers-reduced-motion`.

## Estructura

```
src/
  App.jsx                    # enrutado + layout general
  hooks/useHashRoute.js      # router por hash mínimo
  data/recipes.js            # las dos recetas con sus datos
  components/
    Header.jsx / Footer.jsx
    Hero.jsx                 # banner de bienvenida
    FeatureStrip.jsx
    FeaturedRecipes.jsx      # sección "Recetas destacadas"
    RecipeCard.jsx
    RecipeDetail.jsx         # vista de detalle de receta
    StorySection.jsx         # bloque "Nuestra mesa"
    SmartImage.jsx           # <img> con srcset, carga progresiva y fallback
    Reveal.jsx               # animación de entrada al hacer scroll
public/images/               # fotografías optimizadas (WebP) de Unsplash
```

## Diseño

- Tipografías: **Fraunces** (títulos) y **Manrope** (texto).
- Paleta: crema/sand neutros, acentos **terracota** y **verde oliva**.
- Componentes con `rounded-2xl`/`rounded-3xl`, sombras suaves y espaciado amplio.
- Comprobado en tamaños de 320px a 1440px sin desbordes horizontales.

Las fotografías provienen de [Unsplash](https://unsplash.com) bajo su licencia.
