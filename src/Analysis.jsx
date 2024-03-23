import gov from "./assets/gov.png";
import gov1 from "./assets/gov1.png";
import gov3 from "./assets/gov3.png";

function Analysis() {
	return (
		<>
			<div className="container-fluid text-center">
				<div className="row">
					<h1 style={{ textAlign: "left", padding: "0.25rem 0 0 0.5rem" }}>
						Analysis
					</h1>

					<div className="col-6 col-md-4">
					<div className="mt-1 border border-black border-3 rounded bg-primary-subtle" style={{ height: "14rem", overflow: "auto"}}>
						<a
							href="https://www.ros.gov.my/www/portal-main/semakan2?search_keyword=panasonic&search_category=003&search_subcategory=304&search_state=14"
							target="_blank"
						>
							<img class="img-fluid mt-1" src={gov} />
							<p className="mt-2">
								JAMBATAN PENDAFTARAN PERTUBUHAN MALAYSIA
							</p>
						</a>
					</div>
					</div>

					<div className="col-6 col-md-4">
					<div className="mt-1 border border-black border-3 rounded bg-primary-subtle" style={{ height: "14rem", overflow: "auto"}}>						<a
							href="https://semakmule.rmp.gov.my"
							target="_blank"
						>
							<img class="img-fluid mt-1" src={gov1} />
							<p className="mt-2">
								Commercial Crime Investigtion Department <br /> Royal Malaysia Police
							</p>
						</a>
					</div>
					</div>

					<div className="col-6 col-md-4">
					<div className="mt-1 border border-black border-3 rounded bg-primary-subtle" style={{ height: "14rem", overflow: "auto"}}>						<a
							href="https://nfcc.jpm.gov.my/index.php/en/"
							target="_blank"
						>
							<img class="img-fluid mt-1" src={gov3} />
							<p className="mt-2">
								National Anti-Financial Crime Center
							</p>
						</a>
					</div>
					</div>

				</div>
			</div>
		</>
	);
}

export default Analysis;
