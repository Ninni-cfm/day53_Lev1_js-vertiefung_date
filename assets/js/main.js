/*******************************************************************************************
JS Vertiefung CodeFlow Übung lev1_1: date new Date() - Aufgabenstellung

In dieser Übung werden wir Date() lernen.
Stelle die folgenden Daten im HTML - Dokument mit Hilfe des Befehls new Date() dar.
    * Speichere die Werte in einer Variable(date1, date2, …)
    * Nutze innerHTML um das Ergebnis darzustellen.
    * Teste dann die Werte:
        o new Date("September 2, 2019 09:00:00")
        o new Date(0)
        o new Date(31556908800)
        o new Date(86400000)
*/

let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0);
let date3 = new Date(31556908800);
let date4 = new Date(86400000);
document.getElementById("lev1_1").innerHTML = `
    <p>${date1} = new Date("September 2, 2019 09:00:00");</p>
    <p>${date2} = new Date(0);</p>
    <p>${date3} = new Date(31556908800);</p>
    <p>${date4} = new Date(86400000);</p>`;



/*******************************************************************************************
JS Vertiefung CodeFlow Übung lev1_2: GET Date Methods - Aufgabenstellung

In dieser Übung lernen wir die GET Date Methods
    * Zeige die Daten wie auf dem Screenshot an.
    * Verwende den Code aus dem Kommentarbereich, um den Wochentag und Monat anzuzeigen.
        o Nutze Google, wenn du nicht weiterkommst
        o Hinweis: du siehst hier das aktuelle Datum des Screenshots! Dein Ergebnis orientiert sich an dem aktuellen Datum.
        o Erstelle ein schönes CSS-Design für Deine elektronische Uhr und füge ein festes Datum ein. Dieses Design werden wir später verwenden um eine funktionierende Uhr zu bauen!
*/
let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];
let current = new Date();
document.getElementById("lev1_2").innerHTML = `
    <p>${current}</p>
    <p>${current.getFullYear()} Jahr</p>
    <p>${current.getMonth() + 1} Monat</p>
    <p>${current.getDate()} Tag</p>
    <p>${current.getHours()} Stunde</p>
    <p>${current.getMinutes()} Minute</p>
    <p>${current.getSeconds()} Sekunde</p>
    <p>${current.getMilliseconds()} Millisekunde</p>
    <p>${wochenTag[current.getDay()]}</p>
    <p>${monate[current.getMonth()]}</p>`;

/*********************************************************************************************/
showMyClock();
function showMyClock() {
    // temporary hide the clock
    document.getElementById("myClock").style.visibility = "hidden";

    let currentTime = new Date();
    console.log(currentTime);
    //let weekDay = currentTime.toLocaleDateString("en", { weekday: 'long' }).slice(0, 3);
    console.log(currentTime.toString().split(' '));
}


/*******************************************************************************************
JS Vertiefung CodeFlow Übung lev1_3: SET Date Methods - Aufgabenstellung

In dieser Übung lernen wir SET Date Methods.
    * Zeige die Daten wie auf dem Screenshot auf und nutze die Set Date Methode.
    * In der letzten Zeile wurden 30 Tage auf das damals aktuelle Datum addiert.
    * Denkt dran, dass euer Ergebnis sich aufgrund des Datums von dem Screenshot unterscheiden wird.
    * Nutzt Google, falls ihr nicht weiterkommt. :)
*/
function setDate(year, month, day, hour, minute, second) {

    // the simple way...
    let simple = new Date(year, month, day, hour, minute, second);

    let d = new Date();
    d.setFullYear(year);
    d.setMonth(month - 1);
    d.setDate(day);
    d.setHours(hour);
    d.setMinutes(minute);
    d.setSeconds(second);
    return d;
}
document.getElementById("lev1_3").innerHTML = `
    <p>${setDate(2222, 10, 23, 13, 25, 11)}</p>
    <p>${setDate(2123, 02, 24, 13, 25, 11)}</p>
    <p>${setDate(2123, 03, 24, 13, 25, 11)}</p>
    <p>${setDate(2123, 03, 03, 13, 25, 11)}</p>
    <p>${new Date(current.setDate(current.getDate() + 30))}</p>
`;


/*******************************************************************************************
JS Vertiefung CodeFlow Übung lev1_4: Tage In Monat - Aufgabenstellung**

Schreibe eine Funktion, um die Anzahl der Tage in einem bestimmten Monat zu erhalten.
    * Die Funktion bekommt zwei Parameter übermittelt: monat und jahr.
    * Überprüfe die Funktion mit folgenden Argumenten in der Konsole:
        o console.log(tageImMonat(1, 2016)); //31
        o console.log(tageImMonat(2, 2016)); //29
        o console.log(tageImMonat(2, 2017)); //28
        o console.log(tageImMonat(12, 2017)); //31
    * Reminder: Parameter sind die von euch festgelegten Variablen(hier: monat und jahr),
      die in der Funktion deklariert werden. Argumente sind die Werte, die ihr von außen
      rein gebt. Also in diesem Fall zum Beispiel tageImMonat(1, 2016).
*/
function tageImMonat(month, year) {

    let d1 = new Date(year, month - 1, 1);
    let d2 = new Date(year, month, 1);
    return (d2 - d1) / 86400000;

    // let d2 = new Date(year, month, 1);
    // return new Date(d2.setDate(d2.getDate() - 1)).getDate();

}
document.getElementById("lev1_4").innerHTML = `
    <p>tageImMonat(1,2016): ${tageImMonat(1, 2016)}</p>
    <p>tageImMonat(2,2016): ${tageImMonat(2, 2016)}</p>
    <p>tageImMonat(2,2017): ${tageImMonat(2, 2017)}</p>
    <p>tageImMonat(12,2016): ${tageImMonat(12, 2017)}</p>
`;


/*******************************************************************************************
JS Vertiefung CodeFlow Übung lev1_5: Monatsname - Aufgabenstellung

Schreibe eine Funktion, die den Monatsnamen anhand eines bestimmten Datums ermittelt.
    * Verwende den Code aus dem Kommentar.
    * Nutze getMonth() um die Aufgabe zu lösen.
    * Überprüfe deine Funktion mit folgenden Argumenten in der Konsole:
        o console.log(monatsName("2001,3,4")); //März
        o console.log(monatsName("2019,12,24")); //Dezember
        o console.log(monatsName("1410,07,15")); //Juli
*/
function monatsName(date) {
    return monate[new Date(date).getMonth()];
}
document.getElementById("lev1_5").innerHTML = `
    <p>monatsName("2001,3,4"): ${monatsName("2001,3,4")}</p>
    <p>monatsName("2019,12,24"): ${monatsName("2019,12,24")}</p>
    <p>monatsName("1410,07,15"): ${monatsName("1410,07,15")}</p>
`;


/*******************************************************************************************
JS Vertiefung CodeFlow Übung lev1_6: AM PM - Aufgabenstellung

Schreibe eine Funktion, um AM und PM zu erhalten.
Wenn die Uhrzeit kleiner als 12 Uhr ist, wird AM angezeigt.
Wenn die Uhrzeit größer als 12 Uhr ist, wird PM angezeigt.
    * Die Funktion enthält:
        o Ein Parameter
        o Ternary Operator oder if
        o getHours()
    * Überprüfe deine Funktion in der Konsole.
    * Teste sie mit folgenden Argumenten:
        o date1 = new Date(1999, 10, 5, 15) //AM
        o date2 = new Date()
        o date3 = new Date(2019, 12, 3, 12) //AM
        o date4 = new Date(2000, 1, 1, 11) //AM
*/
function getAmPm(date) {
    return date.getHours() < 12 ? 'AM' : 'PM';
}
document.getElementById("lev1_6").innerHTML = `
    <p>Date(1999, 10, 5, 15): ${getAmPm(new Date(1999, 10, 5, 15))}</p>
    <p>Date(): ${getAmPm(new Date())}</p>
    <p>Date(2019, 12, 3, 12): ${getAmPm(new Date(2019, 12, 3, 12))}</p>
    <p>Date(2000, 1, 1, 11): ${getAmPm(new Date(2000, 1, 1, 11))}</p>
`;


/*******************************************************************************************
JS Vertiefung CodeFlow Übung lev1_7: Weekend - Aufgabenstellung

Schreibe eine Funktion, die überprüft, ob an einem bestimmten Datum Wochenende ist oder nicht.
    * Schreibe eine Funktion und überprüfe dein Ergebnis in der Konsole.
    * Nutze:
        o Conditionals Statement.
        o Comparison Operators.
        o Funktion mit ein Parameter.
        o Aktuelle Datum.
        o getDay().
        o return "Weekend".
        o return "Arbeitstag".
    * Teste folgende Daten: 15.12.2019, 14.2.2001, 2.1.2020, 29.02.2020.
*/
function isWeekend(date) {

    // given date format does not work for an US system!!!
    let d = new Date(date.split(",").reverse().join(","));

    // Ausfuehrlich
    if (d.getDay() == 0 || d.getDay() == 6)
        return "Weekend";
    else
        return "Working day";

    // Kurzfassung
    // return [0, 6].includes(d.getDay()) ? "Weekend" : "Working day";
}
document.getElementById("lev1_7").innerHTML = `
    <p>new Date("15, 12, 2019"): ${isWeekend("15, 12, 2019")}</p>
    <p>new Date("16, 2, 2001"): ${isWeekend("16, 2, 2001")}</p>
    <p>new Date("2, 1, 2020"): ${isWeekend("2, 1, 2020")}</p>
    <p>new Date("29, 2, 2020"): ${isWeekend("29, 2, 2020")}</p>
`;
