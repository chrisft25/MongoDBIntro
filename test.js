
//Creamos usuario para la db
db.createUser({ 
    user:'chris',
    pwd: '1234',
    roles: ['readWrite','dbAdmin']
});

 //Creamos colección
db.createCollection('customers');

//Insertar usuario
db.customers.insert( 
    {firstName: 'Chris', lastname:'Fuentes'}
);

//Listar los datos almacenados
db.customers.find(); 

 //Insertar usuarios en bulk
db.customers.insert([
    {firstName: 'Chris', lastname:'Fuentes'},
    {firstName: 'Chris2', lastname:'Fuentes2'},
    {firstName: 'Chris3', lastname:'Fuentes3'},
    {firstName: 'Chris4', lastname:'Fuentes4'},
    {firstName: 'Chris5', lastname:'Fuentes5'}
]);

//Buscar por propiedad
db.customers.find({firstName: 'Chris'});

//Actualizar datos
db.customers.update(
    {lastname:'Fuentes'},
    {
        firstName:'Chris2',
        lastName: 'Fuentes',
        gender: 'Male'
    }
);

//Listar datos almacenados de forma ordenada.
db.customers.find().pretty();

//Buscar por ID
db.customers.find({_id:ObjectId("5ca4e09f7b89241d8c644af6")}); 

//Actualizar dato por ID
db.customers.update(
    {_id:ObjectId("5ca4e09f7b89241d8c644af6")},
    {
        firstName:'Chris4',
        lastName: 'Fuentes',
        gender: 'Male'
    }
);

//Agregar solo una propiedad
db.customers.update(
    {_id:ObjectId("5ca4e09f7b89241d8c644af6")},
    {
        $set: {age:19}
    }
);

//Incrementa el valor numérico
db.customers.update(
    {_id:ObjectId("5ca4e09f7b89241d8c644af6")},
    {
        $inc: {age:2}
    }
);

//Elimina el campo
db.customers.update(
    {_id:ObjectId("5ca4e09f7b89241d8c644af6")},
    {
        $unset: {age:1}
    }
);


//Actualizar dato, si no existe lo agrega.
db.customers.update(
    {firstName: 'Pepe'},
    {
        firstName:'Pepito',
        lastName:'Rodriguez',
        gender:'Male',
        age:40,
        address:'San Miguel'
    },
    {upsert:true}
);

//Renombrar el nombre de la propiedad
db.customers.update(
    {_id:ObjectId("5ca4e70112f010e99272025d")},
    {
        $rename:{'gender': 'sex'}
    }
);

//Eliminar
db.customers.remove({firstName:'Chris'});

//Eliminar solo uno
db.customers.remove({firstName:'Chris3'},{justOne:true});

//OR
db.customers.find({$or: [{firstName:'Chris3'}, {firstName:'Chris2'}]});

//Buscar por propiedad y retornar el número de datos
db.customers.find({
    gender:"male"
}).count();