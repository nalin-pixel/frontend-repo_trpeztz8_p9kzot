import { Search, Globe, User, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500" />
          <span className="font-extrabold text-xl tracking-tight">InfluenceHub</span>
        </div>

        <div className="hidden max-w-xl flex-1 items-center justify-center px-6 md:flex">
          <div className="flex w-full items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              placeholder="Rechercher un service (ex: Story Instagram, Vidéo UGC, Partenariat)"
            />
            <button className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
              Rechercher
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 md:flex">
            <Globe className="h-4 w-4" /> FR
          </button>
          <button className="hidden rounded-full px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 md:block">
            Devenir vendeur
          </button>
          <button className="hidden rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black md:block">
            Se connecter
          </button>
          <button className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
