# Atlante dei Tarocchi · Sapere in Pratica

Corso visivo sui tarocchi (tavole di Pamela Colman Smith): 6 settimane in 36 lezioni più il modulo di astrologia, 78 schede, esercizi con correzione immediata, Palestra, Diario delle stese e Quaderno. Si installa sul telefono (manifest.json + sw.js).

Ogni persona accede con email e password; progressi e note stanno su Supabase (tabella `atlante_state`, protetta da RLS).

La prima settimana è gratuita e sta in `course-data.json`. Le lezioni delle settimane 2-6, l'astrologia e le chiavi di lettura delle carte stanno solo nel database (tabella `paid_content`) e arrivano all'app soltanto se `has_access()` è vero: acquisto Payhip con la stessa email dell'account, oppure codice regalo.

Sito statico pubblicato con GitHub Pages. Font: licenze in `CREDITI_FONT.txt` e `LICENSE_FONT_LORA.txt`. Immagini storiche di Pamela Colman Smith (1911).
