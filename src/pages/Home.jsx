import { units } from '../data/db'
import Unit from '../components/Unit'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar />
      <div className='flex justify-center min-h-screen bg-blue-50 border'>
        <ul className='w-1/2'>
          {
            units.map((unit, index) => <Unit key={index} {...unit} />)
          }
        </ul>
      </div>
    </>
  )
}

export default Home