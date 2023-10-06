export const Nav = ({ close }) => {
	return (
		<ul className='sm:flex-grow-[0] flex-grow grid sm:flex gap-8 sm:text-lg lg:text-xl xl:text-2xl text-2xl font-josefin font-semibold text-center mt-14 sm:mt-0 sm:mb-0 mb-8'>
			<li className='block sm:hidden' onClick={close}>
				<a href='#'>Home</a>
			</li>
			<li onClick={close}>
				<a href='#aboutUs'>About us</a>
			</li>
			<li onClick={close}>
				<a href='#promotion'>Promotion</a>
			</li>
			<li onClick={close}>
				<a href='#shop'>Shop</a>
			</li>
			<li onClick={close}>
				<a href='#contacts'>Contacts</a>
			</li>
			<li className='hidden sm:block' onClick={close}>
				<a className='mt-5 px-4 w-full rounded-lg bg-[#2D635E]  py-2 text-white' href='#contacts'>
					Contact us
				</a>
			</li>
		</ul>
	)
}
