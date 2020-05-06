import styled from "styled-components";

export const Empty = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
`;

export const Img = styled.img`
  height: 120px;
  margin-bottom: 1rem;
  opacity: 30%;
`;

export const Text = styled.span`
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.4);
`;
