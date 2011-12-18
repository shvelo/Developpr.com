<?php
error_reporting(0);
if($_POST['imhuman'] === "on" && $_POST['country'] === "" && preg_match("/^[^@]*@[^@]*\.[^@]*$/",$_POST['email']) === 1){
	mail("shvelo@eshopscript.co.cc","Contact message",$_POST['message'],"From: {$_POST['name']} <{$_POST['email']}>");	
}