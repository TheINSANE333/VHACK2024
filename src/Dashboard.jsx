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
			<div className="container-fluid text-center" style={{overflow:"auto",animation: "fadeInAnimation ease 2s", animationIterationCount: "1",animationFillMode: "forwards"}}>
				<div className="row" style={{overflow:"auto"}}>
					<h1 style={{ textAlign: "left", padding: "0.25rem 0 0 0.5rem"}}>
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
									20/05/2024 Tranfer RM520.00 to Boyfren .
								</p>
								<p className="border border-secondary border-3 rounded-pill py-1 mt-1 content-text">
									14/02/2024 Receive RM13.14 from Wife.
								</p>
								<p className="border border-secondary border-3 rounded-pill py-1 mt-1 content-text">
									10/08/2024 Receive RM5.20 from 备胎.
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
									23/04/2024 Receive 52.00 from 舔狗.
								</p>

								<p className="border border-secondary border-3 rounded-pill mt-1 content-text">
									01/03/2024 Tranfer 100.00 to scammer Sdn. Bhd.
								</p>

								<p className="border border-secondary border-3 rounded-pill mt-1 content-text">
									01/01/2024 Tranfer 520.00 from Girlfren.
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
									2. T0T0 Sdn. Bhd.
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									3. GenTin Sdn. Bhd.
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									4. MaCao Sdn. Bhd.
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
									1. Boyfren
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									2. Girlfren
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									3. 舔狗
								</div>
								<div
									style={{ padding: "0.4rem 0", margin: "0.25rem 0" }}
									className="border border-2 bg-secondary rounded-pill"
								>
									4. 备胎
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
								GenTin Sdn. Bhd scam over RM 10000++ for charity.
							</p>
							<p className="border border-secondary border-3 rounded-pill mt-1 content-text">
								Macao Sdn Bhd buy use RM0.01 to buy one unit share in cina.
							</p>
							<p className="border border-secondary border-3 rounded-pill mt-1 content-text">
								MaHaDih Sdn Bhd use company fund to buy coffin.
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
								Oil prices down on Gaza ceasefire talks.
								</p>
								<p className="border border-secondary border-3 rounded-pill mt-1 content-text">
								2MDB starts operations on 02/02/2024.
								</p>
								<p className="border border-secondary border-3 rounded-pill mt-1 content-text">
								Jeffey Chia planing to buy Subang.
								</p>
								<p className="border border-secondary border-3 rounded-pill mt-1 content-text">
								Jho law auctions his ferry start from 1 million USD.
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
