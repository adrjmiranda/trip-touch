import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';

// Props
interface DestinationCardProp {
	id: number;
	image: string;
	price: number;
	stars: number;
	place: string;
	description: string;
	local: string;
	days: number;
	nights: number;
}

const DestinationCard: FunctionComponent<{ props: DestinationCardProp }> = ({
	props,
}): ReactNode => {
	return (
		<Style.Container>
			<Style.Img>
				<img src={props.image} alt={props.place} />
			</Style.Img>
			<Style.Price>{props.price}</Style.Price>
			<Style.Stars>{props.stars}</Style.Stars>
			<Style.Info>
				<h3>{props.place}</h3>
				<p>{props.description}</p>
				<ul>
					<li>
						<span>{props.local}</span>
					</li>
					<li>
						<span>{props.days}</span>
					</li>
					<li>
						<span>{props.nights}</span>
					</li>
				</ul>
			</Style.Info>
		</Style.Container>
	);
};

export default DestinationCard;
