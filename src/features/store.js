import { configureStore } from "@reduxjs/toolkit";
import reducerPosts from "./slicePosts";
import keyReducer from "./keyCounter";

const store = configureStore({
	reducer: {
		posts: reducerPosts,
		key: keyReducer,
	},
});

export default store;
