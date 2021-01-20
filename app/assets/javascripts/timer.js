$(function () {
  $('.js-create-alarm-btn').on('click', function () {
      var speakContent = new SpeechSynthesisUtterance('あいうえお');
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
      var speak = function(){
        speechSynthesis.speak(speakContent);
      };
      var timeoutID;
      timeoutID = setTimeout(speak, restTime*1000);
  });
});
