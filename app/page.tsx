import Header from "@/components/Header/Header";
import { Main } from "@/components/Main/Main";

const Home: React.FC = () => (
	<div className="lg:max-w-screen-lg m-auto px-20">
		<header className="sm:mb-55 md:mb-115">
			<Header />
		</header>
		<main>
			<Main />
		</main>
	</div>
);

export default Home;
