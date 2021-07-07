class Data{
    nama
    alamat

    constructor(nama,alamat){
        this.nama = nama
        this.alamat = alamat
    }
    toJson = ()=>{
        return {"nama":this.nama,"alamat":this.alamat}
    }
}
var datas = [
    new Data("nama 1","alamat 1").toJson(),
    new Data("nama 2","alamat 2").toJson(),
]
// console.log(datas);
class ControllerTest{
    
    getData = (req,res)=>{
        console.log(datas);
        return res.json(datas,200)
    }
    addPerson = (req,res)=>{
        person = new Data()
        Data.nama = req.query.nama
        Data.alamat = req.query.alamat
        return res.succes()
    }
}

module.exports = ControllerTest