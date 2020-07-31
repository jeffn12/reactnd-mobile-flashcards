// Logger Middleware for Redux

export const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Action: ", action.type);
  const returnValue = next(action);
  console.log("New State: ", store.getState());
  console.groupEnd();
  return returnValue;
};
