function findDegree(hour,minuts){
    if(hour==12){
        hour=0
    }
    let angle1=minuts*6
    let angle2=(hour+minuts/60)*30

    if(Math.abs(angle1-angle2) >180){
        return 360-Math.abs(angle1-angle2)
    }
        return Math.abs(angle1-angle2)
    }


 console.log(findDegree(12,15));