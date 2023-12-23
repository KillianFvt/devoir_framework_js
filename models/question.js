class Question {

    #question;
    #answerId;
    #answers;

    constructor(questionToCreate) {
        this.#question = questionToCreate.question;
        this.#answerId = questionToCreate.answerId;
        this.#answers = questionToCreate.answers;
    }

    get question() {
        return this.#question;
    }

    get answerId() {
        return this.#answerId;
    }

    get answers() {
        return this.#answers;
    }

    set answers(value) {
        this.#answers = value;
    }

    toJSON(key) {
        console.log(key);
        return {question: this.#question, answerId: this.#answerId, answers: this.#answers};
    }
}

module.exports = {Question};