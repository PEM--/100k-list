const fs = require('fs')

const faker = require('faker')

const NB_ITEMS = 1e5

console.log('Generating fake data...')
const fakeData = Array.from(Array(NB_ITEMS).keys(), () => ({
  civility: faker.name.prefix(),
  country: faker.address.country(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
}))

const asyncWriteFile = (...args) => new Promise((resolve, reject) => {
  fs.writeFile(...args, (error, success) => {
    if (error) return reject(error)
    return resolve(success)
  })
})

const FILE_NAME = './data/fakeData.json'
console.log('Writing file on disk...')
const fileDescriptor = fs.createWriteStream(FILE_NAME, { flag: 'w' })
fileDescriptor.write('[\n')
fakeData.forEach((data, index) => fileDescriptor.write(
  index === fakeData.length - 1
    ? `  ${JSON.stringify(data)}\n`
    : `  ${JSON.stringify(data)},\n`
))
fileDescriptor.write(']')
fileDescriptor.end()
console.log('Data ready:', FILE_NAME)