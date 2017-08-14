import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect } from 'react-redux';
const changeText = () => {
    return {
        type:'CHANGE_TEXT'
    }
}

const buttonClick = () => {
    return {
        type:'BUTTON_CLICK'
    }
}
//reducer

const initialState = {
    text: 'Hello'
}

const myApp = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text:state.text=='Hello'?'Stark':'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'You just click button'
            }
        default:
            return {
                text:'Hello'
            }
    }
}
let store = createStore(myApp);
//Hello
class Hello extends React.Component{
    constructor(props) {
        super(props);
    }

    handleClick = () =>{
        this.props.actions.changeText();
    }

    render() {
        return (
            <h1 onClick={this.handleClick}> {this.props.text} </h1>
        );
    }
}
//Change
class Change extends React.Component{
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.actions.buttonClick();
    }

    render() {
        return (
            <button onClick={this.handleClick} >change</button>
        );
    }
}
//App
class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        //actions和text这两个props在第5步中会解释
        const { actions, text} = this.props;
        return (
            <div>
                <Hello actions={actions} text={text}/>
                <Change actions={actions}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  return { text: state.text }
}
/*
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    text: getVisibleTodos(state.text, state.visibilityFilter)
  }
}
*/

/*const mapDispatchToProps = (dispatch) => {
  return {
    changeText: () => {
      dispatch(changeText())
    },
	buttonClick: () => {
      dispatch(buttonClick())
    }
  }
}
*/
const mapDispatchToProps = (dispatch) => {
    return{
        actions : bindActionCreators({
				changeText:changeText,
				buttonClick:buttonClick
			},dispatch)
    }
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
