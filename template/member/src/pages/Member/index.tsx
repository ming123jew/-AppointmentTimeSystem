import React from "react"
import 'antd/dist/antd.css';
import  './index.css'
import LoginForm from './components/LoginForm'

class Member extends React.Component {

  constructor(props){
    super(props);
    console.log(props)
  }

  render () {
    if(this.props.Type=="login"){
      return <LoginForm />
    }else{
      return (
        <div className="">
          Member Index
        </div>
      )
    }

  }
}

export default Member