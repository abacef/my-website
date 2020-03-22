import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
    0% {
     transform: rotate(0deg); 
    }
    100% { 
      transform: rotate(360deg); 
    }
`;

const Spinner = styled.div`
    margin: 0 auto;     /* center on screen */
    border: 16px solid white;
    border-radius: 50%;
    border-top: 16px solid #0099FF;
    width: 120px;
    height: 120px;
    animation: ${rotate360} 1s linear infinite;
    text-align: center;
`;

export default Spinner;