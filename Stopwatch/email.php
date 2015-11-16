<!DOCTYPE html>
	<html lang="en">
		<head>
			<title>Stopwatch</title>
		</head>
		
		<body>	
			<h2>Email sent</h2>
<?php
/*
if(isset($_POST['emailAddress'])) {
	$to = $_POST['emailAddress'];
$subject = "Race Results";
$message = "This is simple text message.";
$header = "Race Results";
$retval = mail ($to,$subject,$message,$header);
if( $retval == true )  
{
	echo "Message sent successfully...";
}
else
{
	echo "Message could not be sent...";
}
*/
	
$to = 'matthewroach78@gmail.com';
$subject = 'TEST';
$txt = 'Hello world!';
$headers = "From: Stopwatch App\r\n";
$headers .= "Content-type: text/html\r\n";

mail($to,$subject,$txt,$headers);

?>
			
		</body>
	</html>
