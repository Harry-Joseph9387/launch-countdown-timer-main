function funct(){
    let now=new Date();
    let endDate=new Date("May 30,2025 00:00:00")

    difference=endDate-now.getTime()

    sseconds=Math.floor(difference%(60*1000)/1000)
    sminutes=Math.floor((difference%(60*60*1000))/(60*1000))
    shours=Math.floor((difference%(24*60*60*1000))/(60*60*1000))
    sdays=Math.floor(difference/(24*60*60*1000))

    document.querySelector('.days').innerHTML=sdays
    document.querySelector('.hours').innerHTML=shours
    document.querySelector('.minutes').innerHTML=sminutes
    document.querySelector('.seconds').innerHTML=sseconds}
setInterval(funct,1000)