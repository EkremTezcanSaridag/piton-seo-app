import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { source, keywords } = await req.json();

    // 1. Anahtarın koda ulaşıp ulaşmadığını test edelim
    if (!process.env.GROQ_API_KEY) {
      console.error("❌ KRİTİK: GROQ_API_KEY .env.local içinde bulunamadı!");
      return NextResponse.json({ error: "API Key eksik" }, { status: 500 });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
body: JSON.stringify({
  model: "llama-3.3-70b-versatile", // En yeni ve güçlü modellerden biri
  messages: [
    { 
      role: "system", 
      content: "Sen bir SEO uzmanısın. SADECE JSON döndür. JSON yapısı şu şekilde olmalı: { \"title\": \"\", \"metaTitle\": \"\", \"metaDesc\": \"\", \"slug\": \"\", \"content\": \"\", \"keywords\": [], \"socialPost\": \"\" }" 
    },
    { 
      role: "user", 
      content: `Kaynak: ${source}, Anahtar Kelimeler: ${keywords}. Bu bilgilere dayanarak Türkçe, SEO uyumlu bir blog yazısı üret.` 
    }
  ],
  response_format: { type: "json_object" }
}),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("🚨 GROQ'DAN GELEN HATA:", data);
      return NextResponse.json({ error: data.error?.message || "Groq hatası" }, { status: response.status });
    }

    let blogData;
    try {
      blogData = JSON.parse(data.choices[0].message.content);
    } catch (parseError) {
      console.error("JSON Parse Hatası:", data.choices[0].message.content);
      throw new Error("AI geçersiz bir JSON formatı döndürdü.");
    }

    return NextResponse.json({
      ...blogData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    });

  } catch (err: any) {
    console.error("💥 YAKALANAN HATA:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}