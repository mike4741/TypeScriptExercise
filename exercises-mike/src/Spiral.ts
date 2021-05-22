import { createEmitAndSemanticDiagnosticsBuilderProgram, reduceEachLeadingCommentRange } from "typescript";

function spiralTraverse(a:number[][]){

    let Rstart:number = 0 ;
    let Cstart:number = 0;
    let Rend: number = a.length -1;
    let Cend: number = a[0].length -1;
    let result:number[] = [];

     while (Rstart <= Rend && Cstart <= Cend ){
           for( let col= Cstart ; col<Cend ; col ++){
               result.push(a[Rstart][col]);
           }

           for(let row=Rstart ; row<Cend ;row++){
               result.push(a[row][Cend]);
           }
           for(let col = Cend ; col>Cstart ;col --){
               result.push(a[Rend][col]);
           }

           for(let row= Rend ; row>Rstart ; row--){
               result.push(a[row][Cstart])
           }

           Rstart ++;
           Rend --;
           Cstart++;
           Cend--;
     }
 return result;


}

console.log(spiralTraverse( [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
  ]));  //-1