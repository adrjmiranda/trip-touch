import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';
import { Wrapper } from '../../style/Components';

// Components
import Logo from '../logo';

const Navbar: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<Wrapper>
				<Style.Content>
					<Logo />
					<Style.Menu>
						<li>
							<a href='#'>Login</a>
						</li>
						<li>
							<a href='#'>Sign up</a>
						</li>
					</Style.Menu>
				</Style.Content>
			</Wrapper>
		</Style.Container>
	);
};

export default Navbar;
