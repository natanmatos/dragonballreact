import styled from "styled-components";

export const Tabs = styled.ul`
  display: flex;
`;

export const TabsItem = styled.li`
  list-style: none;

  a {
    display: flex;
    align-items: center;
    min-height: 64px;
    padding: 0 1rem;
    font-size: 2.25rem;
    color: ${(props) => props.theme.colors.secondaryText};
    text-decoration: none;
    border-bottom: 5px solid transparent;

    &:hover,
    &.active {
      border-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
