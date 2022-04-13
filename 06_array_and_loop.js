// Array and loop

const languages = ['JavaScript', 'Python', 'C'];
console.log(languages.length);
console.log('Array Size= ' + languages.length);
console.log(languages[1]);

languages.push('Java'); // It's add element end of the Array.
console.log(languages);
console.log('Array Size= ' + languages.length);

languages.unshift('C #'); // It's add element in the first position of the Array.
console.log(languages);
console.log('Array Size= ' + languages.length);
// Remove element from end
languages.pop(languages);
console.log('Array Size= ' + languages.length);
console.log(languages);
console.log(languages.pop());

console.log(languages);
languages.shift();
console.log(languages);

console.log('*');
console.log('*');
console.log('*');
console.log('*');

console.log();

//// OR we can do using loop for loop

for (let i = 0; i < 10; i++) {
  console.log('*');
}


const actors = [{
    name: 'Actor1',
    payment: 100
  },
  {
    name: 'Actor2',
    payment: 300
  },
  {
    name: 'Actor3',
    payment: 400
  }, {
    name: 'Actor4',
    payment: 600
  }
]

for (let i = 0; i < actors.length; i++) {
  actors[i].payment -= 10; //   actors[i].payment = actors[i].payment-10;

  console.log(actors[i]);
}
console.log();
console.log(actors);

// foreach
// We can also use this ok
// actors.forEach((a) => {
//   a.payment = a.payment - 40;
//   console.log(a);
// });

actors.forEach((actor) => {
  actor.payment = actor.payment - 40;
  console.log(actor);
});

for (let actor of actors) {
  actor.payment = actor.payment + 410;
  console.log(actor);
}

console.log();
// Filter

const students = [{
    name: 'Student 1',
    marks: 90
  },
  {
    name: 'Student 2',
    marks: 100
  },
  {
    name: 'Student 3',
    marks: 99
  },
  {
    name: 'Student 1',
    marks: 40
  }
]

const faileudents = students.filter((student) => {
  if (student.marks > 45) {
    return 1;
  } else {
    return 0;
  }
});

console.log(faileudents);


console.log('KUNTAL OJHA');