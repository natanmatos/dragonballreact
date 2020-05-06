import styled from "styled-components";
import CardBg from "../../assets/images/card-bg.png";
import FooterBg from "../../assets/images/card-footer-bg.png";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.15);
  background: ${({ theme, type }) => theme.colors[type]} url(${CardBg});
`;

export const Content = styled.div`
  width: 100%;
  padding: 1rem 1rem 0.75rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center top;
  border-radius: 4px;
  border: 2px solid #000;
`;

export const Footer = styled.div`
  padding: 0.5rem 1rem;
  text-align: center;
  background: #000 url(${FooterBg});
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  padding: 0.125rem 0.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  background: #fff;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.secondaryText};
`;
