const Joi = require('joi')
const app = require('express')()
const validator = require('express-joi-validation').createValidator({})

const querySchema = Joi.object({
  name: Joi.string().required()
})

app.get('/orders', validator.query(querySchema), (req, res) => {
  // If we're in here then the query was valid!  
  res.end(`Hello ${req.query.name}!`)
})

app.listen(3000,()=>console.log("3000"));