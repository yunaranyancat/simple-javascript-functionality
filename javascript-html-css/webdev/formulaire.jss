"use strict";

var $=function(id) {
	return document.getElementById(id); //synonyme à "$"
};

var traiterSaisies = function(){
	var estValide= true;
	var email=$("email").value;
	var mobile=$("mobile").value;
	var contact ="sms";

	if($("email").checked){
		contact="email";
	}

	if(email=="" || mobile==""){
		$("email").nextElementSibling.firstChild.nodeValue="Ce champ est requis";
		$("mobile").nextElementSibling.firstChild.nodeValue="Ce champ est requis";
		estValide=false;
	}else{
		$("mobile").nextElementSibling.firstChild.nodeValue="";
		$("email").nextElementSibling.firstChild.nodeValue="";
		//est_valide=true;
	}

	if(estValide==true){
	$("registration_form").submit();
	}
}

var resetForm = function(){
	document.getElementById("registration_form").reset();
	$("mobile").nextElementSibling.firstChild.nodeValue="*";
	$("email").nextElementSibling.firstChild.nodeValue="*";
}

window.onload=function(){
	//action clic sur bouton "Soumettre"
	$("reg").onclick=traiterSaisies;
	$("resett").onclick=resetForm;
	$("email").focus();

};
