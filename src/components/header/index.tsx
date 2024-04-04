import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';
import { Wrapper } from '../../style/Components';

// Components
import Navbar from '../navbar';

// Images
import MainBg from '../../assets/img/main-bg.jpg';

const Header: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container
			style={{
				backgroundImage:
					'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' +
					MainBg +
					')',
			}}
		>
			<Navbar />
			<Wrapper>
				<Style.Content>
					<h1>Trip touch around the world</h1>
					<p>
						Porem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
						voluptates laudantium reiciendis.
					</p>
					<form action='#'>
						<input
							type='search'
							name='search'
							placeholder='Search for a place'
						/>
						<button type='submit'>Search</button>
					</form>
				</Style.Content>
			</Wrapper>
		</Style.Container>
	);
};

export default Header;
