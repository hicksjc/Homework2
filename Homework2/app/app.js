function showContent(newName){
    console.log("newName app.js " + newName);
    
}


function setBindings(){
    $("nav a").click(function(e){
        let btnID = e.currentTarget.id;
        console.log(btnID);
        MODEL.getMyVariable(btnID, showContent);
    });

}

$(document).ready(function(){
    console.log("ready");
    setBindings();
    MODEL.getMyVariable("home", showContent);
});