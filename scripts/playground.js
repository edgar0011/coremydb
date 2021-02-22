import faker from 'faker';

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // random contact card containing many properties

// console.log('faker', faker)

console.log('randomName', randomName, 'randomEmail', randomEmail, 'randomCard', randomCard)