import Ticker from "react-ticker";
import "./App.scss";
import NewsTicker from "./components/news-ticker/news-ticker.component";
import VideoEmbed from "./components/video-embed/video-embed.component";

function App() {
	return (
		<div className="grid">
			<h2 className="top"></h2>
			<div className="left"></div>
			<div className="video">
				<VideoEmbed embedId={"yYkCqDrSehc"} />
			</div>
			<div className="right"></div>
			<div className="bottom">
				<NewsTicker speed={15} />
			</div>
		</div>
	);
}

export default App;
