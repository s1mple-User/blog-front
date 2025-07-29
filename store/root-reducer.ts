import { blogReducer } from './blog/blog.slice';
import { userReducer } from './user/user.slice';

export const reducer = {
    user:userReducer,
    blog:blogReducer
};
