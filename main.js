$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')
let n = 0;
setInterval(() =>{
  $(`.images > img:nth-child(${n%3+1})`).removeClass('current').addClass('leave')
  .one('transitionend', (e) => {
    $(e.currentTarget).removeClass('leave').addClass('enter')
  })
  $(`.images > img:nth-child(${(n%3+1)%3+1}`).removeClass('enter').addClass('current')
  n +=1;
}, 1000)
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
