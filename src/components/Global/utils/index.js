export const utils = {
  initialState: {
    stacks: [],
    quantity: localStorage.getItem("quantity") || 1,
    observations: "",
    error: false,
    errorMsg: "",
    success: false,
    data: [
      {
        stacks: JSON.parse(localStorage.getItem("stacks")) || [],
        quantity: localStorage.getItem("quantity") || 1,
        observations: localStorage.getItem("observations") || "",
      },
    ],
  },
};
