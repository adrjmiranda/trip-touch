import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';

// Props
interface GalleryCardProps {
	id: number;
	title: string;
	photo: string;
}

const GalleryCard: FunctionComponent<{ props: GalleryCardProps }> = ({
	props,
}): ReactNode => {
	return (
		<Style.Container>
			<img src={props.photo} alt={props.title} />
			<h3>{props.title}</h3>
		</Style.Container>
	);
};

export default GalleryCard;
