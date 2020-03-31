import $ from 'jquery';
import {Question} from "./Question";
import {Friend} from "./Friend";
import {Story} from "./Story";
import "../css/main.css";
import {friends, allQuests} from "./questions";

let currentQuest = 0 // текущий вопрос
let userName = null // имя пользователя для статистики
let userStory = []// история побед и поражений пользователя


    userName = localStorage.getItem('userName')// получение имени юзера с локального хранителя
    userStory = JSON.parse(localStorage.getItem('userStory'))// получение истории с локального хранилища
    startQuest(currentQuest)
    $('.answer').click(function(e){// событие при нажатии на какой-то ответ
        if(Question
            .isCorrect(e.target, allQuests, currentQuest)){// проверка на правильность ответа
            if(Question.hasAttr(e.target)){
                $(e.target).parent().addClass('bg-green');    
            }
            else{
                $(e.target).addClass('bg-green');
            }
            setTimeout(() => {
                if(currentQuest === 14){
                    setTimeout(() => {
                        // Тут добавляется элемент истории
                        userStory = Story.addItem(
                            userStory, 
                            new Story(true, 0,userName)
                        )
                        localStorage.setItem('userStory', JSON.stringify(userStory))
                        $('.question__title').text('Вы выиграли!!!')
                        $('.question__title').css('color', 'green')
                        $('.question__text').hide()
                    }, 1000)
                }
                else{
                    $(Question.hasAttr(e.target, 'id') ?
                        $(e.target).parent() : e.target
                    ).removeClass('bg-green');
                    startQuest(++currentQuest)
                }
                
            }, 1000) 
        }
        else{
            $(Question.hasAttr(e.target, 'id') ? 
                $(e.target).parent() : e.target
            ).addClass('bg-red');
            setTimeout(() => {
                // Тут добавляется элемент истории
                userStory = Story.addItem(
                    userStory, 
                    new Story(false, ++currentQuest, userName)
                )
                localStorage.setItem('userStory', JSON.stringify(userStory))
                $('.question__title').text('Вы проиграли!!!')
                $('.question__title').css('color', 'red')
                $('.question__text').hide()
            }, 1000)
        }
    })
    $('.restart').click( () => {// событие кнопки новой игры
        setTimeout(() => {
            $('#help-hall, #fifty, #friend-help')
                .css('visibility', 'visible')
            $('question__title').removeClass('font-red')
            $('.question__text').show()
            refreshStory(userStory)
            currentQuest = 0
            startQuest(0)
        }, 1000)
    })
    $('#fifty').click(function (e) { // событие кнопки 50/50
        allQuests[currentQuest].hideAnswers()
        $(this).css('visibility', 'hidden');
    });
    $('#friend-help').click(function (){// событие кнопки помощь друга
        $('#popup').show();
        Friend.friendsAdvice(friends, allQuests[currentQuest])
        $(this).css('visibility', 'hidden');
    })
    $('#help-hall').click(function (e) { // событие кнопки помощь зала
        $('.dashboard').css('opacity', '1')
        Question.createDashboard(allQuests[currentQuest])
        $(this).css('visibility', 'hidden')
    });
    $('#show-stats').click(function (e) { // событие кнопки статистики
        if(userName === 'Антон'){// только для Антона будет показываться вся история всех игроков
            Story.readStoryFromDataBase()
                .then(response => {
                    userStory = response
                    refreshStory(userStory)
                })
        }
        $('#stats').show()
        if(userName !== null){
            $('.input-block').hide();
        } 
        else{
            $('.input-block input').on('input', function (e) { 
                if($(this).val().length > 0){
                    $('.submit-user').prop('disabled', false)
                }
                else{
                    $('.submit-user').prop('disabled', true)
                }
            });
        }
    });
    $('.submit-user').click(function (e) { 
        userName = $('.input-block input').val()
        $('.input-block').hide();
        localStorage.setItem('userName', userName)
        $('.popup__text h2').text(`Добро пожаловать, ${userName}!`)
        refreshStory(userStory)
        //console.log(userName)
    });

function startQuest(index){// функция старта игры
    if(!isNull(userName)){
        $('.popup__text h2').text(`Добро пожаловать, ${userName}!`)
        refreshStory(userStory)
    }
    $('.dashboard').css('opacity', '0');    
    $('#popup, #stats').hide();
    $('.question__title').css('color', 'white')
    $('.answer').css('visibility', 'visible');
    $('.answer').removeClass('bg-red bg-green');
    $('.question__title').text(allQuests[index].name)
    $('.answer span')
        .each(function (i, value) { 
         $(value).text(allQuests[index].versions[i])
    });
    $('li').each((i, value) =>{ 
        $(value).removeClass('current-price')
   });
   
   $(`.price__prices li:nth-child(${allQuests.length - currentQuest})`)
       .addClass('current-price')
}
function isNull(item){// проверка на null
    return item == null
}
function refreshStory(story){// обновление истории
    let storyUl = $('.story')
    if(story !== null){
        storyUl.html(Story.renderStory(story, userName, allQuests))
    }
    else{
        storyUl.html('Пока стастика пустая...')
    }
}