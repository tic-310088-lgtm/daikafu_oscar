import FeaturedRecipes from './FeaturedRecipes';
import FeatureStrip from './FeatureStrip';
import Hero from './Hero';
import StorySection from './StorySection';

export default function Home({ recipes }) {
  return (
    <main
      id="contenido"
      tabIndex={-1}
      className="animate-fade focus:outline-none"
    >
      <Hero primary={recipes[0]} secondary={recipes[1]} />
      <FeatureStrip />
      <FeaturedRecipes recipes={recipes} />
      <StorySection />
    </main>
  );
}
