import styled from 'styled-components';

export const Container = styled.div`
	background-position: center;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 150px 0;
`;

export const Content = styled.div`
	background-color: rgba(0, 0, 0, 0.8);
	padding: 3rem 0;
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
	gap: 4rem;

	.offer-info {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		color: ${(props) => props.theme.color.neutralWhite};
		flex: 50%;

		h4 {
			font-family: ${(props) => props.theme.fontFamily.merienda};
			font-size: 1.8rem;
			text-transform: capitalize;
			color: inherit;
		}

		p {
			color: inherit;
			font-size: 1.1rem;
		}
	}

	button {
		flex: 50%;
		cursor: pointer;
		border: ${(props) => props.theme.borderWidht.bwSmall} solid inherit;
		color: ${(props) => props.theme.color.neutralWhite};
		padding: 1rem 2rem;
		border-radius: ${(props) => props.theme.borderRadius.brLarge};
		max-width: fit-content;
		background-color: transparent;
		text-transform: uppercase;
		font-weight: ${(props) => props.theme.fontWeight.fwLarge};
		transition: ${(props) => props.theme.transitioType.trMedium};

		&:hover {
			background-color: rgba(255, 255, 255, 0.1);
		}
	}
`;
