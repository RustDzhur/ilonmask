import Header from "@/components/Header/Header";
import { Main } from "@/components/Main/Main";

const Home: React.FC = () => (
	<div className="lg:max-w-screen-lg m-auto px-20">
		<header className="sm:mb-55 md:mb-38">
			<Header />
		</header>
		<main className="lg:mb-180">
			<Main />
		</main>
	</div>
);

export default Home;
