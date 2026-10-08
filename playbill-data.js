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
   - Add a section (like "Special Thanks"): copy a whole { heading: ..., people: [...] }
     block and edit it.
   ========================================================================== */
window.PLAYBILL = {
  title: "The Rock Orchestra",
  company: "The Great Unmasking",
  tour: "2026 Fall Tour",
  note: "Find out who we are below\u2026",

  sections: [
    {
      heading: "Performers",
      people: [
      { name: "Alexa Ray", role: "Vocalist", instagram: "@alexarayofficial" },
      { name: "Gerard Canonico", role: "Vocalist", instagram: "@gerardcanonicoofficial" },
      { name: "Tiffany Weiss", role: "1st Violin", instagram: "@tiffstringz" },
      { name: "Ally Jenkins", role: "2nd Violin", instagram: "@violinrose" },
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
      { name: "Tomi Hargreaves", role: "Sound", instagram: "@tomi.hargreaves" },
      { name: "Amber Rhodes", role: "Sound", instagram: "@amrhodes" },
      { name: "Diego Durso", role: "Sound", instagram: "@diegodurso" },
      { name: "Joshua Rook", role: "Lights", instagram: "@jay_rook" },
      { name: "Lauren Schorr", role: "Lights", instagram: "@_chaoskid_" },
      { name: "Bella Luminiarek", role: "Stage Manager", instagram: "@officialbellaluminiarek" },
      { name: "Josh Bright", role: "Playback", instagram: "@joshbrighttm", url: "https://www.instagram.com/joshbrightm/?hl=en" },
      { name: "Noël Long", role: "Saint 1", instagram: "@gigglegoth" },
      { name: "Stef Flynn", role: "Saint 2", instagram: "@stefffly" },
      { name: "Rey", role: "Tour Manager", instagram: "@reybrhill" },
      { name: "Matt Haylett", role: "Big Daddy", instagram: "@matthaylett1" },
      ]
    }
  ]
};
