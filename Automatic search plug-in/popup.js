
chrome.runtime.sendMessage('get', function(response){
   
document.getElementById("text").value=response; 

//document.write(response);
});



chrome.runtime.sendMessage('getth', function(response){
   
document.getElementById("label_1").innerHTML=response;

//document.write(response);
});





window.open(" https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastp&PAGE_TYPE=BlastSearch&LINK_LOC=blasthome");  
  	  





document.getElementById("next").onclick =  function(){
			  



	}