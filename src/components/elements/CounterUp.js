'use client'
import { useState, useRef, useEffect } from "react"
import CountUp from "react-countup"

export default function CounterUp({ count, time }) {
	const [counterOn, setCounterOn] = useState(false)
	const ref = useRef(null)
	
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !counterOn) {
					setCounterOn(true)
				}
			},
			{
				threshold: 0.1,
				rootMargin: '-100px'
			}
		)
		
		if (ref.current) {
			observer.observe(ref.current)
		}
		
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [counterOn])
	
	return (
		<>
			<span ref={ref}>
				<CountUp end={count} duration={time} redraw={true} start={counterOn ? 0 : null}>
					{({ countUpRef }) => (
						<span className="number-counter" ref={countUpRef} />
					)}
				</CountUp>
			</span>
		</>
	)
}
