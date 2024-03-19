bgContiner = document.getElementById('bgContainer');
bulbImg = document.getElementById('bulb-img');
catImg = document.getElementById('cat-img')
switchStatus = document.getElementById('switchStatus')
OnBtn = document.getElementById('OnBtn')
OffBtn = document.getElementById('OffBtn')


function on(){
bulbImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
catImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
switchStatus.textContent = 'Switched On'
OnBtn.style.backgroundColor= '#9c0000'
OffBtn.style.backgroundColor = '#5f5f5f'
}
function off(){
bulbImg.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
catImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
switchStatus.textContent = "Switched Off"
OffBtn.style.backgroundColor = 'green'
OnBtn.style.backgroundColor = '#5f5f5f'

}