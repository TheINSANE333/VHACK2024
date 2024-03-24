import Posts from "./Posts";
import createpost from "./assets/createpost.png";
import mypost from "./assets/mypost.png";
import favourite from "./assets/favourite.png";
import "./forum.css";

function Forum() {
	return (
		<div className="Forum">
			<div className="Head">
				<h1 style={{paddingLeft:"5px"}}> Forum</h1>
				<input className="inputloli" type="text" placeholder="Search" />
			</div>
			<div className="Body">
				<div className="scrollable-container">
					<div className="containerloli">
						<ul id="cards">
							<li className="cardss" id="card1">
								<div className="card-body"></div>
							</li>
							<li className="cardss" id="card2">
								<div className="card-body"></div>
							</li>
							<li className="cardss" id="card3">
								<div className="card-body"></div>
							</li>
							<li className="cardss" id="card4">
								<div className="card-body"></div>
							</li>
						</ul>
					</div>
				</div>
				<div className="Tools">
					<div className="Tool">
						<img style={{width: "70px", height: "70px"}} src={createpost}></img>
						<p className="Toolsdesc">Create Post</p>
					</div>
					<div className="Tool">
						<img style={{width: "70px", height: "70px"}} src={mypost}></img>
						<p className="Toolsdesc">My Post</p>
					</div>
					<div className="Tool">
						<img style={{width: "70px", height: "70px"}} src={favourite}></img>
						<p className="Toolsdesc">Favourite Post</p>
					</div>
				</div>
				<div className="Trending">
					<p style={{padding: "8px"}}>Trending</p>
					<div className="Topics">
						<ul className="Topiclist">
							<li>
								<div className="Topic1">
									<p style={{padding: "5px"}}>Technology</p>
								</div>
								<div className="Topic2">
									<p style={{padding: "5px"}}>Science</p>
								</div>
								<div className="Topic3">
									<p style={{padding: "5px"}}>Health</p>
								</div>
								<div className="Topic">
									<p style={{padding: "5px"}}>Finance</p>
								</div>
								<div className="Topic">
									<p style={{padding: "5px"}}>Environment</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<Posts />
			</div>
		</div>
	);
}

export default Forum;
