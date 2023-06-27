import fs from "fs";

const blacklistFilePath = './data/blacklist';
const playerModsFilePath = './data/playermods';

// Überprüfen, ob die Blacklist existiert. Wenn nicht, erstelle sie.
if (!fs.existsSync(blacklistFilePath)) {
  console.log(`Die Blacklist Datei wurde neu erstellt. Bitte füge deine Werte ein.`);
  fs.writeFileSync(blacklistFilePath, '');
  process.exit(1);
}
// Überprüfen, ob die Playermods-Datei existiert. Wenn nicht, erstelle sie.
if (!fs.existsSync(playerModsFilePath)) {  
  console.log(`Die Spieler-Mods Datei wurde neu erstellt. Bitte füge deine Werte ein.`);
  fs.writeFileSync(playerModsFilePath, '');
  process.exit(1);
}

// Lesen der Blacklist Datei
const inputData = fs.readFileSync(blacklistFilePath, 'utf8');
// Extrahieren der IDs aus der Blacklist Datei
const ids = inputData.match(/\d+/g);
// Überprüfen, ob die IDs-Liste nicht leer ist
if (!ids || ids.length === 0) {
  console.log('Die Blacklist enthält keine IDs.');
  process.exit(1);
}

// Lesen der Playermods-Datei
const playerModsData = fs.readFileSync(playerModsFilePath, 'utf8');
// Extrahieren der IDs aus der Playermods-Datei
const existingIds = playerModsData.match(/\d+/g);
// Überprüfen, ob es  IDs gibt, die in der Blacklist enthalten sind
if (existingIds && existingIds.length > 0) {
  const uniqueIds = existingIds.filter(id => ids.includes(id));
  if (uniqueIds.length > 0) {
    console.log(`Die folgenden IDs sind nicht erlaubt:\n${uniqueIds.join(',\n')}\n`);
    for (let id2 of uniqueIds) {
        if (id2 == "0") {
            console.log(`Mod mit ID 0 erkannt, vorsicht!`)
        }
    }
  } else {
    console.log("Keine IDs von der Blacklist erkannt.")
  }
}
