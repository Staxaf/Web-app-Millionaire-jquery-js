
import $ from 'jquery'; 
import "../css/main.css";

export class Question{
    constructor(name, versions, rightAnswer, pricing){
        this.name = name // название вопроса
        this.versions = versions // варианты ответа
        this.rightAnswer = rightAnswer // правильный ответ
        this.pricing = pricing // сколько денег дают за вопрос
    }
    static isCorrect(target, quests, currentQuest){// правильный ли ответ
        return $(target).attr('id') == quests[currentQuest].rightAnswer ||
        $(target).parent().attr('id') == quests[currentQuest].rightAnswer
    }
    static hasAttr(target){// имеет ли атрибут id
        return $(target).attr('id') == undefined;
    }
    hideAnswers(){// спрятать ответы (для кнопки 50/50)
        let answers = $('.answer')
        if(this.rightAnswer === '2'){
            console.log('I am in')
            answers.splice(this.rightAnswer, 1)
        } else{
            answers.splice(this.rightAnswer - 1, 1)
        }
        console.log(answers, this.rightAnswer)
        for(let i = 0; i < 2; i++){
            let randPlace = Math
                .floor(Math.random() * answers.length)
            let delAnswer = answers[randPlace]
            console.log(delAnswer)
            $(delAnswer).css('visibility', 'hidden');
            answers.splice(randPlace, 1)
        }
    }
    static convertRightQuest(rightQuest){// конвертировать правильный ответ в букву
        switch(rightQuest){
            case '1':
                return 'A'
            case '2':
                return 'B'
            case '3':
                return 'C'
            case '4':
                return 'D'
        }
    }
    static createDashboard(quest){// функция создания дашборда
        let percent = 100
        let randomInd
        let stats = []
        let getPercent = (rightAnswer) => {// функция для возвращения массива данных, которые будут показываться на дашборде
            for(let currentAnswer = 0; currentAnswer < 4; currentAnswer++){
                if(Number(rightAnswer - 1) == currentAnswer){
                    if(currentAnswer === 3){
                        stats[3] = percent
                    }
                    else{
                        randomInd =  Math.floor(Math.random() * (70 - 50  + 1)) + 50;
                    stats[currentAnswer] = randomInd
                    percent -= randomInd
                    }
                }
                else{
                    if(currentAnswer === 3){
                        stats[3] = percent
                    }
                    else{
                        randomInd = Math.floor(Math.random() * (20 + 1)) + 0
                        percent -= randomInd
                        stats[currentAnswer] = randomInd   
                    }
                }
            }
            return stats
        } 
        let ctx = document
            .getElementById('myChart').getContext('2d');
        let chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',
            // The data for our dataset
            data: {
                labels: ['A', 'B', 'C', 'D'],
                datasets: [{
                    label: 'Что думают зрители?',
                    backgroundColor: ['green', 'yellow', 'red', 'blue'],
                    borderColor: ['green', 'yellow', 'red', 'blue'],
                    data: getPercent(quest.rightAnswer)
                }]
            },
            // Configuration options go here
            options: {
                cutoutPercentage: 60,
                responsive: false
            }
        });
    }
}