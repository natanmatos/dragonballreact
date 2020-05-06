import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 4rem;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.colors.ternary};
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.2);
`;

export const StyledBrand = styled.div`
  font-size: 3.75rem;

  span {
    &:first-child {
      color: ${(props) => props.theme.colors.secondary};
    }

    &:last-child {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
