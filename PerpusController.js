var controller = {};

controller.list = (req, res) => {
    req.getConnection((err, connection) => {

        var query = connection.query('SELECT * FROM buku', (err, rows) => {
            if (err)
                console.log("Error Selecting : %s ", err);
            res.render('perpustakaan', { data: rows });
        });
    });
};

//Tambah Data
controller.add = (req, res) => {
    res.render('tambah');
};

controller.edit = (req, res) => {

    var id = req.params.id;
    req.getConnection((err, connection) => {

        var query = connection.query('SELECT * FROM buku WHERE id = ?', [id], (err, rows) => {
            if (err)
                console.log("Error Selecting : %s ", err);
            res.render('edit_buku', { data: rows });
        });
    });
};

/* Simpan */
controller.save = (req, res) => {

    var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection((err, connection) => {

        var data = {
            id: input.id,
            judul: input.judul,
            pengarang: input.pengarang,
            penerbit: input.penerbit
        };

        var query = connection.query("INSERT INTO buku set ? ", data, (err, rows) => {

            if (err)
                console.log("Error inserting : %s ", err);

            res.redirect('/');

        });
    });
};

// Edit dan Simpan
controller.save_edit = (req, res) => {

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;

    req.getConnection((err, connection) => {

        var data = {

            id: input.id,
            judul: input.judul,
            pengarang: input.pengarang,
            penerbit: input.penerbit

        };

        connection.query("UPDATE buku set ? WHERE id = ? ", [data, id], (err, rows) => {

            if (err)
                console.log("Error Updating : %s ", err);

            res.redirect('/');

        });

    });
};

// hapus data
controller.delete = (req, res) => {
    var id = req.params.id;

    req.getConnection((err, connection) => {
        connection.query("DELETE FROM buku WHERE id = ? ", [id], (err) => {
            if (err)
                console.log("Error deleting : %s ", err);
            res.redirect('/');
        });
    });
};

module.exports = controller;



