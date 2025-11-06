import { Star, Shield, Clock, ArrowRight } from "lucide-react";

const gigs = [
  {
    id: 1,
    title: "Je ferai une story Instagram pour votre marque",
    creator: "@amelia.fit",
    rating: 4.9,
    reviews: 220,
    price: 120,
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec2f2a2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Vidéo UGC 30s orientée conversion",
    creator: "@leo.ugc",
    rating: 4.8,
    reviews: 180,
    price: 180,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Placement produit YouTube (intégration 60s)",
    creator: "@techalex",
    rating: 5.0,
    reviews: 96,
    price: 550,
    badge: "Nouveau",
    image:
      "https://images.unsplash.com/photo-1519648023493-d82b5f8d7fd9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Audit Instagram + plan d'action 30 jours",
    creator: "@sofia.growth",
    rating: 4.7,
    reviews: 140,
    price: 90,
    badge: "Pro",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
  },
];

function GigCard({ gig }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img src={gig.image} alt={gig.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow">
          {gig.badge}
        </div>
      </div>
      <div className="space-y-2 p-4">
        <div className="line-clamp-2 font-semibold text-gray-900">{gig.title}</div>
        <div className="text-sm text-gray-500">{gig.creator}</div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          {gig.rating}
          <span className="text-gray-400">({gig.reviews})</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-lg font-extrabold">{gig.price}€</div>
          <button className="inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-50">
            Voir <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedGigs() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Offres mises en avant</h2>
            <p className="mt-1 text-sm text-gray-600">Qualité vérifiée, livrées rapidement</p>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <div className="inline-flex items-center gap-1"><Shield className="h-4 w-4 text-emerald-600"/> Paiement protégé</div>
            <div className="inline-flex items-center gap-1"><Clock className="h-4 w-4 text-emerald-600"/> Délais respectés</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gigs.map((g) => (
            <GigCard key={g.id} gig={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
