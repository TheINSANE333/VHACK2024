import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import user from "./assets/user.png";
import dashbord from "./assets/dashboard.png";
import analysis from "./assets/analysis.png";
import education from "./assets/education.png";
import forum from "./assets/forum.png";

function SideBar({onLinkClick}) {
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
			if (window.innerWidth >= 1440) {
				setIsExpanded(true);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleClick = (screenName) => {
    onLinkClick(screenName);
    };

	return (
			<aside id="sidebar" className={`vh-100 ${isExpanded ? "expand" : ""}`}>
				<ul className="sidebar-nav">
					<li className="sidebar-item">
						<header className="sidebar-link" href="#">
							<a href="#" style={{ textDecoration: "none", color: "white" }}>
								<div className="d-flex align-item-center">
									<img
										style={{
											width: "4rem",
											padding: "0.65rem 0rem 2rem 0.65rem",
										}}
										src={logo}
										alt="logo"
									/>
									{isExpanded && (
										<p style={{ padding: "0.65rem 0rem 0rem 0rem" }}>
											<span style={{ fontWeight: "bold" }}>FinDex</span>
											<br />
											<span style={{ fontSize: "0.95rem" }}>
												Your Finance Fraud Analyser
											</span>
										</p>
									)}
								</div>
							</a>
						</header>
					</li>
					<li className="sidebar-item">
						<a
							href="#"
							class="sidebar-link has-dropdown collapsed"
							data-bs-toggle="collapse"
							data-bs-target="#auth"
							aria-expanded="false"
							aria-controls="auth"
							style={{ textDecoration: "none", color: "white" }}
						>
							<img
								src={user}
								style={{
									width: "1.5rem",
								}}
								alt="user"
							/>
							<span style={{ paddingLeft: "0.5rem" }}>user</span>
						</a>
						<ul
							id="auth"
							className="sidebar-dropdown list-unstyled collapse "
							data-bs-parent="#sidebar"
						>
							<li className="sidebar-item">
								<a onClick={() => handleClick("LoginSignUp")} style={{textDecoration:"none"}} className="sidebar-link">
									Logout
								</a>
							</li>
						</ul>
					</li>

					<li className="sidebar-item">
						<a className="sidebar-link" onClick={() => handleClick("Dashboard")}>
							<img
								src={dashbord}
								style={{
									width: "1.5rem",
								}}
								alt=""
							/>
							<span style={{ paddingLeft: "0.5rem" }}>Dashboard</span>
						</a>
					</li>

					<li className="sidebar-item">
						<a className="sidebar-link" onClick={() => handleClick("Forum")}>
							<img
								src={forum}
								style={{
									width: "1.5rem",
								}}
								alt="news"
							/>
							<span style={{ paddingLeft: "0.5rem" }}>Forum</span>
						</a>
					</li>

					<li className="sidebar-item">
						<a onClick={() => handleClick("Analysis")} className="sidebar-link">
							<img
								src={analysis}
								style={{
									width: "1.5rem",
								}}
								alt=""
							/>
							<span style={{ paddingLeft: "0.5rem" }}>Analysis</span>
						</a>
					</li>
					<li onClick={() => handleClick("Education")} className="sidebar-item">
						<a className="sidebar-link" href="#">
							<img
								src={education}
								style={{
									width: "1.5rem",
								}}
								alt=""
							/>
							<span style={{ paddingLeft: "0.5rem" }}>Education</span>
						</a>
					</li>

					
				</ul>

				<div className="sidebar-footer">
					<div className="d-flex">
	
							<button
								id="toggle-btn"
								type="button"
								onClick={() => setIsExpanded(!isExpanded)}
							>
								<i class="lni lni-plus"></i>
							</button>
			
						{isExpanded && (
							<div
								className="sidebar-logo"
								style={{ color: "white", fontSize: "1rem" }}
							>
								Show less
							</div>
						)}
					</div>
				</div>
			</aside>
	);
}

export default SideBar;
