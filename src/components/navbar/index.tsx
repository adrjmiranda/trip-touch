import { FunctionComponent, ReactNode, useState } from 'react';

// Style
import * as Style from './style';
import { Wrapper } from '../../style/Components';

// Components
import Logo from '../logo';

// Icons
import { TfiMenu } from 'react-icons/tfi';

const Navbar: FunctionComponent = (): ReactNode => {
	const [visibilityMenu, setVisibilityMenu] = useState<boolean>(false);

	return (
		<Style.Container>
			<Wrapper>
				<Style.Content>
					<Logo />
					<Style.ToggleMenu
						type='button'
						onClick={() => setVisibilityMenu(!visibilityMenu)}
					>
						<TfiMenu />
					</Style.ToggleMenu>
					<Style.Menu className={visibilityMenu ? 'show' : ''}>
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
