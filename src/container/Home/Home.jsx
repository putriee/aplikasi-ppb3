import React, { Component } from 'react';
import YouTubeComp from '../../component/YoutubeComp/YouTubeComp';
import Product from '../Product/Product';

class Home extends Component {
    render(){
        return (
            <div>
                {/* <p>YouTube Component</p>
                <hr/>
                <YouTubeComp 
                    time="7.12" 
                    title="Tutorial React JS - Bagian 1"
                    desc="2x ditonton, 2 hari yang lalu"/>
                <YouTubeComp 
                    time="8.02" 
                    title="Tutorial React JS - Bagian 2"
                    desc="10x ditonton, 3 hari yang lalu"/>
                <YouTubeComp 
                    time="5.04" 
                    title="Tutorial React JS - Bagian 3"
                    desc="20x ditonton, 22 hari yang lalu"/>
                <YouTubeComp 
                    time="4.12" 
                    title="Tutorial React JS - Bagian 4"
                    desc="26x ditonton, 5 hari yang lalu"/>
                <YouTubeComp/> */}
                <p>Counter</p>
                <hr/>
                <Product />
            </div>
        )
    }
}


export default Home;