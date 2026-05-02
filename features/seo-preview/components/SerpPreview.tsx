'use client';
import React from 'react';

interface SerpPreviewProps {
  title: string;
  desc: string;
  slug: string;
}

export default function SerpPreview({ title, desc, slug }: SerpPreviewProps) {
  return (
    <div className="font-sans max-w-[600px]">
      {/* Site İsmi ve URL */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center text-[10px] text-slate-500">
          P
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-700 leading-none">Piton SEO App</span>
          <span className="text-[10px] text-slate-500 leading-none">https://piton.com.tr › {slug}</span>
        </div>
      </div>
      
      {/* Google Başlığı */}
      <h3 className="text-[#1a0dab] text-xl hover:underline cursor-pointer mb-1 leading-tight">
        {title || 'Blog Başlığı Buraya Gelecek'}
      </h3>
      
      {/* Meta Açıklama */}
      <p className="text-[#4d5156] text-sm leading-snug line-clamp-2">
        {desc || 'SEO uyumlu meta açıklama burada görünecek. İçeriği üretince burası otomatik dolar.'}
      </p>
    </div>
  );
}