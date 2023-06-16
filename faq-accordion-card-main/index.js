let button = document.querySelectorAll('#btn');
let image = document.querySelectorAll('#pic');
let question = document.getElementsByClassName('ques');
let line = document.querySelectorAll('hr');
let answer = document.querySelectorAll('#getans');

answer[0].style.display = 'none';
answer[1].style.display = 'none';
answer[2].style.display = 'none';
answer[3].style.display = 'none';
answer[4].style.display = 'none';

line[0].style.margin = '-44px 49px 0px';
line[1].style.margin = '-44px 49px 0px';
line[2].style.margin = '-44px 49px 0px';
line[3].style.margin = '-44px 49px 0px';
line[4].style.margin = '-44px 49px 0px';

for(let i=0; i<button.length;i++){
    button[i].addEventListener('click',function(){
    
            if(question[i].style.fontWeight === 'bold'){                         question[i].classList.add(question[i].style.fontWeight = '400')
             line[i].style.margin = '-44px 49px 0'
            answer[i].style.display = 'none';
            image[i].style.transform = 'none';
    
        }
        else{
            question[i].classList.add(question[i].style.fontWeight = 'bold')
            line[i].style.margin = '0 0 0 47px'
            answer[i].style.display = 'block'
            image[i].style.transform = 'rotate(3.142rad';
        }
       
         
    })
}
// let ansIsHidden = {};

// for(let i=0; i< button.length; i++){
//     button[i].addEventListener('click', () => {
//         hideAns();
//         getAns(i);
//     });
// }
// function getAns(i){
//         question[i].style.fontWeight = 'bold';
//         line[i].style.margin = '0 0 0 47px';
//         answer[i].style.display = 'block';
            
//     }


// function hideAns(){    
//     for(let i=0; i<button.length;i++){
//         button[i].addEventListener('click', () => {
//             question[i].style.fontWeight = '400'
//             line[i].style.margin = '-44px 49px 0'
//             answer[i].style.display = 'none';
//         })
//     }
// }


// getAns(button)
// hideAns(button)
// function task(p_id){

//     console.log(p_id);
//     let id = p_id + 'ans'
//     let button = document.getElementById(id);
//     let question = document.getElementById(p_id);

//     if(id in ansIsHidden && !ansIsHidden[id]){
//             question.style.fontWeight = '400'
//             button.style.display = 'none';
//             ansIsHidden[id] = true;
       
//     }
//     else{
//         button.style.display = 'block';
//         question.style.fontWeight = 'bold'
//         ansIsHidden[id] = false;
//     }
// }


// getAns(button)
// getAns(button);

// for(let i=0; i<button.length;i++){
//     button[i].addEventListener('click',function (){
//         button[i].classList.toggle(question[i].style.fontWeight = 'bold',line[i].style.margin = '0 0 0 47px',answer[i].style.display = 'block');
        
//     })
// }

// function ansShow(i){

//     button[i].classList.add(question[i].style.fontWeight = 'bold',line[i].style.margin = '0 0 0 47px',answer[i].style.display = 'block');
// }

// function hideAns(i){

//     button[i].classList.remove(question[i].style.fontWeight = '400', line[i].style.margin = '-44px 49px 0', answer[i].style.display = 'none');
// }