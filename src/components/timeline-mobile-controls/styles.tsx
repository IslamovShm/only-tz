import styled from "styled-components";

export const TimelineMobileControls = styled.div`
  position: relative;
  margin-top: 48px;
`;

export const SliderDotsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

export const SliderDots = styled.button<{ $isActive: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  background: #42567a;
  opacity: ${(props) => (props.$isActive ? 1 : 0.4)};
  transition: "background 0.3s ease";
`;
