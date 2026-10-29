// // gsap.to("#box",{
// //     x:1000,
// //     duration:3,
// //     delay:3,
// //     repeat: -1,
// //     //yoyo backand forth ke lie use hota hai
// //     yoyo: true
// // })


// // var tl = gsap.timeline();

// // tl.to("logo",{
// //    y:20,
// //    duration:1,
// //    delay:1,
// //    duration:1,
// // })
// // tl.to(".nav-links a",{
// //    y:20,
// //    duration:1,
// //    delay:1,
// //    duration:1,
// // })


// // ISSE KE DOSRI VIDEO KA CODE HOGA

// gsap.from("#page1 #box",{
//     rotate: 360,
//     duration:3,
//     scale:0,
//     delay:1,
// })
// gsap.from("#page2 #box",{
//     rotate: 360,
//     duration:3,
//     scale:0,
//     delay:1,
//     // scroll Trigger aese use hota hai
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         scrub:2, // yh true se zyada smooth scroll krta hai, 2 se zyada smooth ho jata hai
//         //scrub:true, // ye scroll smooth kr de ga 
//     }
// })
// gsap.from("#page3 #box",{
//     rotate: 360,
//     duration:3,
//     scale:0,
//     delay:1,
// })

// gsap.to("#page3 h1",{
//     transform:"translateX(-500%)",
//     scrollTrigger:{
//         trigger:"#page3",
//         scroller:"body",
//         markers:true,
//         start:"top 0%",
//         end:"top -100%",
//         scrub:5,
//         pin:true,
//     },
// }
// )


// Yh video three ka scene hai

// var initialPath= `M 10 100 Q 500 100 990 100`;
// var finalPath = `M 10 100 Q 500 100 990 100`;

// var hmm = document.querySelector("#hmm")
// hmm.addEventListener("mousemove",function(dets){
//     path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

//     gsap.to("svg path",{
//         attr:{d:path},
//         duration:0.3,
//         ease:"power3.out",
//     })
// })

// hmm.addEventListener("mouseleave",function(){
//     gsap.to("svg path",{
//         attr:{d:initialPath},
//         duration:1.5,
//         ease:"elastic.out(1,0.1)",
//     })
// })


// 4th video bhai

var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
    })
})

