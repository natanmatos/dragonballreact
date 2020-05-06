import styled from "styled-components";

export const Item = styled.span`
  display: block;
  padding: 0.5rem 0;
  font-size: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: 0;
  }
`;
