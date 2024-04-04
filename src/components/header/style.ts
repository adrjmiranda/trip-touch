import styled from 'styled-components';

// Keyframes
import { toggleTextColor } from '../../style/Keyframes';

export const Container = styled.div`
	min-height: 100vh;
`;

export const Content = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	gap: 1.5rem;
	color: ${(props) => props.theme.color.neutralWhite};

	h1 {
		font-family: ${(props) => props.theme.fontFamily.merienda};
		font-size: 4rem;
		animation: ${toggleTextColor} 10s infinite;
	}

	p {
		font-size: 1.3rem;
		font-weight: ${(props) => props.theme.fontWeight.fwMedium};
		max-width: 720px;
	}

	form {
		display: flex;
		min-width: 450px;

		input {
			font-size: 1rem;
			flex: 1;
			border: ${(props) => props.theme.borderWidth.bwMedium} solid transparent;
			outline: none;
			padding: 0.5rem 1rem;
			border-top-left-radius: ${(props) => props.theme.borderRadius.brMedium};
			border-bottom-left-radius: ${(props) =>
				props.theme.borderRadius.brMedium};

			&::placeholder {
				font-size: 1rem;
			}

			&:focus {
				border-color: ${(props) => props.theme.color.royalBlue};
			}
		}

		button {
			border: none;
			border-top-right-radius: ${(props) => props.theme.borderRadius.brMedium};
			border-bottom-right-radius: ${(props) =>
				props.theme.borderRadius.brMedium};
			background-image: linear-gradient(
				to right,
				${(props) => props.theme.color.royalBlue},
				${(props) => props.theme.color.deepOceanBlue}
			);
			color: inherit;
			font-weight: ${(props) => props.theme.fontWeight.fwNormal};
			height: 50px;
			padding: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1rem;
			cursor: pointer;
		}
	}
`;
