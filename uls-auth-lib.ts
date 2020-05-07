import jwt from 'jsonwebtoken';

export const checkAuth = (key : string, token : string)=>{
  return new Promise((resolve, reject)=>{
    jwt.verify(token, key, function(err, decoded) {
      if(err){
        reject(err)
      }else{
        resolve(decoded)
      }
    });
  })
}