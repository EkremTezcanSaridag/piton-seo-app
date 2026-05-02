# Piton Technology - SEO & Blog Writing App

Bu uygulama, belirlenen kriterlere uygun SEO uyumlu blog yazıları üreten ve yöneten bir web platformudur.

## 🚀 Öne Çıkan Özellikler
- **Esnek AI Entegrasyonu:** LLM servisleri kullanılarak içerik üretimi otomatize edilmiştir.
- **SERP Preview:** Google arama sonuçları simülasyonu ile canlı SEO önizlemesi.
- **PDF Export:** Modern CSS çakışmalarından arındırılmış kurumsal rapor çıktısı.
- **Yönetim Paneli:** İçeriklerin özellik bazlı (feature-based) mimari ile yönetimi[cite: 1].

## 🏗️ Teknik Tercihler
- **Framework:** Next.js 14 & TypeScript[cite: 1].
- **State Management:** Zustand (Performans ve modülerlik için)[cite: 1].
- **CI/CD:** GitHub Actions workflow dosyası hazırlanmıştır[cite: 1].

## 📦 Kurulum ve Çalıştırma
1. Paketleri yükleyin: `npm install`[cite: 1]
2. `.env.example` dosyasındaki alanları kendi AI servis anahtarınızla doldurup `.env.local` olarak kaydedin[cite: 1].
3. Projeyi başlatın: `npm run dev`[cite: 1]

## 📝 Kullanım Gerekçeleri
Uygulama, karmaşıklığı yönetmek adına **Feature-based** yapıda kurgulanmıştır. Her özellik kendi tip tanımlarını ve hook'larını barındırır[cite: 1]. Bu yapı, projenin uzun vadeli bakımını ve ölçeklenebilirliğini sağlar.
