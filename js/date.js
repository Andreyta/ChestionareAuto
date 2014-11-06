/**
 * Created by Andreea on 19/06/2014.
 */
$(document).ready(function () {
    window.data = [
        {
            id: "30",
            intrebare: "Viteza se va reduce obligatoriu:",
            r1: {afisare: 'la trecerile pentru pietoni;', corect: "nu"},
            r2: {afisare: 'la semnalul poliţistului de frontieră;', corect: "da"},
            r3: {afisare: 'la întâlnirea indicatorului "Cedează trecerea".', corect: "da"},
            imagine: "../img/311.jpg", // cale img!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            categorie: 'B,B1,Tr',
            dificultate: "75%"
        },
        {
            id: "29",
            intrebare: "Cum veţi semnaliza faptul că autovehiculul cu care circulaţi a rămas în pană pe partea carosabilă?",
            r1: {afisare: 'prin folosirea luminilor de poziţie;', corect: "da"},
            r2: {afisare: 'prin instalarea triunghiurilor reflectorizante şi prin folosirea luminilor de avarie;', corect: "da"},
            r3: {afisare: 'prin purtarea vestei reflectorizante.', corect: "nu"},
            imagine: "../img/311.jpg",
            categorie: 'B,B1,Tr',
            dificultate: "70%"
        },
        {
            id: "28",
            intrebare: "În care dintre situaţii consumul de carburant al unui motor creşte?",
            r1: {afisare: 'atunci când motorul nu atinge temperatura de funcţionare;', corect: "da"},
            r2: {afisare: 'atunci când fumul de eşapament este de culoare neagră;', corect: "da"},
            r3: {afisare: 'atunci când motorul funcţionează cu întreruperi.', corect: "da"},
            imagine: "../img/311.jpg",
            categorie: 'B,B1,Tr',
            dificultate: "70%"
        },
        {
            id: "27",
            intrebare: "Pentru care dintre situaţiile de mai jos se dispune reţinerea permisului de conducere?",
            r1: {afisare: 'pentru neacordarea priorităţii de trecere;', corect: "da"},
            r2: {afisare: 'permisul de conducere este deteriorat;', corect: "da"},
            r3: {afisare: 'permisul de conducere prezintă modificări, ştersături sau adăugiri.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "65%"
        },
        {
            id: "26",
            intrebare: "Nu se poate circula cu un autoturism dacă:",
            r1: {afisare: 'se depăşeşte masa maximă admisă, înscrisă în certificatul de înmatriculare;', corect: "da"},
            r2: {afisare: 'anvelopele sunt de mărimi şi caracteristici diferite faţă de cele înscrise în certificatul de înmatriculare;', corect: "da"},
            r3: {afisare: 'autovehiculul depăşeşte înălţimea înscrisă în certificatul de înmatriculare.', corect: "nu"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "67%"
        },
        {
            id: "25",
            intrebare: "Neeliberarea completă a frânei de staţionare determină:",
            r1: {afisare: 'zgomote în zona manetei frânei de mână;', corect: "nu"},
            r2: {afisare: 'un consum suplimentar de carburant;', corect: "da"},
            r3: {afisare: 'încălzirea excesivă a butucilor roţilor din spate.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "67%"
        },
        {
            id: "24",
            intrebare: "În care dintre situaţii este interzisă schimbarea direcţiei de mers spre stânga?",
            r1: {afisare: 'când conducătorul de vehicul este încadrat pe banda din dreapta;', corect: "da"},
            r2: {afisare: 'când drumul pe care urmează să se intre este semnalizat cu indicatorul „Circulaţia interzisă în ambele sensuri”;', corect: "da"},
            r3: {afisare: 'când strada pe care urmează să se intre este semnalizată cu indicatorul „Drum fără ieşire”.', corect: "nu"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "66%"
        },
        {
            id: "23",
            intrebare: "În care dintre situaţii este permisă depăşirea?",
            r1: {afisare: 'în intersecţia semnalizată cu indicatoare de prioritate;', corect: "da"},
            r2: {afisare: 'în intersecţia dirijată prin semnale luminoase;', corect: "da"},
            r3: {afisare: 'în intersecţia dirijată prin semnale ale poliţistului.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "66%"
        },
        {
            id: "22",
            intrebare: "Ce categorii de vehicule au obligaţia de a folosi luminile de întâlnire pe timp de zi?",
            r1: {afisare: 'Ce categorii de vehicule au obligaţia de a folosi luminile de întâlnire pe timp de zi?', corect: "da"},
            r2: {afisare: 'autovehiculele care însoţesc coloane militare sau transportă grupuri de persoane;', corect: "da"},
            r3: {afisare: 'autovehiculele care tractează alte vehicule sau care transportă produse periculoase.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "65%"
        },
        {
            id: "21",
            intrebare: "În care dintre situaţii sunteţi obligat să reduceţi viteza?",
            r1: {afisare: 'la trecerea la nivel cu calea ferată curentă cu bariere;', corect: "da"},
            r2: {afisare: 'la trecerea la nivel cu calea ferată curentă fără bariere;', corect: "nu"},
            r3: {afisare: 'la trecerea la nivel cu calea ferată curentă industrială.', corect: "nu"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "67%"
        },
        {
            id: "20",
            intrebare: "Ce obligaţii vă revin în timpul conducerii autovehiculului cu privire la viteză?",
            r1: {afisare: 'să respectaţi viteza maximă admisă pe sectorul de drum pe care circulaţi, corespunzătoare categoriei din care face parte autovehiculul condus;', corect: "da"},
            r2: {afisare: 'să vă conformaţi limitelor de viteză impuse prin mijloacele de semnalizare specifice;', corect: "da"},
            r3: {afisare: 'să rulaţi pe cât posibil în treptele inferioare de viteză, pentru a nu polua mediul.', corect: "nu"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "63"
        },
        {
            id: "19",
            intrebare: "Când este permisă depăşirea prin stânga a tramvaielor aflate în mers?",
            r1: {afisare: 'atunci când drumul public este cu sens unic;', corect: "da"},
            r2: {afisare: 'când între şina de tramvai din dreapta şi marginea trotuarului nu există suficient spaţiu pentru depăşire;', corect: "da"},
            r3: {afisare: 'în nicio situaţie.', corect: "nu"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "63"
        },
        {
            id: "18",
            intrebare: "Ce condiţii tehnice trebuie să îndeplinească un autovehicul pentru a circula pe drumurile publice?",
            r1: {afisare: 'să nu depăşească masa totală maximă autorizată înscrisă în certificatul de înmatriculare;', corect: "da"},
            r2: {afisare: 'să nu depăşească gabaritul înscris în certificatul de înmatriculare;', corect: "nu"},
            r3: {afisare: 'să fie înmatriculat şi să corespundă condiţiilor tehnice legale.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "65"
        },
        {
            id: "17",
            intrebare: "Se aplică puncte de penalizare pentru:",
            r1: {afisare: 'nerespectarea semnificaţiei indicatorului „Oprire”, instalat la trecerea la nivel cu o cale ferată;', corect: "da"},
            r2: {afisare: 'depăşirea cu 31-40 km/h a vitezei maxime admise pe sectorul de drum respectiv pentru categoria din care face parte autovehiculul condus;', corect: "da"},
            r3: {afisare: 'depăşirea cu 10-20 km/h a vitezei maxime admise pe sectorul de drum respectiv pentru categoria din care face parte autovehiculul condus.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "66"
        },
        {
            id: "16",
            intrebare: "Cu ce viteză sunteţi obligat să circulaţi pe drumurile publice din afara localităţilor, când partea carosabilă este acoperită cu piatră cubică umedă?",
            r1: {afisare: 'cu o viteză care să nu depăşească 50 km/h;', corect: "da"},
            r2: {afisare: 'cu o viteză care să permită efectuarea oricărei manevre în condiţii de siguranţă;', corect: "da"},
            r3: {afisare: 'cu o viteză care să nu depăşească limita maximă de 90 km/h.', corect: "nu"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "63"
        },
        {
            id: "15",
            intrebare: "Cum veţi proceda la întâlnirea semnalului intermitent de culoare galbenă?",
            r1: {afisare: 'acest semnal nu vă permite trecerea;', corect: "nu"},
            r2: {afisare: 'veţi circula cu viteză redusă;', corect: "da"},
            r3: {afisare: 'veţi respecta semnificaţia semnalizării rutiere şi a regulilor de circulaţie aplicabile în acel loc.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "61"
        },
        {
            id: "14",
            intrebare: "La trecerea autovehiculelor cu regim de circulaţie prioritar, care au în funcţiune mijloacele de avertizare sonoră şi luminoasă de culoare albastră, sunteţi obligat:",
            r1: {afisare: 'să reduceţi viteza;', corect: "da"},
            r2: {afisare: 'să circulaţi cât mai aproape de marginea drumului în sensul de deplasare;', corect: "da"},
            r3: {afisare: 'să acordaţi prioritate de trecere.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "64"
        },
        {
            id: "13",
            intrebare: "În ce situaţie poate fi reţinut certificatul de înmatriculare al unui vehicul?",
            r1: {afisare: 'autovehiculul are aplicate afişe publicitare;', corect: "nu"},
            r2: {afisare: 'datele din certificatul de înmatriculare nu concordă cu caracteristicile tehnice ale vehiculului;', corect: "da"},
            r3: {afisare: 'deţinătorul nu face dovada încheierii asigurării auto de răspundere civilă.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "60"
        },
        {
            id: "12",
            intrebare: "Se interzice circulaţia pe drumurile publice a autovehiculelor dacă:",
            r1: {afisare: ' echipamentul de frânare este defect;', corect: "da"},
            r2: {afisare: 'emisia de gaze atinge limita legală admisă;', corect: "nu"},
            r3: {afisare: 'au montate dispozitive de iluminare şi de semnalizare, altele decât cele omologate de autoritatea competentă.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "62"
        },
        {
            id: "11",
            intrebare: "Circulaţia autovehiculelor pe drumurile publice se interzice atunci când:",
            r1: {afisare: 'certificatul de înmatriculare este deteriorat;', corect: "nu"},
            r2: {afisare: 'acestea nu corespund normelor tehnice cu privire la siguranţa rutieră şi la protecţia mediului înconjurător;', corect: "da"},
            r3: {afisare: 'termenul de valabilitate a inspecţiei tehnice periodice a expirat.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "62"
        },
        {
            id: "10",
            intrebare: "Sunteţi obligat să nu depăşiţi viteza de 50 km/h în afara localităţilor, în următoarele situaţii:",
            r1: {afisare: 'pe poduri sau sub poduri;', corect: "nu"},
            r2: {afisare: 'la trecerea pe lângă grupuri organizate, coloane militare sau cortegii, pe drumurile cu o singură bandă pe sens;', corect: "da"},
            r3: {afisare: 'în curbe deosebit de periculoase sau cu vizibilitate mai mică de 50 m.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "62"
        },
        {
            id: "9",
            intrebare: "Pentru care dintre faptele de mai jos se aplică măsura reţinerii permisului de conducere?",
            r1: {afisare: 'pentru neoprirea la semnalul regulamentar al poliţistului;', corect: "da"},
            r2: {afisare: 'pentru nerespectarea dispoziţiilor legale referitoare la depăşire;', corect: "da"},
            r3: {afisare: 'pentru nerespectarea normelor privind folosirea luminilor pe timp de noapte.', corect: "nu"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "60"
        },
        {
            id: "8",
            intrebare: "În care dintre situaţii este interzisă întoarcerea vehiculului?",
            r1: {afisare: 'în locul în care este instalat indicatorul cu semnificaţia „Întoarcerea interzisă“;', corect: "da"},
            r2: {afisare: 'în locurile în care oprirea este interzisă, cu excepţia intersecţiilor;', corect: "da"},
            r3: {afisare: 'în zona de acţiune a indicatorului „Staţionarea interzisă“.', corect: "nu"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "60"
        },
        {
            id: "7",
            intrebare: "Transportarea victimelor la spital se poate realiza cu:",
            r1: {afisare: 'o ambulanţă special dotată în acest sens;', corect: "da"},
            r2: {afisare: 'o ambulanţă însoţită de un medic;', corect: "da"},
            r3: {afisare: 'vehiculul care a provocat accidentul, dacă starea victimei permite acest lucru.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "64"
        },
        {
            id: "6",
            intrebare: "În care dintre situaţii se reţine certificatul de înmatriculare sau înregistrare?",
            r1: {afisare: 'când inspecţia tehnică periodică a expirat;', corect: "da"},
            r2: {afisare: 'dacă zgomotul în mers sau staţionare depăşeşte limita legală admisă;', corect: "da"},
            r3: {afisare: 'când motorul emite noxe poluante peste limitele legale admise.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "61"
        },
        {
            id: "5",
            intrebare: "Care dintre faptele de mai jos constituie infracţiune şi se pedepseşte ca atare?",
            r1: {afisare: 'conducerea pe drumul public a unui autovehicul neînmatriculat;', corect: "da"},
            r2: {afisare: 'conducerea pe drumul public a unui autovehicul fără certificat de înmatriculare;', corect: "nu"},
            r3: {afisare: 'conducerea pe drumul public a unui autovehicul cu număr de înmatriculare fals.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "61"
        },
        {
            id: "4",
            intrebare: "În care dintre situaţiile prezentate mai jos nu este permisă oprirea voluntară a vehiculelor?",
            r1: {afisare: 'la o distanţă mai mică de 50 m de trecerea la nivel cu calea ferată;', corect: "da"},
            r2: {afisare: 'pe pistele obligatorii pentru pietoni;', corect: "da"},
            r3: {afisare: 'pe platforma căii ferate sau de tramvai, dacă prin aceasta este stânjenită circulaţia vehiculelor pe şine.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "60"
        },
        {
            id: "3",
            intrebare: "În ce situaţii se interzice circulaţia pe drumurile publice a autovehiculelor?",
            r1: {afisare: 'atunci când zgomotul în mers sau în staţionare depăşeşte limita legală admisă pentru tipul respectiv de vehicul;', corect: "da"},
            r2: {afisare: 'atunci când nu se respectă regulile referitoare la transportul produselor periculoase;', corect: "da"},
            r3: {afisare: 'atunci când sunt montate alte dispozitive de avertizare sonoră decât cele omologate de autoritatea competentă.', corect: "da"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "60"
        },
        {
            id: "2",
            intrebare: "Cum veţi proceda corect pentru a intra pe autostradă folosind banda de intrare (accelerare):",
            r1: {afisare: 'veţi mări viteza, întrucât banda pe care circulaţi este special creată în acest scop;', corect: "da"},
            r2: {afisare: 'cedaţi trecerea autovehiculelor care circulă pe prima bandă a autostrăzii şi nu stânjeniţi în niciun fel circulaţia acestora;', corect: "da"},
            r3: {afisare: 'nu aveţi nicio obligaţie, deoarece autostrada are suficiente benzi pentru a permite circulaţia tuturor vehiculelor.', corect: "nu"},
            imagine: "",
            categorie: 'B,B1,Tr',
            dificultate: "60"
        },
        {
            id: "1",
            intrebare: "În care dintre situaţii este interzisă depăşirea unui moped?",
            r1: {afisare: 'pe trecerile pentru pietoni, semnalizate cu indicator sau cu marcaj;', corect: "da"},
            r2: {afisare: 'la mai puţin de 50 m de trecerile la nivel cu calea ferată;', corect: "da"},
            r3: {afisare: 'în zona de acţiune a indicatorului „Depăşirea autovehiculelor, cu excepţia motocicletelor fără ataş, interzisă“.', corect: "nu"},
            imagine:"../img/311.jpg",
            categorie: 'B,B1,Tr',
            dificultate: "60"
        }

    ];
});
