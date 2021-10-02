import anime from 'animejs';

const myanimation = ()=>{
    document.querySelectorAll(".myanimation").forEach(item => {
        item.addEventListener("mouseenter",function(){
            anime({
              targets: item,
              rotate: {
                value: 360,
                duration: 3000,
                easing: 'easeInOutSine'
              },
              scale: {
                value: 1,
                duration: 1600,
                delay: 100,
                easing: 'easeInOutQuart'
              },
              direction:'alternative',
              easing: 'easeInOutSine',
              loop:true,
              delay: 250 // All properties except 'scale' inherit 250ms delay
            });
        })
        item.addEventListener("mouseout",function(){
            anime.remove(item)
        })
    })
}

export default myanimation;