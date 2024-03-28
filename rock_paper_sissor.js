let uscore=0;
let cscore=0;
let meg=document.querySelector("#meg");
let userscore=document.querySelector("#user-score");
let compscore=document.querySelector("#comp-score");
const compchoice=()=>{
    const compchoicearray=["rock","scissor","paper"];
    const index=Math.floor(Math.random()*3);
    return compchoicearray[index];
}
const drawgame=()=>{
  console.log("draw game");
  meg.innerText="draw game";
  meg.style.backgroundColor="black";
}
const showwin=(userwin,userchoice,compc)=> {
    if(userwin){
        uscore++;
        console.log("you win!");
        userscore.innerText=`${uscore}`;
        meg.innerText=`you win your choice${userchoice} and computer choice ${compc}`;
        meg.style.backgroundColor="green";
    }else{
        cscore++;
        console.log("you lose");
        compscore.innerText=`${cscore}`;
        meg.innerText=`you lose your choice${userchoice} and computer choice ${compc}`;
        meg.style.backgroundColor="red";
    }

}
const choice=document.querySelectorAll(".choice");
const playgame=(userchoice)=>{
    console.log("user choice",userchoice);
    const compc=compchoice();
    console.log("comp choice",compc);
    let userwin=true;
    
    if(userchoice===compc){
        drawgame();
    }else{
        let userwin=true;
    if(userchoice==="rock"){
        userwin=compc==="paper"?false:true;
    }else if(userchoice==="paper"){
        userwin=compc==="scissor"?false:true;

    }else{
        userwin=compc==="rock"?false:true;
    }
    showwin(userwin,userchoice,compc);
}

}

choice.forEach((c)=>{
    console.log(c);
    c.addEventListener("click",() => {
        const userchoice=c.getAttribute("id");
        
        playgame(userchoice)
    });
});
