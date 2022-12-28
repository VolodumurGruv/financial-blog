import { createSlice } from "@reduxjs/toolkit";

const keySlice = createSlice({
	name: "key",
	initialState: {
		value: 1,
	},
	reducers: {
		incrementKey: (state) => {
			state.value += 1;
		},
	},
});

export const { incrementKey } = keySlice.actions;

export default keySlice.reducer;
