import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';

// Props
interface ReviewCardProp {
	id: number;
	username: string;
	photo: string;
	local: string;
	testimonial: string;
}

const ReviewCard: FunctionComponent<{ props: ReviewCardProp }> = ({
	props,
}): ReactNode => {
	return (
		<Style.Container>
			<Style.Testimonial>
				<p>{props.testimonial}</p>
			</Style.Testimonial>
			<Style.UserInfo>
				<b>{props.username}</b>
				<p>{props.local}</p>
			</Style.UserInfo>
			<Style.UserPhoto>
				<img src={props.photo} alt={props.username} />
			</Style.UserPhoto>
		</Style.Container>
	);
};

export default ReviewCard;
