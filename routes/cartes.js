var express = require('express');
var router = express.Router();

function select_database(req,res,select) {
    var cox = req.cox;
    cox.getConnection(function(err,connection){
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }
        
        connection.query(select,function(err,rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }           
        });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}
/*
 * GET listemots.
 */
router.get('/getcartes', function(req, res) {
    select_database(req,res,"SELECT * from cartes ORDER BY couleur");
});

module.exports = router;