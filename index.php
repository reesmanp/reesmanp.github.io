<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=11; IE=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        <title>Paul R. Reesman</title>
    </head>
    <body>
        <?php
            $yourEmailAddress   = "Paul.R.Reesman@gmail.com";
            $emailSubject       = "New Visitor on Webpage";
            $remoteIpAddress    = $_SERVER['REMOTE_ADDR'];
            $details            = json_decode(file_get_contents("http://ipinfo.io/{$remoteIpAddress}/json"));
            $city               = $details->city;
            $host               = $details->hostname;
            $emailContent       = date('Y-m-d H:i:s')." IP address: ".$remoteIpAddress."\nCity: ".$city."\nHostname: ".$host."\n\n";
            mail($yourEmailAddress, $emailSubject, $emailContent);
        ?>
        <div id="container"></div>
        <script type="text/javascript" src="./dist/portfolio.min.js"></script>
    </body>
</html>
