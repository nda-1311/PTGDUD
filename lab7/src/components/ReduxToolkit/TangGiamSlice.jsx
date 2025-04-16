import { createSlice } from "@reduxjs/toolkit";

// Tạo slice cho chức năng tăng/giảm giá trị
const TangGiamSlice = createSlice({
  name: "TangGiam", // Tên slice
  initialState: {
    value: 0, // Giá trị ban đầu
  },
  reducers: {
    // Tăng giá trị lên 1
    Tang: (state) => {
      state.value += 1;
    },
    // Giảm giá trị đi 1, ngăn giá trị âm (tùy chọn)
    Giam: (state) => {
      if (state.value > 0) {
        state.value -= 1; // Chỉ giảm nếu giá trị > 0
      }
    },
    // Tăng giá trị theo số lượng tùy chỉnh
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    // Đặt lại giá trị về 0
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Xuất các action để sử dụng trong component
export const { Tang, Giam, incrementByAmount, reset } = TangGiamSlice.actions;

// Xuất reducer để sử dụng trong store
export default TangGiamSlice.reducer;