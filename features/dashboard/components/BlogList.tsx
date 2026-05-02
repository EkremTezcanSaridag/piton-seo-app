'use client';
import React from 'react';
import { useBlogStore } from '@/shared/store/useBlogStore';
import SerpPreview from '@/features/seo-preview/components/SerpPreview';

export default function BlogList() {
  const { blogs, removeBlog } = useBlogStore();


  if (blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-20 bg-white border-2 border-dashed border-slate-200 rounded-3xl text-slate-400">
        <div className="text-4xl mb-4 text-slate-200">📄</div>
        <p className="font-medium italic">Henüz bir blog üretilmedi.</p>
        <p className="text-xs">Soldaki formu doldurarak ilk içeriği oluşturabilirsiniz.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-slate-800 leading-tight">{blog.title}</h3>
            <button 
              onClick={() => removeBlog(blog.id)}
              className="text-slate-300 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-widest"
            >
              Sil
            </button>
          </div>

          {/*  Önizleme Kısmı */}
          <div className="bg-slate-50 p-4 rounded-xl mb-6">
            <p className="text-[10px] font-black text-slate-400 mb-3 uppercase tracking-tighter">Google Arama Görünümü</p>
            <SerpPreview title={blog.title} desc={blog.content} slug={blog.slug} />
          </div>

          <div className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {blog.content}
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
            {blog.keywords.map((kw, i) => (
              <span key={i} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-xs font-bold italic">
                #{kw.trim()}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}