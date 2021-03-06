import faker from "faker";
faker.seed(123);

export const productData = [...Array(50)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: Number(faker.commerce.price()),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  quantity:1,
  offer: faker.random.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale"
  ]),
  idealFor: faker.random.arrayElement([
    "Indoor",
    "Outdoor",
    "Desk",
    "Home Garden",
    "Decoration"
  ]),
  level: faker.random.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional"
  ]),
  color: faker.commerce.color(),
  description: "This is a sample of product data that has description about the product that is being viewed in detail. Hope all the details are satidfactory for you to go ahead & purchase this product."
  
}));