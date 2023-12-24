
import cls from './Header.module.css'
import Layout from "../Layout";
import Auth from "./Auth";
import Logo from "./Logo";
import Search from "./Search";
import Heading from './Heading';


export const Header = () => {
	return (
		<header className={cls.header}>
			<Layout>
				<div className={cls.gridContainer}>
					<Logo />
					<Heading text="Строка в пропсы" />
					<Search />
					<Auth auth={false} />
				</div>
			</Layout>
		</header>
	);
};
