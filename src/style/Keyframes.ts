import { keyframes } from 'styled-components';

const colors = {
	deepOceanBlue: '#009ddd',
	skyBlue: '#05d3f8',
};

export const toggleTextColor = keyframes`
  0% {
    color: ${colors.skyBlue};
  }
  25% {
    color: ${colors.deepOceanBlue};
  }
  50% {
    color: ${colors.skyBlue};   
  }
  75% {
    color: white;
  }
  100% {
    color: ${colors.skyBlue};   
  }
`;
