import React from 'react'
import '../styles/tab.css'

class Tab extends React.Component {
    state = {
        current: 0
    }

    // getData () {
    //     // console.log(this.props)
    //     const data = this.props.data;
    //     this.setState({
    //         list: data
    //     })
    // }

    // componentDidMount () {
    //     this.getData()
    //     console.log(this.state.list);
    // }
    switchTab = (e) => {
        // console.log(e.target.dataset.id)
        const index = parseInt(e.target.dataset.id)
        // console.log(typeof index)
        this.setState({
            current: index
        })

    }

    render () {

        const data = this.props.data;
        // this.setState({
        //     list: data
        // })

        // const list = data && data.map(item => {
        //     return item.map(item => (

        //         <li>{item}</li>

        //     ))
        // })

        const list2 = data && data.map((item, index) => (

            index === this.state.current && <ul key={index} className="item">
                {item.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>

        ))

        // console.log(this.state.list);
        // console.log(data);
        return (
            <div className="tab" >
                <ul className="title">
                    <li data-id="0" onClick={this.switchTab} className={this.state.current === 0 ? "active" : ""}>水果</li>
                    <li data-id="1" onClick={this.switchTab} className={this.state.current === 1 ? "active" : ""}>主食</li>
                    <li data-id="2" onClick={this.switchTab} className={this.state.current === 2 ? "active" : ""}>交通工具</li>
                </ul>
                <div className="content">
                    {/* <ul className="item">
                        <li>苹果</li>
                        <li>香蕉</li>
                        </ul>
                        <ul className="item">
                        <li>米饭</li>
                        <li>面条</li>
                        </ul>
                        <ul className="item">
                        <li>公交车</li>
                        <li>自行车</li>
                    </ul> */}
                    <ul className="item">
                        {list2}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tab