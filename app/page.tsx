import ConfigForm from '@/features/blog-generator/components/ConfigForm';
import BlogList from '@/features/dashboard/components/BlogList';
import SerpPreview from '@/features/seo-preview/components/SerpPreview';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Header kısmı */}
      <header className="bg-white border-b border-slate-200 py-4 px-8 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-black tracking-tighter text-blue-600">
            PITON <span className="text-slate-400 font-light text-lg">SEO AI</span>
          </h1>
          <div className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100">
            Teknik Değerlendirme 
          </div>
        </div>
      </header>

      {/* Ana İçerik Alanı */}
      <main className="max-w-7xl mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sol Kolon: Ayarlar ve Giriş Formu */}
          <aside className="lg:col-span-4 sticky top-24">
            <ConfigForm />
            
            <div className="mt-6">
              <h3 className="text-xs font-black text-gray-400 uppercase mb-3 px-1">SEO Önizleme (Taslak)</h3>
              <SerpPreview title="" desc="" slug="" />
            </div>
          </aside>

          {/* Sağ Kolon: İçerik Listesi ve Önizlemeler  */}
          <section className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-slate-700">Üretilen İçerikler</h2>
              <span className="text-xs text-slate-400 font-medium">Anlık Güncelleniyor</span>
            </div>
            
          
            <BlogList />
          </section>
        </div>
      </main>
    </div>
  );
}