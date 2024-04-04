import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';
import { SessionTitle, Wrapper } from '../../style/Components';

// Data
import destinationsData from '../../assets/data/destinations';

// Components
import DestinationCard from '../destination-card';

const Destinations: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<Wrapper>
				<SessionTitle>Most visited destinations</SessionTitle>
				<Style.Content>
					{destinationsData.length > 0 &&
						destinationsData.map((data) => (
							<DestinationCard props={data} key={data.id} />
						))}
				</Style.Content>
			</Wrapper>
		</Style.Container>
	);
};

export default Destinations;
