const incomeTaxRate = 0.15;
// FETCH and READ the people.json disk file

fetch('./people.json')
  .then(response => response.json())
  .then(data => {
    // Create a container to hold the people data
    const container = document.createElement('div');
    container.id = 'peopleContainer';

    // Loop through an array in the JSON data
    data.forEach(person => {
      // Create a new div for each person
      const personDiv = document.createElement('div');
      personDiv.className = 'person';

      // Add the person's data to the div
      personDiv.innerHTML = `
        <h2>${getFullName(person)}</h2>
        <p>Age: ${getAge(person)}</p>
        <p>Net Income: ${getNetIncome(person)}</p>
        <p>Room: ${chooseRoom(person)}</p>
      `;

      // Add the person's div to the container
      container.appendChild(personDiv);

      // Also log the data to the console
      console.log(getFullName(person));
      console.log(getAge(person));
      console.log(getNetIncome(person));
      console.log(chooseRoom(person));
    });

    // Add the container to the body of the HTML
    document.body.appendChild(container);
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

  function chooseRoom(person) {
    switch(person.gender){
      case "female": 
        return`${person.fname} should use the female change room.`;
        break;
      case "male":
        return `${person.fname} should use the male change room.`;
        break;
      default:
        return `${person.fname} should be mindful in choosing a change room.`;
    }
  }

  function getFullName(person) {
    return `${person.fname} ${person.lname}`;
  }

  function getAge(person) {    
    return `${person.fname} is ${new Date().getFullYear() - 
      new Date(person.birthday).getFullYear()} years old.`; 
  }

  function getGender(person){
    return person.gender;
  }

  function getSalary(person){
    return person.salary;
  }

  function getIncomeTax(person){
    return person.salary * incomeTaxRate;
  }

  function getNetIncome(person){
    return `has a yearly salary of ${person.salary - getIncomeTax(person)}.`;
  }