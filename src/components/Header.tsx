import { motion } from 'framer-motion'
import animationVariant from '../utils/animation'

function Header() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <motion.div
        variants={animationVariant}
        initial='initial'
        animate='animate'
      >
        <img src='/pfp.png' alt='Kunaaal' className='h-28 w-28 rounded-full' />
      </motion.div>

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
