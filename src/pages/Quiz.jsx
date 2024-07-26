import { useEffect, useState } from 'react'
import { all_questions_list, compliments } from '../data/db'
import { Link, useParams } from 'react-router-dom'
import PendulumLoading from '../components/PendulumLoading'
import crowdCheerSound from '../assets/sounds/crowd-cheer-ii-6263.mp3'
import gameOverSound from '../assets/sounds/no-luck-too-bad-disappointing-sound-effect-112943.mp3'
import useSound from 'use-sound'
import { getRandomItem } from '../utils/getRandomItemFromArray'

const Quiz = () => {
    const [compliment, setCompliment] = useState({complimentLevel: null, complimentText: null})
    const [numberOfConsecutiveCorrectAnswers, setNumberOfConsecutiveCorrectAnswers] = useState(0)
    const [crowdCheerSoundPlay, {crowdCheerSoundStop}] = useSound(crowdCheerSound)
    const [gameOverSoundPlay] = useSound(gameOverSound)

    const [loadingPercent, setLoadingPercent] = useState(0)
    let {lesson_code} = useParams()

    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })

    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [showCorrect, setShowCorrect] = useState(false)

    const quiz = all_questions_list.find(question => question.lesson_code === lesson_code)
    const {question, choices, correctAnswer} = quiz.questions[activeQuestion]


    const onClickNext = () => {
      setShowCorrect(false)
      setSelectedAnswerIndex(null)
      setResult(prev => selectedAnswer ? {
        ...prev,
        score: prev.score + quiz.perQuestionScore,
        correctAnswers: prev.correctAnswers + 1,
      } : {
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1
      }
    )
    if (activeQuestion !== quiz.questions.length - 1) {
      setActiveQuestion(prev => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
    }


    const onAnswerSelected = (answer, index) => {
      if (selectedAnswerIndex === null) {
        setShowCorrect(answer !== correctAnswer)
        setSelectedAnswerIndex(index)
        setSelectedAnswer(answer === correctAnswer)

        if (answer === correctAnswer) {
          setNumberOfConsecutiveCorrectAnswers(prev => prev + 1)
        } else {
          setNumberOfConsecutiveCorrectAnswers(0)
        }
      }
    }

    useEffect(() => {
      console.log(numberOfConsecutiveCorrectAnswers);
      if (numberOfConsecutiveCorrectAnswers >= 3) {
        setCompliment({complimentLevel: "hard", complimentText: getRandomItem(compliments.hard)})
      } else if (numberOfConsecutiveCorrectAnswers === 2) {
        setCompliment({complimentLevel: "medium", complimentText: getRandomItem(compliments.medium)})
      } else if (numberOfConsecutiveCorrectAnswers === 1) {
        setCompliment({complimentLevel: "simple", complimentText: getRandomItem(compliments.simple)})
      }
    }, [numberOfConsecutiveCorrectAnswers])

    useEffect(() => {
        setTimeout(() => {
            setLoadingPercent(prev => prev + 1)
        }, 30);
    }, [loadingPercent])

    useEffect(() => {
        if (showResult) {
            if (result.correctAnswers >= result.wrongAnswers) {
                crowdCheerSoundPlay()
            } else {
                gameOverSoundPlay()
            }
        }
    }, [showResult])

  return (
    <div className='bg-[#F6F9FF] w-screen min-h-screen flex justify-center items-center'>
        {
            (loadingPercent <= 100) && (
                <div className='z-10 absolute flex justify-center items-center h-screen w-screen backdrop-blur-md'>
                    <div className='size-96 bg-red-400 shadow rounded-xl flex flex-col justify-evenly'>
                        <div className='mx-auto'>
                            <PendulumLoading />
                        </div>
                        <div className='min-h-4 w-3/4 mx-auto bg-gray-300 rounded-full'>
                            <div className='h-full bg-green-400 rounded-full flex justify-center items-center transition-all ease-linear' style={{width: `${loadingPercent}%`}}>
                                <span className='py-1 text-white font-["zig"]'>{loadingPercent}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        <div className='w-3/4 my-10'>
        {
          !showResult && (
            <div>
              <p className={`${compliment.complimentLevel === "hard" ? 'text-red-500' : compliment.complimentLevel === "medium" ? 'text-blue-400' : compliment.complimentLevel === "simple" ? 'text-green-400' : ''}`}>{compliment.complimentText}</p>
              <div className='border h-4 rounded-full bg-gray-300 mb-10 w-3/4 mx-auto'>
                <div className='bg-blue-500 h-full rounded-full transition-all ease-in-out duration-300' style={{width: `${Math.round(((activeQuestion + 1) / quiz.questions.length) * 100)}%`}}></div>
              </div>
            </div>
          )
        }
            <div className='shadow-[0_0_16px_0_#00000029] rounded-[8px] bg-white p-8'>
              {
                !showResult ? (
                  <>
                    <div className='flex justify-between items-center mb-4'>
                      <span className='text-blue-500 font-semibold text-3xl'>Test</span>
                      <span className='bg-blue-500 text-white text-sm py-2 px-4 rounded-full '>{activeQuestion + 1}/{quiz.questions.length}</span>
                    </div>
                    <p className='mb-10'>Durıs juwaptı belgileń</p>
                    <p>{question}</p>
                    <div className='space-y-2 mb-10 mt-6'>
                      {
                        choices.map((answer, index) => (
                          <div className={`${selectedAnswerIndex !== null ? 'cursor-not-allowed' : 'cursor-pointer'} flex items-center gap-2`} key={index} onClick={() => onAnswerSelected(answer, index)}>
                            <div className='size-4 rounded-full shadow-[0_0_8px_0_#00000040_inset] flex justify-center items-center'>
                              <div className={`rounded-full ${choices.indexOf(correctAnswer) !== index && selectedAnswerIndex === index  ? 'bg-red-500' : selectedAnswerIndex === index ? 'bg-green-500' : showCorrect && choices.indexOf(correctAnswer) === index ? 'bg-green-500' : ''} size-2`}></div>
                            </div>
                            <span className={`${choices.indexOf(correctAnswer) !== index && selectedAnswerIndex === index  ? 'text-red-500' : selectedAnswerIndex === index ? 'text-green-500' : showCorrect && choices.indexOf(correctAnswer) === index ? 'text-green-500' : ''}`}>{answer}</span>
                          </div>
                        ))
                      }
                    </div>
                    <div className='bg-blue-500 h-1 w-fit flex my-4 items-center gap-6 mx-auto'>
                      {
                        Array(quiz.questions.length).fill(0).map((_, index) => (
                          <div key={index} className={`border-[3px] border-blue-500 rounded-full size-4 ${index === activeQuestion ? 'bg-white' : 'bg-blue-500'}`}></div>
                        ))
                      }
                    </div>
                    <div className='flex justify-end'>
                      <button className='pushable disabled:opacity-60 disabled:cursor-not-allowed' disabled={selectedAnswerIndex === null} onClick={onClickNext}>
                        <span className='front'>
                          {activeQuestion === quiz.questions.length - 1 ? 'Juwmaqlaw' : 'Keyingi'}
                        </span>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className='flex flex-col gap-2 bg-white rounded p-4'>
                    <div className='mx-auto h-56'>
                        <video className='h-full' src={`/videos/${result.correctAnswers >= result.wrongAnswers ? 'happy-girl' : 'cried-girl'}.mp4`} style={{maskBoxImage: "url('https://www.flaticon.com/media/dist/min/img/video/sad/mask.svg')", maskImage: "url('https://www.flaticon.com/media/dist/min/img/video/sad/mask.svg')"}} autoPlay loop playsInline />
                    </div>
                    <h3 className='font-bold text-lg'>Nátiyje</h3>
                    <div className='border-b border-stone-500 pb-2'>
                        <p className='flex justify-between gap-10'>Barlıq sorawlar: <span className='font-bold'>{quiz.questions.length}</span></p>
                        <p className='flex justify-between gap-10'>Ulıwma ball: <span className='font-bold'>{result.score}</span></p>
                        <p className='flex justify-between gap-10'>Durıs juwaplar: <span className='font-bold text-green-500'>{result.correctAnswers}</span></p>
                        <p className='flex justify-between gap-10'>Qáte juwaplar: <span className='font-bold text-red-500'>{result.wrongAnswers}</span></p>
                    </div>
                    <div className='self-end flex gap-4 items-center'>
                        <button className='bg-gray-500 px-4 py-2 rounded text-white' onClick={() => location.reload()}>Qayta baslaw</button>
                        <Link onClick={() => crowdCheerSoundStop()} to='/' className='bg-green-500 px-4 py-2 rounded text-white'>Bas menyuǵa qaytıw</Link>
                    </div>
                  </div>
                )
              }
            </div>
        </div>
    </div>
  )
}

export default Quiz