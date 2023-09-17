export const ACTION = {
  NEW_VALUE: "newValue",
};

export const tableReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION.NEW_VALUE:
      return { ...state, count: state.count + 1 };

    default:
      throw new Error(`see tableReducer. wrong action type: "${action.type}"`);
  }
};

/* function App() {
  const [state, dispatch] = useReducer(tableReducer, {
    count: 0,
    userInput: "",
    color: false,
  });

  return (
    <main className="App" style={{ color: state.color ? "#FFF" : "#FFF952" }}>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
        }
      />
      <br />
      <br />
      <p>{state.count}</p>
      <section>
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: ACTION.TG_COLOR })}>
          Color
        </button>
      </section>
      <br />
      <br />
      <p>{state.userInput}</p>
    </main>
  );
}

export default App; */
