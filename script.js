setInterval(()=>{
    let date=new Date();
    let hou=date.getHours();
    let minut=date.getMinutes();
    let secon=date.getSeconds();
    let hrot=30*hou+minut/2;
    let hmin=6*minut;
    let hsec=6*secon;
    hour.style.transform=`rotate(${hrot}deg)`;
    minute.style.transform=`rotate(${hmin}deg)`;
    second.style.transform=`rotate(${hsec}deg)`;

},1000)