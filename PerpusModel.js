var router = require('express').Router();

var BukuController = require('../controllers/PerpusController');

router.get('/', BukuController.list);
router.get('/tambah/add', BukuController.add);
router.post('/tambah_data/add', BukuController.save);
router.get('/delete/:id', BukuController.delete);
router.get('/edit/:id', BukuController.edit);
router.post('/edit/:id',BukuController.save_edit);

module.exports = router;
