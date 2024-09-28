function showDiv(index) {

    let carousels = document.getElementsByClassName('carousel')
    for (let i = 0; i < carousels.length; i++) {
      carousels[i].style.display = 'none'
    }
  
    let dots = document.getElementsByClassName('dot')
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active')
    }
  
    document.getElementById('carousel' + index).style.display = 'block'
    dots[index - 1].classList.add('active')
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    let dots = document.getElementsByClassName('dot')
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', function () {
        let index = this.getAttribute('data-index')
        showDiv(index)
      })
    }
  
    showDiv(1)
  })
  