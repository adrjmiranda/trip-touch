import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';
import { SessionTitle, Wrapper } from '../../style/Components';

// Data
import reviewsData from '../../assets/data/reviews';
import ReviewCard from '../review-card';

const Reviews: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<Wrapper>
				<SessionTitle>See other people's opinions</SessionTitle>
				<Style.Content>
					{reviewsData.length > 0 &&
						reviewsData.map((data) => (
							<ReviewCard props={data} key={data.id} />
						))}
				</Style.Content>
			</Wrapper>
		</Style.Container>
	);
};

export default Reviews;
