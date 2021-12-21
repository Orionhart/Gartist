import React, {Component} from "react";

interface SlideshowProps {
	imageList: string[];
}
interface SlideshowState {
	position: number;
}

export default class Slideshow extends Component<SlideshowProps, SlideshowState> {
	private static INTERVAL_TIMEOUT = 6 * 1000;

	private timeout: number;

	constructor(props: SlideshowProps) {
		super(props);
		this.state = {
			position: 0
		};
		this.resetTimeout();
	}

	public goToImage(index?: number) {
		if (typeof index !== "number" && !index) index = this.state.position + 1;
		if (index >= this.props.imageList.length || index < 0) index = 0;
		this.resetTimeout();
		this.setState({position: index});
	}

	private resetTimeout() {
		if (this.timeout !== undefined) {
			clearTimeout(this.timeout);
		}
		this.timeout = setTimeout(this.goToImage.bind(this), Slideshow.INTERVAL_TIMEOUT) as any as number;
	}

	public render() {
		let images = this.props.imageList.map((url, i) => {
			return <img src={url} className="slideshow-image" key={url} style={{
				display: this.state.position === i ? "block" : "none",
				width: "100%",
				maxWidth: "auto"
			}}></img>
		});
		let navigators = this.props.imageList.map((image, i) => {
			return <div className={`slideshow-navigator${
				this.state.position === i ? " selected" : ""
			}`} onClick={this.goToImage.bind(this, i)}></div>
		});
		return <div className="slideshow">
			{images}
			<div className="navigators">{navigators}</div>
		</div>;
	}
}
