import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
	<TransitionGroup>
		<CSSTransition
			key={location.key}
			timeout={{
				enter: 400,
				exit: 400,
			}}
			classNames="page"
			unmountOnExit
		>
			<Routes location={location}>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</CSSTransition>
	</TransitionGroup>
));

const NotFound = () => {
	const navigate = useNavigate();

	React.useEffect(() => {
		navigate("/");
	}, [navigate]);

	return null;
};

function AppRoutes() {
	return (
		<div className="s_c">
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					timeout={{
						enter: 400,
						exit: 400,
					}}
					classNames="page"
					unmountOnExit
				>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/contact" element={<ContactUs />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</CSSTransition>
			</TransitionGroup>
			<Socialicons />
		</div>
	);
}

export default AppRoutes;
