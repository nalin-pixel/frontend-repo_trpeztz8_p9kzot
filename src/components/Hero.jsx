import { Rocket, ShieldCheck, Sparkles, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24 lg:px-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-semibold">Market global des influenceurs</span>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
            Vendez vos services d'influence. Achetez des partenariats en toute confiance.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Une place de marché pensée comme Fiverr pour les influenceurs du monde entier:
            partenariats, stories, vidéos UGC, placements produits et plus encore.
          </p>

          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            <a
              href="#explore"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-black"
            >
              Explorer les services
            </a>
            <a
              href="#become-seller"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Devenir vendeur
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600"/> Paiements sécurisés</div>
            <div className="inline-flex items-center gap-2"><Rocket className="h-4 w-4 text-emerald-600"/> Livraison rapide</div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-xl">
            <div className="rounded-xl bg-gradient-to-br from-emerald-100 via-cyan-100 to-white p-6">
              <div className="mx-auto max-w-md">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Trouver un service</h3>
                <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm">
                  <Search className="h-5 w-5 text-gray-500" />
                  <input className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400" placeholder="Ex: 1 story Instagram, Vidéo UGC 30s, Revue YouTube" />
                  <button className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Rechercher</button>
                </div>
                <p className="mt-3 text-xs text-gray-500">Astuce: utilisez des mots-clés comme "TikTok", "FR", "Gaming", "Beauté".</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-gray-600">
              <div className="rounded-lg bg-gray-50 px-3 py-2">Instagram</div>
              <div className="rounded-lg bg-gray-50 px-3 py-2">TikTok</div>
              <div className="rounded-lg bg-gray-50 px-3 py-2">YouTube</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
