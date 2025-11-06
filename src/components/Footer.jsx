import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500" />
              <span className="font-extrabold tracking-tight">InfluenceHub</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">La place de marché des créateurs pour vendre des services de visibilité et de contenu.</p>
            <div className="mt-4 flex items-center gap-3 text-gray-600">
              <a href="#" className="rounded-full p-2 hover:bg-gray-100"><Instagram className="h-5 w-5"/></a>
              <a href="#" className="rounded-full p-2 hover:bg-gray-100"><Youtube className="h-5 w-5"/></a>
              <a href="#" className="rounded-full p-2 hover:bg-gray-100"><Twitter className="h-5 w-5"/></a>
              <a href="#" className="rounded-full p-2 hover:bg-gray-100"><Facebook className="h-5 w-5"/></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Catégories</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Partenariats</li>
              <li>UGC</li>
              <li>Vidéos</li>
              <li>Audit & Growth</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Ressources</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Centre d'aide</li>
              <li>Assurance</li>
              <li>Tarification</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Légal</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Conditions</li>
              <li>Confidentialité</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-6 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} InfluenceHub. Tous droits réservés.</span>
          <div className="hidden gap-6 md:flex">
            <a href="#" className="hover:text-gray-700">Devenir vendeur</a>
            <a href="#" className="hover:text-gray-700">Recruter des créateurs</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
