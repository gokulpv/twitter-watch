import styled from "styled-components";
import { colors, devices } from "../../../styles/base";

export const Container = styled.div`
  border-radius: 5px;

  @media ${devices.mobileS} {
    padding: 0.2rem;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;
export const Photo = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${colors.blue_secondary};
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  margin-left: 0.5rem;

  @media ${devices.mobileVS} {
    display: none;
  }
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.mobile} {
    display: none;
  }
`;
export const HandleInfo = styled.div`
  gap: 1rem;
  color: #000;
  @media ${devices.mobileS} {
    display: flex;
    align-items: center;
  }
  @media ${devices.mobile} {
    display: flex;
    align-items: center;
  }
  & > div:first-child {
    font-size: 1rem;
    font-weight: 600;

    @media ${devices.mobileVS} {
      display: none;
    }
    @media ${devices.mobileS} {
      display: none;
    }
    @media ${devices.mobile} {
      display: block;
    }
  }
  & > div:last-child {
    font-size: 0.9rem;
    color: ${colors.grey_dark2};

    @media ${devices.mobileS} {
      font-size: 0.8rem;
    }
  }
`;

export const Seperator = styled.div`
  width: 2px;
  height: 15px;
  background-color: ${colors.grey_dark};
  @media ${devices.mobileVS} {
    display: none;
  }
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.mobile} {
    display: block;
  }
  @media ${devices.tablet} {
    display: block;
  }
`;
