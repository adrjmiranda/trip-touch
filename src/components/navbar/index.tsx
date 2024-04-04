import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';
import { Wrapper } from '../../style/Components';

// Icons
import { ImAirplane } from 'react-icons/im';

const Navbar: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<Wrapper>
				<Style.Content>
					<Style.Logo href='#'>
						<ImAirplane />
						<span>Trip touch</span>
					</Style.Logo>
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
