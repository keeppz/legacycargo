import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const images = [
	{
		id: 1,
		url: '/assets/img/footer/gallery-1.jpg',
		title: 'Image 1',
		description: 'This is the first image',
	},
	{
		id: 2,
		url: '/assets/img/footer/gallery-2.jpg',
		title: 'Image 2',
		description: 'This is the second image',
	},
	{
		id: 3,
		url: '/assets/img/footer/gallery-3.jpg',
		title: 'Image 3',
		description: 'This is the third image',
	},
	{
		id: 4,
		url: '/assets/img/footer/gallery-4.jpg',
		title: 'Image 4',
		description: 'This is the fourth image',
	},
	{
		id: 5,
		url: '/assets/img/footer/gallery-5.jpg',
		title: 'Image 5',
		description: 'This is the fifth image',
	},
	{
		id: 6,
		url: '/assets/img/footer/gallery-6.jpg',
		title: 'Image 6',
		description: 'This is the sixth image',
	}
]

export default function Gallery() {
	const [open, setOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	const handleClick = (index) => {
		setCurrentIndex(index)
		setOpen(true)
	}

	return (
		<>
			<div className="gallery-item">
				{images.slice(0, 3).map((image, index) => (
					<div className="thumb" key={image.id}>
						<a onClick={() => handleClick(index)} className="img-popup">
							<img src={image.url} alt={image.title} />
							<div className="icon">
								<i className="far fa-plus" />
							</div>
						</a>
					</div>
				))}
			</div>
			<div className="gallery-item">
				{images.slice(3, 6).map((image, index) => (
					<div className="thumb" key={image.id}>
						<a onClick={() => handleClick(index + 3)} className="img-popup">
							<img src={image.url} alt={image.title} />
							<div className="icon">
								<i className="far fa-plus" />
							</div>
						</a>
					</div>
				))}
			</div>
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={images.map(image => ({ src: image.url }))}
				index={currentIndex}
			/>
		</>
	)
}
