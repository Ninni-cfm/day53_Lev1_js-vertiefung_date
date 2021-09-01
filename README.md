# day53_Lev1_js-vertiefung_date

**CodeFlow Übung lev1_1: date new Date() - Aufgabenstellung**

In dieser Übung werden wir Date() lernen.
Stelle die folgenden Daten im HTML - Dokument mit Hilfe des Befehls new Date() dar.

-   Speichere die Werte in einer Variable(date1, date2, …)
-   Nutze innerHTML um das Ergebnis darzustellen.
-   Teste dann die Werte:
    -   new Date("September 2, 2019 09:00:00")
    -   new Date(0)
    -   new Date(31556908800)
    -   new Date(86400000)

---

**CodeFlow Übung lev1_2: GET Date Methods - Aufgabenstellung**

In dieser Übung lernen wir die GET Date Methods

-   Zeige die Daten wie auf dem Screenshot an.
-   Verwende den Code aus dem Kommentarbereich, um den Wochentag und Monat anzuzeigen.
    -   Nutze Google, wenn du nicht weiterkommst
    -   Hinweis: du siehst hier das aktuelle Datum des Screenshots! Dein Ergebnis orientiert sich an dem aktuellen Datum.
    -   Erstelle ein schönes CSS-Design für Deine elektronische Uhr und füge ein festes Datum ein. Dieses Design werden wir später verwenden um eine funktionierende Uhr zu bauen!

---

**CodeFlow Übung lev1_3: SET Date Methods - Aufgabenstellung**

In dieser Übung lernen wir SET Date Methods.

-   Zeige die Daten wie auf dem Screenshot auf und nutze die Set Date Methode.
-   In der letzten Zeile wurden 30 Tage auf das damals aktuelle Datum addiert.
-   Denkt dran, dass euer Ergebnis sich aufgrund des Datums von dem Screenshot unterscheiden wird.
-   Nutzt Google, falls ihr nicht weiterkommt. :)

---

**JS Vertiefung CodeFlow Übung lev1_4: Tage In Monat - Aufgabenstellung**

Schreibe eine Funktion, um die Anzahl der Tage in einem bestimmten Monat zu erhalten.

-   Die Funktion bekommt zwei Parameter übermittelt: monat und jahr.
-   Überprüfe die Funktion mit folgenden Argumenten in der Konsole:
    -   console.log(tageImMonat(1, 2016)); //31
    -   console.log(tageImMonat(2, 2016)); //29
    -   console.log(tageImMonat(2, 2017)); //28
    -   console.log(tageImMonat(12, 2017)); //31
-   Reminder: Parameter sind die von euch festgelegten Variablen(hier: monat und jahr), die in der Funktion deklariert werden. Argumente sind die Werte, die ihr von außen rein gebt. Also in diesem Fall zum Beispiel tageImMonat(1, 2016).

---

**JS Vertiefung CodeFlow Übung lev1_5: Monatsname - Aufgabenstellung**

Schreibe eine Funktion, die den Monatsnamen anhand eines bestimmten Datums ermittelt.

-   Verwende den Code aus dem Kommentar.
-   Nutze getMonth() um die Aufgabe zu lösen.
-   Überprüfe deine Funktion mit folgenden Argumenten in der Konsole:
    -   console.log(monatsName("2001,3,4")); //März
    -   console.log(monatsName("2019,12,24")); //Dezember
    -   console.log(monatsName("1410,07,15")); //Juli

---

**JS Vertiefung CodeFlow Übung lev1_6: AM PM - Aufgabenstellung**

Schreibe eine Funktion, um AM und PM zu erhalten.
Wenn die Uhrzeit kleiner als 12 Uhr ist, wird AM angezeigt.
Wenn die Uhrzeit größer als 12 Uhr ist, wird PM angezeigt.

-   Die Funktion enthält:
    -   Ein Parameter
    -   Ternary Operator oder if
    -   getHours()
-   Überprüfe deine Funktion in der Konsole.
-   Teste sie mit folgenden Argumenten:
    -   date1 = new Date(1999, 10, 5, 15) //AM
    -   date2 = new Date()
    -   date3 = new Date(2019, 12, 3, 12) //AM
    -   date4 = new Date(2000, 1, 1, 11) //AM

---

**JS Vertiefung CodeFlow Übung lev1_7: Weekend - Aufgabenstellung**

Schreibe eine Funktion, die überprüft, ob an einem bestimmten Datum Wochenende ist oder nicht.

-   Schreibe eine Funktion und überprüfe dein Ergebnis in der Konsole.
-   Nutze:
    -   Conditionals Statement.
    -   Comparison Operators.
    -   Funktion mit ein Parameter.
    -   Aktuelle Datum.
    -   getDay().
    -   return "Weekend".
    -   return "Arbeitstag".
-   Teste folgende Daten: 15.12.2019, 14.2.2001, 2.1.2020, 29.02.2020.

---

_Source:_ https://github.com/Ninni-cfm/day53_Lev1_js-vertiefung_date

_Demo:_ https://ninni-cfm.github.io/day53_Lev1_js-vertiefung_date/
