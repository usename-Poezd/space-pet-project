
const stateData ={
data:[
    {
        id:1,
        foto:'img/gagarin.jpg',
        name:'Юрий Алексеевич Гагарин',
        present:'Лётчик-космонавт СССР, Герой Советского Союза, кавалер высших знаков отличия ряда государств. 12 апреля 1961 года Юрий Гагарин стал первым человеком в мировой истории, совершившим полёт в космическое пространство.',
        data: {
            city:'деревня Клушино, Гагаринский район, Западная область, РСФСР, СССР',
            date:'9 марта 1934 г.',
            info:'12 апреля 1961 года в 9 часов 7 минут по московскому времени с космодрома Байконур стартовал космический корабль "Восток" с пилотом–космонавтом Юрием Алексеевичем Гагариным на борту. Спустя всего 108 минут космонавт приземлился неподалеку от деревни Смеловки в Саратовской области. Этим минутам суждено было стать звездными в биографии Гагарина. Спустя два дня Москва приветствовала героя космоса. На Красной площади прошел многолюдный митинг, посвященный осуществлению первого в мире космического полета. Тысячи людей хотели своими глазами увидеть Гагарина. За свой полет он был удостоен званий Герой Советского Союза и "Летчик–космонавт СССР", награжден орденом Ленина. Уже в конце апреля Юрий Гагарин отправился в свою первую зарубежную поездку. "Миссия мира", как иногда называют поездку первого космонавта по странам и континентам, продолжалась два года. Гагарин посетил десятки стран, встретился с тысячами людьми. Встретиться с ним считали за честь короли и президенты, политические деятели и ученые, артисты и музыканты.'
        },
    },
    {
        id:2,
        foto:'img/titov.jpeg',
        name:'Герман Степанович Титов',
        present:'Лётчик-космонавт СССР, первый человек, совершивший длительный космический полёт (более суток), второй человек в мире, совершивший орбитальный космический полёт. Герой Советского Союза. В апреле 1961 года был дублёром Юрия Гагарина .',
        data: {
            city:'Верх-Жилино, Косихинский район, Западно-Сибирский край, РСФСР, СССР',
            date:'11 сентября 1935 г.',
            info:'В 1968 году Титов окончил Военно-воздушную инженерную академию имени Н. Е. Жуковского. Дипломную работу по теме САС проекта одноместного воздушно-космического ЛА, разработанного группой слушателей-космонавтов, он защитил на отличную оценку 17 февраля — в один день с Гагариным.\n' +
                '\n' +
                '11 июля 1968 года стал старшим инструктором-космонавтом и взял на себя командование вторым отрядом космонавтов. 21 марта 1969 года возглавил 4-й отдел Центра подготовки космонавтов, готовившего пилотов для авиакосмической системы «Спираль».\n' +
                '\n' +
                '21 октября 1969 года Титов вновь был задержан нетрезвым за рулем автомобиля.\n' +
                '\n' +
                'По воспоминаниям Н. П. Каманина, 23 июля 1970 года Титов в очередной раз был задержан сотрудниками ГАИ во время управления автомобилем в нетрезвом состоянии и безобразно вёл себя в общении с ними. Тем самым он нарушил приказ Главкома, запрещающий ему в течение года управлять самолетом и автомашиной.\n' +
                '\n' +
                'В 1972 году окончил ещё один вуз — Военную академию Генерального штаба ВС СССР имени К. Е. Ворошилова.\n' +
                '\n' +
                'С 1972 по 1973 годы был заместителем начальника Центра по управлению космическими аппаратами военного назначения Управления начальника космических средств (УНКС) Министерства обороны СССР, с 1973 по 1979 год — заместителем, а с 1979 по 1991 год — первым заместителем начальника УНКС МО СССР по опытно-конструкторским и научно-исследовательским работам. Являлся председателем нескольких государственных комиссий по испытаниям ракетно-космических систем. Был активным идеологом создания морских кораблей измерительного комплекса, принял большое личное участие в разработке корабля проекта 1914 «Маршал Неделин».\n' +
                '\n' +
                'Являлся заместителем главного редактора журнала «Авиация и космонавтика».\n' +
                '\n' +
                '31 января 1980 года защитил диссертацию в Военной академии Генерального штаба ВС СССР имени К. Е. Ворошилова и получил учёную степень кандидата военных наук. Позднее защитил докторскую диссертацию.\n' +
                '\n' +
                'В октябре 1991 года генерал-полковник авиации Герман Степанович Титов вышел в запас.'
        },
    },
    {
        id:3,
        foto:'img/tereshkova.jpg',
        name:'Валентина Владимировна Терешкова',
        present:'Лётчик-космонавт СССР, первая в мире женщина-космонавт, Герой Советского Союза. Свой космический полёт совершила 16 июня 1963 года на космическом корабле Восток-6, он продолжался почти трое суток.',
        data: {
            city:'Большое Масленниково, Тутаевский район, Ярославская область, РСФСР, СССР',
            date:'6 марта 1937',
            info:'В отряд космонавтов Терешкова была зачислена 12 марта 1962 года и стала проходить обучение как слушатель-космонавт 2-го отряда. 29 ноября 1962 года сдала выпускные экзамены по ОКП на «отлично». С 1 декабря 1962 года Терешкова — космонавт 1-го отряда 1-го отдела. С 16 июня 1963 года, то есть сразу после полёта, она стала инструктором-космонавтом 1-го отряда и была на этой должности до 14 марта 1966 года.\n' +
                '\n' +
                'Во время обучения проходила тренировки на устойчивость организма к факторам космического полёта. Тренировки включали в себя термокамеру, где надо было находиться в лётном комбинезоне при температуре +70 °C и влажности 30 %, сурдокамеру — изолированное от звуков помещение, где каждая кандидатка должна была провести 10 суток.\n' +
                '\n' +
                'Тренировки в невесомости проходили на МиГ-15. При выполнении параболической горки внутри самолёта устанавливалась невесомость на 40 секунд, и таких сеансов было 3—4 за полёт. Во время каждого сеанса надо было выполнить очередное задание: написать имя и фамилию, попробовать поесть, поговорить по рации.\n' +
                '\n' +
                'Особое внимание уделялось парашютной подготовке, так как космонавт перед самой посадкой катапультировался и приземлялся отдельно на парашюте. Поскольку всегда существовал риск приводнения спускаемого аппарата, проводились и тренировки по парашютным прыжкам в море, в технологическом, то есть не пригнанном по размеру, скафандре'
        },
    },
    {
        id:4,
        foto:'img/leonov.jpg',
        name:'Алексей Архипович Леонов',
        present:'Лётчик-космонавт СССР, первый человек, вышедший в открытый космос. Дважды Герой Советского Союза (1965, 1975), генерал-майор авиации (1975), лауреат Государственной премии СССР (1981), член Высшего совета партии «Единая Россия» (2002—2019).',
        data: {
            city:'Листвянка, Тяжинский район, Западно-Сибирский край, РСФСР, СССР',
            date:'30 мая 1934',
            info:'В 1960 году был зачислен в первый отряд советских космонавтов. 18—19 марта 1965 года совместно с Павлом Беляевым совершил полёт в космос в качестве второго пилота на космическом корабле «Восход-2». В ходе полёта осуществил первый в истории космонавтики выход в открытый космос, проявив при этом исключительное мужество, особенно в нештатной ситуации, когда раздувшийся космический скафандр препятствовал его возвращению в космический корабль[14]:75.\n' +
                '\n' +
                'За успешное осуществление полёта и проявленные при этом мужество и героизм подполковнику Леонову Алексею Архиповичу 23 марта 1965 года присвоено звание Героя Советского Союза с вручением ордена Ленина и медали «Золотая Звезда».\n' +
                '\n' +
                '\n' +
                'Отряд космонавтов СССР (1-й слева во 2-м ряду). Звёздный городок, 1965 год\n' +
                'В 1965—1969 годах в группе космонавтов участвовал в подготовке по лунно-облётной и лунно-посадочной программам. Вместе с О. Г. Макаровым входил в состав первого из трёх сформированных в 1967 году экипажей для облёта Луны. В начале декабря 1968 года члены трёх подготовленных экипажей написали письмо в Политбюро ЦК КПСС с просьбой разрешить стартовать немедленно (в США пилотируемый облёт Луны планировался на 21—27 декабря 1968 года), невзирая на неудачи предшествующих беспилотных запусков. Пилотируемый запуск намечался на 9 декабря 1968 года, но разрешение так и не было получено. В 1969 году два экипажа (в том числе экипаж Леонова) продолжали подготовку к высадке на Луну, но подготовка прекратилась после двух неудач с запуском ракеты Н-1 и успешной высадки на Луну 21 июля 1969 года экипажа «Аполлон-11»[15][16].\n' +
                '\n' +
                'В 1968 году окончил Военно-воздушную инженерную академию имени Н. Е. Жуковского (инженерный факультет).\n' +
                '\n' +
                '22 января 1969 года находился в автомобиле, обстрелянном офицером Виктором Ильиным в ходе покушения на Брежнева. Не пострадал.\n' +
                '\n' +
                'В 1971 году был командиром основного экипажа Союза-11 (вместе с В. Н. Кубасовым и П. И. Колодиным). Незадолго до старта медкомиссия дала отвод Кубасову, экипаж сменили. Полетели дублёры — Г. Т. Добровольский, В. Н. Волков и В. И. Пацаев, погибшие во время посадки спускаемого аппарата.\n' +
                '\n' +
                'В 1975 году, 15—21 июля, совместно с В. Н. Кубасовым, совершил второй полёт в космос в качестве командира космического корабля «Союз-19» по программе «ЭПАС» (программа «Союз — Аполлон»). Продолжительность полёта — 5 сут 22 ч 30 мин 51 с. Тогда впервые была проведена стыковка кораблей двух разных стран.'
        },
    },
    {
        id:5,
        foto:'img/Nikolaev.jpg',
        name:'Андриян Григорьевич Николаев',
        present:'3-й советский космонавт. Дважды Герой Советского Союза. В ходе первого полёта Николаев впервые отвязался от кресла, свободно парил в корабле в невесомости. Совершил два космических полёта: одиночный в 1962 году, в 1970 году парный.',
        data: {
            city:'Шоршелы, Мариинско-Посадский район, Чувашская АССР, РСФСР, СССР',
            date:'5 сентября 1929',
            info:'С 11 по 15 августа 1962 года на корабле «Восток-3», совершив 64 витка вокруг Земли (первый многосуточный полёт в истории космонавтики и первый групповой полёт космических кораблей, см. «Восток-4»). В этом полёте (о чём общественности сообщили только спустя несколько десятилетий) проведён первый военный эксперимент с участием космонавтов на орбите — по программе создания перехватчика спутников, при этом «Восток-4», пилотируемый Павлом Поповичем, играл роль перехватчика, а пилотируемый Николаевым «Восток-3» — цели. Минимальное расстояние между кораблями было 5 км. Николаев вспоминал, как с орбиты наблюдал на земле аэродром вероятного противника, взлётно-посадочную полосу, рулёжные дорожки, места стоянки самолётов. В ходе полёта проведены первые эксперименты по радиосвязи между экипажами двух кораблей в космосе, выполнена программа научно-технических и медицинско-биологических экспериментов.\n' +
                '\n' +
                'После выхода на орбиту и отделения космического корабля от ракеты-носителя Николаев взял ручное управление на себя (чего до него не делали), развернул корабль иллюминатором в сторону ракеты-носителя и сделал фотографический кадр (не проявился, поскольку ракета-носитель оказалась на стороне солнца). В ходе полёта Николаев впервые отвязался от кресла (до него Гагарин и Титов летали жёстко пристёгнутыми), свободно парил в корабле в невесомости. Состоялся сеанс связи Николаева с советским руководителем Н. С. Хрущёвым. Заранее условившись с конструктором Сергеем Королёвым, Николаев после запланированных трёх суток на орбите пошёл на четвёртые. В те годы корабль приземлялся отдельно, космонавт после катапультирования — на своём парашюте отдельно. Приземлился Николаев, как и Попович, 15 августа 1962 года под Карагандой, рядом с сопкой, едва не напоровшись на высокие острые камни. Первым делом на земле Николаев помог врачу отряда космонавтов, высадившемуся встречать его и не вполне удачно приземлившемуся с парашютом в 30 метрах от Николаева.\n' +
                '\n' +
                '2 сентября 1962 года триумфально проехал по улицам Чебоксар в кабриолете «ЗИС-110» выпуска 1950 года (номерной знак 00-01 ЧУА). Николаева восторженно приветствовали жители Чувашии, о чём свидетельствует сохранившаяся и демонстрируемая в его музее в Шоршелах документальная кинохроника этого события. С 1 по 19 июня 1970 года в качестве командира космического корабля «Союз-9» (совместно с В. И. Севастьяновым) на 18 суток. Корабль сделал 286 оборотов вокруг Земли за 424 ч 59 мин. После возвращения из рекордного по продолжительности полёта (до того летали максимум на 5 суток) космонавты испытывали серьёзные трудности при адаптации к земной гравитации («эффект Николаева»). В интервью газете «Правда» в мае 1995 года о состоянии после приземления никогда не жаловавшийся на тяготы службы Николаев рассказал так: «Было очень тяжело. Из корабля без помощи выйти не могли, когда нас вывели — стоять на ногах не могли. Кровь отливала в нижнюю часть туловища, можно было только или сидеть, или лежать — иначе теряешь сознание. Сердце за 18 суток уменьшилось в объёме на 12 процентов. Лёжа — 80 ударов, сидя — 100, стоя — 120. Костная ткань потеряла калий и кальций, стала рыхлой. Изменился состав крови. После нашего полёта первоочередная задача ставилась — обеспечить на орбите физическую тренировку космонавтов». Во втором полёте, вспоминал Николаев, он также выполнял военные задачи, отметил высокую разрешающую способность приборов, установленных на корабле «Союз-9», с помощью которых легко было рассмотреть даже буквы на самолётах, базировавшихся на аэродромах вероятного противника. После полёта Николаев целый месяц писал объёмные отчёты о полёте, вскоре защитил диссертацию и получил научную степень кандидата технических наук.'
        },
    },
]
};
