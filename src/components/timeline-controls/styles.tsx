import styled from "styled-components";

export const TimelineControls = styled.div`
  margin-bottom: 56px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Fraction = styled.p`
  color: #42567a;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 8.33px;
  }
`;

export const NavBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #42567a;
  font-size: 20px;
  background: none;
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    font-size: 10px;
  }
`;
