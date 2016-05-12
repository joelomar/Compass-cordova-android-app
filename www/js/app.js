document.addEventListener("deviceready", onDeviceReady, false);

      function onDeviceReady() {

       alert('device ready');
       
       var watchID = navigator.compass.watchHeading(onSuccess, onErrorCB, options);
         
         function onSuccess(heading) {
            var comp = document.querySelector('#compassBox');
            comp.innerHTML = 'Position: ' + heading.magneticHeading;

            if (heading.magneticHeading <= 45.00 || heading.magneticHeading >= 315.00) {
              
              var popBox = document.querySelector('#pop_box');
              document.body.style.background = "#80ff00";
              navigator.notification.beep(1);
              navigator.vibrate(1000);
              popBox.innerHTML = 'We are heading:' + ' ' +'<h3 style=color:blue;>North</h3>';
              

            }

             if (heading.magneticHeading >= 46.00 && heading.magneticHeading <= 136.00) {

               var popBox = document.querySelector('#pop_box');
               document.body.style.background = "#F4F759";
               popBox.innerHTML = 'We are heading:' +  ' ' + '<h3 style=color:blue;>East</h3>';
              

            }

            if (heading.magneticHeading >= 137.00 && heading.magneticHeading <= 227.00) {
               var popBox = document.querySelector('#pop_box');
              document.body.style.background = "#ff4000";
              navigator.notification.beep(1);
              popBox.innerHTML = 'We are heading:' +  ' ' + '<h3 style=color:blue;>South</h3>';
              


            }


            if (heading.magneticHeading >= 228.00 && heading.magneticHeading <= 314.00) {

              var popBox = document.querySelector('#pop_box');
              document.body.style.background = "#F9A047";
              popBox.innerHTML = 'We are heading:' + ' ' + '<h3 style=color:blue;>West</h3>';
              

            }

        };



         function onErrorCB(compassError) {
           alert('Compass error: ' + compassError.code);
         };

         var options = {
         frequency: 3000
        }; 


//-------------------------Geolocation-------------------///


var butLat = document.querySelector('#but_lat'),
    geoBox = document.querySelector('#geo_box'),
    googleBox = document.querySelector('#google_box');

    butLat.onclick = function() {

   navigator.geolocation.watchPosition(sucessCB, errorCB, optionsCB);

   function sucessCB(pos) {
     
     var geoPos = pos.coords,
         latlong = geoPos.latitude + ' ' + '|' + ' ' + geoPos.longitude;
     //var gooImg = "http://maps.googleapis.com/maps/api/staticmap?center="+latlong+"&zoom=14&size=400x300&sensor=false";
     //geoBox.innerHTML = latlong;
     //googleBox.innerHTML = "<img src='"+gooImg+"'/>";
       geoBox.innerHTML = latlong;

     
}

   function errorCB(err) {

     var errorPos = err.code;
     geoBox.innerHTML = errorPos;

}

   var optionsCB = {
        
            timeout: 1000,
            enableHighAcuracy: true

};

}


//----------------------Aceleration-------------------// 


var butAcel = document.querySelector('#but_acel'),
    acelBox = document.querySelector('#acel_box');

    butAcel.onclick = function() {

var wacthID = navigator.accelerometer.watchAcceleration(sucessCBK, errorCBK, optionCBK); 

   function sucessCBK(acela) {
        
        var resuno = acela.x;
        var resdos = acela.y;
        var restres = acela.z;
        var rescuatro = acela.timestamp;
        acelBox.innerHTML = 'x: ' + resuno + ' | ' + 'y: ' + resdos + ' | ' + 'z: ' + restres + ' | ' + 'TimeStamp: ' + rescuatro;

   } 

   function errorCBK(err) {

      alert('err');
    
   } 

   var optionCBK = {

       frequency: 1000
    
   }; 

 }
     

}