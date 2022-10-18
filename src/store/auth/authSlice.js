const initialState = {
    status: "checking", //authenticated, not-authenticated
    user: {},
    errorMessage: undefined,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "onChecking":
        return {
          status: "checking",
          user: {},
          errorMessage: undefined,
        };
      case "onLogin":
        return {
          status: "authenticated",
          user: action.payload,
          errorMessage: undefined,
        };
      default:
        throw new Error();
    }
  };

  // No se que hacer con esto :(