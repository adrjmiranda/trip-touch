import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100vw;
	max-width: 1280px;
	padding: 0 1rem;
	margin: 0 auto;
`;

export const SessionTitle = styled.h2`
	text-align: center;
	font-family: ${(props) => props.theme.fontFamily.merienda};
	font-size: 2rem;
	color: ${(props) => props.theme.color.navyBlue};
	text-transform: capitalize;
`;
