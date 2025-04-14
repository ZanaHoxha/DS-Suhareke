var programmingLanguage=['PHP','JS','HTML'];
console.log(programmingLanguage);
console.log(programmingLanguage[0]);

programmingLanguage.push("CSS");
console.log(programmingLanguage);

programmingLanguage.pop("CSS");
console.log(programmingLanguage);

programmingLanguage.unshift("C++");
console.log(programmingLanguage);

programmingLanguage.shift("C++");
console.log(programmingLanguage);

programmingLanguage.splice(0,2,"PYTHON");
console.log(programmingLanguage);

console.log(Math.random()*5);
console.log(Math.floor(Math.random()*5));

var students=["Johny","Mia"]
var [s1,s2]=students;
console.log(s1);
console.log(s2);

var places=["London","Paris","Rome","Barcelona",];
var [firstPlace, ,secondPlace]= places;
console.log(secondPlace);

var numbers=[1,2,3,4,5,6,7,8,9,0];
var[first,second,...otherNumbers]= numbers;
console.log(first);
console.log(second);
console.log(otherNumbers.toString());

