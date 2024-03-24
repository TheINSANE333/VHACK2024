import prev1 from "./assets/prev1.jpeg";
import prev2 from "./assets/prev2.jpeg";
import prev3 from "./assets/prev3.jpeg";
import prev4 from "./assets/prev4.jpeg";

const postsData = [
	{
		id: 1,
		title: "Beware: New Phishing Scam Targeting Bank Customers",
		content:
			"Beware of phishing emails pretending to be from banks, asking for personal info.",
		likes: 42,
		comments: 18,
		shares: 6,
		image: prev1,
	},
	{
		id: 2,
		title: "Tips to Prevent Identity Theft",
		content:
			"Protect yourself from identity theft by using strong passwords and monitoring accounts.",
		likes: 56,
		comments: 24,
		shares: 8,
		image: prev2,
	},
	{
		id: 3,
		title: "Fake Investment Schemes on the Rise",
		content:
			"Be cautious of fraudulent investment opportunities promising high returns.",
		likes: 38,
		comments: 12,
		shares: 4,
		image: prev3,
	},
	{
		id: 4,
		title: "EnrichMoney now supports DuitNow QR",
		content:
			"Malaysia Airlines’ EnrichMoney has finally added support for DuitNow and DuitNow QR.",
		likes: 18,
		comments: 7,
		shares: 4,
		image: prev4,
	},
];

const Posts = () => {
	return (
		<div className="Postgrid">
			<ul className="Post">
				{postsData.map((post) => (
					<li key={post.id}>
						<div className="Posts">
							<div className="Content">
								<h1 className="Title">{post.title}</h1>
								<div className="FlexContainer">
									<img className="Preview" src={post.image} alt="Preview" />
									<p className="Paragraph">{post.content}</p>
									<p className="Buttons">
										Like {post.likes} &nbsp;&nbsp;&nbsp; Comments{" "}
										{post.comments} &nbsp;&nbsp;&nbsp; Share {post.shares}
									</p>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Posts;
