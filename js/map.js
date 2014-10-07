 
var message;
var map;
var myLatlng;


  function start_func() {
    get_location();     
  }

  function get_location() {
    document.getElementById("area_name").innerHTML = '位置情報取得します';
      if (navigator.geolocation) {
        // 現在の位置情報取得を実施
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

      } else {
        message = "本ブラウザではGeolocationが使えません"; document.getElementById("area_name").innerHTML = message;
      }
  }


  function successCallback(pos) {
    var Potition_latitude = pos.coords.latitude;
    var Potition_longitude = pos.coords.longitude;

     // 位置情報が取得出来たらgmapをキック
     initialize(Potition_latitude,Potition_longitude);
  }

  function errorCallback(error) {
    message = "位置情報が許可されていません"; document.getElementById("area_name").innerHTML = message;
  }


  function initialize(x, y) {

    document.getElementById("area_name").innerHTML = 'google map情報を取得中';
    myLatlng = new google.maps.LatLng(x, y);
        
    var mapOptions = {
      isableDefaultUI : true,
      mapTypeControl : false,
      zoom: 15,
      center: myLatlng,
      style : google.maps.NavigationControlStyle.SMALL,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  
    map = new google.maps.Map(document.getElementById('map_canvas'), {
      disableDefaultUI : true,
      mapTypeControl : false,
      navigationControl: false,
      center: myLatlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Your position"
    });
  
  
    get_area_name(myLatlng);


  }


  function get_area_name(latLng_now) {
    // 座標から住所名を取得
    var geocoder = new google.maps.Geocoder();
      geocoder.geocode({latLng: latLng_now}, function(results, status){
      if(status == google.maps.GeocoderStatus.OK) {
          document.getElementById("area_name").innerHTML = results[0].formatted_address+'付近にいます';
      } else {
        // エラーの場合
      }
    });
  }


  function putnewMarker(newlatitude, newlongitude) {
    var myLatlng2 = new google.maps.LatLng(newlatitude, newlongitude);
    // var distance = google.maps.geometry.spherical.computeDistanceBetween(myLatlng, myLatlng2);
    // var betplace = new google.maps.LatLng((newlatitude + myLatlng.k)/2,
    //               (newlongitude + myLatlng.B)/2); 
     
     
    marker = new google.maps.Marker({
      position: myLatlng2,
      map: map,
      title:"Tokyo Station"
    });

    map.setCenter(betplace);

    // new google.maps.InfoWindow({
    //   content: distance + ' m',
    //   position: betplace
    // }).open(map);
     
    new google.maps.Polyline({
      path: [myLatlng, myLatlng2],
      map: map,
      strokeColor: 'red'
    });
    //この中に判別用の関数を作る
     
     // return distance;
  }
    

var famName = new Array();
var famLatLng = new Array();
var famMarkers = [
            ['父', 35.681382, 139.766084],
            ['母', 35.737820, 139.653566],
            ['妹', 35.658517, 139.701334],
            ['兄', 35.622716, 139.739152],
            ];
  // 家族位置表示用その場しのぎ
  function famiryPos(who) {
    var myOptions = {
        zoom: 11,
        center: new google.maps.LatLng(35.690921, 139.700258),
        mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    var famMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    
    
    for(i=0;i<famMarkers.length;i++) {
       famName[i] = famMarkers[i][0];
       famLatLng[i] = new google.maps.LatLng(famMarkers[i][1], famMarkers[i][2]);
    }
    if(who=="all") {
      for(i=0;i<famMarkers.length;i++) {
        createMarkers(famLatLng[i], famName[i], famMap);
      }
    }

  }

  function createMarkers(famLatLng, famName,map) {
    var infoWindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({position: famLatLng,map: map});
        google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(famName);
        infoWindow.open(map, marker);   
        });
  }


  function getMyPos() {
    get_location();

  }






