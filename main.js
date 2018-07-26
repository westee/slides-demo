let $buttons = $("#buttonWrapper > button")
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0;
fakeSlides();
bindEvents();
$slides.css({ transform: 'translateX(-300px)' })
// console.log($firstImg[0].outerHTML);   //可获得指定元素(标签)
// console.log($lastImg[0].outerHTML);    //可获得指定元素(标签)

$('#previous').on('click', function () {
  goToSliede(current - 1)
})
$('#next').on('click', function () {
  goToSliede(current + 1)
  console.log('next')
  console.log(current)
})
console.log('$buttons.length的长度是' + $buttons.length)
//visibilitychange  true or false
document.addEventListener('visibilitychange', function (e) {
  if (document.hidden) {
    window.clearInterval(a)
  } else {
    a = setInterval(function () {
      goToSliede(current + 1)
    }, 1000);
  }
})
let a = setInterval(function () {
  $('.window').on('mouseenter', function () {
    clearInterval(a);
  })
  goToSliede(current + 1)
}, 1000);

$('.window').on('mouseleave', function () {
  a = setInterval(function () {
    goToSliede(current + 1)
  }, 1000);
})

function bindEvents() {
  $('#buttonWrapper').on('click', 'button', function (e) {
    let $button = $(e.currentTarget);
    // let $a = $(e.currentTarget);
    let index = $button.index();
    goToSliede();
  }
  )
}
function goToSliede(index) {
  if (index > $buttons.length - 1) {
    index = 0;
    console.log(index)
  } else if (index < 0) {
    index = $buttons.length - 1;
    console.log(index)
  }

  if (current === $buttons.length - 1 && index === 0) {
    //从最后一张到第一张
    $slides.css({ transform: `translateX(${-($buttons.length + 1) * 300}px)` })
      .one('transitionend', function () {
        $slides.hide().offset()
        $slides.css({ transform: `translateX(${-(index + 1) * 300}px)` }).show()
      })
    // console.log(index)
  } else if (current === 0 && index === $buttons.length - 1) {
    //第一张到最后一张
    $slides.css({ transform: `translateX(0px)` })
      .one('transitionend', function () {
        $slides.hide().offset()
        $slides.css({ transform: `translateX(${-(index + 1) * 300}px)` }).show()
      })
    // console.log(index)
  } else {
    $slides.css({ transform: `translateX(${-(index + 1) * 300}px)` })
    // console.log(index)
  }
  current = index
}


function fakeSlides() {
  let $firstImg = $images.eq(0).clone(true)
  let $lastImg = $images.eq($images.length - 1).clone(true)

  //将第一个图片添加到最后一张照片的后面
  $slides.append($firstImg);
  //将最后一张图片添加到第一张照片前面
  $slides.prepend($lastImg);
}




















  // $buttons.eq(0).on('click', function () {
  //   if (current === 2) {
  //     $slides.css({ transform: 'translateX(-1200px)' })
  //       .one('transitionend', function () {
  //         $slides.hide()
  //           .offset()
  //         $slides.css({ transform: 'translateX(-300px)' }).show()
  //       })
  //     console.log(current)
  //   } else {
  //     $slides.css({ transform: 'translateX(-300px)' })
  //   }
    // current = 0;
  // })

//   $buttons.eq(1).on('click', function () {
//     $slides.css({ transform: 'translateX(-600px)' })
//     conso.log(current)
//     current = 1;
//   })

//   $buttons.eq(2).on('click', function () {
//     if (current === 0) {
//       $slides.css({ transform: 'translateX(0px)' })
//         .one('transitionend', function () {
//           $slides.hide()
//             .offset()
//           $slides.css({ transform: 'translateX(-900px)' }).show()
//         })
//       console.log(current)
//     } else {
//       $slides.css({ transform: 'translateX(-900px)' })
//     }
//     current = 2;
//   })

// }































// $('.images > img:nth-child(1)').addClass('current')
// $('.images > img:nth-child(2)').addClass('enter')
// $('.images > img:nth-child(3)').addClass('enter')
// let n = 0;
// setInterval(() =>{
//   $(`.images > img:nth-child(${n%3+1})`).removeClass('current').addClass('leave')
//   .one('transitionend', (e) => {
//     $(e.currentTarget).removeClass('leave').addClass('enter')
//   })
//   $(`.images > img:nth-child(${(n%3+1)%3+1}`).removeClass('enter').addClass('current')
//   n +=1;
// }, 1000)
// $('.images > img:nth-child(n)').removeClass('current').addClass('leave');
// function changeStatus(a){
//   $(`'.images > img:nth-child(${a}%3+1)'`).removeClass('current').addClass('leave')
//     .one('transitionend', (e) => {
//       $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//   $(`'.images > img:nth-child(${a}%3+1)%3+1)'`).removeClass('enter').addClass('current')
//   n += 1;
// }
// let n = 0;
// setInterval(changeStatus(n),1000);

//   function changeStatus(n){
//   $('.images > img:nth-child(n%3+1)').removeClass('current').addClass('leave');
//   $('.images > img:nth-child((n%3+1)%3+1)').removeClass('enter').addClass('current');
//   n +=1;
// }


  // setTimeout(function(){
//   $('.images>img:nth-child(1)').css({
//   transform: 'translateX(-100%)'
// })
//   $('.images>img:nth-child(2)').css({
//   transform: 'translateX(-100%)'
// })
//   $('.images>img:nth-child(1').one('transitionend', function(e){   //监听动画结束,仅一次
//     $(e.currentTarget).addClass('right') 
//     //给被操作目标添加类right,将其动画消掉
//   })
// }, 1000)

// setTimeout(function(){
//   $('.images>img:nth-child(2)').css({
//     transform:'translateX(-200%)'
//   })
//   $('.images>img:nth-child(3)').css({
//     transform:'translateX(-100%)'
//   })
// },3000)
