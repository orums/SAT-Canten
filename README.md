## SATer-Cantusprügel

In dieser Web-App sind Studentenlieder aus verschiedenen Quellen zusammengeführt:

- Cantusprügel der SAT 1962
- Cantusprügel der SAT 2010
- HarWälBus Liedersammlung – Band 1
- HarWälBus Dustere Gesänge – Band 3
- Basler Kommersbuch

### Funktionen

- **Eigenständige Web-App:** Lieder, Biercomment, Anleitung, Schriften, Symbole, Styles und Programmlogik sind vollständig in der `index.html` enthalten.
- **Offline-Nutzung:** Nach dem ersten erfolgreichen Online-Aufruf speichert ein Service Worker die Live-App im Browser. Danach kann sie – solange der Browser die Websitedaten nicht entfernt – auch ohne Internetverbindung geöffnet werden.
- **Volltextsuche:** Lieder können nach Titel und Liedtext durchsucht werden.
- **Persönliche Liedauswahl:** Lieder lassen sich nach eigenen Vorlieben ordnen und in Gruppen einteilen. Die Einstellungen bleiben lokal auf dem Gerät gespeichert.
- **Mitsingen und Teilen:** Einzelne Lieder können zeitlich begrenzt zum gemeinsamen Mitsingen geteilt werden.
- **Darstellung:** Helles und dunkles Farbschema sowie anpassbare Schriftgrößen erleichtern die Verwendung auf unterschiedlichen Geräten.
- **Smartphone und Desktop:** Die Oberfläche ist für Mobiltelefone, Tablets und Desktop-Browser ausgelegt.
- **Biercomment:** Der Biercomment ist direkt in die Anwendung integriert.
- **Anleitung und Versionshinweise:** Bedienungshinweise und Änderungen einer neuen Version werden innerhalb der App angezeigt.
- **Geschützte Lieder:** Die Lieder aus HarWälBus Band 3 sind verschlüsselt und nur für Eingeweihte zugänglich.
- **Datenschutz:** Es werden keine Nutzungsdaten gesammelt oder an externe Dienste übertragen. Persönliche Einstellungen bleiben im Browser.

### Veröffentlichte Dateien

Auf GitHub Pages werden ausschließlich die für den Betrieb erforderlichen Dateien veröffentlicht:

- `index.html` – aktuelle Live-Version der vollständigen Web-App
- `preview/index.html` – Online-Testversion für den Entwickler
- `service-worker.js` – speichert ausschließlich die Live-App für die Offline-Nutzung und verwaltet den Versionscache
- `README.md` – Beschreibung des Projekts

Programme, Vorlagen, unverschlüsselte Rohdaten und Entwicklungsdateien werden nicht über GitHub Pages veröffentlicht.

Die Preview-Version wird nicht durch den Service Worker gespeichert und beeinflusst den Offline-Cache der Live-Anwender nicht.

### Offline-Hinweis

Die App muss mindestens einmal mit bestehender Internetverbindung geöffnet werden, damit `service-worker.js` installiert und die Live-Version gespeichert werden kann. Wird der Browser-Cache beziehungsweise werden die Websitedaten gelöscht, ist für die erneute Einrichtung wieder eine Internetverbindung erforderlich.

### Lizenz

Copyright (c) 2025–2026.

Dieses Werk steht unter der Creative-Commons-Lizenz Namensnennung – Nicht kommerziell 4.0 International. Es darf für nicht kommerzielle Zwecke geteilt und bearbeitet werden, sofern eine angemessene Namensnennung erfolgt.
