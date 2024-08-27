class Apierror extends Error{
  constructor(
    statuscode,
    mesage="somthing want wrong",
    errors=[],
    stack=""

  ){
  super(mesage)
  this.statuscode=statuscode
  this.data=null
  this.message=mesage
  this.sucess=false;
  this.errors=errors
  if(stack){
    this.stack=stack
  } else{
    Error.captureStackTrace(this,this.constructor)
  }

  }
}
export {Apierror}