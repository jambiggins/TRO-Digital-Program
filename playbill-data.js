/* ==========================================================================
   PLAYBILL DATA: edit this file to change what shows on the page.
   Keep index.html and this file in the same folder.

   Change text only between the quote marks. Keep the commas and brackets.

   - Add a person: copy any one line and edit it. Order here = order on the page.
   - Remove a person: delete their whole line.
   - Instagram: type the handle (with or without the @). The link is built for
     you. Leave out the instagram part entirely for no link.
   - Only if a link should go somewhere different from the handle, add
     url: "https://..." to that person's line.
   - The line at the very bottom of the page is "thanks:" near the top of this
     file. Delete that line to remove it.
   - Add a section (like "Special Thanks"): copy a whole { heading: ..., people: [...] }
     block and edit it.
   ========================================================================== */
window.PLAYBILL = {
  title: "The Rock Orchestra",
  company: "The Great Unmasking",
  tour: "2026 Fall Tour",
  note: "Find out who we are below\u2026",
  thanks: "Special thanks to our drivers Henry, Nate, Marcus, Darrell, Clinton, Chris, Matthew, Amelie & Jeremi",

  sections: [
    {
      heading: "Performers",
      people: [
      { name: "Gerard Canonico", role: "Vocalist", instagram: "@gerardcanonicoofficial" },
      { name: "Geena Fontanella", role: "Vocalist", instagram: "@geenafontanella" },
      { name: "Nathan James", role: "Vocalist", instagram: "@thenathanjames" },
      { name: "Addie Nicole", role: "Vocalist", instagram: "@addisynofficial" },
      { name: "Alexa Ray", role: "Vocalist", instagram: "@alexarayofficial" },
      { name: "Ivana Cetkovic", role: "Lead Violin / Music Director", instagram: "@ivanacetkovic_music" },
      { name: "Julie Beistline", role: "Violin", instagram: "@simplystardustxo" },
      { name: "Brianne Lugo", role: "Viola", instagram: "@brilugovla" },
      { name: "Samuel Quiggins", role: "Cello", instagram: "@jambiggins" },
      { name: "Brent Edmonson", role: "Bass", instagram: "@dbass926" },
      { name: "Daniel Wright", role: "Trumpet", instagram: "@phillymusician" },
      { name: "Jimmy Boyle", role: "Trumpet", instagram: "@jimmyboylemusic" },
      { name: "Robert Christian", role: "Flute / Saxophone / Piccolo", instagram: "@robnchrisca" },
      { name: "Josh Holcomb", role: "Trombone", instagram: "@josh.holcomb.music" },
      { name: "Kamil Bartnik", role: "Drums", instagram: "@kamilhitsthings" },
      { name: "Joshua Azenberg", role: "Percussion", instagram: "@josh_azenberg" },
      ]
    },
    {
      heading: "Crew",
      people: [
      { name: "Matt Haylett", role: "USA Production Manager / Global Designer", instagram: "@matthaylett1" },
      { name: "Rey Hill", role: "Tour Manager", instagram: "@reybrhill" },
      { name: "Noël Long", role: "Assistant Tour Manager / Wardrobe / Merch", instagram: "@gigglegoth" },
      { name: "Stef Flynn", role: "Production Assistant", instagram: "@stefffly" },
      { name: "Bella Luminiarek", role: "Stage Manager", instagram: "@officialbellaluminiarek" },
      { name: "Joshua Rook", role: "Co Lighting Designer / Chief LX", instagram: "@jay_rook" },
      { name: "Lauren Schorr", role: "2nd LX", instagram: "@_chaoskid_" },
      { name: "Tomi Hargreaves", role: "FOH Audio Engineer", instagram: "@tomi.hargreaves" },
      { name: "Diego D'Urso", role: "Audio Monitor Engineer", instagram: "@diegodurso" },
      { name: "Amber Rhodes", role: "Stage Audio", instagram: "@amrhodes" },
      { name: "Josh Bright", role: "Playback / Backline Tech", instagram: "@joshbrightm", url: "https://www.instagram.com/joshbrightm/?hl=en" },
      { name: "Neka Zang", role: "Choreographer", instagram: "@nekazang" },
      { name: "Adam Goldsmith", role: "Assistant Musical Creative Director", instagram: "@theadamgoldsmith" },
      { name: "Quinlyn Tosh", role: "Media / Photography", instagram: "@quinlynlive" },
      ]
    },
       {
      heading: "Setlist",
      people: [
      { name: "O Fortuna/Kashmir", role: "Carl Orff/Led Zeppelin" },
      { name: "Numb", role: "Linkin Park" },
      { name: "Sweet Child of Mine", role: "Guns N' Roses" },
      { name: "Dream On", role: "Aerosmith" },
      { name: "Stairway to Heaven", role: "Led Zeppelin" },
      { name: "Enter Sandman", role: "Metallica" },
      { name: "Last Resort", role: "Papa Roach" },
      { name: "Sound of Silence", role: "Simon & Garfunke" },
      { name: "Back in Black", role: "AC/DC" },
      { name: "Bring Me to Life", role: "Evanescence"},
      { name: "Toxicity", role: "System of a Down"},
      { name: "Sonne", role: "Rammstein"},
      { name: "Nothing Else Matters", role: "Metallica"},
      { name: "Paint it Black", role: "The Rolling Stones"},
      { name: "Für Elise", role: "Ludwig van Beethoven"},
      { name: "Freak on a Leash", role: "Korn"},
      { name: "Welcome to the Jungle", role: "AC/DC"},
      { name: "Storm/Thunderstruck", role: "Antonio Vivaldi/AC/DC"},
      { name: "Take Me to Church", role: "Hozier"},
      { name: "Smells Like Teen Spirit", role: "Nirvana"},
      { name: "Zombie", role: "The Cranberries"},
      { name: "Chop Suey!", role: "System of a Down"},
      { name: "Killing in the Name", role: "Rage Against the Machine"},
      ]
    },
  ]
};
