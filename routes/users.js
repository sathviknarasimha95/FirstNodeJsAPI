exports.list = function(req, res){
  req.getConnection(function(err,connection){
       
     connection.query('SELECT * FROM sample',function(err,rows)     {
            
        if(err)
           console.log("Error Selecting : %s ",err );
     
            res.render('users',{page_title:"users - Node.js",data:rows});
                           
         });
       
    });
  
};
