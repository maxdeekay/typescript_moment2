# Moment 2 - Programmering i Typescript
## Typescript
Denna app fungerar som en enkel "att-göra"-lista, skapad i Typescript.

 Appen är uppbyggd utav två huvudfiler, main.ts och todolist.ts. Main.ts hanterar primärt DOM, den läser in värden från besökaren och frågar om sparade värden från todolist.ts som den sedan visar för besökaren på olika sätt.
 Todolist.ts innehåller klassen TodoList. TodoList består av en privat lista fylld med objekt baserade på interfacet Todo. Todo består av en task (sträng), om den är avklarad eller inte (boolean), samt en priority (1, 2 eller 3).
 Klassen TodoList innehåller även ett gäng publika metoder för att hantera den privata listan samt spara detta i localStorage. Många av dessa metoder kallas från main.ts.

## Webbplatsen
På webbplatsen har vi två olika kontainrar, den ena innehållande ett formulär för att lägga till nya uppgifter och den andra innehållande en lista med alla sparade uppgifter.
Till varje uppgift så tillhör en prioritet, en siffra mellan 1 och 3 där 1 är mest viktig och 3 är minst. Dessa illustreras på olika sätt sen i listan. En uppgift med prioritet 3 är endast enkel text, en med prioritet 2 är skriven i fetstil och en med prioritet 1 är skriven i fetstil med röd text.
Till varje sparad uppgift tillhör även en ruta besökaren kan klicka på för att markera uppgiften som avklarad, vilket gör den grön och ikryssad.
Det finns även en knapp som låter användaren rensa och radera alla sparade uppgifter.
