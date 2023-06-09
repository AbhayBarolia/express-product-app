const fs=require('fs');
const path=require('path');

const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');

const readFromProductFile = cb=>{ 
fs.readFile(p,(err, fileContent)=>{
    if(err)
    {return cb([]);}

    return cb(JSON.parse(fileContent));
});
}

module.exports= class Product{   

constructor(title){
this.title=title;
}

saveProducts() {
  readFromProductFile(products=>{
    products.push(this);
    fs.writeFile(p,JSON.stringify(products),(err)=>{
        console.log(err);
  });
   
  });
}

static fetchAllProducts(cb) {
   readFromProductFile(cb);
}
}