import { Payment, useGlobal } from "../../components";

const Checkout = () => {
  const { state } = useGlobal();

  return <Payment state={state} />;
};

export default Checkout;
