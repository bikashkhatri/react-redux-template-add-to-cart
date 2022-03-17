import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    items: [
      {
        id: 100,
        name: "Item 1",
        quantity: 20,
        unitPrice: 20,
        description: "lorem ipsum description text about the product",
      },
      {
        id: 101,
        name: "Item 2",
        quantity: 22,
        unitPrice: 30,
        description: "lorem ipsum description text about the product",
      },
    ],
  },
  reducers: {},
});

// export const {} = shopSlice.actions
export default shopSlice.reducer