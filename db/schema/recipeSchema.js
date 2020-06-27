module.exports = {
    type: 'object',
    required: ['title', 'userId', 'img', 'ingredients', 'toServe','directions'],
    properties: {
        title: {
            type: 'string'
        },
        userId: {
            type: 'string'
        }, 
        img: {
            type: 'string'
        },
        ingredients: {
            type: 'array'
        },
        toServe: {
            type: 'string'
        },
        directions: {
            type: 'array'
        }, 
        comments: {
            type: 'array'
        }
    }
}




// for compass validation 
// {
//     $jsonSchema: {
//       type: 'object',
//       required: [
//         'title',
//         'userId',
//         'img',
//         'ingredients',
//         'toServe',
//         'directions'
//       ],
//       properties: {
//         title: {
//           bsonType: 'string'
//         },
//         userId: {
//           bsonType: 'string'
//         },
//         img: {
//           bsonType: 'string'
//         },
//         ingredients: {
//           bsonType: 'array'
//         },
//         toServe: {
//           bsonType: 'string'
//         },
//         directions: {
//           bsonType: 'array'
//         },
//         comments: {
//           bsonType: 'array'
//         }
//       }
//     }
//   }