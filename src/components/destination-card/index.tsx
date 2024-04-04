import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';

// Icons
import { BsGeo } from 'react-icons/bs';
import { FaRegSun } from 'react-icons/fa6';
import { IoMoonOutline } from 'react-icons/io5';
import { BsGearFill } from 'react-icons/bs';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

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
	const reviewStars = (stars: number): ReactNode[] => {
		const maxScore = 5;
		let starsArray: ReactNode[] = [];

		for (let i = 0; i < maxScore; i++) {
			if (i < stars) {
				starsArray.push(<IoIosStar key={i} />);
			} else {
				starsArray.push(<IoIosStarOutline key={i} />);
			}
		}

		return starsArray;
	};

	return (
		<Style.Container>
			<Style.Img>
				<img src={props.image} alt={props.place} />
			</Style.Img>
			<Style.Price>
				<span>
					<b>$</b>
					{props.price}
				</span>
				<BsGearFill />
			</Style.Price>
			<Style.Stars>{reviewStars(props.stars)}</Style.Stars>
			<Style.Info>
				<h3>{props.place}</h3>
				<p>{props.description}</p>
				<ul>
					<li>
						<BsGeo />
						<span>{props.local}</span>
					</li>
					<li>
						<FaRegSun />
						<span>{props.days}</span>
					</li>
					<li>
						<IoMoonOutline />
						<span>{props.nights}</span>
					</li>
				</ul>
			</Style.Info>
		</Style.Container>
	);
};

export default DestinationCard;
