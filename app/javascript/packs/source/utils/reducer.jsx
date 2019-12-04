export default (state={login:false,name:""},action)=>{
     switch(action.type){
      case 'LOGIN':
        return {login:true,name:action.name};
      case'LOGOUT':
        return {login:false,name:""};
      default:
          return state
     }
}