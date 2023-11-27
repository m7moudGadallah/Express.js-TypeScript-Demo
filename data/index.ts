import { Post } from '../src/models';
import { IPost } from '../src/interfaces';
import { readFileSync } from 'node:fs';

class DataSource {
  /**
   * Load posts data
   */
  public static loadPosts(): void {
    const posts: Partial<IPost>[] = JSON.parse(
      readFileSync(`${__dirname}/posts.json`, 'utf-8')
    );
    posts.forEach((post) => Post.create(post as Pick<IPost, 'title' | 'body'>));
  }

  /**
   * Load all data models
   */
  public static loadData(): void {
    DataSource.loadPosts();
  }
}

export { DataSource };
