import PodcastCard from "@/components/common/PodcastCard";
import TrendingCard from "@/components/common/TrendingCard";
import EpisodeCard from "@/components/common/EpisodeCard";
import CategoryCard from "@/components/common/CategoryCard";
import { podcasts, episodes, categories, partners } from "@/constants";

export default function Home() {
  const editorPicks = podcasts.slice(0, 4);
  const trendingPodcasts = podcasts.slice(0, 5);
  const newEpisodes = episodes.slice(0, 5);
  const visibleCategories = categories.slice(0, 5);
  const allCategories = categories;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Editor's Picks */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">EDITOR'S PICKS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {editorPicks.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </section>

      {/* Trending This Week */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">TRENDING THIS WEEK</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          {trendingPodcasts.map((podcast, index) => (
            <TrendingCard key={podcast.id} podcast={podcast} index={index} />
          ))}
        </div>
      </section>

      {/* Newly Added Episodes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">NEWLY ADDED EPISODES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {newEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </section>

      {/* Listen by ABR Categories */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">LISTEN BY ABR CATEGORIES</h2>
          <button className="text-primary font-semibold hover:underline">
            View All
          </button>
        </div>
        
        {/* Visible Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
          {visibleCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        {/* All Categories (hidden by default, shown when "View All" clicked) */}
        <div className="hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {allCategories.map((category) => (
            <CategoryCard key={category.id}
            category={category} />
))}
</div>
</section>

  {/* Global Partners */}
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-6">OUR GLOBAL PARTNERS</h2>
    <div className="flex flex-wrap justify-center items-center gap-8">
      {partners.map((partner) => (
        <div key={partner.id} className="h-16 w-32 relative">
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  </section>
</div>