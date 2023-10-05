const SvgBG = ({ img, color }) => {
	return (
		<div className='mt-[120px] mb-8 z-20 relative flex justify-center'>
			<img className='z-50 relative' src={img} />
			<div style={{ background: color }} className={` absolute   top-6 w-[100vw] left-[-20px]  h-full z-10`}></div>
		</div>
	)
}

export default SvgBG
