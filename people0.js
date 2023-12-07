fetch('./people.json')
  .then(response => response.json())
  .then(data => {
    // Loop through an array in the JSON data
    data.forEach(person => {
      console.log(getFullName(person));
      console.log(getAge(person));
    });
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

  function getFullName(person) {
    return `${person.fname} ${person.lname}`;
  }

  function getAge(person) {    
    return `${person.fname} is ${new Date().getFullYear() - 
      new Date(person.birthday).getFullYear()} years old.`; 
  }