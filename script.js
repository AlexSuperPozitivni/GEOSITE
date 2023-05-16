const cardContainer = document.getElementById('cardContainer');
const button = document.querySelector('button');


 // Alabama
const alabama = {
    name: "Alabama",
    accessionDate: new Date("December 14, 1819")
  };
  
  // Alaska
  const alaska = {
    name: "Alaska",
    accessionDate: new Date("January 3, 1959")
  };
  
  // Arizona
  const arizona = {
    name: "Arizona",
    accessionDate: new Date("February 14, 1912")
  };
  
  // Arkansas
  const arkansas = {
    name: "Arkansas",
    accessionDate: new Date("June 15, 1836")
  };
  
  // California
  const california = {
    name: "California",
    accessionDate: new Date("September 9, 1850")
  };
  
  // Colorado
  const colorado = {
    name: "Colorado",
    accessionDate: new Date("August 1, 1876")
  };
  
  // Connecticut
  const connecticut = {
    name: "Connecticut",
    accessionDate: new Date("January 9, 1788")
  };
  
  // Delaware
  const delaware = {
    name: "Delaware",
    accessionDate: new Date("December 7, 1787")
  };
  
  // Florida
  const florida = {
    name: "Florida",
    accessionDate: new Date("March 3, 1845")
  };
  
  // Georgia
  const georgia = {
    name: "Georgia",
    accessionDate: new Date("January 2, 1788")
  };
  
  // Hawaii
  const hawaii = {
    name: "Hawaii",
    accessionDate: new Date("August 21, 1959")
  };
  
  // Idaho
  const idaho = {
    name: "Idaho",
    accessionDate: new Date("July 3, 1890")
  };
  
  // Illinois
  const illinois = {
    name: "Illinois",
    accessionDate: new Date("December 3, 1818")
  };
  
  // Indiana
  const indiana = {
    name: "Indiana",
    accessionDate: new Date("December 11, 1816")
  };
  
  // Iowa
  const iowa = {
    name: "Iowa",
    accessionDate: new Date("December 28, 1846")
  };
  
  // Kansas
  const kansas = {
    name: "Kansas",
    accessionDate: new Date("January 29, 1861")
  };
  
  // Kentucky
  const kentucky = {
    name: "Kentucky",
    accessionDate: new Date("June 1, 1792")
  };
  
  // Louisiana
  const louisiana = {
    name: "Louisiana",
    accessionDate: new Date("April 30, 1812")
  };
  
  // Maine
  const maine = {
    name: "Maine",
    accessionDate: new Date("March 15, 1820")
  };
  
  // Maryland
  const maryland = {
    name: "Maryland",
    accessionDate: new Date("April 28, 1788")
  };
  
  // Massachusetts
  const massachusetts = {
    name: "Massachusetts",
    accessionDate: new Date("February 6, 1788")
  };
  
  // Michigan
  const michigan = {
    name: "Michigan",
    accessionDate: new Date("January 26, 1837")
  };
  
  // Minnesota
  const minnesota = {
    name: "Minnesota",
    accessionDate: new Date("May 11, 1858")
  };
  
  // Mississippi
  const mississippi = {
    name: "Mississippi",
    accessionDate: new Date("December 10, 1817")
  };
  
 // Missouri
const missouri = {
    name: "Missouri",
    accessionDate: new Date("August 10, 1821")
  };
  
  // Montana
  const montana = {
    name: "Montana",
    accessionDate: new Date("November 8, 1889")
  };
  
  // Nebraska
  const nebraska = {
    name: "Nebraska",
    accessionDate: new Date("March 1, 1867")
  };
  
  // Nevada
  const nevada = {
    name: "Nevada",
    accessionDate: new Date("October 31, 1864")
  };
  
  // New Hampshire
  const newHampshire = {
    name: "New Hampshire",
    accessionDate: new Date("June 21, 1788")
  };
  
  // New Jersey
  const newJersey = {
    name: "New Jersey",
    accessionDate: new Date("December 18, 1787")
  };
  
  // New Mexico
  const newMexico = {
    name: "New Mexico",
    accessionDate: new Date("January 6, 1912")
  };
  
  // New York
  const newYork = {
    name: "New York",
    accessionDate: new Date("July 26, 1788")
  };
  
  // North Carolina
  const northCarolina = {
    name: "North Carolina",
    accessionDate: new Date("November 21, 1789")
  };
  
  // North Dakota
  const northDakota = {
    name: "North Dakota",
    accessionDate: new Date("November 2, 1889")
  };
  
  // Ohio
  const ohio = {
    name: "Ohio",
    accessionDate: new Date("March 1, 1803")
  };
  
  // Oklahoma
  const oklahoma = {
    name: "Oklahoma",
    accessionDate: new Date("November 16, 1907")
  };
  
  // Oregon
  const oregon = {
    name: "Oregon",
    accessionDate: new Date("February 14, 1859")
  };
  
  // Pennsylvania
  const pennsylvania = {
    name: "Pennsylvania",
    accessionDate: new Date("December 12, 1787")
  };
  
  // Rhode Island
  const rhodeIsland = {
    name: "Rhode Island",
    accessionDate: new Date("May 29, 1790")
  };
  
  // South Carolina
  const southCarolina = {
    name: "South Carolina",
    accessionDate: new Date("May 23, 1788")
  };
  
  // South Dakota
  const southDakota = {
    name: "South Dakota",
    accessionDate: new Date("November 2, 1889")
  };
  
  // Tennessee
  const tennessee = {
    name: "Tennessee",
    accessionDate: new Date("June 1, 1796")
  };
  
  // Texas
  const texas = {
    name: "Texas",
    accessionDate: new Date("December 29, 1845")
  };
  
  // Utah
  const utah = {
    name: "Utah",
    accessionDate: new Date("January 4, 1896")
  };
  
  // Vermont
  const vermont = {
    name: "Vermont",
    accessionDate: new Date("March 4, 1791")
  };
  
  // Virginia
  const virginia = {
    name: "Virginia",
    accessionDate: new Date("June 25, 1788")
  };
  
  // Washington
  const washington = {
    name: "Washington",
    accessionDate: new Date("November 11, 1889")
  };
  
 // West Virginia
const westVirginia = {
    name: "West Virginia",
    accessionDate: new Date("June 20, 1863")
  };
  
  // Wisconsin
  const wisconsin = {
    name: "Wisconsin",
    accessionDate: new Date("May 29, 1848")
  };
  
  // Wyoming
  const wyoming = {
    name: "Wyoming",
    accessionDate: new Date("July 10, 1890")
  };
  
  // Array of all states
  const states = [
    alabama,
    alaska,
    arizona,
    arkansas,
    california,
    colorado,
    connecticut,
    delaware,
    florida,
    georgia,
    hawaii,
    idaho,
    illinois,
    indiana,
    iowa,
    kansas,
    kentucky,
    louisiana,
    maine,
    maryland,
    massachusetts,
    michigan,
    minnesota,
    mississippi,
    missouri,
    montana,
    nebraska,
    nevada,
    newHampshire,
    newJersey,
    newMexico,
    newYork,
    northCarolina,
    northDakota,
    ohio,
    oklahoma,
    oregon,
    pennsylvania,
    rhodeIsland,
    southCarolina,
    southDakota,
    tennessee,
    texas,
    utah,
    vermont,
    virginia,
    washington,
    westVirginia,
    wisconsin,
    wyoming
  ];
  
// Function to generate the cards based on the state array
function generateCards() {
  cardContainer.innerHTML = ''; // Clear the existing cards

  // Sort the states array by accession date
  const sortedStates = states.sort((a, b) => a.accessionDate - b.accessionDate);

  // Generate the cards based on the sorted states array
  sortedStates.forEach((state) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="https://www.transparentpng.com/thumb/transparent-california/cowboy-sayings-california-map-31.png" alt="California Flag">
    <h3>California</h3>
    <p>Capital: Sacramento</p>

    <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2560px-Flag_of_Alaska.svg.png" alt="Alabama Flag">
    <h3>Alabama</h3>
    <p>Capital: Montgomery</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/2560px-Flag_of_Arizona.svg.png" alt="Alaska Flag">
    <h3>Alaska</h3>
    <p>Capital: Juneau</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/2560px-Flag_of_Arizona.svg.png" alt="Arizona Flag">
    <h3>Arizona</h3>
    <p>Capital: Phoenix</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/2560px-Flag_of_Arkansas.svg.png" alt="Arkansas Flag">
    <h3>Arkansas</h3>
    <p>Capital: Little Rock</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Flag_of_Colorado.svg/1280px-Flag_of_Colorado.svg.png?1684175021713" alt="Colorado Flag">
    <h3>Colorado</h3>
    <p>Capital: Denver</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/2560px-Flag_of_Connecticut.svg.png" alt="Connecticut Flag">
    <h3>Connecticut</h3>
    <p>Capital: Hartford</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/2560px-Flag_of_Delaware.svg.png" alt="Delaware Flag">
    <h3>Delaware</h3>
    <p>Capital: Dover</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/2560px-Flag_of_Florida.svg.png" alt="Florida Flag">
    <h3>Florida</h3>
    <p>Capital: Tallahassee</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/2560px-Flag_of_Georgia_%28U.S._state%29.svg.png" alt="Georgia Flag">
    <h3>Georgia</h3>
    <p>Capital: Atlanta</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/2560px-Flag_of_Hawaii.svg.png" alt="Hawaii Flag">
    <h3>Hawaii</h3>
    <p>Capital: Honolulu</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/2560px-Flag_of_Idaho.svg.png" alt="Idaho Flag">
    <h3>Idaho</h3>
     <p>Capital: Boise</p>

     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/2560px-Flag_of_Illinois.svg.png" alt="Illinois Flag">
    <h3>Illinois</h3>
    <p>Capital: Springfield</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/2560px-Flag_of_Indiana.svg.png" alt="Indiana Flag">
    <h3>Indiana</h3>
    <p>Capital: Indianapolis</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/800px-Flag_of_Iowa.svg.png?1684174969866" alt="Iowa Flag">
    <h3>Iowa</h3>
    <p>Capital: Des Moines</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/2560px-Flag_of_Kansas.svg.png" alt="Kansas Flag">
    <h3>Kansas</h3>
    <p>Capital: Topeka</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/2560px-Flag_of_Kentucky.svg.png" alt="Kentucky Flag">
    <h3>Kentucky</h3>
    <p>Capital: Frankfort</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/2560px-Flag_of_Louisiana.svg.png" alt="Louisiana Flag">
    <h3>Louisiana</h3>
    <p>Capital: Baton Rouge</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/2560px-Flag_of_Maine.svg.png" alt="Maine Flag">
    <h3>Maine</h3>
    <p>Capital: Augusta</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/2560px-Flag_of_Maryland.svg.png" alt="Maryland Flag">
    <h3>Maryland</h3>
    <p>Capital: Annapolis</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/2560px-Flag_of_Massachusetts.svg.png" alt="Massachusetts Flag">
    <h3>Massachusetts</h3>
    <p>Capital: Boston</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/2560px-Flag_of_Michigan.svg.png" alt="Michigan Flag">
    <h3>Michigan</h3>
    <p>Capital: Lansing</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/2560px-Flag_of_Minnesota.svg.png" alt="Minnesota Flag">
    <h3>Minnesota</h3>
    <p>Capital: Saint Paul</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Mississippi.svg/2560px-Flag_of_Mississippi.svg.png" alt="Mississippi Flag">
    <h3>Mississippi</h3>
    <p>Capital: Jackson</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/2560px-Flag_of_Missouri.svg.png" alt="Missouri Flag">
    <h3>Missouri</h3>
    <p>Capital: Jefferson City</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/2560px-Flag_of_Montana.svg.png" alt="Montana Flag">
    <h3>Montana</h3>
    <p>Capital: Helena</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/2560px-Flag_of_Nebraska.svg.png" alt="Nebraska Flag">
    <h3>Nebraska</h3>
    <p>Capital: Lincoln</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/2560px-Flag_of_Nevada.svg.png" alt="Nevada Flag">
    <h3>Nevada</h3>
     <p>Capital: Carson City</p>

     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/2560px-Flag_of_New_Hampshire.svg.png" alt="New Hampshire Flag">
    <h3>New Hampshire</h3>
    <p>Capital: Concord</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/2560px-Flag_of_New_Jersey.svg.png" alt="New Jersey Flag">
    <h3>New Jersey</h3>
    <p>Capital: Trenton</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_New_Mexico.svg/2560px-Flag_of_New_Mexico.svg.png" alt="New Mexico Flag">
    <h3>New Mexico</h3>
    <p>Capital: Santa Fe</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/2560px-Flag_of_New_York.svg.png" alt="New York Flag">
    <h3>New York</h3>
    <p>Capital: Albany</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_North_Carolina.svg/2560px-Flag_of_North_Carolina.svg.png" alt="North Carolina Flag">
    <h3>North Carolina</h3>
    <p>Capital: Raleigh</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/2560px-Flag_of_North_Dakota.svg.png" alt="North Dakota Flag">
    <h3>North Dakota</h3>
    <p>Capital: Bismarck</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ohio.svg/2560px-Flag_of_Ohio.svg.png" alt="Ohio Flag">
    <h3>Ohio</h3>
    <p>Capital: Columbus</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Oklahoma.svg/2560px-Flag_of_Oklahoma.svg.png" alt="Oklahoma Flag">
    <h3>Oklahoma</h3>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/2560px-Flag_of_Oregon.svg.png" alt="Oregon Flag">
    <h3>Oregon</h3>
    <p>Capital: Salem</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/2560px-Flag_of_Pennsylvania.svg.png" alt="Pennsylvania Flag">
    <h3>Pennsylvania</h3>
    <p>Capital: Harrisburg</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Rhode_Island.svg/2560px-Flag_of_Rhode_Island.svg.png" alt="Rhode Island Flag">
    <h3>Rhode Island</h3>
    <p>Capital: Providence</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/2560px-Flag_of_South_Dakota.svg.png" alt="South Carolina Flag">
    <h3>South Carolina</h3>
    <p>Capital: Columbia</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/2560px-Flag_of_South_Dakota.svg.png" alt="South Dakota Flag">
    <h3>South Dakota</h3>
    <p>Capital: Pierre</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tennessee.svg/2560px-Flag_of_Tennessee.svg.png" alt="Tennessee Flag">
    <h3>Tennessee</h3>
    <p>Capital: Nashville</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/2560px-Flag_of_Texas.svg.png" alt="Texas Flag">
    <h3>Texas</h3>
    <p>Capital: Austin</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Utah.svg/2560px-Flag_of_Utah.svg.png" alt="Utah Flag">
    <h3>Utah</h3>
    <p>Capital: Salt Lake City</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/2560px-Flag_of_Vermont.svg.png" alt="Vermont Flag">
    <h3>Vermont</h3>
    <p>Capital: Montpelier</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Virginia.svg/2560px-Flag_of_Virginia.svg.png" alt="Virginia Flag">
    <h3>Virginia</h3>
    <p>Capital: Richmond</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/2560px-Flag_of_Washington.svg.png" alt="Washington Flag">
    <h3>Washington</h3>
    <p>Capital: Olympia</p>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg/2560px-Flag_of_West_Virginia.svg.png" alt="West Virginia Flag">
      <h3>West Virginia</h3>
      <p>Capital: Charleston</p>

      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Wisconsin.svg/2560px-Flag_of_Wisconsin.svg.png" alt="Wisconsin Flag">
      <h3>Wisconsin</h3>
      <p>Capital: Madison</p>

      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/2560px-Flag_of_Wyoming.svg.png" alt="Wyoming Flag">
      <h3>Wyoming</h3>
      <p>Capital: Cheyenne</p>


      `;
      cardContainer.appendChild(card);
    });
  }

// Function to be called when the button is clicked to sort the cards by accession date
function sortCardsByAccession() {
  generateCards(); // Call the function to generate the cards based on accession date
}

// Call the generateCards function initially to display the cards
generateCards();
