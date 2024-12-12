let form=document.getElementById('form')
let nameInputBox=document.getElementById('nameInputBox')
let scoreInputBox=document.getElementById('scoreInputBox') 
let resultBtn=document.getElementsByClassName('result-check-btn')
let resetButton=document.getElementById('resetButton')
let popupbox=document.getElementById('popup-box')
let popupBoxH4=document.getElementById('popup-box-h4')
let resultName=document.getElementById('resultName')
let resultScore=document.getElementById('resultScore')
let resultGrade=document.getElementById('resultGrade')
let errorMsgName=document.getElementById('error-msg') 
let errorMsgScore=document.getElementById('error-msg-score')





   
let [A_plus ,A, B_plus ,B, C_plus ,C, D_plus,D]=[90,80,70,60,50,40,30,29]
let overScore=101


    function findGrade(score){
        let grade
       
    
        if(A_plus<=score && (overScore>score)){
    
            grade="A+"
        }       
        else if(A<=score && (overScore>score) ){
            grade="A"
        }
        else if(B_plus<=score && (overScore>score)){
            grade="B+"
        }
        else if(B<=score && (overScore>score)){
            grade="B"
        }
        else if(C_plus<=score && (overScore>score)){
            grade="C+"
        }
    
        else if(C<=score && (overScore>score)){
            grade="C"
        }
        else if(D_plus<=score && (overScore>score)){
            grade="D+"
        }
        else if(D>=score && (overScore>score)){
            grade=false
        }
        
        // else{
        
        //    grade={errorMsg}
        // }
        return(grade)
       
        }


    // reset button
    resetButton.addEventListener('click',()=>{
        popupbox.style.display='none'
       })

    // function name validation msg
       function errorMassage(err){
       errorMsgName.style.display="block"
        errorMsgName.innerText=err
    }

    // popup box
    function popupBox(){
        popupbox.style.display='block'
    }

 
// form

    form.addEventListener("submit",(event)=>{
        event.preventDefault()

      errorMsgName.style.display="none"
      errorMsgScore.style.display='none'
    

        let name=nameInputBox.value
                 console.log(name)
        let score=scoreInputBox.value
                 console.log(score)

     
     // calling function find grade
     
     let grade= findGrade(score)

        resultName.innerText=name
        resultScore.innerText=score
        resultGrade.innerText=grade

        //   checking name validation
        if(name==0){
            errorMassage("Please Enter Your Name !")
          
        }
        if(score==0){
          
            errorMsgScore.style.display='block'
            errorMsgScore.innerText="Please Enter Your Score !"  
          
        }
       console.log(grade)

       if(grade==false && !name==0 && !score==0) {
        popupBox()
            popupbox.style.backgroundColor="red"
            popupBoxH4.innerText="You Are Faild !"
            popupBoxH4.style.fontSize='16px'
            resultGrade.innerText="Faild"
           
       }
       if(!grade==false && !name==0 && !score==0) {
        popupBox()
        popupbox.style.backgroundColor="green"
        popupBoxH4.innerText="You Are Pass"
        popupBoxH4.style.fontSize='16px'  
          
       }
      
      
    })
    
