const express=require('express');
let CategoriesController =require('../controllers/categories');
let router=express.Router();

router.route('/categories').get(CategoriesController.index).post(CategoriesController.create);


router.route('/categories/new').get((req,res)=>{
   res.render('categories/new'); }).post();

router.get('/categories/:id/edit',CategoriesController.edit);

router.route('/categories/:id')
.get(CategoriesController.show)
.put(CategoriesController.update)
.delete(CategoriesController.destroy);



module.exports=router;
