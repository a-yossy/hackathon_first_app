$(function () {
  $('.js-alarm-btn').on('click', function () {
    if($('.js-alarm-btn').hasClass('on')){
      var cookies = document.cookie; 
      var cookiesArray = cookies.split(';'); 
      var timeoutID;
      for(var for_cookie of cookiesArray){ 
          var split_cookie = for_cookie.split('=');
          if (split_cookie[0] === 'timeoutID') {
            timeoutID = split_cookie[1];
          }
      }
      clearTimeout(timeoutID);
      $('.js-alarm-btn').text('アラームを登録する');
    }else{
      var contents = '';
      $.ajax({
        url: '/api/todoes',
        type: 'GET',
      }).done(function (data) {
        for(var toDo of data){
          contents += toDo["content"]+"を頑張りましょう。";
        }
        contents += "起きてください。"
        var repeat = contents.repeat(1000);
        var speakContent = new SpeechSynthesisUtterance(repeat);
        var inputAlarmTimeStr = document.getElementById("alarmTime").value;
        var alarmTime = Number(inputAlarmTimeStr.slice(0, 2)) * 3600 + Number(inputAlarmTimeStr.slice(-2)) * 60;
        var currentDatetime = new Date();
        var currentTime = currentDatetime.getHours() * 3600 + currentDatetime.getMinutes().toString().padStart(2, '0') * 60 + currentDatetime.getSeconds();
        var restTime;
        if (alarmTime > currentTime) {
          restTime = (alarmTime - currentTime);
        } else {
          restTime = (24*3600 + alarmTime -currentTime)
        }
        var alarmGetTime = currentDatetime.getTime() + restTime*1000;
        var speak = function(){
          speechSynthesis.speak(speakContent);
        };
        var timeoutID;
        timeoutID = setTimeout(speak, restTime*1000);
        document.cookie = 'timeoutID=' + encodeURIComponent(timeoutID);
        document.cookie = 'alarmGetTime=' + alarmGetTime;
        $('.js-alarm-btn').text('アラームを解除する');
        })
    }
    $('.js-alarm-btn').toggleClass('on');
  });
});

$(function () {
  $('.js-stop-alarm-btn').on('click', function () {
    var url = "https://kenkoooo.com/atcoder/atcoder-api/results?user=yuya333"
    fetch(url)
    .then(function (data) {
      return data.json(); 
    })
    .then(function (json) {
      var lastAC = json[0];
      var acTime = json[0].epoch_second;
      for (var i = 0; i < json.length; i++) {
        if (json[i].result !== "AC") {
          continue;
        }
        if (json[i].epoch_second > acTime) {
          acTime = json[i].epoch_second;
          lastAC = json[i];
        }
      }
      var cookies = document.cookie; 
      var cookiesArray = cookies.split(';'); 
      var alarmGetTime;
      for(var for_cookie of cookiesArray){ 
          var split_cookie = for_cookie.split('=');
          if (split_cookie[0] === ' alarmGetTime') {
            alarmGetTime = split_cookie[1];
          }
      }
      if (Number(alarmGetTime) < Number(acTime)*1000) {
        speechSynthesis.cancel();
      }
    });
  })
});
