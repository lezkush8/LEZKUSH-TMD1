const {zokou} =require("../framework/zokou")







zokou({nomCom:"restat",categorie:"Mods",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("bot is reatating.......");
  }

  const {exec}=require("child_process") ;

    repondre("* restat bot enable wait to reduce...*");

  exec("pm2 restart all");
  

  



})
