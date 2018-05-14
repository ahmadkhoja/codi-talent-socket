const port = 8888;
const http = require('http')
const express = require('express')
// const bodyParser = require('body-parser')
const SocketIo = require('socket.io')
const SocketIOFile = require('socket.io-file')
const app = express()
const server = http.createServer(app);
const io = SocketIo(server);
const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('./db/coditalent.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the database named coditalent');
  });
  
server.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`listening to port ${port}`)
    }
})

io.on('connection', (socket) => {
    console.log('a user is connected')
    let uploader = new SocketIOFile(socket, {
        // uploadDir: {			// multiple directories
        // 	music: 'data/music',
        // 	document: 'data/document'
        // },
        uploadDir: '../front/public/uploadedImages',							// simple directory
        accepts: ['image/png', 'image/jpg', 'image/jpeg'],		// chrome and some of browsers checking mp3 as 'audio/mp3', not 'audio/mpeg'
        maxFileSize: 4194304, 						// 4 MB. default is undefined(no limit)
        chunkSize: 10240,							// default is 10240(1KB)
        transmissionDelay: 0,						// delay of each transmission, higher value saves more cpu resources, lower upload speed. default is 0(no delay)
        overwrite: true 							// overwrite file if exists, default is true.
      });
      uploader.on('start', (fileInfo) => {
        // console.log('Start uploading');
        // console.log(fileInfo);
      });
      uploader.on('stream', (fileInfo) => {
        // console.log(`${fileInfo.wrote} / ${fileInfo.size} byte(s)`);
      });
      uploader.on('complete', (fileInfo) => {
        // console.log('Upload Complete.');
        // console.log('file info ----->',fileInfo.name)
        // socket.emit('image:name',fileInfo.name)
      });
      uploader.on('error', (err) => {
        // console.log('Error!', err);
      });
      uploader.on('abort', (fileInfo) => {
        // console.log('Aborted: ', fileInfo);
      });
      socket.on('student:signup', (name,city,skills,availability,gender,imagename) => {
        const student = { name,city,skills,availability,gender,imagename }
        let skills_string = []
        const skill_arr = skills.map((s) => {
            skills_string.push(s.value)
        })
        let student_skills = skills_string.join(",")
        db.run('INSERT INTO students (name,city,availability,skills,gender,imagename) VALUES (?,?,?,?,?,?)', [ name,city,availability,student_skills,gender,imagename ]);

        // socket.emit('signup:ok',user)  
      })
      const listStudents = () => {
        db.all('SELECT * FROM students', [], (err, rows) => {
            if (err) {
              throw err;
            }
            let skills = []
            const skill_list = rows.map((row,index) => {
                skills = row.skills.split(",")
                rows[index].skills=skills
            }) 
            // console.log(skills)
            console.log(rows)
            socket.emit('student:list',rows)
          })
      }
      listStudents();

})
