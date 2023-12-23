class Qcm {

    #id;
    #name;
    #theme;
    #subject;
    #author;
    #nbPoints;
    #questionList;

    constructor(qcmToCreate) {
        this.#id = qcmToCreate.id;
        this.#name = qcmToCreate.name;
        this.#theme = qcmToCreate.theme;
        this.#subject = qcmToCreate.subject;
        this.#author = qcmToCreate.author;
        this.#nbPoints = qcmToCreate.nbPoints;
        this.#questionList = qcmToCreate.questionList;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get theme() {
        return this.#theme;
    }

    get subject() {
        return this.#subject;
    }

    get author() {
        return this.#author;
    }

    get nbPoints() {
        return this.#nbPoints;
    }

    get questionList() {
        return this.#questionList;
    }

    set questionList(value) {
        this.#questionList = value;
    }

    toJSON() {
        return {
            id: this.#id,
            name: this.#name,
            theme: this.#theme,
            subject: this.#subject,
            author: this.#author,
            nbPoints: this.#nbPoints,
            questionList: this.#questionList
        };
    }

    toString() {
        return JSON.stringify(this.toJSON());
    }
}

module.exports = Qcm;