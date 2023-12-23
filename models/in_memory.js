const Qcm = require('./qcm');
const {Question} = require("./question");

const AUTHOR = 'Moi';

let qcmList = [
    new Qcm({
        id: 0,
        name: 'Les animaux marins',
        theme: 'Animaux',
        subject: 'Les animaux marins',
        author: AUTHOR,
        nbPoints: 10,
        questionList: [

            new Question({
                question: 'Quel est le plus grand animal marin ?',
                answerId: 1,
                answers: [
                    'La baleine',
                    'Le calamar géant',
                    'Le requin baleine',
                    'Le cachalot',
                ]
            }),

            new Question({
                question: 'Quel est le plus petit animal marin ?',
                answerId: 0,
                answers: [
                    'Le plancton',
                    'Le crabe',
                    'Le corail',
                    'Le poisson clown',
                ]
            }),

            new Question({
                question: 'Quel est le plus rapide animal marin ?',
                answerId: 3,
                answers: [
                    'Le dauphin',
                    'Le requin marteau',
                    'Le thon',
                    'Le marlin',
                ]
            }),
        ]

    }),

    new Qcm({
        id: 1,
        name: 'Les animaux terrestres',
        theme: 'Animaux',
        subject: 'Les animaux terrestres',
        questionList: [

            new Question({
                question: 'Quel est le plus grand animal terrestre ?',
                answerId: 1,
                answers: [
                    'Le lion',
                    'L\'éléphant',
                    'Le rhinocéros',
                    'Le girafe',
                ]
            }),

            new Question({
                question: 'Quel est le plus petit animal terrestre ?',
                answerId: 3,
                answers: [
                    'La fourmi',
                    'Le cafard',
                    'Le rat',
                    'La souris',
                ]
            }),

            new Question({
                question: 'Quel est le plus rapide animal terrestre ?',
                answerId: 2,
                answers: [
                    'Le guépard',
                    'Le lion',
                    'L\'antilope',
                    'Le léopard',
                ]
            }),
        ]
    }),
];

function getQcmList() {
    return qcmList;
}

function addQcm(rawObject) {
    console.log(rawObject)
    console.log(rawObject.name)
    console.log(rawObject.theme)
    console.log(rawObject.subject)

    let questionList = [];

    for (let question of rawObject.questions) {

        let answers = [];

        for (let answer of question.answers) {
            answers.push(answer.answer);
        }

        console.log(answers);

        let questionObject = new Question({
            question: question.question,
            answerId: question.answerId,
            answers: answers,
        });

        questionList.push(questionObject);
    }

    let qcm = new Qcm(
        {
            id: qcmList.length,
            name: rawObject.name,
            theme: rawObject.theme,
            subject: rawObject.subject,
            author: AUTHOR,
            nbPoints: rawObject.nbPoints,
            questionList: questionList,
        }
    );
    console.log(qcm.toJSON());

    qcmList.push(qcm);

    for (let qcmdd of qcmList) {
        console.log(qcmdd);
    }
}

module.exports = {getQcmList, addQcm, qcmList};