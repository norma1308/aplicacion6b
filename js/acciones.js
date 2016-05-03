// JavaScript Document

$(document).ready(function (e){
	document.add.EventListener("deviceready",function(){
		
		$('#beep').tap(function (){
			navigator.notification.beep (2);
		});//tap beep
		
		$('#vibrar').tap(function (){
			navigator.notification .vibrate (1000);
		});//tap vibrar
		
	},false);//deviceready
});//ready