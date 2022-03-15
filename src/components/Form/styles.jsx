import styled from "styled-components";
import { lighten } from "polished";
import BgHeader from "../../assets/images/form-header.svg";
import { css } from "styled-components";

const Styled = {
  Container: styled.article`
    width: 35vw;
    margin: 16px 0;
    border-radius: 8px;
    background-color: #f2f2f2;

    @media screen and (max-width: 1024px) {
      width: 50vw;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 16px;
    }
  `,
  Header: styled.section`
    background: url(${BgHeader}) no-repeat;
    background-size: cover;
    height: 200px;
    padding: 24px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;

    @media screen and (max-width: 768px) {
      height: 250px;
      background-position: center;
    }
  `,
  Body: styled.section`
    padding: 24px;
  `,
  Title: styled.h2`
    font-size: 18px;
    max-width: 45%;
    font-weight: 400;
    color: #fff;
    line-height: 1.4;
  `,
  Paragraph: styled.p`
    font-size: ${(p) => (p.fontInherit ? "" : "14px")};
    font-weight: ${(p) => p.bold && 700};
    ${(p) =>
      p.required &&
      css`
        &:after {
          content: " *";
          color: #eb0c22;
        }
      `}
  `,
  Form: styled.form`
    display: flex;
    gap: 24px;
    flex-direction: column;
  `,
  FormGroup: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  Row: styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
  `,
  Column: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  Label: styled.label`
    font-size: 12px;
  `,
  Input: styled.input`
    padding: 8px;
    border-radius: 8px;
    border: none;
    outline: none;
    max-width: 80px;
    font-size: 16px;
    border: 2px solid #eee;

    &[type="checkbox"] {
      appearance: none;
      background-color: #fff;
      font: inherit;
      color: currentColor;
      width: 8px;
      height: 8px;
      border: 2px solid #eee;
      border-radius: 4px;
      cursor: pointer;
      display: grid;
      place-content: center;

      &:before {
        content: "";
        width: 8px;
        height: 8px;
        background-color: #2f3676;
        transform: scale(0);
        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      }

      &:checked:before {
        transform: scale(1);
      }
    }
  `,
  Badge: styled.span`
    font-size: 12px;
    background-color: ${lighten(0.3, "#2f3676")};
    border: 1px solid #2f3676;
    color: #fff;
    border-radius: 4px;
    padding: 4px;

    ${(p) =>
      p.error &&
      css`
        background-color: unset;
        border: 1px solid #eb0c22;
        color: #eb0c22;
      `}
  `,
  Button: styled.button`
    padding: 8px;
    border-radius: 8px;
    background-color: #2f3676;
    outline: none;
    border: none;
    cursor: pointer;
    color: #fff;
    transition: all 0.2s;

    ${(p) =>
      p.submitBtn && {
        padding: "8px 24px",
        fontWeight: 700,
      }}

    &:hover {
      background-color: ${lighten(0.1, "#2f3676")};
    }

    svg {
      fill: #fff;
      width: 16px;
      height: 16px;
    }
  `,
  TextArea: styled.textarea`
    padding: 8px;
    border-radius: 8px;
    font-size: 12px;
    outline: none;
    border: 2px solid #eee;
    &:focus {
      border: 2px solid #2f3676;
    }
  `,
  Footer: styled.section`
    background-color: #dde3e9;
    padding: 24px;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  `,
};

export default Styled;
