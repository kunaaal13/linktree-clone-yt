import data from '../utils/cms'
import Card from './Card'

function Socials() {
  return (
    <div className='my-16 flex w-full items-center justify-center'>
      <div className='grid w-5/6 grid-cols-1 gap-8 sm:grid-cols-2 md:w-4/5 lg:grid-cols-3'>
        {data.map((social) => (
          <Card key={social.id} social={social} />
        ))}
      </div>
    </div>
  )
}

export default Socials
