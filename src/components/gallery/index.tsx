import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';
import { SessionTitle, Wrapper } from '../../style/Components';

// Data
import galleryData from '../../assets/data/gallery';

// Components
import GalleryCard from '../gallery-card';

const Gallery: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<Wrapper>
				<SessionTitle>Search through the gallery</SessionTitle>
				<Style.Content>
					{galleryData.length > 0 &&
						galleryData.map((data) => (
							<GalleryCard props={data} key={data.id} />
						))}
				</Style.Content>
			</Wrapper>
		</Style.Container>
	);
};

export default Gallery;
