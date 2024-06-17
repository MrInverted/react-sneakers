export default function (state, action) {
  // console.log(state, action)

  if (action.type === "init") {
    return [
      ...action.payload
    ]
  }

  // --------------

  if (action.type === "add") {
    const id = action.payload;

    return [
      ...state.map(item => {
        if (item.id === id) item.isSelected = true;
        return item;
      })
    ]
  }

  if (action.type === "remove") {
    const id = action.payload;

    return [
      ...state.map(item => {
        if (item.id === id) item.isSelected = false;
        return item;
      })
    ]
  }

  if (action.type === "remove-all") {
    return [
      ...state.map(item => {
        item.isSelected = false;
        return item;
      })
    ]
  }

  // --------------

  if (action.type === "purchase") {
    const id = action.payload;

    return [
      ...state.map(item => {
        if (item.id === id) item.isPurchased = true;
        return item;
      })
    ]
  }

  // --------------

  if (action.type === "add-favourite") {
    const id = action.payload;

    return [
      ...state.map(item => {
        if (item.id === id) item.isFavourite = true;
        return item;
      })
    ]
  }

  if (action.type === "remove-favourite") {
    const id = action.payload;

    return [
      ...state.map(item => {
        if (item.id === id) item.isFavourite = false;
        return item;
      })
    ]
  }

  return state;
}