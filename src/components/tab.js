import React from 'react'
import '../styles/tab.css'

class Tab extends React.Component {
    state = {
        list: []
    }

    getData () {
        // console.log(this.props)
        return this.props.data;
    }

    componentDidMount () {
        const data = this.getData()

        this.setState({
            list: data
        })
        console.log(data);
        
    }

    render () {
        return (
            <div className="tab">
                {this.list && this.list[0] && this.list[0].type}
                <ul className="title">
                    <li className="active">水果</li>
                    <li>主食</li>
                    <li>交通工具</li>
                </ul>
                <div className="content">
                    <ul className="item">
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
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tab