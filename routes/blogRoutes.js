const express = require('express');
const blogControllers  = require('../controllers/blogControllers');

const router = express.Router();

//Blog GET requests:
router.get('/', blogControllers.blog_index);

router.get('/create', blogControllers.blog_create_get);

router.get('/:id', blogControllers.blog_details);


//Blog POST requests:
router.post('/', blogControllers.blog_create_post);


//Blog DELETE requests:
router.delete('/:id', blogControllers.blog_delete);


module.exports = router;