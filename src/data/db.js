export const units = [
    {
        title: "Mexanika",
        info: "Меха́ника — раздел физики, наука, изучающая движение материальных тел и взаимодействие между ними; при этом движением в механике называют изменение во времени взаимного положения тел или их частей в пространстве.",
        progress_percent: 25,
        logo: "./img/unit-1.png",
        chapters: [
            {
                title: "Welcome to JavaScript",
                chapterStatus: "completed",
                lessons: [
                    {
                        type: "matching-pair-words",
                        title: "Welcome to JavaScript",
                        lessonStatus: "completed",
                        lesson_code: "ij39sdfn3"
                    },
                    {
                        type: "more-buttons-quiz",
                        title: "JavaScript Code",
                        lessonStatus: "completed"
                    },
                    {
                        type: "multi-choice-question",
                        title: "Data & Variables",
                        lessonStatus: "completed"
                    },
                    {
                        type: "Matching pair words",
                        title: "Working with Variables",
                        lessonStatus: "completed"
                    }
                ]
            },
            {
                title: "Going deeper with JavaScript",
                chapterStatus: "in-process",
                lessons: [
                    {
                        type: "image-quiz",
                        title: "JavaScript Functions",
                        lessonStatus: "completed"
                    },
                    {
                        type: "true-false-quiz",
                        title: "Standarts and best practises",
                        lessonStatus: "in-process"
                    }
                ]
            }
        ]
    },
    {
        title: "Termodinamika",
        info: "Термодина́мика — раздел физики, изучающий наиболее общие свойства макроскопических систем и способы передачи и превращения энергии в таких системах. В термодинамике изучаются состояния и процессы, для описания которых можно ввести понятие температуры.",
        progress_percent: 0,
        logo: "./img/unit-2.png",
        chapters: [
            {
                title: "Welcome to JavaScript",
                chapterStatus: "locked",
                lessons: [
                    {
                        type: "matching-pair-words",
                        title: "Welcome to JavaScript",
                        lessonStatus: "locked"
                    },
                    {
                        type: "more-buttons-quiz",
                        title: "JavaScript Code",
                        lessonStatus: "locked"
                    },
                    {
                        type: "multi-choice-question",
                        title: "Data & Variables",
                        lessonStatus: "locked"
                    },
                    {
                        type: "Matching pair words",
                        title: "Working with Variables",
                        lessonStatus: "locked"
                    }
                ]
            },
            {
                title: "Going deeper with JavaScript",
                chapterStatus: "locked",
                lessons: [
                    {
                        type: "image-quiz",
                        title: "JavaScript Functions",
                        lessonStatus: "locked"
                    },
                    {
                        type: "true-false-quiz",
                        title: "Standarts and best practises",
                        lessonStatus: "locked"
                    }
                ]
            }
        ]
    }
]

export const all_questions_list = [
    {
        lesson_code: "ij39sdfn3",
        perQuestionScore: 5,
        questions: [
            {
                question: 'JavaScript-te qaysı metod JSON-dı string maǵlıwmat túrine konvertaciyalaw ushın isletiledi?',
                choices: ['stringify()', 'parse()', 'convert()', 'Durıs juwap joq'],
                correctAnswer: 'stringify()',
            },
            {
                question: 'JavaScript tilinde qaysı gilt sóz ózgeriwshini járiyalawda isletiledi?',
                choices: ['var', 'let', 'var hám let', 'Durıs juwap joq'],
                correctAnswer: 'var hám let',
            },
            {
                question: 'JavaScript tilinde qaysı kod dizbegi maǵlıwmattı shıǵarıw ushın isletiledi?',
                choices: ['document.write()', 'console.log()', 'window.alert', 'Hámme juwap durıs'],
                correctAnswer: 'Hámme juwap durıs',
            }
        ]
    }
]

export const compliments = {
    simple: ["I like your style.", "Wel done!", "Keep going!", "Nice"],
    medium: ["Awesome", "Beautiful", "Smarter", "Great!"],
    hard: ["You're strong.", "Perfect", "You are magic!", "Wonderful"]
}