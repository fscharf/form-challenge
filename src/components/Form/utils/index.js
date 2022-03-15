export const utils = {
  stacks: ["React", "Vue", "Angular", "Node", "Next", ".NET"],
  handleChange: async (event, state, setState) => {
    const target = event.target;

    if (target.name === "quantity" && isNaN(target.value)) return;

    setState({
      ...state,
      [target.name]: [target.value],
    });
  },
  handleAddOrRemove: async (event, remove, state, setState) => {
    event.preventDefault();

    let items = parseInt(localStorage.getItem("quantity") || state.quantity);

    if (remove)
      if (state.quantity - 1 < 1) return;
      else localStorage.setItem("quantity", --items);
    else localStorage.setItem("quantity", ++items);

    setState({ ...state, quantity: items });
  },
  handleChecked: async (name, state, setState) => {
    const isChecked = state.stacks.some((checked) => checked === name);
    if (isChecked)
      setState({
        ...state,
        stacks: state.stacks.filter((checked) => checked !== name),
      });
    else setState({ ...state, stacks: state.stacks.concat(name) });
  },
  handleSubmit: async (event, state, setState) => {
    event.preventDefault();

    if (!state.stacks.length)
      return setState({
        ...state,
        error: true,
        errorMsg: "Selecione pelo menos 1 (um) tipo de adesivo.",
      });
      
    if (state.quantity < 1)
      return setState({
        ...state,
        error: true,
        errorMsg: "Selecione pelo menos 1 (uma) quantidade.",
      });

    localStorage.setItem("stacks", JSON.stringify(state.stacks));
    localStorage.setItem("quantity", state.quantity);
    localStorage.setItem("observations", state.observations);

    setState({
      ...state,
      error: false,
      errorMsg: "",
      success: true,
      data: [
        {
          stacks: state.stacks,
          quantity: state.quantity,
          observations: state.observations,
        },
      ],
    });
  },
};
