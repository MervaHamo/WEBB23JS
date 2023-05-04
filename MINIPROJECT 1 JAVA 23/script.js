// Skapa en array med personer
var persons = [
    { name: "Anna", age: 28 },
    { name: "Bengt", age: 42 },
    { name: "Cecilia", age: 19 },
    { name: "David", age: 35 },
    { name: "Elin", age: 57 }
  ];
  
  // Hämta listan från DOM:en
  var list = document.getElementById("person-list");
  
  // Loopa igenom personerna och lägg till dem till listan
  for (var i = 0; i < persons.length; i++) {
    // Skapa en ny li-element
    var listItem = document.createElement("li");
  
    // Lägg till personens namn och ålder till li-elementet
    var text = document.createTextNode(persons[i].name + ", " + persons[i].age + " år");
    listItem.appendChild(text);
  
    // Ändra stilen på varannan rad
    if (i % 2 === 0) {
      listItem.classList.add("even");
    }
  
    // Lägg till li-elementet till listan
    list.appendChild(listItem);
  }
  