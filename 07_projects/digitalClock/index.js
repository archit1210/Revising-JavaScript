const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  console.log('value is', date.toLocaleTimeString())
  clock.innerText = date.toLocaleTimeString()
},1000)