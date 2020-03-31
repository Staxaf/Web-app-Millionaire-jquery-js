import {Question} from "./Question";
import "../css/main.css";
import {allQuests} from "./questions";
let currentQuest = 0
$(document).ready(() => {
    startGame(currentQuest)
    $('#fifty').click(function (e) { 
        e.preventDefault();
    });
})
function startGame(currentQuest){
    $('.question__title').text(
        allQuests[currentQuest].name
    );
    $('.answer span').each(
         (i, value) => { 
         $(value).text(
             allQuests[currentQuest].versions[i]
        )
    });
    $('li').each((i, value) =>{ 
         $(value).removeClass('current-price')
    });
    $('.restart').click( () => {
        setTimeout(() => {
            //currentQuest = 0
            startGame(0)
            window.location.href=window.location.href
            //location.reload(true)// перезагружаю страницу, чтобы игра заново началась
        }, 1000)
    })
    $(`li:nth-child(${allQuests.length - currentQuest})`)
        .addClass('current-price')
  
    $('.answer').click((e) => {
        console.log('answer')
        //e.preventDefault()
        if(Question.isCorrect(e.target, allQuests, currentQuest)){// проверка на правильность ответа
            if(Question.hasAttr(e.target, 'id')){
                $(e.target).parent().addClass('bg-green');    
            }
            else{
                $(e.target).addClass('bg-green');
            }
            setTimeout(() => {
                if(currentQuest === 14){
                    setTimeout(() => {
                        $('.question__title').text('Вы выиграли!!!')
                        $('.question__title').css('color', 'green')
                        $('.question__text').empty()
                        location.reload(true)
                    }, 1000)
                }
                else{
                    $(Question.hasAttr(e.target, 'id') ? $(e.target).parent() : e.target)
                    .removeClass('bg-green');
                    startGame(++currentQuest)
                }
                
            }, 1000) 
        }
        else{
            $(Question.hasAttr(e.target, 'id') ? $(e.target).parent() : e.target).css('background', 'red');
            setTimeout(() => {
                $('.question__title').text('Вы проиграли!!!')
                $('.question__title').css('color', 'red')
                $('.question__text').empty()
            }, 1000)
        }
    })
}