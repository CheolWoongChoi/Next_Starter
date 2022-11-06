import { css, Global } from '@emotion/react';

const globalStyle = css`
  font-family: 'AppleSDGothicNeo', 'campton', 'Noto Sans KR', sans-serif !important;
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};
