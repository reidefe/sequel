
module.exports = (sequelize,type) => {

       return sequelize.define('user', {
        handle: {
            type: type.STRING,
            validate: {
                min: 4,            
            },
        },
        password: {
            type: type.STRING,
            validate: {
                min: 6,            
            }
        },
        email: {
            type: type.STRING
        },
        texts: type.TEXT,
      /*   contacts: {
            type: type.INTEGER,
            validate:{
                min: 5,
            }
        } */
       /*  groups:{
            type:Sequelize.UUID
        },
        contacts: {
            type: Sequelize.UUID
        } */
       })
            
} 