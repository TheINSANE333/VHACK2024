import React, {useState} from "react";
import SideBar from "./SideBar.jsx";
import Dashboard from "./Dashboard.jsx";
import Analysis from "./Analysis.jsx";
import Forum from "./Forum.jsx";
import Education from "./EducationCarousel.jsx";
import LoginSignUp from "./LoginSignup.jsx";

function App() {
	const [currentScreen, setCurrentScreen] = useState("LoginSignUp");

	const handleLinkClick = (screenName) => {
		setCurrentScreen(screenName);
	};

	return (
		<>
			<div className="wrapper">
				{currentScreen !== "LoginSignUp" && (
					<SideBar onLinkClick={handleLinkClick} />
				)}
				{currentScreen === "Dashboard" && <Dashboard />}
				{currentScreen === "Analysis" && <Analysis />}
				{currentScreen === "News" && <News />}
				{currentScreen === "Forum" && <Forum />}
				{currentScreen === "Education" && <Education />}
				{currentScreen === "LoginSignUp" && (
					<LoginSignUp onLinkClick={handleLinkClick} />
				)}
			</div>
		</>
	);
}

export default App;
