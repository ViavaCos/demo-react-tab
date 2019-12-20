import React from 'react';

import './App.css';
import Tab from './components/tab';

class App extends React.Component {
  state = {
    listData: null
  }

  getListData () {
    // const data = [
    //   {list: ["苹果", "香蕉"] },
    //   { type: "主食", list: ["米饭", "面条"] },
    //   { type: "交通工具", list: ["公交车", "自行车"] }
    // ]

    const data = [
      ["苹果", "香蕉"],
      ["米饭", "面条"],
      ["公交车", "自行车"]
    ]
    setTimeout(() => {

      this.setState({
        listData: data
      })
      // console.log(this)
      // console.log(this.listData)
    }, 200)
  }

  componentDidMount () {
    // const listData = this.getListData()
    // this.setState({
    //   listData
    // })
    this.getListData()
    // console.log(this.listData)
  }

  render () {
    return (
      <div className="App">
        <Tab data={this.state.listData}></Tab>
      </div>
    )
  }
}

export default App;
