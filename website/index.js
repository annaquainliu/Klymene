 define(function (require) {
     //Notice the space between require and the arguments.
     XMLHttpRequest = require  ('xmlhttprequest');
});


   //XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var obj;
    var xhttp;
    function createXHTTP() {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //obj is the response recieved from the php script
            //Json.parse should only be used on responseText if the phpscript sends the data over as a json format
            obj = JSON.parse(this.responseText);
            }
        };
        return xhttp;
    }
    window.onload = function() {
        xhttp = createXHTTP();
        xhttp.open("GET", "http://ec2-18-234-210-107.compute-1.amazonaws.com/getData.php", true);
        xhttp.send();

        xhttp.onload = () => {
            var urls = xhttp.responseText;
            var urlsArr = urls.split(',');
           
            for (var i = 0; i < urlsArr.length; i++) {
                var url = urlsArr[i];
                url = url.replace('[["', "");
                url = url.replace('"]]', "");
                url = url.replace('"]', "");
                url = url.replace('["', "");
                url = url.replace(/\\/g, '');
                console.log(url);
                var index = i.toString();
                console.log(index);
                var ref = document.getElementById(index);
                ref.href = url;
                window.instgrm.Embeds.process();
            }
        }
    }