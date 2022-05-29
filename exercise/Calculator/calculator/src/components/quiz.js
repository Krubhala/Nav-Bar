import React,{useState} from "react"
import "./quiz.css"

function Quiz(){

const questions = [
    {

    question: "What is the scientific name of a butterfly?",
answers: [
    {answerText:"Apis",isCorrect:false},
    {answerText:"Coleoptera",isCorrect:false},
    {answerText:"Formicidae",isCorrect:true},
    {answerText:"Rhopalocera",isCorrect:false},
],
},
{
question: "Who are the actors in The Internship?",
answers: [
{answerText:"Ben Stiller, Jonah Hill",isCorrect:false},
{answerText:"Courteney Cox, Matt LeBlanc",isCorrect:false},
{answerText:"Kaley Cuoco, Jim Parsons",isCorrect:true},
{answerText:"Vince Vaughn, Owen Wilson",isCorrect:false},
],
},
{
question: "What is the capital of Spain?",
answers: [
    {answerText:"Berlin",isCorrect:false},
    {answerText:"Buenos Aires",isCorrect:true},
    {answerText:"Madrid",isCorrect:false},
    {answerText:"San Juan",isCorrect:false},
],
},
{
question: "What are the school colors of the University of Texas at Austin?",
answers: [
    {answerText:"Black, Red",isCorrect:false},
    {answerText:"Blue, Orange",isCorrect:true},
    {answerText:"White, Burnt Orange",isCorrect:false},
    {answerText:"White, Old gold, Gold",isCorrect:false},
],
}
    ]

    const [oldQuestion,setoldQuestion] = useState(0)
    const [showScore,setshowScore] = useState(false)
    const [score,setScore] = useState(0)


    const handleNextQues = (isCorrect)=>
    {
        if(isCorrect === true){
            setScore(score + 1)
        }
        const nextQuestion = oldQuestion + 1
        if(nextQuestion < questions.length){
        setoldQuestion(nextQuestion)
        }
        else{
            setshowScore(true)
        }
    }



    return(
        <> 
        { showScore ? 
            (
                <div> Ur score is {score} of {questions.length} </div>
            ) :
            
        (
       <>
       <span>Question {oldQuestion + 1}</span>
        <div>{questions[oldQuestion].question}</div>
        <div>
        
        {questions[oldQuestion].answers.map((ele)=>(
            <button onClick = {()=>handleNextQues(ele.isCorrect)}> {ele.answerText}</button>
        ))}
        </div>
        </>
       
   )  
        } 
   </>
   )  
}

export default Quiz