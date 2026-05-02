'use client';
import React, { useState } from 'react';
import { useBlogStore } from '@/shared/store/useBlogStore';

export default function ConfigForm() {
  const { isLoading } = useBlogStore();
  
  const [formData, setFormData] = useState({
    source: '',
    language: 'tr',
    tone: 'Professional',
    audience: 'General',
    keywords: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white border rounded-2xl shadow-sm text-black space-y-5">
      <div className="border-b pb-3">
        <h2 className="text-xl font-bold">İçerik Yapılandırma</h2>
        <p className="text-xs text-gray-500">Blog üretim kriterlerini belirleyiniz</p>
      </div>

      <div>
        <label className="block text-xs font-black text-gray-400 uppercase mb-1">URL veya METİN</label>
        <textarea 
          required
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all h-28"
          placeholder="https://example.com veya taslak metniniz..."
          value={formData.source}
          onChange={(e) => setFormData({...formData, source: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-black text-gray-400 uppercase mb-1">Yazı Tonu</label>
          <select 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
            value={formData.tone}
            onChange={(e) => setFormData({...formData, tone: e.target.value})}
          >
            <option value="Professional">👔 Profesyonel</option>
            <option value="Friendly">😊 Samimi</option>
            <option value="Informative">📚 Bilgilendirici</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-black text-gray-400 uppercase mb-1">Hedef Kitle</label>
          <select 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
            value={formData.audience}
            onChange={(e) => setFormData({...formData, audience: e.target.value})}
          >
            <option value="General">Herkes</option>
            <option value="Tech">Teknoloji Meraklıları</option>
            <option value="Business">İş Dünyası</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-black text-gray-400 uppercase mb-1">Odak Anahtar Kelimeler</label>
        <input 
          type="text"
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
          placeholder="virgülle ayırın (örn: seo, ai, tech)"
          value={formData.keywords}
          onChange={(e) => setFormData({...formData, keywords: e.target.value})}
        />
      </div>

      <button 
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-[0.98] disabled:bg-gray-300"
      >
        {isLoading ? 'İşleniyor...' : 'İçerik Üretimini Başlat 🚀'}
      </button>
    </form>
  );
}


yorum satırlarını kaldır 