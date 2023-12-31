window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);


function time() {
    var a = 0
    setInterval(function () {
        a = a + Math.floor(Math.random() * 10)
        if (a < 100) {
            document.querySelector("#over1").innerHTML = a + "%"
        }
        if (a > 100) {
            a = 100
            document.querySelector("#over1").innerHTML = a + "%"
        }
    }, 150)

}
time()

gsap.to("#over", {
    y: -1000,
    duration: 2.2,
    delay: 4.3,
})

gsap.from("#vect1", {
    rotation: 360,
    opacity: 0,
    duration: 2,
    delay: 7.3,
    y: -600,
    ease: "bounce"

})



document.getElementById("sidebar").style.display = "none";

gsap.from("#im1,#nav2 h3,#nav3 button,#nav3 .but,#nav3 #b12", {
    y: -100,
    duration: 1.5,
    delay: 4.8,
    opacity: 0,
    stagger: 0.5
})
/*gsap.to("#im1",{
    x:650,
    y:300,
    duration:3,
    delay:1,
    rotation:360,
    opacity:1,
    scale:3,
    repeat:1,
    yoyo:true,
})*/
function nav() {
    gsap.to("#im1", {
        x: 650,
        y: 300,
        duration: 2,
        rotation: 360,
        autoSleep: 30,
        scale: 2.5,
        repeat: 1,
        yoyo: true
    })
}
/*var cur = document.querySelector("#cursor")
var blurr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    blurr.style.left = dets.x - 150 +"px"
    blurr.style.top = dets.y- 150 +"px"
})*/

gsap.from("#text1 #rtu3", {
    opacity: 0,
    x: 300,
    delay: 7,
    duration: 2,
    stagger: 0.75
},)
gsap.from("#text1 #rtu", {
    opacity: 0,
    x: -300,
    delay: 7.05,
    duration: 2,
    stagger: 0.75
},)

gsap.from("#rat", {
    opacity: 0,
    x: 450,
    y: 900,
    delay: 7.2,
    duration: 3.4,
    stagger: 0.75
},)

/*function drop(){
gsap.to("#nav1 img",{
    yoyo:true,
    y:140,
    duration:1,
    repeat:1
})
gsap.to("#rtu3,#rtu2,#rtu",{
    opacity:0,
    x:150,
    y:600,
    duration:2.3,
    delay:1.2,
    stagger:-0.5,
    scale:1.3,
})
}*/


function forward() {
    document.getElementById("sidebar").style.width = "100%";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar").style.translate = "0.5s";

}

function backward() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebar").style.translate = "0.5s";
}
var a = 3;
function but31() {
    if (a % 2 == 0) {
        document.getElementById("h31").style.color = "cyan";
        document.getElementById("h32").style.color = "white";
        document.getElementById("b1029").style.backgroundColor = "cyan";
        a = a - 1;
    }
    else {
        document.getElementById("h31").style.color = "white";
        document.getElementById("h32").style.color = "cyan";
        document.getElementById("b1029").style.backgroundColor = "white";
        a = a + 1;
    }
}


function welcome() {
    var value = localStorage.getItem('item')
    Swal.fire({
        title: `Hello🤩 <h1><u>${value}</u></h1> Welcome to this site<br> Full your kart with our superb compilation.<br>Hurry up!`,
        height: 600,
        width: 900,
        padding: '3em',
        color: '#FFFF00',
        background: '#fff url(wallpaperlogin.jpg)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
    })

}

/*gsap.to("#rtu3,#rtu2,#rtu",{
    opacity:1,
    x:0,
    duration:1.2,
    stagger:-0.5,
    scrollTrigger:{
        trigger:"#rtu3,#rtu2,rtu",
        scroller:"",
        start:"top 5%",
        end:"top 50%",
        scrub:true,
        marker:true
    }
})

gsap.from("#vect1",{
    opacity:0,
    x:-500,
    y:-500,
    ease:"bounce",
    duration:2.5,
    markers:true,
    delay:7.2
})*/

gsap.from("#page2 #h31", {
    x: 900,
    duration: 6,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2 #h31",
        scroller: "body",
        scrub: true,
        start: "top 60%",
        end: "top 20%",
    }
})

gsap.from("#page2 #h32", {
    x: -900,
    duration: 6,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2 #h32",
        scroller: "body",
        scrub: true,
        start: "top 80%",
        end: "top 30%",
    }
})
function eos() {
    gsap.fromto("#abouttt", {
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: 'power4.out',
    })
}

function nevercome() {
    window.location.replace("dummy.html");
}
/*
 gsap.from("#rtu,#rtu3",{
        duration:2,
        y:130,
        stagger:0.2,
        repeat:-1,
        yoyo:true,
 })*/
gsap.from(".kyayaar", {
    y: -200,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        marker: true
    }
})

gsap.to("#page3 #h11", {
    transform: "translateX(-70%)",
    scrollTrigger: {
        trigger: "#page3 #h11",
        start: "top 40%",
        end: "top 10%",
        scrub: 2,
    },
})

gsap.from(".ok,#page4 img", {
    y: -200,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 40%",
        end: "top 10%",
        duration: 1.2,
        opacity: 0,
        scrub: true,
    }
})

gsap.from("#page5 img", {
    y: -200,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        start: "top 40%",
        end: "top 10%",
        duration: 1.2,
        opacity: 0,
        scrub: true,
    }
})




const msg = document.querySelector("#msg1");
const sumbitbtn = document.getElementById("submitbtn");

msg.addEventListener("focus", submsg);

function submsg() {
    sumbitbtn.style.display = "block";
    sumbitbtn.style.animation = "slide 0.5s ease-in-out";
}








