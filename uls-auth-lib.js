const jwt = require('jsonwebtoken');
module.exports.checkAuth =  function(privateKey, token){
  return new Promise((resolve, reject) => {
    jwt.verify(token, privateKey, function(err, decoded) {
      if(err){
        reject(err)
      }else{
        resolve(decoded)
      }
    });
  })
} 