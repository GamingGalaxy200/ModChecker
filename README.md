# ModChecker


## Übersicht:

- [Übersicht](#übersicht)
- [Anleitung](#anleitung)
- [Infos](#zusätzliche-infos)
- [Presets Vergleichen](#presets-vergleichen)


## Anleitung:

1. Lade die Repository auf den PC herunter.
2. Stelle sicher, dass ["node"](https://nodejs.org/en) und ["NPM"](https://www.npmjs.com) installiert sind. Für ein Tutorial klicke [hier](https://phoenixnap.com/kb/install-node-js-npm-on-windows).
3. Wechsel nun in einem Terminal in das Verzeichnis / den Dateipfad, wo die Repository heruntergeladen wurde.
4. Führe "npm install" aus. Dadurch werden alle erforderlichen Pakete heruntergeladen, wenn NPM installiert ist.
5. Füge die aktuelle Liste von Mods auf der Blacklist in die "blacklist" Datei.    
   So könnte das aussehen:  
   ```// Blacklisted Weapon Mods  
  	'1655786638', // Grimdark Armory  
  	'1358695565', // LAGO Weapons Pack  
  	'2099675634', // Additional Air Weapon
6. Füge nun die Mod-Liste vom Spieler in die "playermods" Datei ein. Optional ist es die exportierte Liste aus dem Launcher zu nutzen, andere Listen gehen jedoch meist auch.    
    So könnte das aussehen: 
    ```
    RHSUSAF Steam https://steamcommunity.com/sharedfiles/filedetails/?id=843577117
    RHSAFRF Steam https://steamcommunity.com/sharedfiles/filedetails/?id=843425103
    ```
8. Führe im Terminal "npm run start" aus, damit wird das Tool gestartet.


## Zusätzliche Infos:
1. Das Tool funktioniert nur wenn die Listen IDs beinhalten. Optional sind die Steam-Workshop IDs.
2. Es kann passieren dass mehrere einträge als verboten angegeben werden wie etwa einzelne Ziffern.    
    So könnte das aussehen:```
    Die folgenden IDs sind nicht erlaubt: 3,2,1,3,3,4,4,3,1,4,10```    
    Dies liegt daran dass manchmal Nummern in Mod Namen als IDs erkannt werden. Das Tool funktioniert jedoch weiterhin.
5. Entworfen wurde dieses kleine Tool für Signal Hill ;) `von Chris`


## Presets Vergleichen
Mit diesem Tool kannst du auch ganz einfach zwei aus arma exportierte Presets vergleichen, um herauszufinden welche Mods aus einem Preset noch nicht im anderen vorhanden sind.   
1. Fülle die Datein "preset1" und "preset2" mit den aus Arma exportierten Listen.
    So könnte das aussehen: 
    ```
    CUP Weapons	Steam	https://steamcommunity.com/sharedfiles/filedetails/?id=497660133
    NIArms Core	Steam	https://steamcommunity.com/sharedfiles/filedetails/?id=667454606
    ```
2. Trage in der "compare.js" Datei die Namen deiner Listen ein, sonst werden die Listen "Liste1" und "Liste2" genannt.
2. Führe im Terminal "npm run presets" aus, damit wird das Tool gestartet.