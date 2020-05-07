import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
`;

export const Input = styled.input`
  position: relative;
  z-index: 30;
  width: ${({ width }) => width || "auto"};
  height: 38px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  border: 1px solid #bdbdbd;
  border-radius: 4px;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
