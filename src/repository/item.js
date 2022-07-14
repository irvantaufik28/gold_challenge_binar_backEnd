const fs = require('fs');
const { item } = require('http');

var items = [];
const FILE_PATH = '../../test/mocks/items.json'

const load_data =()=>{
    items = require(FILE_PATH)
}


// Menampilkan Semua Item
const getAllitem =() =>{
    load_data()
    return items
}
// console.log(getAllitem())




// const add_user =(user)=> {
//     load_data();
//     let user_count = users.length;
//     user.id = user_count + 1;
//     users.push(user);

   
//     fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 4));
//     return user;
// }

// Menambahkan Item

const addItem = (item)=>{
    load_data();
    let item_count = items.length;
    item.kodeBarang = item_count + 1;
    items.push(item);

    // write into json file
    fs.writeFileSync(FILE_PATH, JSON.stringify(items, null, 4));
    return item;
}
// let data = {
//     "kodeBarang" :1,
//     "namaBarang" : "PIPA pvc PVC",
//     "harga" :27500,
//     "stoc" :2,
//     "categori": "Pintu",
//     "detail" : "ini adalah detai info dari barang"
//     }
    
//     console.log(addItem(data))
    

// Fitur Menghapus item
const deleteItemByName = (itemDelete) =>{
    load_data()
    let item = items.find(item=>{return item.namaBarang})
if (itemDelete === item){
    
}
 
}

console.log(deleteItemByName("Semen Tiga Roda"))