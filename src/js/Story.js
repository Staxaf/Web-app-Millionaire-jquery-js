import { Question } from "./Question"
import $ from 'jquery';

export class Story {

    constructor(isWin, failQuestion, userName){
        this.date = `${new Date().getDate()} 
            ${Story.getStringMonth(new Date().getMonth())} 
            ${new Date().getHours()}:${new Date().getMinutes()}`// поле показа текущего времени в формате hh:mm month
        this.isWin = isWin// выиграл ли пользователь
        this.failQuestion = failQuestion// номер проигрышного вопроса
        this.userName = userName// имя пользователя
    }
    static getStringMonth(index){// получить месяц по номеру
            let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
            return months[index]    
    }
    static winOrLose(item){// конвертация bool isWin в понятную строку
        if(item.isWin)
            return 'Вы выиграли'
        else    
            return 'Вы проиграли'
    }
    static addItem(story, item){// добавление элемента в историю
        if(story !== null){
            story.push(item)
        }
        else{
            story = [item]
        }
        Story.createStoryInDataBase(item)// добавление элемента в базу
        return story
    }
    static renderStory(story, token, allQuests){// метод формирует разметку для списка истории игр
        let displayStory = ''
        story.forEach((item, i) => {
            let index = Number(item.failQuestion) - 1
            displayStory += `
            <li>
                ${token == 'Антон' ? `<p>${item.userName}</p>` : ''}
                <p>${++i + ') ' + item.date}</p>
                <p class="${item.isWin ? 'text-green' : 'text-red'}">${Story.winOrLose(item)}</p>
                <p class="text-red">${item.isWin ? '' : `Ошибка в ${item.failQuestion} вопросе: `}</p>
                <p>${item.isWin ? '' : `${allQuests[index].name}`}</p>
                <li>
            `
        }); //<p>${item.winOrLose()}</p>
        // <p>${item.isWin ? '' : `Был выбран вариант: ${Question.convertRightQuest($(item.target).attr('id'))}`}</p>    
        // <p>${item.isWin ? '' : `Вариант: ${Question.convertRightQuest($(target).attr('id'))}`}</p> 
        return displayStory;
    }
    static createStoryInDataBase(story){// создание записи в базе данных
        return fetch('https://millionaire-jq-app.firebaseio.com/storyes.json', {
            method: 'POST',
            body: JSON.stringify(story),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            
    }
    static readStoryFromDataBase(){// чтение истории из базы
        return fetch('https://millionaire-jq-app.firebaseio.com/storyes.json')
            .then(response => response.json())
            .then(response => {
                return response ? Object.keys(response).map(key => ({
                    ...response[key],
                    id: key
                })) : []
            })
    }
}