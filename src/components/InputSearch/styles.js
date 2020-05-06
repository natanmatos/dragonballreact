import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
`;

export const Input = styled.input`
  height: 36px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  border: 1px solid #bdbdbd;
  border-radius: 4px;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
