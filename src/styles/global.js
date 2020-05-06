import { createGlobalStyle } from "styled-components";
import SaiyanSans from "../assets/fonts/Saiyan-Sans.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: SaiyanSans;
    src: url(${SaiyanSans});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: normal .875rem 'SaiyanSans';
    color: #313131;
    overflow-x: hidden;
  }

  ol, ul, dl {
    margin-bottom: 0;
  }

  .ant-drawer-header {
    background-color: ${({ theme }) => theme.colors.ternary};
  }

  .ant-drawer-title {
    font-size: 1.5rem;
    color: #fff;
  }

  .ant-drawer-close {
    color: rgba(255,255,255, .7);

    &:hover {
      color: rgba(255,255,255, 1);
    }
  }
`;
