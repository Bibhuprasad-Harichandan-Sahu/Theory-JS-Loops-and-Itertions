const student = {
    name: 'Monica',
    class: 7,
    age: 12,
    address: 'Odisha',
    religion: 'Hindu',
    nationality: 'Indian'
}

// using for...in
for ( let key in student ) {

    // display the properties
    console.log(`${key} => ${student[key]}`);
}