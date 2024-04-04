import styled from 'styled-components';

export const Container = styled.div`
	flex: 25%;
	height: 180px;
	position: relative;
	border-radius: ${(props) => props.theme.borderRadius.brMedium};
	overflow: hidden;
	cursor: pointer;
	transition: ${(props) => props.theme.transitioType.trSmall};

	img {
		width: 100%;
		transition: ${(props) => props.theme.transitioType.trSmall};
		height: 100%;
		object-fit: cover;
		z-index: 2;
		position: relative;
		filter: grayscale(0.8);
	}

	h3 {
		transition: ${(props) => props.theme.transitioType.trSmall};
		font-family: ${(props) => props.theme.fontFamily.merienda};
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		z-index: 3;
		color: ${(props) => props.theme.color.skyBlue};
		font-size: 2rem;
	}

	&:hover {
		transform: scale(1.1);

		img {
			filter: grayscale(0);
		}

		h3 {
			color: ${(props) => props.theme.color.neutralWhite};
		}
	}
`;
