const fs = require('fs');

var users = [];
const FILE_PATH = '../../test/mocks/users.json'

// TODO: hapus kalo sudah impelementasi DB
const load_data=()=> {
    users = require(FILE_PATH)
}
// mengambil data semua user
const getAllUsers = () => {
    load_data() 
    return users
}
// console.log(getAllUsers())

// end getAllUser


// mengambil data user berdasarkan email

const getUserByEmail = (email) => {
    load_data()
    let user = users.find(item => { return item.email === email })
    return user
}
// console.log(getUserByEmail("irvantaufik28@gmail.com"))




// function getUserByEmail(email) {
//     load_data();
//     let user = users.find(item => {
//         return item.email === email
//     })

//     return user
// }



// end getUserByEmail

const add_user =(user)=> {
    load_data();
    let user_count = users.length;
    user.id = user_count + 1;
    users.push(user);

    // write into json file
    fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 4));
    return user;
}

// let data = {
//     "name": "Ari",
//     "password": "12345677",
//     "email": "ari@gmail.com"
// }

// console.log(add_user(data))


// Fitur logIn
const loginUser = (email,password) =>{
    load_data();
    
    let user = users.find(item => { return item.email === email && item.password === password })
    
    if(user){
        return 'Anda berhasil login'
    } else {return 'password atau email salah'}

}
console.log(loginUser("irvantaufik2@gmail.com", "123456"))
// end login
     
  