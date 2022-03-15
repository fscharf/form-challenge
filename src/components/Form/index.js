import Styled from "./styles";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import { useGlobal } from "..";
import { utils } from "./utils";
import { Navigate } from "react-router-dom";

const Form = () => {
  const { state, setState } = useGlobal();

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>
          Formulário para compra de{" "}
          <Styled.Paragraph bold fontInherit>
            Pacote de adesivos
          </Styled.Paragraph>
        </Styled.Title>
      </Styled.Header>
      <Styled.Body>
        <Styled.Form>
          <Styled.FormGroup>
            <Styled.Paragraph required bold>
              Quais adesivos:
            </Styled.Paragraph>
            {utils.stacks.map((name, index) => (
              <Styled.Row key={index}>
                <Styled.Input
                  type="checkbox"
                  name={name}
                  value={name}
                  checked={state.stacks.some((checked) => checked === name)}
                  onChange={() => utils.handleChecked(name, state, setState)}
                />
                <Styled.Label>{name}</Styled.Label>
              </Styled.Row>
            ))}
            {state.stacks.length > 0 && (
              <Styled.Row>
                <Styled.Paragraph bold>Selecionados: </Styled.Paragraph>
                {state.stacks.map((name, index) => (
                  <Styled.Badge key={index}>{name}</Styled.Badge>
                ))}
              </Styled.Row>
            )}
          </Styled.FormGroup>
          <Styled.FormGroup>
            <Styled.Paragraph required bold>
              Quantos adesivos de cada?
            </Styled.Paragraph>
            <Styled.Row>
              <Styled.Button
                onClick={(e) => {
                  utils.handleAddOrRemove(e, true, state, setState);
                }}
              >
                <MinusIcon />
              </Styled.Button>
              <Styled.Input
                type="text"
                name="quantity"
                value={state.quantity}
                onChange={utils.handleChange}
              />
              <Styled.Button
                onClick={(e) => {
                  utils.handleAddOrRemove(e, false, state, setState);
                }}
              >
                <PlusIcon />
              </Styled.Button>
            </Styled.Row>
          </Styled.FormGroup>
          <Styled.FormGroup>
            <Styled.Paragraph bold>Observações:</Styled.Paragraph>
            <Styled.TextArea
              rows={6}
              placeholder="Alguma dúvida? Recado?"
              value={state.observations}
              name="observations"
              onChange={(e) => utils.handleChange(e, state, setState)}
            ></Styled.TextArea>
          </Styled.FormGroup>
          {state.error && <Styled.Badge error>{state.errorMsg}</Styled.Badge>}
        </Styled.Form>
      </Styled.Body>
      <Styled.Footer>
        <Styled.Button
          submitBtn
          onClick={(e) => utils.handleSubmit(e, state, setState)}
        >
          ENVIAR
        </Styled.Button>
      </Styled.Footer>
      {state.success && <Navigate to="/checkout" />}
    </Styled.Container>
  );
};

export default Form;
