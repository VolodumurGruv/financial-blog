import { createSlice } from "@reduxjs/toolkit";
import mockData from "../helpers/mockData";
import getData from "./getData";

const postsSlice = createSlice({
	name: "posts",
	initialState: {
		value: mockData,
	},
});

export default postsSlice.reducer;
