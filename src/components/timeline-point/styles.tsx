import styled from "styled-components";

export const PointBlock = styled.div``;

export const Badge = styled.div<{ $isVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: #f4f5f9;
  border: 1px solid rgba(66, 86, 122, 0.5);
  border-radius: 50%;
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: pointer;

  transition:
    transform 0.4s ease-in-out,
    background-color 0.4s ease-in-out;

  background-color: ${(props) =>
    props.$isVisible ? "#fff" : "rgba(66, 86, 122)"};

  transform: translate(-50%, -50%)
    scale(${(props) => (props.$isVisible ? 1 : 0.1)});

  pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};
`;

export const CategoryName = styled.p<{ $isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: 45px;
  transform: translateY(-50%);
  font-size: 14px;
  font-weight: 600;
  color: #42567a;
  white-space: nowrap;

  transition: opacity 0.2s ease 0s; /* Задержка 0s — исчезает мгновенно */
  pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};
  opacity: 0;

  ${(props) =>
    props.$isVisible &&
    `
    opacity: 1;
    transition: opacity 0.3s ease 1s;
  `}
`;

export const Dot = styled.div<{ $isVisible: boolean }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;

  :after {
    content: "";
    width: 6px;
    height: 6px;
    background-color: #42567a;
    border-radius: 50%;
    opacity: ${(props) => (props.$isVisible ? 0 : 1)};
    transform: translate(-50%, -50%)
      scale(${(props) => (props.$isVisible ? 0 : 1)});
  }
`;
