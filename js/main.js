$(document).ready(function(){
    $("#slider > div:gt(0)").hide();

    setInterval(function() { 
      $('#slider > div:first')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('#slider');
    },  5000);
    
});

function validate(){
  var nameTemp = document.getElementById("name");
  var commentTemp = document.getElementById("comment");
  var errorMsg = document.getElementById("errorMsg");
  var reg = /^[a-z]+$/i; /*nospace*/

  var name = new String(nameTemp.value);
  var comment = new String(commentTemp.value);

  if(name === ""){
    errorMsg.innerText = "Name cannot be empty";
    return false;
  }

  if(name.length < 8 || name.length > 25){
    errorMsg.innerText = "Name must be between 8 and 25 characters";
    return false;
  }

  if(reg.test(name) == false){
    errorMsg.innerText = "Name must be alphanumeric";
    return false;
  }

  if(comment === ""){
    errorMsg.innerText = "Comment cannot be empty";
    return false;
  }

  if(comment.length < 30 || comment.length > 200){
    errorMsg.innerText = "Comment must be between 30 and 200 characters";
    return false;
  }

  if(comment.length < 30 || comment.length > 200){
    errorMsg.innerText = "Comment must be between 30 and 200 characters";
    return false;
  }

  if(confirm("By Clicking Yes u Agree to our terms and condition")){
    alert("Post Succesfull");
  }
  else{
    alert("You Cancelled The Post");
  }
}