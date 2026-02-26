import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 130px 0 100px;
  border-left: 1px solid rgba(66, 86, 122, 0.2);
  border-right: 1px solid rgba(66, 86, 122, 0.2);

  @media (max-width: 768px) {
    border: none;
    padding: 59px 0 13.333px;
  }
`;

export const V_LINE = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: #42567a;
  opacity: 0.2;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const H_LINE = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #42567a;
  opacity: 0.2;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    position: relative;
    margin-top: 57px;
  }
`;

export const TitleBlock = styled.div`
  position: relative;
  z-index: 10;
  width: fit-content;
  padding-left: 80px;

  @media (max-width: 1024px) {
    padding-left: 40px;
  }

  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;

export const TitleAccent = styled.div`
  position: absolute;
  left: 0;
  top: 4px;
  width: 5px;
  bottom: 0;
  background: linear-gradient(180deg, #3877ee 0%, #ef5dad 100%);
  border-radius: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: clamp(20px, 3.2vw + 9.7px, 56px);
  font-weight: 700;
  color: #42567a;
  line-height: 1.1;
  margin-bottom: 40px;
`;

export const YearsContainer = styled.div`
  position: relative;
  margin-bottom: 137px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Years = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-weight: 700;
  font-size: clamp(56px, 12.8vw + 15px, 200px);
`;

export const Blue = styled.span`
  color: #5d5fef;
`;

export const Pink = styled.span`
  color: #ef5dad;
`;

export const EventsBlock = styled.div`
  padding: 0 80px;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export const CircleWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
