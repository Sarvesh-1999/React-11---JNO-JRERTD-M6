export let initialState = 0;

export const reducerFunc = (prev, action) => {
  switch (action) {
    case "incre":
      return prev + 1;

    case "decre":
      return prev > 0 ? prev - 1 : 0;

    case "reset":
      return 0;
  }
};
