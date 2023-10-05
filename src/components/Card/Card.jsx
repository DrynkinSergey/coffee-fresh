const Card = ({ title, desc, buttonTitle }) => {
	return (
		<div className='flex flex-col font-alegreya justify-center items-center px-6 py-10 rounded-xl shadow-xl gap-8'>
			<p className='text-center font-semibold text-2xl'>{title}</p>
			<p className='text-center'>{desc}</p>
			<div className='w-[90%]'>
				<button className='mt-5 w-full rounded-lg bg-[#2D635E]  py-2 text-white'>{buttonTitle}</button>
			</div>
		</div>
	)
}

export default Card
