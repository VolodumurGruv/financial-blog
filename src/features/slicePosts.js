import { createSlice } from "@reduxjs/toolkit";
import mockData from "../helpers/mockData";

const postsSlice = createSlice({
	name: "posts",
	initialState: {
		value: mockData,
	},
	reducers: {},
});

export default postsSlice.reducer;
