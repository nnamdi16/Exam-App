import React, { Component } from 'react';
import { ListGroup, ListGroupItem }  from 'react-bootstrap';

import { withRouter } from 'react-router-dom';

class Questions extends Component {

  constructor() {
    super();
    const storedQuestions = localStorage.getItem("questions");
    const allQuestions = (storedQuestions !== null) ? JSON.parse(storedQuestions) : [];

    const subjects = [];
    for (let subject in allQuestions){
        subjects.push(
            {
                subject

        })
    }
    this.state ={subjects}
    
  }

  openAnswer = subject => {
    this.props.history.push(`/answers/${subject}`, {
        subject
    });
  }

  render() {
      return (
          <div className="container">
            <h3>Questions</h3>
            <br />
            <ListGroup>
                {this.state.subjects.map((S, i) => {
                    console.log(S);
                    return (
                        <ListGroupItem key={i} onClick={()=>this.openAnswer(S.subject)}>
                        <h4>{S.subject}</h4>
                        </ListGroupItem>
                   )
                })}
            </ListGroup>
          </div>
      );
  }
}

export default withRouter(Questions);
