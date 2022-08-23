import "./video-embed.styles.scss";

const VideoEmbed = ({ embedId }) => {
	return (
		<div className="video-responsive">
			<iframe
				width="853"
				height="480"
				// src={`https://www.youtube.com/embed/${embedId}`}
				src={`https://www.youtube.com/embed/videoseries?list=PLFhR_16oAWBTexqm02tP4uNoTEjn_wt6y&autoplay=1&mute=1`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded youtube"
			/>
		</div>
	);
};

export default VideoEmbed;
