// const express = require('express');
// const mysql = require("mysql");

// const app = express();
// app.use(express.json());

// const port = 2805;

// const route = require("./routers/index");
// app.use(route);

// app.listen(port, () => console.log('Server running on port ${port}'));
// // var db = mysql.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     database: "book-store-api",
// //     password: "",
// // });

// // db.connect( function (err) {
// //     if (err) throw err;
// //     console.log("Done Ya Kak!!");
// // });

// // app.get('/users',(req,res) => {
// //     db.query("select * from users", (req,result) => {
// //         res.json(result)
// //     });
// // });

// // app.get('/users/:id', async (req,res) => {
// //     let id = parseInt(req.params.id)

// //     try {
// //         const query = "Select * from users where users_id = ?";

// //         db.query(query, [id], (err,result) => {

// //         if (result.length === 0) {
// //             return res.status(404).json({
// //                 message : "Data Not Found",
// //             });
// //         } else {
// //             res.json({
// //                 data : result[0],
// //             });
// //         }
// //     });

// //     } catch (error) {
// //         return res.status(404).json({
// //             message : "Error DataBase nya..",
// //         });
// //     }

// //     res.send("Ini adalah id :" + id)
// // });

// // app.post('/users', async(req,res) => {
// //     let data = req.body;

// //     const query = "INSERT INTO public.users(user_id, nama, alamat) VALUES (&1, &2, &3)";
// //     client.query(query, [data.id, data.nama, data.alamat], (err, result) => {
// //         if (error) {
// //             console.error("Error executing INSERT query:", err)
// //             return res.status(500).json({ error: "Terjadi Kesalahan " + err });
// //         } else {
// //             res.json({
// //                 message: "Data Berhasil Dimasukan",
// //             });
// //         }
// //     });
// // });

// //     // representasi data dari database
// //     const data_users = [
// //         { id: 1, name: "Ardithya Teranova", alamat: "Sukabumi" },
// //         { id: 2, name: "Gita Mey Sita", alamat: "Bandung" },
// //         { id: 3, name: "Savin Dwi Fayza", alamat: "Bandung" },
// //         { id: 4, name: "Iurie Mother F", alamat: "Bandung" },
// //     ];


//     // app.get("/aw/:id", (req, res) => {
//     //     // get data dari parameter
//     //     let id = parseInt(req.params.id);
        
//     //     // get data dari database
//     //     let result;
//     //     const user = data_users.find((user) => user.id === id);
//     //     if (user) {
//     //         result = {
//     //         status: 200,
//     //         data: user,
//     //         };
//     //     } else {
//     //         res.status(404).json({ error: "User not found" });
//     //     }
//     //     res.json(result);
//     // });
