import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';
import { Wrapper } from '../../style/Components';

// Image
import HeroBg from '../../assets/img/hero-bg.jpg';

const Offer: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container
			style={{
				backgroundImage:
					'linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(' +
					HeroBg +
					')',
			}}
		>
			<Style.Content>
				<Wrapper>
					<Style.Info>
						<div className='offer-info'>
							<h4>Get now 25% discount on the most visited destinations</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
								saepe illum corrupti tempora a mollitia laborum sunt asperiores.
							</p>
						</div>
						<button type='button'>Buy now</button>
					</Style.Info>
				</Wrapper>
			</Style.Content>
		</Style.Container>
	);
};

export default Offer;
