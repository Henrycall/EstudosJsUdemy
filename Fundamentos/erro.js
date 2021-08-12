function tratarErroELancar(erro){
   // throw new Error('tratando erro...')
   // thow 10
   // throw true
   // thorow 'msg'
   throw{
       name:erro.name,
       msg: erro.message,
       data:new Date
   } 
}


function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!!!')
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('FINALLLL')
    }
}
const obj = {name:'Henry'}
imprimirNomeGritado(obj)