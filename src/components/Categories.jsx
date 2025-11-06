import { Camera, PenTool, Megaphone, Video, BarChart } from "lucide-react";

const items = [
  { icon: Megaphone, label: "Partenariats & Pubs", color: "from-emerald-500 to-teal-500" },
  { icon: Camera, label: "UGC & Shoots", color: "from-fuchsia-500 to-pink-500" },
  { icon: Video, label: "Vidéos & Reels", color: "from-cyan-500 to-blue-500" },
  { icon: PenTool, label: "Rédaction & Scripts", color: "from-amber-500 to-orange-500" },
  { icon: BarChart, label: "Audit & Growth", color: "from-purple-500 to-indigo-500" },
];

export default function Categories() {
  return (
    <section id="explore" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Catégories populaires</h2>
            <p className="mt-1 text-sm text-gray-600">Inspirez-vous et trouvez le bon créateur</p>
          </div>
          <a href="#" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">Voir tout</a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {items.map(({ icon: Icon, label, color }) => (
            <button
              key={label}
              className={`group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 text-left shadow-sm transition hover:shadow-md`}
            >
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${color} text-white grid place-items-center`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-semibold text-gray-900">{label}</div>
              <div className="text-xs text-gray-500">+ 2 000 offres</div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
