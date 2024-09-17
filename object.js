const student = {
    name : 'Shakib Khan',
    id : 111,
    address : 'talipara',
    isSingle : true,
    friends:['Apu','Bubly'],
    act: function(){
        console.log('hihihi')
    },
        car:{
        brand: 'BMW',
        watch : 'rolex',
        price: 200000,
        manufacturer:{
            CEO: 'Sundar Pandey'
        }
    }
}
console.log(student.car.manufacturer.CEO)
