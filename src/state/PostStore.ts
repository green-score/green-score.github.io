import { useLocalStore } from 'mobx-react';
import { Post, PostPreview } from '../types/post';
import { fetchPosts, getPost } from '../routes/api';

export interface PostStore {
  posts: { [id: string]: Post },
  postFeed: PostPreview[],
  fetchPosts: () => Promise<void>;
  getPost: (id: string) => Promise<Post | null>;
}

const usePostStore = () => {
  const store = useLocalStore<PostStore>(() => ({
    posts: {},
    postFeed: [],

    fetchPosts: async () => {
      const postPreviews: PostPreview[] = await fetchPosts();

      console.log(postPreviews.length);
      console.log(postPreviews[0].title);

      store.postFeed.push(...postPreviews);
    },

    getPost: async (id: string) => {
      const post: Post = store.posts[id];

      if (post) {
        return post;
      }

      const fetched = await getPost(id);

      if (fetched) {
        store.posts[id] = fetched;
      }

      return fetched;
    },
  }));

  return store;
};

export default usePostStore;
