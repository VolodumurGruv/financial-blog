import { configureStore } from "@reduxjs/toolkit";

import reducerPosts from "./slicePosts";

const store = configureStore({
	reducer: {
		posts: reducerPosts,
	},
});

export default store;
