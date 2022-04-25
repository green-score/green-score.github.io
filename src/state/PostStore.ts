import { useLocalObservable } from 'mobx-react';
import { Post, PostPreview } from '../types/post';
import { fetchPosts, getPost } from '../routes/api';

export interface PostStore {
  posts: { [id: string]: Post },
  postFeed: PostPreview[],
  postFeedOffset: number,
  noMorePosts: boolean,
  openModalPost: Post | null,

  fetchPosts: () => Promise<void>;
  openPost: (id: string) => Promise<void>;
  closePost: () => void;
}

const usePostStore = () => {
  const store = useLocalObservable<PostStore>(() => ({
    posts: {},
    postFeed: [],
    postFeedOffset: 0,
    noMorePosts: false,
    openModalPost: null,

    fetchPosts: async () => {
      const { posts, offset } = await fetchPosts(store.postFeedOffset);

      store.postFeedOffset = offset;

      if (offset === -1) {
        // means we're done fetching i guess (or error?)
        store.noMorePosts = true;
      }

      store.postFeed.push(...posts);
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
