import {Question} from "./Question";
import {Friend} from "./Friend";

export let allQuests = [
    new Question(
        'Что из этого не является косметическим средством?',
        ['Помада', 'Крем', 'Пудра', 'Татуировка'],
        '4', 
        100),
    new Question(
        'Кто, в конце концов, скушал Колобка?',
        ['Дед', 'Баба', 'Заяц', 'Лиса'],
        '4', 
        200),
    new Question(
        'Какой шахматной фигуры не существует?',
        ['Пешка', 'Конь', 'Король', 'Дама'],
        '4', 
        300),
    new Question(
        'Что означает буква «О» в аббревиатуре ОРТ?',
        ['Олигархическое', 'Объективное', 'Общественное', 'Однообразное'],
        '2', 
        500),
    new Question(
        'Главный герой в романе Ф. И. Достоевского «Преступление и наказание»?',
        ['Расторгуев', 'Чикатило', 'Тумбочкин', 'Раскольников'],
        '4', 
        1000),
    new Question(
        'В состав любого органического вещества входит…',
        ['Кислород', 'Углерод', 'Водород', 'Азот'],
        '3', 
        2000),
    new Question(
        'Какое слово здесь лишнее?',
        ['Автор', 'Товар', 'Отвар', 'Ворот'],
        '4', 
        3000),
    new Question(
        'Где родился Сергей Есенин?',
        ['Ставрополь', 'Новгород', 'Баку', 'Санкт-Петербург'],
        '2', 
        5000),
    new Question(
        'Кто изобрел громоотвод?',
        ['Франклин', 'Рузвельт', 'Вашингтон', 'Линкольн'],
        '1', 
        10000),
    new Question(
        'Что будешь делать с выигранными деньгами?',
        ['Поеду за границу', 'Отдам Антону', 'Сохраню под матрацом', 'Отдам на благотворительность'],
        '3', 
        20000),
    new Question(
        'В каком городе находится штаб-квартира Microsoft?',
        ['Нью-Йорк', 'Ричмонд', 'Новый Орлеан', 'Сиэтл'],
        '3', 
        50000),
    new Question(
        'При каком правителе к России была присоединена территория Финляндии?',
        ['Петр I', 'Екатерина II', 'Павел I', 'Александр I'],
        '4', 
        150000),
    new Question(
        'Ричард Львиное Сердце был пленен во время?',
        ['Крестового похода', 'Столетней войны', 'Войны алой и белой розы', 'Войны за независимость'],
        '1', 
        250000),
    new Question(
        'Кто такой «молотоглав»?',
        ['Рыба', 'Птица', 'Змея', 'Насекомое'],
        '3', 
        500000),
    new Question(
        'Сколько будет 2+2?',
        ['4', '22', '"2+2"', 'Без понятия'],
        '3', 
        1000000) 
];
export let friends = [
    new Friend(
        'Раджеш', 
        'https://sites.google.com/site/mythebigbangtheory/_/rsrc/1468855620853/radzes-kutrappali/four.jpg?height=320&width=239'
        ),
    new Friend(
        'Леонард', 
        'https://vignette.wikia.nocookie.net/big-bang-theory/images/7/77/Leonard_Hofstadter.jpg/revision/latest/top-crop/width/360/height/450?cb=20170324194220&path-prefix=ru'
        ),
    new Friend(
        'Кэролайн', 
        'https://miro.medium.com/max/2048/1*F21mbwDC9EkcTwvnoTP0jg.png'
        ),
    new Friend(
        'Уолтер', 
        'https://pbs.twimg.com/media/DzeLmXPU8AEod4s.jpg'
        ),
    new Friend(
        'Лилли', 
        'https://images.generated.photos/DQ4EKrAPT-e5slG3cXmSw20uJ2AwwhOzJeVnpI9tlMA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/OTk4MDcuanBn.jpg'
        ),
    new Friend(
        'Шелдон', 
        'https://pm1.narvii.com/6937/e0d4a0956aba7603945c06ab2579facb2a88812dr1-483-482v2_00.jpg'
        ),
    new Friend(
        'Тед', 
        'https://pbs.twimg.com/profile_images/571944061414559744/G8WiGfKq_400x400.jpeg'
        ),
    
]