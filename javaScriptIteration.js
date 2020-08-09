// ...JavaScript Iteration...
// ~~~~~~~~~~~~~~Users Array for Part 1.~~~~~~~~~~~~~~~~~~~
var users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];
  
  // Question 1.
  function printEmails(){
    users.forEach(emails => console.log(emails.email));
   }
   printEmails();
   
  // undefined
  
  // Question 2.
  function printHobbies(){
    users.reduce((acc,current) =>{
      return acc = acc.concat(current.hobbies);
    },[]).forEach(hobby => console.log(hobby));
  }
  printHobbies();
  
  // undefined
  
  // Question 3.
  function findHometownByState(state){
    return users.find(hometowns => hometowns.hometown.state == state);
  }
  findHometownByState("CA");
  
  // {username: "larry", email: "larry@foo.com", yearsExperience: 22.1, favoriteLanguages: Array(3), favoriteEditor: "Vim", …}
  
  // Question 4.
  function allLanguages(){
    return users.reduce((acc,current)=>{
       return acc = acc.concat(current.favoriteLanguages);
    },[])
  }
  allLanguages();
  
  // (16) ["Perl", "Java", "C++", "Haskell", "Clojure", "PHP", "JavaScript", "Ruby", "Python", "Go", "C#", "C++", "F#", "JavaScript", "C#", "Swift"]
  
  // Question 5.
  function hasFavouriteEditor(editor){
    return users.some(editors => editors.favoriteEditor == editor);
  }
  hasFavouriteEditor();
  
 // false
  
  //    ~~~~~~~~~~~Part - 2. ~~~~~~~~~~~~~~~~~~~~
  
  // Question 6
  function vowelCount(vowel){
    vowel = vowel.split("");
    return vowel.reduce((acc,current) =>{
         if(["a","e","i","o","u"].indexOf(current) >= 0){
            !acc[current] ? acc[current] = 1 : ++acc[current];
         }
         return acc;
     },{})
  }
  vowelCount('awesome');
  // {a: 1, e: 2, o: 1}a: 1e: 2o: 1__proto__: Object
  
  // Question 7.
  
  function removeVowels(str){
    str = str.toLowerCase();
    let vowels = ['a',"e","i","o","u"];
    let result = [];
     for(let i = 0; i<str.length; i++){
       if(["a","e","i","o","u"].indexOf(str[i]) < 0){
           result.push(str[i]);
       }
     }     
  return result;
  }
  removeVowels("Amazing");
  
  // (4) ["m", "z", "n", "g"]
  
  
  
  