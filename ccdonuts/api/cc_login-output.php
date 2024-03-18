/***  チェック関数(mailaddress , password) ***/

<?php session_start(); ?>
<?php require 'header.php'; ?>
<?php

$passwordmailadoress=$_REQUEST['mailaddress'];
if (preg_match('/^[a-zA-Z0-9_]+\@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]$/', 
	$mailaddress)) {
		$mailResult = TRUE;
} else {
		$mailResult = FALSE;
}
$password=$_REQUEST['password'];
if (preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/', 
	$password)) {
	$passwordResult = TRUE;
} else {
	$passwordResult = FALSE;
}
if($mailResult == TRUE && $passwordResult == TRUE) {
	return(TRUE);
} 
if($mailResult == TRUE) {
	echo 'メールアドレス「', $password, '」は適切ではありません。';
	return(FALSE);
}
echo 'メールアドレスパスワード「', $mailaddress, '」は適切ではありません。';
return(FALSE);
?>

<?php require 'footer.php'; ?>
















unset($_SESSION['customer']);
$pdo=new PDO('mysql:host=localhost;dbname=shop;charset=utf8', 
	'staff', 'password');
$sql=$pdo->prepare('select * from customer where login=? and password=?');
$sql->execute([$_REQUEST['login'], $_REQUEST['password']]);
foreach ($sql as $row) {
	$_SESSION['customer']=[
		'id'=>$row['id'], 'name'=>$row['name'], 
		'address'=>$row['address'], 'login'=>$row['login'], 
		'password'=>$row['password']];
}
if (isset($_SESSION['customer'])) {
	echo 'いらっしゃいませ、', $_SESSION['customer']['name'], 'さん。';
} else {
	echo 'ログイン名またはパスワードが違います。';
}
?>
<?php require '../footer.php'; ?>
