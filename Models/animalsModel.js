export default function(sequelize, datatypes){
    const Animals = sequelize.define('animal',{
        name:{
            type:datatypes.string,
            allowNull:false
        },
        color:{
            type:datatypes.string,
        }
    })
}