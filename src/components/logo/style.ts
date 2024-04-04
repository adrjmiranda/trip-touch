import styled from 'styled-components';

export const Container = styled.a`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	transition: ${(props) => props.theme.transitioType.trMedium};

	svg {
		font-size: 1.2rem;
		color: ${(props) => props.theme.color.skyBlue};
		transition: ${(props) => props.theme.transitioType.trMedium};
	}

	span {
		font-size: 1.5rem;
		font-weight: ${(props) => props.theme.fontWeight.fwOverLarge};
		font-family: ${(props) => props.theme.fontFamily.merienda};
		background-image: linear-gradient(
			to right,
			${(props) => props.theme.color.royalBlue},
			${(props) => props.theme.color.deepOceanBlue},
			${(props) => props.theme.color.skyBlue}
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: ${(props) => props.theme.transitioType.trMedium};
	}

	&:hover {
		gap: 1rem;

		svg {
			transform: scale(1.2) rotate(45deg);
		}

		span {
			background-image: linear-gradient(
				to right,
				${(props) => props.theme.color.skyBlue},
				${(props) => props.theme.color.deepOceanBlue},
				${(props) => props.theme.color.royalBlue}
			);
		}
	}
`;
