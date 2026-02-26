import styled from "styled-components";

export const SliderBlock = styled.div`
  position: relative;
  min-height: 150px;
`;

export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Year = styled.h2`
  font-family:
    Bebas Neue,
    sans-serif;
  font-size: clamp(16px, 0.8vw + 13.4px, 25px);
  color: #3877ee;
  font-weight: 400;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: clamp(14px, 0.53vw + 12.3px, 20px);
  color: #42567a;
  line-height: 30px;
`;

const BaseBtn = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 50%;
  background-color: #fff;
  color: #3877ee;
  box-shadow: 0 0 15px rgba(56, 119, 238, 0.2);
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(56, 119, 238, 0.4);
  }

  &:disabled {
    opacity: 0;
    visibility: hidden;
  }
`;

export const PrevBtn = styled(BaseBtn)`
  left: -60px;
`;

export const NextBtn = styled(BaseBtn)`
  right: -60px;
`;
