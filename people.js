// FETCH and READ the people.json disk file

fetch('./people.json')
  .then(response => response.json())
  .then(data => {
    // Loop through an array in the JSON data
    data.forEach(person => {
      console.log(getFullName(person));
      console.log(getAge(person));
      console.log(chooseRoom(person));
    });
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
