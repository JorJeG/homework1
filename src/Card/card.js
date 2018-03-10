import React from 'react';
import srcImg from '../helpers/srcImg.js';

const Card = (props) => {
	let classOption = null;
	if (props.image === undefined) {
		classOption = `card__option card__option_image_none`;
	} else {
		classOption = `card__option card__option_size_${props.size}`;
	}
	return(
		<section className={`item item_size_${props.size} card card_size_${props.size}`}>
			<h2 style={{color: props.titleColor}} className={`card__title card__title_size_${props.size}`}>{props.title}</h2>
			{props.image &&
				<img
					className={`card__img card__img_size_${props.size}`}
					srcSet={srcImg(props.image)}
					src={props.image} />
			}
			{props.description &&
				<p className={`card__desc card__desc_size_${props.size}`}>
					{props.description}
				</p>
			}
			{props.channelName &&
				<p className="card__channel">
					{props.channelName}
				</p>
			}
			<div className={classOption}>
				<svg width="14" height="4">
					<circle className="circle" r="2" cx="2" cy="2" />
					<circle className="circle" r="2" cx="7" cy="2" />
					<circle className="circle" r="2" cx="12" cy="2" />
				</svg>
			</div>
			<div className={`card__like card__like_size_${props.size}`}>
				<svg width="17" height="16">
					<path className="heart" d="M8 3.2C7.4-0.3 3.2-0.8 1.4 1 -0.5 2.9-0.5 5.8 1.4 7.7 1.9 8.2 6.9 13 6.9 13 7.4 13.6 8.5 13.6 9 13L14.5 7.7C16.5 5.8 16.5 2.9 14.6 1 12.8-0.7 8.6-0.3 8 3.2Z"></path>
				</svg>
			</div>
		</section>
	)
}

export default Card;