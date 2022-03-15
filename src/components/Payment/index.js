import Styled from "./styles";
import { ReactComponent as CheckoutIcon } from "../../assets/icons/checkout.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";

const Payment = ({ state }) => {
  return (
    <Styled.Container>
      <Styled.Header>
        <CheckoutIcon />
        <Styled.Title>Checkout</Styled.Title>
      </Styled.Header>
      <Styled.Body>
        <Styled.Row>
          <Styled.Span bold>Produto(s)</Styled.Span>
          <Styled.Span bold>Qtde.</Styled.Span>
          <Styled.Span bold>Observações</Styled.Span>
        </Styled.Row>
        {state.data.map((item, index) => (
          <Styled.Row key={index}>
            <Styled.Span>
              {item.stacks.map((name, index) => (
                <Styled.Span key={index}>
                  {index === 0 && "Adesivos"}
                  {index > 0 && ","} {name}
                </Styled.Span>
              ))}
            </Styled.Span>
            <Styled.Span>{item.quantity}</Styled.Span>
            <Styled.Span>{item.observations}</Styled.Span>
          </Styled.Row>
        ))}
      </Styled.Body>
      <Styled.Footer>
        <Styled.Button muted onClick={() => (window.location.href = "/")}>
          Voltar
        </Styled.Button>
        <Styled.Button>
          Finalizar compra <ArrowRight />
        </Styled.Button>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Payment;
