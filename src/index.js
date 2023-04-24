import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

/*********************** 
 * 
    1.)How you attempted to solve the problem.

    So I thought laid out the problem as best as I could and broke it into smaller parts in order to understnad it better. 
    I begin starting with the straight forward
    stuff first and saved the more complicated stuff later.

    2.)Where you ran into trouble.

    I had issues as soon as I tried conceptulizing how to use the "accept" btn. For some reason I had a really hard time
    trying to understand and figure what exactly I had to do. I knew that the acceot button had to populate a card or img with the
    given url and title but I tried and tried but couldnt come up with a soultion.

    3.)What options you think (conceptually) might lead to a working solution.
    
    Whats frustrating is I understand logically what has to be down,
    speaking on terms from the "accept" button and forward:
    1.) you have to pull the value from the text field using onChange, from both URL and Name of the img
    2.) then if theses were done in seperate classes you would have to use the lifting state to push both of them back up
    to the parent so they could be used together.
    3.) I read on ed some people had to use arrays, I didnt think of my soultion like that, I figured that I could grab the URL and Name then pass them
    into a function that creates the card on the DOM and it just call that whenever the Accept btn is clicked.

    If you could help me kinda how I should of laid this out and if I had to use an array to store the img cards how would I have done that? I found
    it pretty hard to code in React JS being brand new to it I just couldnt think like it wanted me to.
 * 
**************************/










// class FormShow extends React.Component{
//     constructor(props){
//         super(props);
    
//        }

//        render(){
//         return(
//             <div className="entryForm">
//             <form className="formForm">
//                 <label>
//                     Url:
//                 <input type="text" name="URL" />
//                 </label>
//                 <label>
//                  Name:
//                 <input type="text" name="name" />
//                 </label>
//                 <div className="btnContainer">
//                     <button className="acceptBtn" type='submit'>Accept</button>
//                     <button className="cancelBtn" type="submit">Cancel</button>
//                 </div>
//                 </form>   
//                 </div> 
//                 )


//        }
        


       
// }


function FormShow(props) {

    function handleChange(event) {
        console.log(event.target.value);
      }

    

    if(props.formo){
        return(
            <div className="entryForm">
            <form className="formForm">
                <label>
                Url:
                <input type="text" name="URL" onChange={handleChange}/>
                </label>
                <label>
                Name:
                <input type="text" name="name" onChange={handleChange} />
                </label>
                <div className="btnContainer">
                    <button className="acceptBtn" type='submit'>Accept</button>
                    <button className="cancelBtn" type="submit">Cancel</button>
                </div>
            </form>    
            </div>
        )
    }


    else{
        return null;
    }

}



class App extends React.Component {
   constructor(props){
    super(props);
    this.state = {
        showForm: false
    };
    this.handleToggleClick = this.handleToggleClick.bind(this)

   }

   handleToggleClick() {
    this.setState(state => ({
        showForm: !state.showForm
    }))
   }

   render(){
    return(
       <div>
        <button onClick={this.handleToggleClick}>Open photo entry dialog</button>
        <FormShow formo={this.state.showForm}/>


        
       </div>  
    )
   }
 
}









//console.log(element)

//components implemented with capital letter ALWAYS!
// function Greeting(props) {
//     return <h1>Hello, {props.name}</h1>

// }    

// class Greetings extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>
//     }

// }

// const element = <Greetings name="Gaven Robertson"/>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
