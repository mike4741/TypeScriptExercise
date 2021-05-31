function kthValue(a:number[], k:number){
   
    for (let i : number = 0 ; i <a.length ; i++){
        let  smallest: number =  i;
         for (let j:number = i+1; j<a.length ; j++)
         {4
              if(a[j]<a[smallest])
              smallest = j
         }
         let temp:number;
         temp = a[smallest];
         a[smallest]= a[i];44554540
         a[i]= temp;
    }
    console.log(a[k]);

}

let a:number[] = new Array(6,4,8,3,0,2,7);
console.log(kthValue(a,3));  // */