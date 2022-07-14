const fs = require('fs');

var servers = [];
const FILE_PATH = '../../test/mocks/servers.json'

const load_data =()=>{
    servers = require(FILE_PATH)
}


// Menampilkan Semua Item
const getAllitem =() =>{
    load_data()
    return servers
}

console.log(getAllitem())
// End