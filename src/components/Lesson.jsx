import { FaLock } from 'react-icons/fa'
import { IoMdCheckmark } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Quiz from '../pages/Quiz'

const Lesson = ({type, title, lessonStatus, lesson_code}) => {
  return (
    <Link to={`quiz/${lesson_code}`}>
        <div className={`bg-white rounded-md p-4 ${lessonStatus === "locked" && 'opacity-60'}`}>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    {
                        type === "lesson" ? <img src="./img/lesson-logo.png" alt="lesson-logo" /> : type === "quiz" ? <img src="./img/quiz-logo.png" alt="quiz-logo" /> : type === "practise" ? <img src="./img/practise-logo.png" alt="practise-logo" /> : ''
                    }
                    <div>
                        <p className='text-sm text-gray-500'>
                            {
                                type === "lesson" ? "Lesson" : type === "quiz" ? "Quiz" : type === "practise" ? "Practise" : ""
                            }
                        </p>
                        <p className='text-xl font-bold'>{title}</p>
                    </div>
                </div>
                {
                    lessonStatus === "locked" ? <FaLock /> : lessonStatus === "in-process" ? '' : lessonStatus === "completed" ? <IoMdCheckmark className='text-green-600 text-xl font-bold' /> : ''
                }
            </div>
            {
                lessonStatus === "in-process" && (
                    <button className='bg-blue-500 py-3 rounded-md text-white font-bold mt-4 w-full'>Learn</button>
                )
            }
        </div>
    </Link>
  )
}

export default Lesson