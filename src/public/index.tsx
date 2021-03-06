import * as ReactDom from "react-dom";
import * as React from "react";
import SocialCard from "./components/SocialCard";
import Slideshow from "./components/Slideshow";
import { PEOPLE, SLIDESHOW_IMAGES } from "./components/Config";

interface MainProps {}
interface MainState {
	windowWidth: number;
}

class Main extends React.Component<MainProps, MainState> {

	constructor(props: MainProps) {
		super(props);
		this.state = {
			windowWidth: window.innerWidth
		};
		window.addEventListener("resize", ()=>{
			this.setState({windowWidth: window.innerWidth});
		});
	}

	public render() {
		let cards = PEOPLE.map(person => {
			return <SocialCard {...person} key={person.name}></SocialCard>
		});
		let columns = (this.state.windowWidth < 700) ? 1 :
					  (this.state.windowWidth < 1150) ? 2 :
					  (this.state.windowWidth < 1350) ? 3 :
					  4;
		let cols = Array(columns).fill(null).map((col, i)=>{
			let arr = [];
			for (let j = i; j < cards.length; j += columns) {
				arr.push(cards[j]);
			}
			return <div className="column" key={`column${i}`}>{arr}</div>;
		});
		return <>
			<div className="title-text">Gartist Corner</div>
			<div className="flex-row" style={{
				height: (((Math.ceil(cards.length / columns)) * 14)) + "em"
			}}>{cols}</div>
			<Slideshow imageList={SLIDESHOW_IMAGES}></Slideshow>
			<div className="bottom-bar">
				<a href="mailto:gartistcorner@gmail.com">Contact Us!</a>
				<a href="https://www.youtube.com/channel/UCmRKXnWBkbZ7RLWW_X3LPXg">Youtube Channel</a>
			</div>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};