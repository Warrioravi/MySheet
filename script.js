$(document).ready(()=>{
    //creating column names
    let columnContainer=$(".column-name-container");
    let rowContainer =$(".row-name-container");
  for(let i=1;i<=100;i++){
    let ans="";
    let n=i;
    
    while(n>0){
          let rem=n % 26;
          if(rem==0){
              ans= "Z" +ans;
              n=Math.floor(n/26)-1;
           }
           else{
               ans=String.fromCharCode(rem-1+65) + ans;
               n=Math.floor(n/26);
        }
    }
    let col=$(`<div class="column-name colId-${i}" id="colCod-${ans}">${ans}</div>`)
    columnContainer.append(col);
    let row=$(`<div class="row-name" id="rowId-${i}">${i}</div>`);
    rowContainer.append(row);
  }

//now creating row names

//data-input-cells formation
let cellContainer = $(".input-cell-container");
   for(let i=1;i<=100;i++){
       let currRow=$(`<div class="cell-row"></div>`);
       for(let j=1;j<=100;j++){
           let cellCode=$(`.colId-${j}`).attr("id").split("-")[1];
           let cell=$(`<div class="input-cell" id="row-${i}-col-${j}" data="code-${cellCode}"></div>`);
           currRow.append(cell);
       }
       cellContainer.append(currRow);
   }
   //selected effect on align text icons suing jQuery
   let alignIcons=document.querySelectorAll(".align-icon");
   for(let i=0;i<alignIcons.length;i++){
    
    alignIcons[i].addEventListener('click',(e)=>{
        let currSelected=document.querySelector(".align-icon.selected");
        currSelected.classList.remove("selected");
        e.currentTarget.classList.add("selected");
    });
  }

  $(".style-icon").click(function(){
      $(this).toggleClass("selected");
  })
  $(".input-cell").click(function(e){
      if(e.ctrlKey){
        $(this).addClass("selected");
        //   let [row,col]= getRowCol(this);
        //   if(row>1){
        //       let topCellSelected=$(`#row-${row-1}-col-${col}`).hasClass("selected");
        //       if(topCellSelected){
        //           $(this).addClass("top-cell-selected");
        //       }
        //       $(`#row-${row-1}-col-${col}`).addClass("bottom-cell-selected");
        //   }
        //   if(row<100){
        //     let bottomCellSelected=$(`#row-${row+1}-col-${col}`).hasClass("selected");
        //     if(bottomCellSelected){
        //         $(this).addClass("bottom-cell-selected");
        //     }
        //     $(`#row-${row+1}-col-${col}`).addClass("top-cell-selected");
        //   }
        //     if(col>1){
        //     let leftCellSelected=$(`#row-${row}-col-${col-1}`).hasClass("selected");
        //     if(leftCellSelected){
        //         $(this).addClass("left-cell-selected");
        //     }
        //     $(`#row-${row}-col-${col-1}`).addClass("right-cell-selected");
        //    }
        // if(col<100){
        //     let rightCellSelected=$(`#row-${row}-col-${col+1}`).hasClass("selected");
        //     if(rightCellSelected){
        //         $(this).addClass("right-cell-selected");
        //     }
        //     $(`#row-${row}-col-${col+1}`).addClass("left-cell-selected");
        //    }
           
       }
      else{
          $(".input-cell.selected").removeClass("selected");
          $(this).addClass("selected");
      }
  })
//   $(".input-cell").click(function (e){
//      console.log(e);
//   })

//   $(".input-cell").click(function(){
//       $(".input-cell.selected").removeClass("selected");
//       $(this).addClass("selected");
//   })

  $(".input-cell").dblclick(function () {
      $(".input-cell.selected").removeClass("selected");
      $(this).addClass("selected");
      $(this).attr("contenteditable","true");
      $(this).focus();
    });

    $(".input-cell-container").scroll(function () {
        // console.log(this.scrollLeft); 
        $(".column-name-container").scrollLeft(this.scrollLeft);
        $(".row-name-container").scrollTop(this.scrollTop);
    })


 

});

function getRowCol(element){
   let rowCol=$(element).attr("id");//$(element).attr("id").split("-")
   let row=parseInt(rowCol.charAt(4));
   let col=parseInt(rowCol.charAt(10));
   return [row,col];
}


