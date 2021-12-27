console .log(hahahas);
class question {
    constructor(code, text_question, num_of_question, score) {
        this.code = code;
        this.text_question = text_question;
        this.text_answer = null;
        this.num_of_question = num_of_question;
        this.score = 0;
    }
    get inAnswered() {
        if (this.text_answer)
            return true;
        return false;
    }
    set getScore() {
        if (this.inAnswered) {
        this.score += score;
            return this.score;
        }
        else
            return 0;
    }
}
class test {
    constructor(code, questionList, testTime) {
        this.code = code;
        this.questionList = questionList;
        this.studentName = null;
        this.startTime = 0;
        this.testTime = testTime;
    }
    startTest(name) {
        this.studentName = name;
        this.startTest = Date();
    }
    getOrderredQuestions() {
        let arrQuestion = this.questionList;
        for (let i = 1; i < arrQuestion.len; i++) {
            let temp = arrQuestion[i];
            let j = i - 1;
            while (j >= 0 && arrQuestion[j] > temp) {
                arrQuestion[j + 1] = arrQuestion[j];
                j = j - 1;
            }
            arrQuestion[j + 1] = temp;
        }
    }
}
let q1= new question(0001,'how much does a cow weigh?',3,30);
let q2= new question(0010,'how much does a monkey weigh?',5,30);
let q3= new question(0011,'how much does a  papa elephant way?',2,40);
let testAnimal= new test(888906,[q1,q2,q3],60);
console.log(testAnimal);