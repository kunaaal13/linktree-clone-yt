import { Social } from '../utils/cms'

type props = {
  social: Social
}

function Card({ social }: props) {
  return (
    <a href={social.url}>
      <div className='cursor-pointer overflow-hidden rounded-lg'>
        <div
          style={{
            color: social.color,
            background: social.gradient,
          }}
          className='flex w-full items-center justify-center rounded-lg py-6'
        >
          <social.icon className='h-12 w-12' />
        </div>

        <div className='p-2'>
          <h2 className='text-xl font-medium'>{social.title}</h2>

          <p className='text-sm text-gray-400'>{social.description}</p>
        </div>
      </div>
    </a>
  )
}

export default Card
