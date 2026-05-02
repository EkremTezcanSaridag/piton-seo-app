import React from 'react';

interface Props {
  title: string;
  desc: string;
  slug: string;
}

export default function SerpPreview({ title, desc, slug }: Props) {
  // Eğer değerler boşsa kullanıcıya yol göstermesi için varsayılan metinler atanır.
  const displayTitle = title || "Örnek Blog Başlığı | SEO Odaklı Başlık";
  const displayDesc = desc || "Buraya gelecek olan açıklama metni, Google arama sonuçlarında kullanıcıların göreceği kısımdır. Anahtar kelimeleri içermesi önemlidir.";
  const displaySlug = slug || "ornek-url-yapisi";

  return (
    <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm max-w-[600px] font-sans">

      <div className="text-[#202124] text-sm mb-1 truncate flex items-center">
        <span className="bg-gray-100 px-2 py-0.5 rounded text-[10px] mr-2">Ad</span>
        https://piton-seo.com › {displaySlug}
      </div>

      <div className="text-[#1a0dab] text-xl hover:underline cursor-pointer mb-1 truncate leading-tight">
        {displayTitle}
      </div>

      <div className="text-[#4d5156] text-sm line-clamp-2 leading-relaxed">
        {displayDesc}
      </div>
    </div>
  );
}


