import styled from 'styled-components';

export const Container = styled.footer`
	padding: 80px 0 40px;
	background-image: linear-gradient(
		to right,
		${(props) => props.theme.color.navyBlue},
		${(props) => props.theme.color.royalBlue},
		${(props) => props.theme.color.deepOceanBlue},
		${(props) => props.theme.color.skyBlue}
	);
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	.col {
		flex: 25%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		color: ${(props) => props.theme.color.neutralWhite};

		p {
			text-align: justify;

			&::first-letter {
				margin-left: 2rem;
			}
		}

		h4 {
			font-size: 1.1rem;
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			li {
				a {
					font-size: 1rem;
					color: inherit;
					display: flex;
					align-items: center;
					gap: 0.5rem;
					transition: ${(props) => props.theme.transitioType.trSmall};

					svg {
						color: ${(props) => props.theme.color.navyBlue};
						font-size: 1.2rem;
						transition: ${(props) => props.theme.transitioType.trSmall};
					}

					&:hover {
						transform: scale(1.02);

						svg {
							color: ${(props) => props.theme.color.skyBlue};
						}
					}
				}
			}
		}

		&:nth-child(3),
		&:nth-child(4) {
			align-items: flex-end;
		}
	}
`;

export const Acknowledgment = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 2rem;
	margin-top: 6rem;
	border-top: 1px solid white;

	p {
		color: ${(props) => props.theme.color.neutralWhite};
		font-weight: ${(props) => props.theme.fontWeight.fwExtraSmall};
	}
`;
