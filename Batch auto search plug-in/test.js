

chrome.runtime.sendMessage('content', function(response){
 

document.getElementById("seq").value=response;
document.getElementById("b1").click();

  
//document.getElementById("text").value=response; 

//document.write(response);
});

