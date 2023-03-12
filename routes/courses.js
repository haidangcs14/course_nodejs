const express = require('express');
const router = express.Router();
const CourseController = require('../controller/CourseController');

router.get('/feedback', CourseController.feedback);
router.post('/feedback', CourseController.send);
router.get('/:slug/baitap',CourseController.homework);
router.post('/:slug/baitap',CourseController.point)
router.get('/:slug/score',CourseController.seepoint);
router.get('/:slug', CourseController.show);
module.exports = router;
