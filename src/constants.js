function ColorCode(value){
    if(value >= 0 && value <= 1) return '#00c400';
    else if(value >= 1 && value <= 2) return '#00e020'; 
    else if(value >= 2 && value <= 3) return '#00f000';
    else if(value >= 3 && value <= 4) return '#d1ff00';
    else if(value >= 4 && value <= 5) return '#ffe000';
    else if(value >= 5 && value <= 6) return '#ffcc00';
    else if(value >= 6 && value <= 7) return '#ffbc10';
    else if(value >= 7 && value <= 8) return '#ff9c20';
    else if(value >= 8 && value <= 9) return '#ff8000' ;
    else return '#ff0000';
}

export {ColorCode};