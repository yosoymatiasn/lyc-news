import { useEffect, useState } from "react";
import Ticker from "react-ticker";
import { getNews } from "../../api/get-news.api";

import "./news-ticker.styles.scss";

const NewsTicker = ({ speed }) => {
	const [ticks, setTicks] = useState(null);

	useEffect(() => {
		const response = getNews();
		setTicks(response);
	}, []);

	const runTicker = () => {};

	return (
		<>
			{ticks && (
				<Ticker className="ticker" speed={speed}>
					{({ index }) => (
						<h1 className="tick"> {ticks[index % ticks.length]} </h1>
					)}
				</Ticker>
			)}
		</>
	);
};

/*
{ticks.map((tick, i) => (
	<h1 key={i}>tick</h1>
))}
*/

export default NewsTicker;
