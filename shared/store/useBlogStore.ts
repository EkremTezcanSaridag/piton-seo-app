import { create } from 'zustand';
import { Blog } from '../types';

interface BlogState {
  blogs: Blog[];
  isLoading: boolean;
  addBlog: (blog: Blog) => void;
  removeBlog: (id: string) => void;
  setLoading: (status: boolean) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  blogs: [],
  isLoading: false,
  addBlog: (blog) => set((state) => ({ blogs: [blog, ...state.blogs] })),
  removeBlog: (id) => set((state) => ({ blogs: state.blogs.filter(b => b.id !== id) })),
  setLoading: (status) => set({ isLoading: status }),
}));