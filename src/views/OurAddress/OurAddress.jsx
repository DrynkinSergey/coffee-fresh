import { BsArrowRight } from 'react-icons/bs'

const OurAddress = () => {
	return (
		<div className='mt-[100px]'>
			<div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.6600520362454!2d30.73997465580271!3d46.48761248889528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631bca33a3321%3A0x6ffbb467856581db!2z0J_QvtGC0YzQvtC80LrRltC90YHRjNC60ZYg0YHRhdC-0LTQuA!5e0!3m2!1suk!2sua!4v1696542492459!5m2!1suk!2sua'
					allowfullscreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					className='w-full aspect-square  saturate-50
          '
				></iframe>
			</div>
			<div className=' my-10  gap-4 grid text-center justify-center'>
				<h2 className='text-center  text-2xl font-normal font-josefin'>Our address</h2>
				<p>110 St-Cathedral Pkwy Station</p>
				<p>4310 94th St, Flushing</p>
				<a
					className='font-josefin mt-4 flex items-center gap-4  mx-auto  justify-between shadow-[4px_4px_10px_2px_lightgray] text-left px-6 py-3  '
					href='#'
				>
					See more address
					<BsArrowRight />
				</a>
			</div>
		</div>
	)
}

export default OurAddress
