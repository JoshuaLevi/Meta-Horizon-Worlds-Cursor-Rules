# Horizon Worlds – Cursor AI Setup

Deze map is een kant-en-klare ontwikkelomgeving voor Meta Horizon Worlds (Desktop Editor + TypeScript) projecten in **Cursor**.  
Het bevat:
- **Projectregels** in `.cursor/rules/` die Cursor sturen om altijd jouw lokale documentatie en voorbeelden te gebruiken.
- **Lokale kennisbronnen** (`horizon-worlds-rules/`) met externe repos vol voorbeeldcode en documentatie.
- Een `.cursorignore` om ruis en zware bestanden te vermijden.

---

## 📂 Mappenstructuur
/.cursor/rules/                      # Cursor Rules – bepalen AI gedrag
00-project-context.mdc              # Context: stack, doelen, outputverwachting
01-hw-style-guide.mdc               # Stijl- en naming-conventies
02-docs-precedence.mdc              # Altijd lokale HW-docs/snippets prefereren
03-ts-globs.mdc                     # Regels voor TS-bestanden
04-testing-playbook.mdc             # Test- en reviewchecklist

/horizon-worlds-rules/                # Lokale Horizon Worlds kennisbronnen
HorizonWorldsSnippets-main/         # Snippets en patterns
MetaWorldsSkydomeCapture-main/      # Sky dome capture scripts
worlds-documentation-main/          # Documentatie (HTML/JS/CSS)
worlds-documentation-main-2/        # Extra documentatie

.cursorigonre                         # Bestanden uitsluiten van indexering
README.md                             # Deze handleiding

---

## 🚀 Gebruik in Cursor

1. **Project openen**
   - Open deze map in Cursor.
   - Cursor indexeert automatisch alle bestanden behalve wat in `.cursorignore` staat.

2. **Controleren**
   - Ga naar *Settings → Indexing & Docs* in Cursor en check of alle mappen worden geïndexeerd.
   - In `.cursorignore` kun je zelf nog extra uitsluitingen toevoegen als nodig.

3. **Prompts geven**
   - Verwijs direct naar bestanden om specifieke info/snippets te krijgen:
     - `@workspace HorizonWorldsSnippets-main/Snippets/PlayerManager.ts`
     - `@workspace worlds-documentation-main/docs/events.md`
   - Vraag bijvoorbeeld:
     > "Maak een eventlistener zoals in `HorizonWorldsSnippets-main/Snippets/EventBus.ts`, maar voor player join/leave."

4. **Rules checken**
   - In *@Cursor Rules* kun je zien dat `02-docs-precedence.mdc` actief is.
   - Dit zorgt ervoor dat Cursor eerst in je lokale mappen kijkt voordat het externe bronnen gebruikt.

---

## 🔄 Hergebruik in andere projecten

1. Kopieer deze mappen en bestanden naar de root van je nieuwe project:
   - `.cursor/`
   - `horizon-worlds-rules/`
   - `.cursorignore`
   - `README.md` (optioneel)
2. Open het nieuwe project in Cursor.
3. Klaar — Cursor gebruikt direct dezelfde rules en documentatie.

💡 Tip: Zet deze setup in een **GitHub template repository**.  
Zo kun je altijd starten met:
```bash
git clone https://github.com/JoshuaLevi/Meta-Horizon-Worlds-Cursor-Rules.git my-horizon-world