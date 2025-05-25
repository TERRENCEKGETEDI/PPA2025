function run(){
    let answers=    ['3',   '2',    '3',    '1',    '3',    '4',    '1',    '1',    '2',    '1',    '1235', '13',    '12',   '24',   '34',   '1',   '12',   '12',   '34',   '1',    '12',   '1',    '1',    '13',   '1',    '12',   '12',   '1',    '1',    '1',    '12'];
    let questions=  ['q1',  'q2',   'q3',   'q4',   'q5',   'q6',   'q7',   'q8',   'q9',   'q10',  'q11',  'q12',  'q13',  'q14',   'q15', 'q16',  'q17',  'q18',  'q19',  'q20',  'q21',  'q22',  'q23',  'q24',  'q25',  'q26',  'q27',  'q28',  'q29',  'q30',  'q31'];
    let user=       ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];

    for(let i=0;i<questions.length;i++){
        let temp=document.getElementsByName(questions[i]);
        user[i]='';
        for(let j=0;j<temp.length;j++){
            if(temp[j].checked){
                user[i]+=temp[j].value;
            }
        }
    }

    let total=0;
    let correctIncorrect="";
    for(let i=0;i<answers.length;i++){
        if(parseInt(answers[i])===parseInt(user[i])){
            total++;
            correctIncorrect+="Question "+(i+1)+" is correct<br><br>";
        }
        else{
            correctIncorrect+="Question "+(i+1)+" is incorrect. <br>Your answer: "+user[i]+"<br>Correct answer(s): "+answers[i]+"<br><br>";
        }
    }
    alert(total+"/"+answers.length+" "+parseInt(total*100/answers.length)+"%\n\nCheck the answers below.");
    document.getElementById("result").innerHTML=correctIncorrect;
    document.getElementById("result").style.display="block";
}
function submit(){
    let questions=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10','q11','q12','q13','q14','q15','q16','q17','q18','q19','q20','q21','q22','q23','q24','q25','q26','q27','q28','q29','q30','q31'];
    
    for(let i=0;i<questions.length;i++){
        let valid=true;
        let temp=document.getElementsByName(questions[i]);
        for(let j=0;j<temp.length;j++){
            if(temp[j].checked){
                valid=false;
            }
        }
        // if(valid){
        //     alert("Please answer all questions");
        //     return;
        // }
    }
    run();
}
function home(){
    window.location.href = "./home.html";
}