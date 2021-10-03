import styled from "styled-components";
import { colors } from "../../styles/base";

const Loader = styled.div`
  border: 0.3rem solid #f3f3f3; /* Light grey */
  border-top: 3px solid ${colors.grey_dark1}; /* Blue */
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 0.4s linear infinite;
  margin: 2rem auto;
  margin-bottom: 2rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
