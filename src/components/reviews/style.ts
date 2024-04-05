import styled from 'styled-components';

export const Container = styled.div`
	padding: 80px 0 180px;
`;

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;

	@media screen and (max-width: 980px) {
		flex-direction: column;
		gap: 5rem;
	}
`;
