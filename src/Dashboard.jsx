import React, { useState } from "react";
import card0 from "./assets/card0.png";
import card1 from "./assets/card1.png";

function Dashboard() {
	const [slideIndex, setSlideIndex] = useState(0);

	const plusSlides = (increment) => {
		setSlideIndex((prevIndex) => (prevIndex + increment + 3) % 3); //depend on how many div element that inside the slideshow
	};

	const [BankSlideIndex, setBankSlideIndex] = useState(0);
	const BankPlusSlides = (increment) => {
		setBankSlideIndex((prevIndex) => (prevIndex + increment + 2) % 2); //depend on how many div element that inside the slideshow
	};

	return (
		<>
			<div className="container-fluid text-center">
				<div className="row">
					<h1 style={{ textAlign: "left", padding: "0.25rem 0 0 0.5rem" }}>
						Dashboard
					</h1>

					<div className="slideshow-container col-6 col-md-4 mb-4">
						<p style={{ margin: " 0 0 0.25rem 0" }} className="Text">
							Bank card(s):
						</p>

						<div
							className="slideshow"
							style={{ display: BankSlideIndex === 0 ? "block" : "none" }}
						>
							<div
								className="border border-black border-3 rounded d-flex justify-content-center align-items-center"
								style={{ height: "12.25rem" }}
							>
								<img
									src={card1}
									class="img-fluid"
									style={{ height: "9.4rem" }}
									alt="bank card-0"
								/>
							</div>
						</div>

						<div
							className="slideshow"
							style={{ display: BankSlideIndex === 1 ? "block" : "none" }}
						>
							<div
								className="border border-black border-3 rounded d-flex justify-content-center align-items-center"
								style={{ height: "12.25rem" }}
							>
								<img
									src={card0}
									class="img-fluid"
									style={{ height: "9.4rem" }}
									alt="bank card-0"
								/>
							</div>
						</div>

						<div className="arrows-container">
							<a className="prev" onClick={() => BankPlusSlides(-1)}>
								<i class="lni lni-chevron-left"></i>
							</a>

							<a className="next" onClick={() => BankPlusSlides(1)}>
								<i class="lni lni-chevron-right"></i>
							</a>
						</div>
					</div>

					<div className="slideshow-container col-6 col-md-4 mb-4">
						<p style={{ margin: " 0 0 0.25rem 0" }} className="Text">
							Transaction History:
						</p>

						<div
							className="slideshow"
							style={{ display: BankSlideIndex === 0 ? "block" : "none" }}
						>
							<div
								className="border border-black border-3 rounded"
								style={{ height: "12.25rem", overflow: "auto" }}
							>
								<p className="border border-secondary border-3 rounded-pill py-1 mt-1 content-text">
									Lorem ipsum is placeholder text commonly used in the graphic.
								</p>
							</div>
						</div>

						<div
							className="slideshow"
							style={{ display: BankSlideIndex === 1 ? "block" : "none" }}
						>
							<div
								className="border border-black border-3 rounded"
								style={{ height: "12.25rem", overflow: "auto" }}
							>
								<p className="border border-secondary border-3 rounded-pill mt-1 content-text">
									Lorem ipsum is wowoahah text commonly used in gugabuga.
								</p>

								<p className="border border-secondary border-3 rounded-pill mt-1 content-text">
									Lorem ipsum is wowoahah text commonly used in gugabuga.
								</p>
							</div>
						</div>

						<div className="arrows-container">
							<a className="prev" onClick={() => BankPlusSlides(-1)}>
								<i class="lni lni-chevron-left"></i>
							</a>

							<a className="next" onClick={() => BankPlusSlides(1)}>
								<i class="lni lni-chevron-right"></i>
							</a>
						</div>
					</div>

					<div className="slideshow-container col-6 col-md-4 mb-4">
						<div
							className="slideshow"
							style={{ display: slideIndex === 0 ? "block" : "none" }}
						>
							<p style={{ margin: " 0 0 0.25rem 0" }} className="Text">
								Latest potential-harmful party
							</p>
							<div
								className="border border-black border-3 rounded"
								style={{ height: "12.25rem" }}
							>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									1. Scammer Sdn. Bhd.
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									2. Scammer1 Sdn. Bhd.
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									3. Scammer2 Sdn. Bhd.
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									4. Scammer3 Sdn. Bhd.
								</div>
							</div>
						</div>

						<div
							className="slideshow"
							style={{ display: slideIndex === 1 ? "block" : "none" }}
						>
							<p style={{ margin: " 0 0 0.25rem 0" }} className="Text">
								Mutual Transactions
							</p>
							<div
								className="border border-black border-3 rounded"
								style={{ height: "12.25rem" }}
							>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									1. Someone's name
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									2. Someone's name
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									3. Someone's name
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									4. Someone's name
								</div>
							</div>
						</div>

						<div
							className="slideshow"
							style={{ display: slideIndex === 2 ? "block" : "none" }}
						>
							<p style={{ margin: " 0 0 0.25rem 0" }} className="Text">
								Remember!
							</p>
							<div
								className="border border-black border-3 rounded"
								style={{ height: "12.25rem" }}
							>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									1. Never trust unauthorised parties
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									2. Never tell your passwords to others
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									3. Report potential fraud to us
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									4. Enjoy life with no coding
								</div>
							</div>
						</div>

						<div className="arrows-container">
							<a className="prev" onClick={() => plusSlides(-1)}>
								<i class="lni lni-chevron-left"></i>
							</a>

							<a className="next" onClick={() => plusSlides(1)}>
								<i class="lni lni-chevron-right"></i>
							</a>
						</div>
					</div>

					<div className="col-6 col-md-4">
						<p style={{ margin: " 0 0 0.25rem 0" }} className="Text">
							Latest Finance News:
						</p>

						<div
							className="border border-black border-3 rounded bg-primary-subtle"
							style={{ height: "12.25rem", overflow: "auto" }}
						>
							<p className="border border-secondary border-3 rounded-pill mt-1  content-text">
								Lorem ipsum is placeholder text commonly used in the graphic.
							</p>
							<p className="border border-secondary border-3 rounded-pill mt-1 content-text">
								Lorem ipsum is placeholder text commonly used in the graphic.
							</p>
							<p className="border border-secondary border-3 rounded-pill mt-1 content-text">
								Lorem ipsum is placeholder text commonly used in the graphic.
							</p>
						</div>
					</div>

					<div className="col-12 col-md-8 ">
						<p style={{ margin: " 0 0 0.25rem 0" }} className="Text">
							Market Analysis:
						</p>

						<div>
							<div
								className="border border-black border-3 rounded bg-primary-subtle"
								style={{ height: "12.25rem", overflow: "auto" }}
							>
								<p className="border border-secondary border-3 rounded-pill mt-1  content-text">
									Lorem ipsum is placeholder text commonly used in the graphic.
								</p>
								<p className="border border-secondary border-3 rounded-pill mt-1 content-text">
									Lorem ipsum is placeholder text commonly used in the graphic.
								</p>
								<p className="border border-secondary border-3 rounded-pill mt-1 content-text">
									Lorem ipsum is placeholder text commonly used in the graphic.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
