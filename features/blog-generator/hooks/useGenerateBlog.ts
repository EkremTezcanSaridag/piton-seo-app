import { useBlogStore } from '@/shared/store/useBlogStore';

export const useGenerateBlog = () => {
  const { addBlog, setLoading } = useBlogStore();

  const generate = async (formData: any) => {
    setLoading(true); // "Blog oluşturuluyor..." durumunu başlatır
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        addBlog(data); // Üretilen bloğu ana listeye (store) ekler
      } else {
        throw new Error("API hatası");
      }
    } catch (error) {
      console.error("Üretim hatası:", error);
      alert("İçerik üretilirken bir hata oluştu.");
    } finally {
      setLoading(false); // İşlem bitince yükleniyor durumunu kapatır
    }
  };

  return { generate };
};