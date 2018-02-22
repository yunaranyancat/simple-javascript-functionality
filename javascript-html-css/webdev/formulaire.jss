"use strict";

var $=function(id) {
	return document.getElementById(id); //synonyme à "$"
};

var traiterSaisies = function(){
	var estValide= true;
	var email=$("email").value;
	var mobile=$("mobile").value;
	var pays=$("pays").value;
	var contact ="sms";

	if($("email").checked){
		contact="email";
	}

	if(email!="" && mobile!=""){
		$("email").nextElementSibling.firstChild.nodeValue="OK!";
		$("mobile").nextElementSibling.firstChild.nodeValue="OK!";
		estValide=true;;
	}
	if(email=="" || mobile==""){
		$("email").nextElementSibling.firstChild.nodeValue="Ce champ est requis";
		$("mobile").nextElementSibling.firstChild.nodeValue="Ce champ est requis";
		estValide=false;
	}
	if(email=="" && mobile!=""){
		$("email").nextElementSibling.firstChild.nodeValue="Ce champ est requis";
		$("mobile").nextElementSibling.firstChild.nodeValue="OK!";
		estValide=false;
	}
	if(email!="" && mobile==""){
		$("email").nextElementSibling.firstChild.nodeValue="OK!";
		$("mobile").nextElementSibling.firstChild.nodeValue="Ce champ est requis";
		estValide=false;
	}

	if(pays=="choice"){
		$("pays").nextElementSibling.firstChild.nodeValue="Choisir un pays!";
		estValide=false;
	}else{
		$("pays").nextElementSibling.firstChild.nodeValue="OK!";
		estValide=false;
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
