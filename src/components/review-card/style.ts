import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	flex: 33%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	gap: 1rem;
	padding: 1rem 2rem 40px;
	box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.1);
	border-radius: ${(props) => props.theme.borderRadius.brMedium};
	height: 250px;
	cursor: pointer;
	transition: ${(props) => props.theme.transitioType.trLarge};

	&:hover {
		transform: scale(1.1);
	}
`;

export const Testimonial = styled.div`
	font-weight: ${(props) => props.theme.fontWeight.fwExtraSmall};
`;

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.3rem;

	b {
		color: ${(props) => props.theme.color.navyBlue};
	}

	p {
		color: ${(props) => props.theme.color.royalBlue};
		font-weight: ${(props) => props.theme.fontWeight.fwLarge};
		font-family: ${(props) => props.theme.fontFamily.merienda};
	}
`;

export const UserPhoto = styled.div`
	img {
		width: 100%;
		height: 80px;
		width: 80px;
		border-radius: 50%;
		object-fit: cover;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: -40px;
		border: ${(props) => props.theme.borderWidth.bwLarge} solid white;
		box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.2);
	}
`;
