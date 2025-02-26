const langSec = document.querySelector('.languageSection');
const buttons = document.querySelectorAll('a');
const textTitle = document.querySelector('.title1');
const textTitle2 = document.querySelector('.title2');
const textDesc2 = document.querySelector('.description2');
const textTitle3 = document.querySelector('.title3');
const textDesc3 = document.querySelector('.description3');
const textTitle4 = document.querySelector('.title4');
const textDesc4 = document.querySelector('.description4');
const textTitle5 = document.querySelector('.title5');
const textDesc5 = document.querySelector('.description5');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        langSec.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        const attr = button.getAttribute('language');

        textTitle.textContent = data[attr].title1;
        textTitle2.textContent = data[attr].title2;
        textDesc2.textContent = data[attr].description2;
        textTitle3.textContent = data[attr].title3;
        textDesc3.textContent = data[attr].description3;
        textTitle4.textContent = data[attr].title4;
        textDesc4.textContent = data[attr].description4;
        textTitle5.textContent = data[attr].title5;
        textDesc5.textContent = data[attr].description5;
    });
});

const data = {
    "english": {
        "title1": "Welcome to our website dedicated to the amazing world of cats! Here you will find information about the various coat colors of these wonderful animals, their features, and uniqueness. Explore the diversity of cats and find new fluffy friends for yourself!",
        "title2": "Orange cats",
        "description2": "Orange cats, often called ginger cats, have a bright and attractive appearance. These sunny fluffballs are known for their playful and good-natured character. They often become family favorites due to their friendly nature and love for cuddles. In culture, orange cats symbolize joy and happiness.",
        "title3": "Black cats",
        "description3": "Black cats are famous for their mysterious and elegant appearance. Despite the superstitions associated with them, black cats are some of the most affectionate and devoted animals. Their soft, silky fur and enigmatic gaze make them true aristocrats among cats. In various cultures, black cats symbolize luck and prosperity.",
        "title4": "White cats",
        "description4": "White cats captivate with their purity and grace. Their snow-white fur and bright eyes create a unique image that draws attention. These cats are characterized by their calm and peaceful nature, making them ideal companions for those who appreciate tranquility and comfort. White cats symbolize purity and innocence.",
        "title5": "Multicolored cats",
        "description5": "Multicolored cats, which have two or more colors in their coat, are true works of art. Each such cat is unique, and their coat can include a combination of various colors and patterns. These cats have bright personalities and often surprise with their behavioral traits. Multicolored cats symbolize diversity and uniqueness.",
    },

    "latvian": {
        "title1": "Laipni lūdzam mūsu vietnē, kas veltīta brīnišķīgajai kaķu pasaulē! Šeit jūs atradīsiet informāciju par šo brīnišķīgo dzīvnieku dažādajiem kažokādu krāsu to īpatnībām un unikālajām īpašībām. Izpētiet kaķu daudzveidību un atradīsiet jaunus pūkainus draugus sev!",
        "title2": "Oranži kaķi",
        "description2": "Oranži kaķi, bieži saukti par ingvera kaķiem, ir spilgti un pievilcīgi. Šie saulainie pūkainie zīlīši ir pazīstami ar savu spēlētājo un labestīgo raksturu. Bieži vien tie kļūst par ģimenes mīļākajiem savas draudzīgās dabas un mīlestības pret glāstiem dēļ. Kultūrā oranži kaķi simbolizē prieku un laimi.",
        "title3": "Melnie kaķi",
        "description3": "Melnie kaķi ir slaveni ar savu noslēpumaino un eleganto izskatu. Neskatoties uz ar tiem saistītajām mītām, melnie kaķi ir vieni no mīļākajiem un uzticamākajiem dzīvniekiem. Viņu mīkstais, zīdainais kažokāds un noslēpumainais skats padara viņus par īstiem aristokrātiem starp kaķiem. Dažādās kultūrās melnie kaķi simbolizē veiksmi un labklājību.",
        "title4": "Baltie kaķi",
        "description4": "Baltie kaķi iekarina ar savu tīrību un eleganci. Viņu sniega baltais kažokāds un spilgtie acu izveido unikālu attēlu, kas piesaista uzmanību. Šos kaķus raksturo viņu mierīgā un mierīgā dabā, padarot tos par ideāliem biedriem tiem, kuri novērtē mieru un komfortu. Baltie kaķi simbolizē tīrību un nevainību.",
        "title5": "Daudzkrāsaini kaķi",
        "description5": "Daudzkrāsaini kaķi, kuriem kažokādā ir divas vai vairākas krāsas, ir patiesi mākslas darbi. Katrs tāds kaķis ir unikāls, un viņu kažokādā var būt dažādu krāsu un rakstu kombinācija. Šie kaķi ir spilgtas personības un bieži vien pārsteidz ar savām uzvedības īpašībām. Daudzkrāsaini kaķi simbolizē daudzveidību un unikālumu.",
    },

    "russian": {
        "title1": "Добро пожаловать на наш сайт, посвященный удивительному миру кошек! Здесь вы найдете информацию о разнообразных окрасах шерсти этих замечательных животных, их особенностях и уникальности. Исследуйте разнообразие кошек и найдите новых пушистых друзей для себя!",
        "title2": "Оранжевые кошки",
        "description2": "Оранжевые кошки, часто называемые рыжими кошками, имеют яркий и привлекательный внешний вид. Эти солнечные пушистые комочки известны своим игривым и добродушным характером. Они часто становятся любимцами семьи благодаря своему дружелюбному нраву и любви к ласкам. В культуре оранжевые кошки символизируют радость и счастье.",
        "title3": "Черные кошки",
        "description3": "Черные кошки славятся своим загадочным и элегантным внешним видом. Несмотря на суеверия, связанные с ними, черные кошки являются одними из самых ласковых и преданных животных. Их мягкая, шелковистая шерсть и загадочный взгляд делают их настоящими аристократами среди кошек. В различных культурах черные кошки символизируют удачу и процветание.",
        "title4": "Белые кошки",
        "description4": "Белые кошки пленяют своей чистотой и изяществом. Их снежно-белая шерсть и яркие глаза создают уникальный образ, который привлекает внимание. Этих кошек характеризует спокойствие и миролюбие, что делает их идеальными спутниками для тех, кто ценит тишину и комфорт. Белые кошки символизируют чистоту и невинность.",
        "title5": "Многоцветные кошки",
        "description5": "Многоцветные кошки, у которых в шерсти два или более цвета, являются настоящими произведениями искусства. Каждая такая кошка уникальна, и ее шерсть может включать в себя комбинацию различных цветов и узоров. Эти кошки обладают яркими личностями и часто удивляют св оими поведенческими чертами. Многоцветные кошки символизируют разнообразие и уникальность.",
        
    }
    
}

async function getCatFact() {
    try {
        let { fact } = await (await fetch("https://catfact.ninja/fact")).json();
        document.getElementById("cat-fact").innerText = fact;
    } catch {
        document.getElementById("cat-fact").innerText = "Loading failed";
    }
}