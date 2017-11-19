//javascript:for (var i = 0; i < document.getElementsByClassName("expando-button").length; i++) {document.getElementsByClassName("expando-button")[i].click()}
window.onload = function() {
  if (!(/\/comments\//).test(window.location.href)) {
    for (var i = 0; i < document.getElementsByClassName("expando-button").length; i++) {
      document.getElementsByClassName("expando-button")[i].click();
    }
  }
}
