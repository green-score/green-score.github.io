import { useLocalStore } from 'mobx-react';
import { Post, PostPreview } from '../types/post';
import { fetchPosts, getPost } from '../routes/api';

export interface PostStore {
  posts: { [id: string]: Post },
  postFeed: PostPreview[],
  openModalPost: Post | null,

  fetchPosts: () => Promise<void>;
  openPost: (id: string) => Promise<void>;
  closePost: () => void;
}

const usePostStore = () => {
  const store = useLocalStore<PostStore>(() => ({
    posts: {},
    postFeed: [],
    openModalPost: null,

    fetchPosts: async () => {
      const postPreviews: PostPreview[] = await fetchPosts();

      store.postFeed.push(...postPreviews);
    },

    openPost: async (id: string) => {
      const post: Post = store.posts[id];

      if (post) {
        store.openModalPost = post;
        return;
      }

      const fetched = await getPost(id);

      if (fetched) {
        store.posts[id] = fetched;
      }

      store.openModalPost = fetched;
    },

    closePost: () => {
      store.openModalPost = null;
    },
  }));

  return store;
};

export default usePostStore;
