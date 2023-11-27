import { IPost } from '../interfaces';
import { randomUUID } from 'node:crypto';

/**
 * @class Post Model
 */
class Post {
  private static posts: IPost[] = [];

  /**
   * Check if matcher post [where] is matched with original post or not
   * @param original original post in posts
   * @param matcher matcher that will match with post
   * @returns
   */
  private static matchPosts(original: IPost, matcher: Partial<IPost>): boolean {
    for (let key of Object.keys(matcher)) {
      if (matcher[key] !== original[key]) return false;
    }

    return true;
  }

  /**
   * Find post index in posts array by matching properties in where object
   * @param where post matcher
   * @returns postIndex
   */
  private static getPostIndex(where: Partial<IPost>): number | -1 {
    return Post.posts.findIndex((p) => Post.matchPosts(p, where));
  }

  /**
   * Insert new post
   * @param data post data
   * @returns post if it's not exist otherwise throw an error
   */
  public static create(data: Pick<IPost, 'title' | 'body'>): IPost | never {
    if (Post.isExist(data)) throw new Error('Post is already exist!');

    const newPost: IPost = {
      id: randomUUID(),
      title: data.title,
      body: data.body,
    };

    Post.posts.push(newPost);

    return newPost;
  }

  /**
   * Update single
   * @param where post matcher
   * @param data post data needed to be updated
   * @returns updatedPost
   */
  public static update(
    where: Partial<IPost>,
    data: Partial<Pick<IPost, 'title' | 'body'>>
  ): IPost | never {
    const postIndex: number = Post.getPostIndex(where);

    if (postIndex === -1) throw new Error('This post not exist!');

    const updatedPost: IPost = { ...Post.posts[postIndex], ...data };

    Post.posts[postIndex] = updatedPost;

    return updatedPost;
  }

  /**
   * Delete single post
   * @param where post matcher
   * @returns deleted post
   */
  public static delete(where: Partial<IPost>): IPost | never {
    const postIndex: number = Post.getPostIndex(where);

    if (postIndex === -1) throw new Error('This post not exist!');

    const post: IPost = Post.posts[postIndex];

    Post.posts.splice(postIndex, 1);

    return post;
  }

  /**
   * Find all posts that matched properties in where
   * @param where post matcher
   * @returns array of posts
   */
  public static find(where?: Partial<IPost>): IPost[] {
    if (where) return Post.posts.filter((p) => Post.matchPosts(p, where));
    return Post.posts;
  }

  /**
   * Check if post is exist or not
   * @param where post matcher
   * @returns true if post is already exist; otherwise false
   */
  public static isExist(where: Partial<IPost>): boolean {
    return this.getPostIndex(where) !== -1;
  }
}

export { Post };
