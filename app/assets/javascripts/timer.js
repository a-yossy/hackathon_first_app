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
      var repeat = ('起きてください。').repeat(100);
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
      console.log(repeat);
      var speak = function(){
        speechSynthesis.speak(speakContent);
      };
      var timeoutID;
      timeoutID = setTimeout(speak, restTime*1000);
      document.cookie = 'timeoutID=' + encodeURIComponent(timeoutID);
      $('.js-alarm-btn').text('アラームを解除する');
    }
    $('.js-alarm-btn').toggleClass('on');
  });
});

$(function () {
  $('.js-stop-alarm-btn').on('click', function () {
    speechSynthesis.cancel()
  })
});
