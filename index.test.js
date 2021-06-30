const { app } = require('./app');
const request = require('supertest');
const mongoDB = require('./appzSchema')
const db = new mongoDB(':memory:')

beforeAll(() => {
    process.env.NODE_ENV = 'test'
})

test('get apps', () =>{
    const res = request(app).get('/apps')
    expect(res.body.length).toEqual(db.countDocuments().exec())
})

// test('get all entries if passed - by=id', () =>{
//     const res = request(app).get('/apps?by=id')
//     expect(res.body.length).toEqual(db.countDocuments().exec())
// })

// test('get all entries if passed - by=name', () =>{
//     const res = request(app).get('/apps?by=name')
//     expect(res.body.length).toEqual(db.countDocuments().exec())
// })

// test('get entries if passed - max', () =>{
//     const res = request(app).get('/apps?max=2')
//     expect(res.body.length).toEqual(2)
// })

// test('get entries if passed - start=3', () =>{
//     const res = request(app).get('/apps?start=3')
//     expect(res.body[0].id).toEqual(3)
// })

// test('get entries if passed - end=4', () =>{
//     const res = request(app).get('/apps?end=4')
//     const lastElement = res.body.length - 1
//     expect(res.body[lastElement].id).toEqual(4)
// })

// /// advance tests


// //1
// test('get entries if passed -start=2, end=4', () =>{
//     const res = request(app).get('/apps?start=2&end=4')
//     const resLength = res.body.length
//     expect([    res.body[0].id,
//                 res.body[resLength-1].id],
//                 resLength)
//     .toEqual(   2,
//                 4,
//                 3)
// })



// //2
// test('get entries if passed - start=3, max=5', () => {
//     const res = request(app).get('/apps?start=3&max=5')
//     expect([    res.body[0].id,
//                 res.body[resLength-1].id,
//                 resLength])
//     .toEqual(   3,
//                 7,
//                 5)
// })

// //3
// test('get entries if passed - start=1, and "max" is omited', () => {
//     const res = request(app).get('/apps?start=1')
//     expect(res.body.length).toEqual(50)
// })


// //4
// test('get entries if passed - end=5, max=3', () => {
//     const res = request(app).get('/apps?end=5&max=3')
//     expect(res.body.length).toEqual(3)
// })


// //5
// test('get entries if passed - end=3, max=5', () => {
//     const res = request(app).get('/apps?end=3&max=5')
//     expect(res.body.length).toEqual(3)
// })