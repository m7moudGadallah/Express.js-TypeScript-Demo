import { Router } from 'express';
import { PostsController } from '../controllers';

const postsRouter = Router();

postsRouter
  .route('/')
  .get(PostsController.getPosts)
  .post(PostsController.createPost);

postsRouter
  .route('/:id')
  .get(PostsController.getSinglePost)
  .patch(PostsController.updatePost)
  .delete(PostsController.deletePost);

export { postsRouter };
