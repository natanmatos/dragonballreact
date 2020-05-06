import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media screen and (max-width: 1199px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
