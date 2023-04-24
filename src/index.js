import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'


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
