function Header() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div>
        <img src='/pfp.png' alt='Kunaaal' className='h-28 w-28 rounded-full' />
      </div>

      <div className='mt-6 space-y-2 px-2 text-center'>
        <h1 className='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent'>
          Kunaaal
        </h1>

        <h3 className='text-lg'>
          Building beautiful and seamless web experiences.
        </h3>
      </div>
    </div>
  )
}

export default Header
