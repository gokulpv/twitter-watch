import styled from "styled-components";
import { colors, devices } from "../../styles/base";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1.5rem;
  border-bottom: 1px solid ${colors.grey_dark};
`;

export const TweetHeader = styled.div`
  font-size: 0.8rem;
  color: black;
  margin-bottom: 0.7rem;
  font-size: 0.9rem;
  color: ${colors.grey_dark2};
`;

export const TweetBody = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  margin-bottom: 0.7rem;
  text-align: justify;
  text-justify: inter-word;

  @media ${devices.mobileVS} {
    flex-direction: column;
  }
  @media ${devices.mobileS} {
    flex-direction: column;
  }
  @media ${devices.mobile} {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const TweetFooter = styled.div`
  display: flex;
  font-size: 0.9rem;
  color: ${colors.grey_dark2};
  gap: 1rem;
`;

export const Stat = styled.div`
  display: flex;
  gap: 0.5rem;
  & img {
    height: 15px;
    width: 15px;
  }
`;
