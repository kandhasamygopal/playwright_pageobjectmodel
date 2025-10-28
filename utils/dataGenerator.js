import { faker } from '@faker-js/faker';

export function generateUserData() {
  return {
    phone: faker.phone.number('9#########'),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10, memorable: true }),
    childFirstName: faker.person.firstName(),
    childLastName: faker.person.lastName(),
    parentFirstName: faker.person.firstName(),
    parentLastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    zip: faker.location.zipCode('######'),
  };
}
