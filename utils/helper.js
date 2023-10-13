const jwt = require('jsonwebtoken')

const jwtVerifyResfreshToken =(token)=>{
    new Promise((resolve,reject) =>{
        jwt.verify(token, "mysecret", (error,decoded)=>{
            if(error){
                reject(new Error(error.message))
            }

            resolve(decoded)
        })
})
}

const jwtVerify = (token) =>{
    new Promise =( (resolve, reject) => {
        jwt.verify(token, 'my scret', (error, decoded) =>{
            if(error){
                reject(new Error(error.message))
            }
            resolve(decoded)
        })
    })
}

module.exports = {
    jwtVerify,
    jwtVerifyResfreshToken
}