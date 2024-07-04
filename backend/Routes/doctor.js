import express from 'express'
import { updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor,getDoctorProfile } from '../Controllers/doctorController.js'
import { authenticate } from '../auth/verifyToken.js';
const router = express.Router();
import reviewRouter from './review.js'

router.use('/:doctorId/reviews', reviewRouter)


router.get('/:id',getSingleDoctor);
router.get('/',getAllDoctor);
router.put('/:id',updateDoctor)
router.delete('/:id',deleteDoctor)
router.get('/profile/me',authenticate,getDoctorProfile);
 

export default router