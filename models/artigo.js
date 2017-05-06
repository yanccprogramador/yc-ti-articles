var db=require('../dbconnection'); //reference of dbconnection.js

var Artigo={

getAllarticles:function(callback){

return db.query("Select * from artigos",callback);

},
 getArtigoById:function(id,callback){

return db.query("select * from artigos where Id=?",[id],callback);
 },
 addArtigo:function(Artigo,callback){
 return db.query("Insert into artigos(Titulo,Dono,artigo) values(?,?,?)",[Artigo.Titulo,Artigo.Dono,Artigo.artigo],callback);
 },
 deleteArtigo:function(id,callback){
  return db.query("delete from artigos where Id=?",[id],callback);
 },
 updateArtigo:function(id,Artigo,callback){
  return db.query("update artigos set Titulo=?,Dono=?,artigo=? where Id=?",[Artigo.Titulo,Artigo.Dono,Artigo.artigo,id],callback);
 }

};
 module.exports=Artigo;
