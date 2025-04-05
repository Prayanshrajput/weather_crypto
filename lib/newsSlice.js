// redux/slices/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNewsData = createAsyncThunk(
  'news/fetchNewsData',
  async () => {
    let api_key=process.env.NEXT_PUBLIC_News_key
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${api_key}&q=cryptocurrency&language=en`
    );
    const data = await response.json();
    return data.results.slice(0, 5);
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
