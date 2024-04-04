import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';

// Icons
import { ImAirplane } from 'react-icons/im';

const Logo: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container href='#'>
			<ImAirplane />
			<span>Trip touch</span>
		</Style.Container>
	);
};

export default Logo;
