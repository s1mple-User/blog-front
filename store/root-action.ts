import { userSliceAction } from "./user/user.slice";
import * as userActions from './user/user.action';
import { blogSliceAction } from "./blog/blog.slice";
import * as blogActions from './blog/blog.action';

export const allActions = {
 ...userSliceAction,
...userActions,
...blogSliceAction,
...blogActions
};
