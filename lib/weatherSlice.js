// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   name:"None",
//   temp:"None",
//   description:"None",
//   wind:"None"
// }

  
// const weatherSlice = createSlice({
//   name: 'weather',
//   initialState,
//   reducers: {
//     setweather: (state,action) => {
//       state.name =action.payload.name
//       state.temp =action.payload.main.temp
//       state.description=action.payload.weather[0].description
//       state.wind=action.payload.wind.speed,
//       state.humidity=action.payload.main.humidity
//       state.clouds=action.payload.clouds.all
//     },
//   },
// })

// export const { setweather } = weatherSlice.actions
// export default weatherSlice.reducer


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch weather by city
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    try {
        const api_key=process.env.NEXT_PUBLIC_WEATHER_API_SECRET
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      );
      if (!res.ok) {
        throw new Error('City not found');
      }
      const data = await res.json();
      return {
        name: data.name,
        temp: (data.main.temp - 273.15).toFixed(1), // Convert Kelvin to Celsius
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        clouds: data.clouds.all,
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    name: 'None',
    temp: '',
    description: '',
    humidity: '',
    wind: '',
    clouds: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        return { ...action.payload, loading: false, error: null };
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
