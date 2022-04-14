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
// or we can use like this

console.log(faileudents);

const failed = students.filter((a) => {
  return a.marks > 45;
});

// or we can also do like this

const failed1 = students.filter((b) => b.marks > 45);


// Map

const user = [{
    firstName: 'Maya',
    lastName: 'Ojha'
  },
  {
    firstName: 'Kuntal',
    lastName: 'Ojha'
  },
  {
    firstName: 'Amulya',
    lastName: 'Ojha'
  }
];

const finalUsers = user.map((user) => {
  return {
    fullName: user.firstName + ' ' + user.lastName
  };
});

console.log(user);
console.log(finalUsers);
// Or Uw can ue this alos

const final_users = user.map((user) => {
  return {
    full_name: `${user.firstName} ${user.lastName}`
  };
});

console.log(final_users);

// Reduce
const movies = [{
    name: 'Pushpa',
    budget: 10000
  },
  {
    name: 'KGF2',
    budget: 20000
  },
  {
    name: 'Social',
    budget: 200
  },
  {
    name: 'Matrix',
    budget: 1050
  }
];

let total = 0;
movies.forEach((item) => {
  total = total + item.budget;
});

console.log(total);

// Or we can use this alos
// Ue reduce finction

const newTotal = movies.reduce((acc, movies) => {
  acc = acc + movies.budget;
  return acc;
}, 0);

console.log(newTotal);

// Index of

const admins = [2, 1, 5];

const userid = {
  name: 'XYZ',
  id: 5
}

let us = admins.indexOf(userid.id);
console.log(us);
// Or we also ca do like this
console.log(admins.indexOf(userid.id));

//  includes

console.log(admins.includes(userid.id));

// find

const userId = [{
    name: 'xyz',
    Id: 1
  },
  {
    name: 'abc',
    Id: 2
  },
  {
    name: 'pqr',
    Id: 3
  }
];


const myUser = userId.find((user) => {
  if (user.Id === 2) {
    return 1;
  }
  return 0;
});

console.log(myUser);

// OR we also ca do this things


const myUsers = userId.find((user) => {
  return user.name === 'pqr';
});

console.log(myUsers);


// sort

const userNames = ['John', 'jane', 'Ram', 'Sameer', 'Mansi'];
userNames.sort();
console.log(userNames);

// splice

const userName = ['John', 'jane', 'Ram', 'Sameer', 'Mansi'];
userName.splice(2, 1);
console.log(userName);