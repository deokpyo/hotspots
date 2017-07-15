import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header';

class App extends React.Component {
    render(){
        return (   
                    <div>
                        Hello React!
                        <Header/>
                    </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))