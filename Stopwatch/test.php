<!DOCTYPE html>
<html  lang="en">
	<head>

		<link rel="stylesheet" href="stopwatch.css">
		<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
		<script src="stopwatch.js"></script>
		<script src="bootstrap/js/bootstrap.min.js"></script>
		<script src="phonegap.js"></script>
		<title>Stopwatch</title>
	</head>

	<body onload="show();">

	  <nav class="controls">
		<a href="#" class="button" onClick="start();">Start</a>
		<a href="#" class="button" onClick="stop();">Stop</a>
		<a href="#" class="button" onClick="window.location.reload()">Reset</a>
	  </nav>
		
	  <div class="stopwatch" id="time" ></div>
		

	  <div id="contentBox" class="clearfix" class="container-fluid">
	  
			<div class="row">
				<div class="col-sm-12"><!--id="column"-->
				  <!-- ATHLETE ONE -->
					<form class="form-search  .form-search">
					  <input id="box1" type="text" placeholder="Name" maxlength="14" class="input-medium search-query .search-query">
					  <button id="button1" type="button" class="lapButton" onclick="lap();">Lap</button>
					</form>
				  <!-- <table id="lap"></table> -->
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-12"><!--id="column"--> 
				  <!-- ATHLETE TWO -->
				  <form class="form-search  .form-search" id="form1">
					  <input id="box2" type="text" placeholder="Name" maxlength="14" class="input-medium search-query .search-query">
					  <button id="button2" type="button" class="lapButton" onclick="lapTwo();">Lap</button>
					</form>
				  <!-- <table id="lap2"></table> -->
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-12"><!--id="column"--> 
				<!-- ATHLETE THREE -->
				  <form class="form-search  .form-search">
					  <input id="box3" type="text" placeholder="Name" maxlength="14" class="input-medium search-query .search-query">
					  <button id="button3" type="button" class="lapButton" onclick="lapThree();">Lap</button>
					</form>
				  <!-- <table id="lap3"></table> -->
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-12"> <!--id="column"-->
				<!-- ATHLETE FOUR -->
				  <form class="form-search  .form-search">
					  <input id="box4" type="text" placeholder="Name" maxlength="14" class="input-medium search-query .search-query">
					  <button id="button4" type="button" class="lapButton" onclick="lapFour();">Lap</button>
					</form>
				  <!-- <table id="lap4"></table> -->
				</div>
			</div>
			
			<br>
		
		
			<div class="row">
				<div class="col-lg-4 col-lg-offset-4">
			
					<!--panel-->
					<div class="panel panel-primary" id="athleteResults"  style="display:none;">
						<!-- Default panel contents -->
						<div class="panel-heading">SPLITS</div>
						<div class="panel-body">
							<!--table-->
							
							<table class="table table-condensed">
								<tr>
									<td id="lapName"></td>
									<td id="lap"></td>
								</tr>
								<tr>
									<td id="lapName2"></td>
									<td id="lap2"></td>
								</tr>
								<tr>
									<td id="lapName3"></td>
									<td id="lap3"></td>
								</tr>
								<tr>
									<td id="lapName4"></td>
									<td id="lap4"></td>
								</tr>
							</table>
							<!--end of table-->
						</div>
					</div>
					<!--end of panel-->
	 
				</div>
			</div>	 
	 
			<!--
			<form action="email.php" enctype="multipart/form-data" method="post">
		  
				<input name="emailAddress" placeholder="Email" />
				<input type="submit" value="Send!" />
			</form>
			<br><br>
			-->
			
			<!--
			<button  type="button" onclick="printSummary();">Summary</button>
			
			<div id="summaryReport" style="color:green">
				
				
				
			</div>
			-->
			<form action="" method="post" style="color:green">
			First Name: <input type="text" name="first_name"><br>
			Last Name: <input type="text" name="last_name"><br>
			Email:     <input type="text" name="email"><br>
			Message:<br><textarea rows="5" name="message" cols="50"></textarea><br>
			<input type="submit" name="submit" value="Submit">
			</form>

			
	  </div> <!--end of contentBox-->
	  
	  <div>
	  
			<?php
				if(isset($_POST['submit'])){
					require 'PHPMailer-master/PHPMailerAutoload.php';
					
					//PHPMailer Object
					$mail = new PHPMailer;

					//From email address and name
					$mail->From = "support@matthewroach.comxa.com";
					$mail->FromName = "Matt Roach";

					//To address and name
					//$mail->addAddress("recepient1@example.com", "Recepient Name");
					$to = $_POST['email'];
					$mail->addAddress($to); //Recipient name is optional

					//Address to which recipient will reply
					$mail->addReplyTo("support@matthewroach.comxa.com", "Reply");

					//CC and BCC
					//$mail->addCC("cc@example.com");
					//$mail->addBCC("bcc@example.com");

					//Send HTML or Plain Text email
					$mail->isHTML(true);

					$mail->Subject = "StopWatch Splits";
					$message = $_POST['message'];
					$mail->Body = $message;
					//$mail->AltBody = "This is the plain text version of the email content";

					if(!$mail->send()) 
					{
						echo "Mailer Error: " . $mail->ErrorInfo;
					} 
					else 
					{
						echo "Message has been sent successfully";
					}
				}
			?>
			
			
	  </div>
		
	</body>

</html>