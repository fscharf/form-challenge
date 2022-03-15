import { lighten } from "polished";
import styled from "styled-components";

const Styled = {
  Container: styled.article`
    width: 55vw;
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
    background-color: #dde3e9;
    padding: 24px;
    display: flex;
    gap: 16px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  `,
  Body: styled.section`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
  Footer: styled.section`
    background-color: #dde3e9;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  `,
  Title: styled.h2`
    font-size: 18px;
    font-weight: 700;
    line-height: 1.4;
  `,
  Row: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
  `,
  Span: styled.span`
    font-size: 14px;
    width: 100%;
    max-width: 220px;
    font-weight: ${(p) => p.bold && 700};
  `,
  Button: styled.button`
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    background-color: ${(p) => (p.muted ? "#6e6e6e" : "#2f3676")};
    outline: none;
    border: none;
    cursor: pointer;
    color: #fff;
    transition: all 0.2s;
    padding: 8px 24px;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      background-color: ${lighten(0.1, "#2f3676")};
    }
    svg {
      fill: #fff;
    }
  `,
};

export default Styled;
