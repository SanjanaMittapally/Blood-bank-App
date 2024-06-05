const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getDonarsListController, getHospitalListController, getOrgListController, deleteDonarController, deleteHospitalController, deleteOrgController } = require('../controllers/adminController');
const adminMiddleware = require('../middlewares/adminMiddleware');




const router = express.Router();

router.get('/', authMiddleware, adminMiddleware);
router.get('/donar-list', authMiddleware, adminMiddleware, getDonarsListController);
router.get('/hospital-list', authMiddleware, adminMiddleware, getHospitalListController);
router.get('/org-list', authMiddleware, adminMiddleware, getOrgListController);
router.delete('/delete-donar/:id', authMiddleware, adminMiddleware, deleteDonarController);
router.delete('/delete-hospital/:id', authMiddleware, adminMiddleware, deleteHospitalController);
router.delete('/delete-organisation/:id', authMiddleware, adminMiddleware, deleteOrgController);


module.exports = router;