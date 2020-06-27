module.exports = {
    type: 'object',
    required: ['username', 'password'],
    properties: {
        username: {
            type: 'string'
        },
        password: {
            type: 'string'
        }, 
        createdAt: {
            type: 'string',
            format: 'date-time',
        },
        updatedAt: {
            type: 'string',
            format: 'date-time'
        }
    }
}


// {
//     $jsonSchema: {
//       type: 'object',
//       required: [
//         'username',
//         'password'
//       ],
//       properties: {
//         username: {
//           bsonType: 'string'
//         },
//         password: {
//           bsonType: 'string'
//         },
//         createdAt: {
//           bsonType: 'date'
//         },
//         upatedAt: {
//           bsonType: 'date'
//         }
//       }
//     }
//   }