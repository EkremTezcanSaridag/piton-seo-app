'use client';
import { useState, useEffect } from 'react';
import { useBlogStore } from '@/shared/store/useBlogStore';
import SerpPreview from '../../seo-preview/components/SerpPreview';

export default function BlogList() {
  const { blogs, removeBlog } = useBlogStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadPDF = async (blogId: string) => {
    const blog = blogs.find(b => b.id === blogId);
    if (!blog) return;

    try {
      const { default: jsPDF } = await import('jspdf');
      const { default: html2canvas } = await import('html2canvas');

      const pdfContainer = document.createElement('div');
      pdfContainer.style.cssText = `
        width: 800px; padding: 50px; background: white; color: #1e293b; font-family: Arial, sans-serif;
      `;

      pdfContainer.innerHTML = `
        <div style="border-bottom: 3px solid #2563eb; margin-bottom: 30px; padding-bottom: 20px;">
          <h1 style="margin: 0; color: #2563eb; font-size: 26px;">PITON SEO CONTENT REPORT</h1>
          <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 13px;">${new Date().toLocaleDateString('tr-TR')}</p>
        </div>
        <h2 style="font-size: 32px; color: #0f172a; margin-bottom: 25px;">${blog.title}</h2>
        
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 25px; margin-bottom: 40px;">
          <p style="color: #1a0dab; font-size: 20px; margin: 0 0 5px 0; font-weight: bold;">${blog.metaTitle}</p>
          <p style="color: #006621; font-size: 14px; margin: 0 0 8px 0;">https://piton.com.tr/${blog.slug}</p>
          <p style="color: #4b5563; font-size: 15px; margin: 0; line-height: 1.5;">${blog.metaDesc}</p>
        </div>

        <div style="font-size: 16px; line-height: 1.8; color: #334155;">
          ${blog.content}
        </div>

        <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #f1f5f9; color: #94a3b8; font-size: 12px;">
          Anahtar Kelimeler: ${blog.keywords.join(', ')}
        </div>
      `;

      document.body.appendChild(pdfContainer);
      pdfContainer.style.position = 'absolute';
      pdfContainer.style.left = '-9999px';

      const canvas = await html2canvas(pdfContainer, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`piton-seo-${blog.id}.pdf`);
      document.body.removeChild(pdfContainer);

    } catch (err) {
      alert("PDF hazırlanırken bir hata oluştu.");
    }
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`"${title}" içeriğini silmek istediğinize emin misiniz?`)) {
      removeBlog(id);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-10">
      {blogs.length === 0 ? (
        <div className="text-center p-20 bg-white border-2 border-dashed rounded-[3rem] text-slate-400">
          Listeniz henüz boş.
        </div>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-3xl font-black text-slate-900 leading-tight max-w-[75%]">{blog.title}</h3>
              <button 
                onClick={() => handleDownloadPDF(blog.id)}
                className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-xs font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
              >
                📄 PDF KAYDET
              </button>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2rem] mb-8 border border-slate-100">
              <SerpPreview title={blog.metaTitle} desc={blog.metaDesc} slug={blog.slug} />
            </div>

            <div 
              className="prose prose-slate max-w-none text-slate-700 mb-8"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="flex justify-between items-center pt-6 border-t border-slate-50">
              <div className="flex gap-2">
                {blog.keywords.map((kw, i) => (
                  <span key={i} className="text-slate-400 text-[11px] font-bold uppercase">#{kw.trim()}</span>
                ))}
              </div>
              <button 
                onClick={() => handleDelete(blog.id, blog.title)}
                className="text-slate-300 hover:text-red-500 text-[10px] font-bold uppercase tracking-widest transition-colors"
              >
                Yazıyı Kaldır
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}