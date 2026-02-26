import styled from "styled-components";
import { CIRCLE } from "../../constants/timeline";

export const CircleBlock = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const Circle = styled.div`
  position: relative;
  width: ${CIRCLE.SIZE}px;
  height: ${CIRCLE.SIZE}px;
  border: 1px solid rgba(66, 86, 122, 0.2);
  border-radius: 50%;
`;