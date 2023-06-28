let navigation = document.querySelector('.navigation');
let close = document.querySelector('.close');
navigation.onclick = function(){
    addActiveClass();
}
close.onclick = function(){
  navigation.classList.remove('active')
}

// Gọi hàm addActiveClass sau 2 giây (2000 mili giây)
setTimeout(addActiveClass, 1500);

// Hàm thêm class active cho navigation
function addActiveClass() {
  navigation.classList.add('active');
}
