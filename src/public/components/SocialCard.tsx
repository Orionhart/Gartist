import React, {Component} from "react";

const SOCIAL_IMGS = {
	twitter: "img/twitt.png",
	instagram: "img/instagram.png",
	twitch: "img/twitch.png",
	youtube: "img/youtube.png",
	kofi: "img/kofi.png",
	etsy: "img/etsy.png",
	fiverr: "img/fiverr.png",
	discord: "img/discord.png",
	deviantart: "img/deviantart.png",
	tumblr: "img/tumblr.png",
	link: "img/link.png",
	pixiv: "img/pixiv.png",
	furaffinity: "img/furaffinity.png",
	tiktok: "img/tiktok.png",
	artstation: "img/artstation.png",
	niftypixels: "img/niftypixels.png",
	spotify:"img/spotify.png",
	bandcamp:"img/bandcamp.png"
} as {[key:string]: string};

export interface Person {
	name: string;
	bio: string;
	socials: {
		[key:string]: string;
		twitter?: string;
		instagram?: string;
		twitch?: string;
		youtube?: string;
		kofi?: string;
		etsy?: string;
		fiverr?: string;
		discord?: string;
		link?: string;
		deviantart?: string;
		tumblr?: string;
		pixiv?: string;
		furaffinity?: string;
		niftypixels?: string;
		tiktok?: string;
		artstation?: string;
		spotify?: string;
		bandcamp?: string;
	}
	background: string;
	bgcolor: string;
	fontsize?: string;
}

interface SocialCardState {}

export default class SocialCard extends Component<Person, SocialCardState> {
	constructor(props: Person) {
		super(props);
		this.state = {};
	}

	public render() {
		let buttons = Object.keys(this.props.socials).map(key => {
			return <a href={this.props.socials[key]}>
				<img className="scl-img" src={SOCIAL_IMGS[key]}></img>
			</a>
		});
		return <div className="scl-card" style={{
				backgroundImage: `url("${this.props.background}")`,
				backgroundColor: this.props.bgcolor
			}}>
			<div className="scl-name" style={
				this.props.fontsize ? {fontSize: this.props.fontsize} : {}
			}>{this.props.name}</div>
			<div className="scl-hover">				
				<div className="scl-bio">{this.props.bio}</div>
				<div className="scl-buttons">
					{buttons}
				</div>
			</div>
		</div>;
	}
}
