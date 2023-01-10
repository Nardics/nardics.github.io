const map = L.map("iiif-map", {
  center: [22, 469],
  crs: L.CRS.Simple,
  zoom: 5,
});

const mappLayer = new L.tileLayer.iiif(
  "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:q524n368c/info.json"
).addTo(map);

map.on("click", function (e) {
  console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
});

let text = document.getElementById("pageOn").textContent;
console.log(text);

function addInteraction() {
  const eventLatLng = [
    [-157, 427],
    [-82, 127],
    [-57, 327],
    [-263, 708],
    [-255, 588],
    [-317, 255],
    [-133, 641],
    [-310, 430],
    [-295, 323],
  ];
  const eventZoom = [0, 3, 3, 3, 3, 3, 4, 4, 3];

  const desc = [
    `Maps have been in for multiple purposes. In many cases, maps are used to evoke reactions
  or responses from a target audience.

  This persuasive map from the <a href="https://collections.leventhalmap.org/search/commonwealth:q524n3673">Levanthal Collection</a>,
  seeks to address the notion of freedom. My aim is to examine the tensions in symbology and text, which
  are resident within the map.`,

    `The cartographer Chase constructed his map some five years after the conclusion of WWII in 1945, and the formation
  of the United Nations. <a href="https://www.archives.gov/milestone-documents/united-nations-charter">The United Nations </a>itself was formed
  in response to what America and her allies considered the Axis Powers. These were namely German, Italy and Japan.
  <p> Througout this period and beyond, there has been several episodes in World History which play on the played on the 
  theme of "Us vs Them", as it relates to differing political ideologies. The map author chooses to employ <a href = "https://en.wikipedia.org/wiki/Yin_and_yang"> Yin and Yang</a> to symbolise
  these tensions that would continue to orient the rest of the world to the ideological battles that would continue to play out in the quest to maintain freedom.`,

    `<h3>The U.N.</h3><p>The United Nations, as previously stated, was formed in response
      to the threat from certain European and Asian countries. What is most interesting, is that the 
      founding signatory countries, were ideologically opposed. Whilst physical conflict may have been averted,
      the door was still open for war on the economic and political front.</p>
      <p>Including the U.N. charter on this map could be viewed as the author's attempt at persuasive cartography. 
       Ideally speaking, both sides should desire peace. On paper, therefore, agreeing to the UN Charter paves the way 
       to achieve this objective.</p>`,

    `<h3>The Conferences</h3><p>A series of conferences set the tone in the build-up to the 
      establishment of the U.N. Hammering out the deals was multifaceted and complicated 
      though America and her allies, along with the USSR had a common enemy in Germany. Pay close attention
      to the  1943 Tehran and 1945 Yalta meetings.Here, <a href="https://history.state.gov/milestones/1937-1945/tehran-conf"> decisions were made</a> on economic strategy and geographic boundaries. </p>`,

    `<h3>Stoking Fear</h3><p>The map author chooses to place emphasis on military intelligence. In highlighting
      the element of distances, the map viewer is urged to consider emminent threats, and their proximity
      to what/who may be perceived as the enemy to their freedom. Here, Chase quantifies freedom in terms of distance.
      <p>Of note, is the island nation of Taiwan, which is strategically important to both the U.S and China. From the U.S perspective
      the threat to freedom is as close as 125 miles to its back door.</p></p>`,

    `<h3>Provocative Tactics</h3><p>The author highlights USSR's tactics, which were designed
      to economically sabotage the U.S, with unreasonable demands.</p>`,

    `<h3>World Freedom</h3><p> The map author tactfully uses terminology that resonates with his
      intended audience - the American public and the enshrinement of privileges under 
      <a href= "https://constitution.congress.gov/constitution/amendment-1/"> the First Amendment</a>.
      Comparatively, the Russian ideology ran counter to these rights.</p><p>The author takes a not-so-subtle swipe
      at the propaganda which is deployed to keep the masses behind the Iron Curtain in subjection. 
      Note how he frames freedom as unique, and also in capitalistic terms. </p>`,

    `<h3>Drawing the Line</h3><p>America was always concerned with protecting the homefront. This essentially 
      gave rise to the idea of "containment" - preventing the spread
      of communism.</p><p> The legend used is rather simple. It focuses on boundaries, and the primary methods
      of maintaining security. The presence of strategic naval bases and railroads, create a sense of security and readiness.
      </p><p> Again note the attempt to elict a response through the label "Iron Curtain" - designed to promote the 
      idea of secrecy, restrictive practices and mistrust.</p>`,

    `<h3>Resources</h3><p>Consistent with the theme, freedom is closely tied to economic well-being.
      In the newly-emerging post-WWII world, industry was crucial. American prosperity was dependent on access to resources.
      Note that the Middle Eastern region is the only area on the map, where a natural resource (oil, in this case)
      is highlighted.</p>
      <p>Consistent with the focus on eliciting a response, the map author Chase, magnifies the proximity 
      of these resources to the USSR's borders. By implication, a loss of these resources, equals a loss of freedom.
      </p>`,
  ];

  document.getElementById("next").addEventListener("click", () => {
    let text = document.getElementById("pageOn").textContent;
    if (text < eventLatLng.length) {
      n = parseInt(text) + 1;
    } else {
      n = 1;
    }
    // var n = parseInt(text) + 1;
    map.flyTo(eventLatLng[n - 1], eventZoom[n - 1]);
    document.getElementById("pageOn").innerHTML = n;
    document.getElementById("desc").innerHTML = desc[n - 1];

    if (n == 9) {
      document.getElementById("next").innerHTML = `&#8634;`;
    } else {
      document.getElementById("next").innerHTML = `Next &raquo;`;
    }
  });

  //create back button
  document.getElementById("previous").addEventListener("click", () => {
    let text = document.getElementById("pageOn").textContent;
    if (text < eventLatLng.length) {
      n = parseInt(text) - 1;
    } else {
      n = 1;
    }
    // var n = parseInt(text) + 1;
    map.flyTo(eventLatLng[n - 1], eventZoom[n - 1]);
    document.getElementById("pageOn").innerHTML = n;
    document.getElementById("desc").innerHTML = desc[n - 1];

    if (n == 9) {
      document.getElementById("previous").innerHTML = `&#8634;`;
    } else {
      document.getElementById("previous").innerHTML = `Previous &laquo;`;
    }
  });
}

addInteraction();
