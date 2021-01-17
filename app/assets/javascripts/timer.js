$(function () {
  $('.speak-btn').on('click', function () {
      const speak_content = new SpeechSynthesisUtterance('あいうえお');
      speechSynthesis.speak(speak_content);
  });
});
