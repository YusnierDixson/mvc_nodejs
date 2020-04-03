const express=require('express');
let TasksController =require('../controllers/tasks');
let router=express.Router();

router.route('/tasks').get(TasksController.index).post(TasksController.create);


router.route('/tasks/new').get((req,res)=>{
   res.render('tasks/new'); }).post();

router.get('/tasks/:id/edit',TasksController.edit);

router.route('/tasks/:id')
.get(TasksController.show)
.put(TasksController.update)
.delete(TasksController.destroy);



module.exports=router;
