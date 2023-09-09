// Wie heißt die 1. Liste?
// Wie heißt die 2. Liste?
const list1 = "Liste1"  // Name der 1. Liste
const list2 = "Liste2"  // Name der 2. Liste




//////// !!!!HIER DRUNTER NICHT ÄNDERN!!!! /////////////
import fs from "fs";
// Lese die Inhalte der Dateien in Strings ein
const datei1Inhalt = fs.readFileSync('./data/preset1', 'utf-8');
const datei2Inhalt = fs.readFileSync('./data/preset2', 'utf-8');

// Teile die Inhalte in Zeilen auf
const liste1 = datei1Inhalt.split('\n').map(line => line.trim());
const liste2 = datei2Inhalt.split('\n').map(line => line.trim());

// Finde Einträge, die in liste1 fehlen
const fehlendeInListe1 = liste2.filter(eintrag => !liste1.includes(eintrag));

// Finde Einträge, die in liste2 fehlen
const fehlendeInListe2 = liste1.filter(eintrag => !liste2.includes(eintrag));

console.log(`Fehlende Einträge in ${list1}:`, fehlendeInListe1);
console.log(`Fehlende Einträge in ${list2}:`, fehlendeInListe2);

// In diesem Code werden die Dateien 'preset1' und 'preset2' gelesen und in Zeilen aufgeteilt. 
// Dann werden die fehlenden Einträge in beiden Listen verglichen und ausgegeben.