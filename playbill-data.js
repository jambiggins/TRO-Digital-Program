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
  thanks: "Special thanks to our drivers Cyndi, Henry, Chris & Clinton",

  sections: [
    {
      heading: "Performers",
      people: [
      { name: "Alexa Ray", role: "Vocalist", instagram: "@alexarayofficial" },
      { name: "Gerard Canonico", role: "Vocalist", instagram: "@gerardcanonicoofficial" },
      { name: "Willow Dougherty", role: "Vocalist", instagram: "@willow.doc" },
      { name: "Tiffany Weiss", role: "Lead Violin", instagram: "@tiffstringz" },
      { name: "Ally Jenkins", role: "Violin", instagram: "@violinrose" },
      { name: "Matt Pickart", role: "Viola", instagram: "@mattpickart" },
      { name: "Samuel Quiggins", role: "Cello", instagram: "@jambiggins" },
      { name: "Brent Edmonson", role: "Bass", instagram: "@dbass926" },
      { name: "Daniel Wright", role: "Trumpet / Music Director", instagram: "@phillymusician" },
      { name: "Jimmy Boyle", role: "Trumpet", instagram: "@jimmyboylemusic" },
      { name: "Robert Christian", role: "Flute / Saxophone / Piccolo", instagram: "@robnchrisca" },
      { name: "Josh Holcomb", role: "Trombone", instagram: "@josh.holcomb.music" },
      { name: "Sal Tommassello", role: "Drums", instagram: "@saltommassello" },
      { name: "Joshua Azenberg", role: "Percussion", instagram: "@josh_azenberg" },
      ]
    },
    {
      heading: "Crew",
      people: [
      { name: "Bella Luminiarek", role: "Stage Manager", instagram: "@officialbellaluminiarek" },
      { name: "Rey Hill", role: "Tour Manager", instagram: "@reybrhill" },
      { name: "Noël Long", role: "Assistant Tour Manager / Wardrobe / Merch", instagram: "@gigglegoth" },
      { name: "Matt Haylett", role: "USA Production Manager / Global Designer", instagram: "@matthaylett1" },
      { name: "Stef Flynn", role: "Production Assistant", instagram: "@stefffly" },
      { name: "Tomi Hargreaves", role: "FOH Audio Engineer", instagram: "@tomi.hargreaves" },
      { name: "Diego D'Urso", role: "Audio Monitor Engineer", instagram: "@diegodurso" },
      { name: "Amber Rhodes", role: "Stage Audio", instagram: "@amrhodes" },
      { name: "Josh Bright", role: "Playback / Backline Tech", instagram: "@joshbrightm", url: "https://www.instagram.com/joshbrightm/?hl=en" },
      { name: "Joshua Rook", role: "Co Lighting Designer / Chief LX", instagram: "@jay_rook" },
      { name: "Lauren Schorr", role: "2nd LX", instagram: "@_chaoskid_" },
      { name: "Neka Zang", role: "Choreographer", instagram: "@nekazang" },
      { name: "Adam Goldsmith", role: "Music Supervisor", instagram: "@theadamgoldsmith" },
      ]
    }
  ]
};
