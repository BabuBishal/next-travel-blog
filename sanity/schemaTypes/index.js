import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import featuredPostsType from "./featuredPostsType";

export const schema = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    featuredPostsType,
  ],
};
