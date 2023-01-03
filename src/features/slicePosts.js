import { collection, getDocs } from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import db from "../environments/firebaseConfig";

export const getData = createAsyncThunk(
	"posts/getData",
	async (_, rejectWithValue) => {
		try {
		
			const response = await getDocs(collection(db, "posts"));

			const data = response.docs.map((post) => {
				return {
					...post.data(),
					id: post.id,
				};
			});

			if (!data.length) {
				throw new Error("Server error");
			}

			return data;
		} catch (error) {
			rejectWithValue(error);
		}
	}
);

const initialState = {
	value: [],
	status: null,
	error: null,
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getData.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getData.fulfilled, (state, action) => {
				state.value = action.payload;

				state.status = "resolved";
				state.error = null;
			})
			.addCase(getData.rejected, (state, action) => {
				console.log();
				state.status = "rejected";
				state.error = getData.rejected().error.message;
			});
	},
});

export default postsSlice.reducer;
