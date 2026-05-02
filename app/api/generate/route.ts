import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { source, keywords } = body;

  // AI işlemini simüle etmek için 2 saniye bekletiyoruz
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Burası gerçekte AI'dan gelecek olan cevabı simüle eder
  const mockBlog = {
    id: Math.random().toString(36).substr(2, 9),
    title: `${keywords.split(',')[0] || 'SEO'} Hakkında Kapsamlı Rehber`,
    metaTitle: `${keywords.split(',')[0] || 'SEO'} Nedir? | 2026 Güncel Rehber`,
    metaDesc: `${source} kaynağından analiz edilen verilere göre hazırladığımız bu içerikte SEO süreçlerini inceliyoruz.`,
    slug: "seo-rehberi-2026",
    content: `Bu içerik ${source} verisi kullanılarak üretilmiştir. `,
    keywords: keywords.split(','),
    socialPost: `Yeni blog yazımız yayında! #${keywords.split(',')[0] || 'seo'} #ai`,
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(mockBlog);
}