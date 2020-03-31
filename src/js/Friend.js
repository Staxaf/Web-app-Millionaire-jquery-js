import { Question } from "./Question"
import $ from 'jquery'; 

export class Friend {
    constructor(name, photoURL){
        this.name = name
        this.photoURL = photoURL
    }
    static friendsAdvice(friends, quest){
        let thoughts = ['Хмм...\nМне, кажется','Я думаю', 'Мне кажется', 'Интересно...\nНаверное', 'Я все таки думаю', 'Определенно', 'Пфф, тут и думать нечего'] 
        let randomIndexFriend = Math.floor(Math.random() * friends.length)
        let randomIndexThoughts =  Math.floor(Math.random() * thoughts.length)
        $('.popup__photo img').attr({'src' : `${friends[randomIndexFriend].photoURL}`})
        // nth-child(2), пототму что на странице присутствует 2 модальных окна
        $('.popup__text:nth-child(2) h1')
        .text(`${friends[randomIndexFriend].name} на связи...`)
        $('.popup__text:nth-child(2) p')
        .text(`${thoughts[randomIndexThoughts]}, это ответ ${Question.convertRightQuest(quest.rightAnswer)}`);
    }
    
}