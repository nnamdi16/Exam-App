
import React, { Component } from 'react';
// import {FormGroup,Radio,Row,Col} from 'react-bootstrap';


class PostQuestions extends Component {
    constructor(props){
        super(props)
        this.state={
            subject:"",
            question:"",
            options:[]  
        };
    }

    addOptions=(e) => {
        e.preventDefault();
        const option={
            title:"",
            correct:false,
            selected:false
        }
        let newOption = [...this.state.options,option];
        let optionGroup = this.state.options;
        optionGroup = newOption;

        this.setState({ options: optionGroup},function(){
            console.log(this.state)
          })
    

    }

    handleInputChange = (e)=>{
        this.setState({
            subject:e.target.value
        })
    }
    
    
    handleTextAreaValue =(e) =>{
        this.setState({
            question:e.target.value
        })
    }

    handleSubmitQuestion=(e) =>{
        e.preventDefault();
        const formSummary={
            subject:"",
            question:"",
            options:[]   
        };
        
        formSummary.question=e.target.question.value;
        formSummary.subject = e.target.subject.value;
        let optionItem = "";
        const storeOption=[];
        
        if(e.target.radio.length<2){
            alert("Add more options");
            return;
        }
        this.state.options.map((val,i)=>{
            optionItem = `option${i+1}`;
            storeOption.push(optionItem)
            formSummary.options.push(
                {
                    option:e.target[optionItem].value,
                    selected:false,
                    correct:e.target.radio[i].value


            })
        })

        const{subject,question,options} = formSummary;
        console.log(formSummary);
        this.setState({
            subject,
            question,
            options

        })
        const examSubject =  formSummary.subject;
        let data = localStorage.getItem("questions");

        if(data !== null) {
          let db = JSON.parse(data);
    
          if(!db[examSubject]) {
    
          db[examSubject] = [formSummary];
          localStorage.setItem("questions",JSON.stringify(db));
          
        } else {
          // alert(JSON.stringify(db[examSubject]))
          db[examSubject].push(formSummary);
          localStorage.setItem("questions",JSON.stringify(db))
          }
    
        } else {
          const putInDb = {};
          putInDb[examSubject] = [formSummary];
    
          localStorage.setItem("questions",JSON.stringify(putInDb));
        }
         this.setState({
           question:"",
           options:[]
         })
    }


    render() {
        return(
            <div className="container">
                <form name="post" onSubmit={this.handleSubmitQuestion}>
                    <h1>Post Questions</h1> 
                    <br/><br/>
                    <label htmlFor="subject">Subject</label>
                    <input value={this.state.subject} onChange={this.handleInputChange}
                    name="subject" type="text" className="form-control" />
                    <br/><br/>
                    <label htmlFor="question">Question</label>
                    <textarea onChange={this.handleTextAreaChange}  name="question" className="form-control">{this.state.question}</textarea>
                    <br />
                    <div>  <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <br/>
                    <button onClick={this.addOptions} className="btn btn-primary">add Option</button>
                    {
                        this.state.options.map((Option, j) => {
                        return (
                            <div style={{
                                "width":"40%",
                                "padding":"20px"
                            }} 
                             key={j} className="input-group">

                <input placeholder={`Option${j + 1}`} name={`option${j + 1}`}  type="text" className="form-control" aria-label="..." />
                        <span className="input-group-addon">
                    <input name="radio" type="radio" aria-label="..." />
                </span>
                </div>)
                        })
          }
                
                </form>
            
            </div>

        )
    }

      
    
      

    }
    
// class OptionInput extends Component{
//     render(){
//         return(
//             <div className="input-group input-group-sm mb-3">
//   <div className="input-group-prepend">
//     <span className="input-group-text" id="inputGroup-sizing-sm">Number of options</span>
//   </div>
//   <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
// </div>
//         )
//     }
// }


// class Option extends Component{
// render(){
//     return(
//         <div className="input-group">
//                     <div className="input-group-prepend">
//                         <div className="input-group-text">
//                         <input type="radio" aria-label="Radio button for following text input"/>
//                         </div>
//                     </div>
//                     <input type="text" class="form-control" aria-label="Text input with radio button"/>
//         </div>
//     )
// }
// }

// class AddOptions extends Component{
//     showOptions(stats){
//         let optionValue = e.target.value;
//         let optionGroup =[]
//         if(stats.optionValue>0){
//             optionGroup.concat()
//         }
//     }
// }

export default PostQuestions;
