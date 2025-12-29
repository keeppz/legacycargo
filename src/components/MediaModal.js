import { useState } from 'react'
import { InstagramEmbed } from 'react-social-media-embed'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

/**
 * Componente de ejemplo que muestra cómo usar:
 * 1. yet-another-react-lightbox para videos de YouTube, Vimeo, y videos locales
 * 2. react-social-media-embed para Instagram Reels
 * 
 * Uso:
 * import MediaModal from '@/components/MediaModal'
 * 
 * // Para YouTube/Vimeo
 * <MediaModal 
 *   type="youtube" 
 *   url="https://www.youtube.com/watch?v=VIDEO_ID"
 * />
 * 
 * // Para Instagram Reel
 * <MediaModal 
 *   type="instagram" 
 *   url="https://www.instagram.com/reel/REEL_ID/"
 * />
 */

export default function MediaModal({ type = 'youtube', url, buttonText = 'Ver Video', buttonClassName = 'video-btn video-popup' }) {
	const [isOpen, setOpen] = useState(false)

	// Para Instagram Reels, usar un modal personalizado
	if (type === 'instagram') {
		return (
			<>
				<a
					onClick={() => setOpen(true)}
					className={buttonClassName}
				>
					<i className="fas fa-play" />
				</a>
				
				{isOpen && (
					<div 
						className="instagram-modal-overlay"
						onClick={() => setOpen(false)}
						style={{
							position: 'fixed',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: 'rgba(0, 0, 0, 0.95)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							zIndex: 9999,
							padding: '20px',
							cursor: 'pointer',
						}}
					>
						<div 
							onClick={(e) => e.stopPropagation()}
							style={{
								position: 'relative',
								maxWidth: '500px',
								width: '100%',
								cursor: 'default',
							}}
						>
							<button
								onClick={() => setOpen(false)}
								style={{
									position: 'absolute',
									top: '-50px',
									right: '0',
									background: 'transparent',
									border: 'none',
									color: 'white',
									fontSize: '32px',
									cursor: 'pointer',
									zIndex: 10000,
									padding: '10px',
								}}
								aria-label="Cerrar"
							>
								✕
							</button>
							<InstagramEmbed 
								url={url}
								width="100%"
							/>
						</div>
					</div>
				)}
			</>
		)
	}

	// Para YouTube, Vimeo, videos locales - usar Lightbox
	const videoType = type === 'youtube' ? 'video/youtube' : 
	                  type === 'vimeo' ? 'video/vimeo' : 'video/mp4'

	return (
		<>
			<a
				onClick={() => setOpen(true)}
				className={buttonClassName}
			>
				<i className="fas fa-play" />
			</a>
			
			<Lightbox
				open={isOpen}
				close={() => setOpen(false)}
				slides={[
					{
						type: "video",
						sources: [
							{
								src: url,
								type: videoType,
							},
						],
					},
				]}
			/>
		</>
	)
}
