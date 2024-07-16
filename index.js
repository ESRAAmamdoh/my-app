const http=require('http')
const fs=require('fs')
const { log } = require('console')

let users=JSON.parse(fs.readFileSync('./users.json'))
http.createServer(
    async (req,res)=>{

      
                const {url ,method}=req
                  //get all students
                 if(url=='/users'&&method=='GET'){
                    res.write(JSON.stringify(users));
                    res.end();
                }}
            ).listen(8000,()=>console.log('server is created'))