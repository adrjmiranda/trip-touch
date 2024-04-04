import { FunctionComponent, ReactNode } from 'react';

// Style
import * as Style from './style';
import { Wrapper } from '../../style/Components';

// Components
import Logo from '../logo';

// Icons
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import { BsFillHouseFill } from 'react-icons/bs';
import { ImFacebook2 } from 'react-icons/im';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { VscTwitter } from 'react-icons/vsc';
import { TiHeart } from 'react-icons/ti';

const Footer: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<Wrapper>
				<Style.Content>
					<div className='col'>
						<Logo />
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
							libero temporibus architecto vero nobis quisquam porro accusamus
							obcaecati consectetur facilis nihil voluptate.
						</p>
					</div>
					<div className='col'>
						<h4>Resources</h4>
						<ul>
							<li>
								<a href='#'>Offers</a>
							</li>
							<li>
								<a href='#'>News</a>
							</li>
							<li>
								<a href='#'>Rule and policies</a>
							</li>
						</ul>
					</div>
					<div className='col'>
						<h4>Contact us</h4>
						<ul>
							<li>
								<a href='#' target='_blank'>
									<FaPhoneSquareAlt />
									<span>+99 1122-3344</span>
								</a>
							</li>
							<li>
								<a href='#' target='_blank'>
									<IoMailSharp />
									<span>contact@email.com</span>
								</a>
							</li>
							<li>
								<a href='#' target='_blank'>
									<BsFillHouseFill />
									<span>Round Street, 144, New Land</span>
								</a>
							</li>
						</ul>
					</div>
					<div className='col'>
						<h4>Follow us</h4>
						<ul>
							<li>
								<a href='#' target='_blank'>
									<ImFacebook2 />
									<span>Trip Touch</span>
								</a>
							</li>
							<li>
								<a href='#' target='_blank'>
									<PiInstagramLogoFill />
									<span>@triptouch</span>
								</a>
							</li>
							<li>
								<a href='#' target='_blank'>
									<VscTwitter />
									<span>@triptouch</span>
								</a>
							</li>
						</ul>
					</div>
				</Style.Content>
				<Style.Acknowledgment>
					<p>
						Made with <TiHeart /> by Adriano Miranda &copy; 2024
					</p>
				</Style.Acknowledgment>
			</Wrapper>
		</Style.Container>
	);
};

export default Footer;
