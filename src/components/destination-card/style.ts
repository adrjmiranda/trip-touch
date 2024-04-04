import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 33%;
	height: 550px;
	border-radius: ${(props) => props.theme.borderRadius.brMedium};
	overflow: hidden;
	position: relative;
	box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.1);
`;

export const Img = styled.div`
	height: 60%;
	overflow: hidden;

	img {
		height: 100%;
		transition: ${(props) => props.theme.transitioType.trMedium};
		max-width: 100%;
		object-fit: cover;
		filter: grayscale(0.6);
	}

	&:hover {
		img {
			filter: grayscale(0);
			transform: scale(1.1);
		}
	}
`;

export const Price = styled.div`
	position: absolute;
	left: 4rem;
	top: 60%;
	transform: translateY(-0.5rem);
	border: 1px solid white;

	svg {
		position: absolute;
		color: orangered;
		font-size: 4rem;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
	}

	span {
		position: absolute;
		z-index: 3;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: orangered;
		color: white;
		border-radius: 50%;
		height: 3rem;
		width: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		display: flex;
		gap: 0.2rem;
		font-family: ${(props) => props.theme.fontFamily.merienda};
	}
`;

export const Stars = styled.div`
	position: absolute;
	display: flex;
	gap: 0.2rem;
	right: 1rem;
	top: 1rem;
	background-color: rgba(255, 255, 255, 0.3);
	padding: 0.3rem 0.5rem;
	border-radius: ${(props) => props.theme.borderRadius.brMedium};
	cursor: pointer;
	transition: ${(props) => props.theme.transitioType.trMedium};

	svg {
		color: goldenrod;
	}

	&:hover {
		background-color: white;
	}
`;

export const Info = styled.div`
	height: 40%;
	padding: 2rem 0.8rem 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h3 {
		font-family: ${(props) => props.theme.fontFamily.merienda};
		color: ${(props) => props.theme.color.deepOceanBlue};
		font-weight: ${(props) => props.theme.fontWeight.fwOverLarge};
	}

	p {
		color: ${(props) => props.theme.color.charcoalGray};
		font-weight: ${(props) => props.theme.fontWeight.fwSmall};
	}

	ul {
		display: flex;
		gap: 1rem;

		li {
			color: ${(props) => props.theme.color.navyBlue};
			display: flex;
			align-items: center;
			gap: 0.3rem;
			font-weight: ${(props) => props.theme.fontWeight.fwLarge};
		}
	}
`;
