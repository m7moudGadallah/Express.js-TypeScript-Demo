import { Post } from '../models';
import { Request, Response, NextFunction } from 'express';
import { PostsDTO } from '../dtos';
import { IPost, JsonResponse } from '../interfaces';
import { notImplementedHandler } from '../utils/helpers';
import { HttpStatusCodes } from '../utils/enums';

/**
 * Posts Request Handlers
 */
class PostsController {
  /**
   * @route GET /api/posts
   * @access public
   * @description Get all posts
   */
  public static async getPosts(
    req: Request<undefined, JsonResponse.IJsonResponse<IPost[]>, undefined>,
    res: Response<JsonResponse.IJsonResponse<IPost[]>>,
    next: NextFunction
  ) {
    const posts: IPost[] = Post.find();

    res.status(HttpStatusCodes.OK).json({
      success: true,
      message: 'Posts are retrieved successfully',
      payload: {
        data: {
          content: posts,
          count: posts.length,
        },
      },
    });
  }

  /**
   * @route GET /api/posts/:id
   * @access public
   * @description Get single post
   */
  public static async getSinglePost(
    req: Request<{ id: string }, JsonResponse.IJsonResponse<IPost>, undefined>,
    res: Response<JsonResponse.IJsonResponse<IPost>>,
    next: NextFunction
  ) {
    const post: IPost = Post.find({ id: req.params.id })?.[0];

    res.status(HttpStatusCodes.OK).json({
      success: true,
      message: 'Post is retrieved successfully',
      payload: {
        data: {
          content: post,
        },
      },
    });
  }

  /**
   * @route POST /api/posts
   * @access public
   * @description Create new post
   */
  public static async createPost(
    req: Request<
      undefined,
      JsonResponse.IJsonResponse<IPost>,
      PostsDTO.CreatePostDTO
    >,
    res: Response<JsonResponse.IJsonResponse<IPost>>,
    next: NextFunction
  ) {
    // TODO: implement createPost
    notImplementedHandler(req, res, next);
  }

  /**
   * @route PATCH /api/posts/:id
   * @access public
   * @description Update single post
   */
  public static async updatePost(
    req: Request<{ id: string }, JsonResponse.IJsonResponse<IPost>, undefined>,
    res: Response<JsonResponse.IJsonResponse<IPost>>,
    next: NextFunction
  ) {
    // TODO: implement updatePost
    notImplementedHandler(req, res, next);
  }

  /**
   * @route DELETE /api/posts/:id
   * @access public
   * @description Delete single post
   */
  public static async deletePost(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) {
    // TODO: implement deletePost
    notImplementedHandler(req, res, next);
  }
}

export { PostsController };
