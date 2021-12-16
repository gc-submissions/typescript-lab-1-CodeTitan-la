interface Mountain {
    name:string;
    height:number
}

let mountains:Mountain[] = [{name:"kilimanjaro", height:19341},{name:"Everest", height:29029}, {name:"Denali", height: 20310}];

const findNameOfTallestMountain = (mountains:Mountain[]) => {
    let mountHeight:number = 0;
    let mountainName:string = ' ';
    for(let i = 0; i < mountains.length; i++){
        if(mountains[i].height > mountHeight){
            mountHeight = mountains[i].height
            mountainName = mountains[i].name
        }
        
    }
    return mountainName
}
console.log(findNameOfTallestMountain(mountains));

