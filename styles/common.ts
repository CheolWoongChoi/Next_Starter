import { css } from '@emotion/react';

export const positionAbsoluteXCenter = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const positionAbsoluteYCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const positionAbsoluteXYCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const flexXCenter = css`
  display: flex;
  justify-content: center;
`;

export const flexYCenter = css`
  display: flex;
  align-items: center;
`;

export const flexXYCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
