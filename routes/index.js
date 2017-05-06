var express = require('express');
 var router = express.Router();
 var Artigo=require('../models/artigo');

router.get('/:id?',function(req,res,next){

if(req.params.id){

Artigo.getArtigoById(req.params.id,function(err,rows){

if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{

Artigo.getAllarticles(function(err,rows){

if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }

 });
 }
 });
 router.post('/',function(req,res,next){

Artigo.addArtigo(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });
 router.delete('/:id',function(req,res,next){

Artigo.deleteArtigo(req.params.id,function(err,count){

if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }

});
 });
 router.put('/:id',function(req,res,next){

Artigo.updateArtigo(req.params.id,req.body,function(err,rows){

if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
 module.exports=router;
