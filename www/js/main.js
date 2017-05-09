$(document).ready(function() {
	$("body").hide().fadeIn(2000);
 });

$(function () {

    var city = "";
    var today = new Date();
    today = today.getHours() + ":" + addZero(today.getMinutes());
    document.getElementById("time").innerHTML = today;
    document.getElementById("cat").innerHTML = "Restaurant";
    document.getElementById("loc").innerHTML = "Calculating..."
    getLocation();


    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            document.getElementById("loc").innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position) {
        document.getElementById("lat").innerHTML = position.coords.latitude;
        document.getElementById("lon").innerHTML = position.coords.longitude;
        displayLocation(position.coords.latitude, position.coords.longitude);
    }

    function displayLocation(latitude,longitude){
        var request = new XMLHttpRequest();
        var method = 'GET';
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true';
        var async = true;

        request.open(method, url, async);
        request.onreadystatechange = function(){
            if(request.readyState == 4 && request.status == 200){
                var data = JSON.parse(request.responseText);
                var address = data.results[0];
                console.log(address);
                var addr = address.formatted_address.split(",");
                console.log(addr);
                city = addr[1];
                document.getElementById("loc").innerHTML = city;
            }
        };
        request.send();
    }

    var successCallback = function(position){
        var x = position.coords.latitude;
        var y = position.coords.longitude;
        displayLocation(x,y);
    };

    var errorCallback = function(error){
        var errorMessage = 'Unknown error';
        switch(error.code) {
            case 1:
                errorMessage = 'Permission denied';
                break;
            case 2:
                errorMessage = 'Position unavailable';
                break;
            case 3:
                errorMessage = 'Timeout';
                break;
        }
        document.write(errorMessage);
    };

    var options = {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
    };

    $('html').click(function() {
        $("#timeList").attr("style","display:none");
        $("#catList").attr("style","display:none");
    });

    $("#timeButton").click(function () {
        event.stopPropagation();
        $("#timeList").attr("style","display:block");
    });

    $("#catButton").click(function () {
        event.stopPropagation();
        $("#catList").attr("style","display:block");
    });

    $("#timeOne").click(function () {
        document.getElementById("time").innerHTML = "1:00";
        $("#timeList").attr("style","display:none");

    });

    $("#timeTwo").click(function () {
        document.getElementById("time").innerHTML = "2:00";
        $("#timeList").attr("style","display:none");
    });

    $("#timeThree").click(function () {
        document.getElementById("time").innerHTML = "3:00";
        $("#timeList").attr("style","display:none");
    });

    $("#timeFour").click(function () {
        document.getElementById("time").innerHTML = "4:00";
        $("#timeList").attr("style","display:none");
    });

    $("#timeFive").click(function () {
        document.getElementById("time").innerHTML = "5:00";
        $("#timeList").attr("style","display:none");
    });

    $("#timeSix").click(function () {
        document.getElementById("time").innerHTML = "6:00";
        $("#timeList").attr("style","display:none");
    });

    $("#timeSeven").click(function () {
        document.getElementById("time").innerHTML = "7:00";
        $("#timeList").attr("style","display:none");
    });

    $("#timeEight").click(function () {
        document.getElementById("time").innerHTML = "8:00";
        $("#timeList").attr("style","display:none");
    });

    $("#timeNine").click(function () {
        document.getElementById("time").innerHTML = "9:00";
        $("#timeList").attr("style","display:none");
    });

    $("#timeTen").click(function () {
        document.getElementById("time").innerHTML = "10:00";
        $("#timeList").attr("style","display:none");
    });

    $("#timeEleven").click(function () {
        document.getElementById("time").innerHTML = "11:00";
        $("#timeList").attr("style","display:none");
    });

    $("#timeTwelve").click(function () {
        document.getElementById("time").innerHTML = "12:00";
        $("#timeList").attr("style","display:none");
    });

    $("#time13").click(function () {
        document.getElementById("time").innerHTML = "13:00";
        $("#timeList").attr("style","display:none");

    });

    $("#time14").click(function () {
        document.getElementById("time").innerHTML = "14:00";
        $("#timeList").attr("style","display:none");
    });

    $("#time15").click(function () {
        document.getElementById("time").innerHTML = "15:00";
        $("#timeList").attr("style","display:none");
    });

    $("#time16").click(function () {
        document.getElementById("time").innerHTML = "16:00";
        $("#timeList").attr("style","display:none");
    });

    $("#time17").click(function () {
        document.getElementById("time").innerHTML = "17:00";
        $("#timeList").attr("style","display:none");
    });

    $("#time18").click(function () {
        document.getElementById("time").innerHTML = "18:00";
        $("#timeList").attr("style","display:none");
    });

    $("#time19").click(function () {
        document.getElementById("time").innerHTML = "19:00";
        $("#timeList").attr("style","display:none");
    });

    $("#time20").click(function () {
        document.getElementById("time").innerHTML = "20:00";
        $("#timeList").attr("style","display:none");
    });

    $("#time21").click(function () {
        document.getElementById("time").innerHTML = "21:00";
        $("#timeList").attr("style","display:none");
    });

    $("#time22").click(function () {
        document.getElementById("time").innerHTML = "22:00";
        $("#timeList").attr("style","display:none");
    });

    $("#time23").click(function () {
        document.getElementById("time").innerHTML = "23:00";
        $("#timeList").attr("style","display:none");
    });

    $("#time24").click(function () {
        document.getElementById("time").innerHTML = "24:00";
        $("#timeList").attr("style","display:none");
    });

    $("#timeOne").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#timeTwo").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#timeThree").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#timeFour").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#timeFive").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#timeSix").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#timeSeven").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#timeEight").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#timeNine").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#timeTen").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#timeEleven").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#timeTwelve").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#time13").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#time14").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#time15").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#time16").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#time17").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#time18").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#time19").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#time20").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#time21").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#time22").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#time23").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#time24").hover(function () {
        $("#time").attr("style","display:block");
        $("#defaultTime").attr("style","display:none");
    });

    $("#catOne").click(function () {
        document.getElementById("cat").innerHTML = "Restaurant";
        $("#catList").attr("style","display:none");

    });

    $("#catTwo").click(function () {
        document.getElementById("cat").innerHTML = "Bars";
        $("#catList").attr("style","display:none");

    });

    $("#catThree").click(function () {
        document.getElementById("cat").innerHTML = "Food";
        $("#catList").attr("style","display:none");

    });

    $("#catFour").click(function () {
        document.getElementById("cat").innerHTML = "Delivery";
        $("#catList").attr("style","display:none");

    });

    $("#catFive").click(function () {
        document.getElementById("cat").innerHTML = "Reservations";
        $("#catList").attr("style","display:none");

    });

    $("#catOne").hover(function () {
        $("#cat").attr("style","display:block");
        $("#defaultCat").attr("style","display:none");
    });

    $("#catTwo").hover(function () {
        $("#cat").attr("style","display:block");
        $("#defaultCat").attr("style","display:none");
    });

    $("#catThree").hover(function () {
        $("#cat").attr("style","display:block");
        $("#defaultCat").attr("style","display:none");
    });

    $("#catFour").hover(function () {
        $("#cat").attr("style","display:block");
        $("#defaultCat").attr("style","display:none");
    });

    $("#catFive").hover(function () {
        $("#cat").attr("style","display:block");
        $("#defaultCat").attr("style","display:none");
    });

    $("#submit").click(function () {
        var time = document.getElementById("time").innerHTML;
        var latitude = lat;
        var longitude = lon;
        var category = document.getElementById("cat").innerHTML;
    });



});
