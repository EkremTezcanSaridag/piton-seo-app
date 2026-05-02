'use client';
import React, { useState } from 'react';
import { useBlogStore } from '@/shared/store/useBlogStore';
import { useGenerateBlog } from '../hooks/useGenerateBlog'; // 1. Hook'u içeri al

export default function ConfigForm() {
  const { isLoading } = useBlogStore();
  const { generate } = useGenerateBlog(); // 2. Fonksiyonu çek
  
  const [formData, setFormData] = useState({
    source: '',
    language: 'tr',
    tone: 'Professional',
    audience: 'General',
    keywords: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generate(formData); // 3. Form gönderilince generate fonksiyonunu çalıştır
  };

  return (
    <form onSubmit={handleSubmit} className="...">
       
       <button 
        type="submit"
        disabled={isLoading}
        className="..."
      >
        {isLoading ? '✍️ Blog oluşturuluyor...' : 'İçerik üret'}
      </button>
    </form>
  );
}