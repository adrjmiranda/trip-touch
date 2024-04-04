import { FunctionComponent, ReactNode } from 'react';

// Components
import Header from './components/header';
import Destinations from './components/destinations';
import Gallery from './components/gallery';
import Offer from './components/offer';
import Reviews from './components/reviews';
import Footer from './components/footer';

const App: FunctionComponent = (): ReactNode => {
	return (
		<>
			<Header />
			<Destinations />
			<Gallery />
			<Offer />
			<Reviews />
			<Footer />
		</>
	);
};

export default App;
