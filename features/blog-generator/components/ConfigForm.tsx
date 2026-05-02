'use client';
import React, { useState } from 'react';
import { useBlogStore } from '@/shared/store/useBlogStore';
import { useGenerateBlog } from '../hooks/useGenerateBlog';

export default function ConfigForm() {
  const { isLoading } = useBlogStore();
  const { generate } = useGenerateBlog();
  const [source, setSource] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generate({ source, keywords });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white border rounded-xl shadow-sm space-y-4">
      <h2 className="font-bold text-lg border-b pb-2">İçerik Ayarları</h2>
      
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase">Kaynak URL/Metin</label>
        <input 
          className="w-full p-2 border rounded mt-1 text-black"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="Örn: www.piton.com.tr"
          
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase">Anahtar Kelimeler</label>
        <input 
          className="w-full p-2 border rounded mt-1 text-black"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="seo, yapay zeka"
          
        />
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-3 rounded font-bold disabled:bg-gray-400"
      >
        {isLoading ? '⏳ Blog Oluşturuluyor...' : 'Üretimi Başlat 🚀'}
      </button>
    </form>
  );
}