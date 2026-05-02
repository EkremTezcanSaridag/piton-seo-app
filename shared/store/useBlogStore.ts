import { create } from 'zustand';
import { Blog } from '../types';

interface BlogState {
  blogs: Blog[]; // Blog yazılarını içeren dizi
  isLoading: boolean; // Yüklenme durumu 
  addBlog: (blog: Blog) => void; // Yeni blog ekleme fonksiyonu
  removeBlog: (id: string) => void; // Blog silme fonksiyonu
  setLoading: (status: boolean) => void; // Yüklenme durumunu güncelleme fonksiyonu
}

// Zustand kullanarak global blog state yönetimi oluşturuyoruz
export const useBlogStore = create<BlogState>((set) => ({

  blogs: [], // Blog yazılarını tutacağımız dizi
  isLoading: false, // Başlangıçta yüklenme durumu kapalı olacak

  // Yeni bir blog yazısını listenin başına ekler
  addBlog: (blog) => set((state) => ({ blogs: [blog, ...state.blogs] })),

  // Verilen ID'ye sahip blog yazısı var ise  listeden filtreleyerek siler
  removeBlog: (id) => set((state) => ({ blogs: state.blogs.filter(b => b.id !== id) })),

  // AI içerik üretimi veya veri çekme sırasında loading durumunu günceller
  setLoading: (status) => set({ isLoading: status }),
}));

