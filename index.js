const express = require('express')

const app = express()
const port = 2805

    // representasi data dari database
    const data_users = [
        { id: 1, name: "Ardithya Teranova", alamat: "Sukabumi" },
        { id: 2, name: "Gita Mey Sita", alamat: "Bandung" },
        { id: 3, name: "Savin Dwi Fayza", alamat: "Bandung" },
        { id: 4, name: "Iurie MOther F", alamat: "Bandung" },
    ];

    app.get("/aw/:id", (req, res) => {
        // get data dari parameter
        let id = parseInt(req.params.id);

        // get data dari database
        let result;
        const user = data_users.find((user) => user.id === id);
        if (user) {
            result = {
            status: 200,
            data: user,
            };
        }
        res.json(result);
    });
app.listen(port,() => console.log(`Server running on port ${port}`))