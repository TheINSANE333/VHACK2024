import acetaffy from './assets/acetaffy.jpeg'
import createpost from './assets/createpost.png'
import mypost from './assets/mypost.png'
import favourite from './assets/favourite.png'
import './forum.css'

function Forum() {

    return (
        <div className="Forum">
            <div className="Head">
                <input className="inputloli" type="text" placeholder="Search" />
            </div>
            <div className='Body'>
                <div className="scrollable-container">
                    <div className="containerloli" >
                        <ul id="cards">
                            <li className="cardss" id="card1">
                                <div className="card-body">

                                </div>
                            </li>
                            <li className="cardss" id="card2">
                                <div className="card-body">

                                </div>
                            </li>
                            <li className="cardss" id="card3">
                                <div className="card-body">

                                </div>
                            </li>
                            <li className="cardss" id="card4">
                                <div className="card-body">

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='Tools'>
                    <div className='Tool'>
                        <img style={{ width: "70px", height: "70px" }} src={createpost}></img>
                        <p className='Toolsdesc'>Create Post</p>
                    </div>
                    <div className='Tool'>
                        <img style={{ width: "70px", height: "70px" }} src={mypost}></img>
                        <p className='Toolsdesc'>My Post</p>
                    </div>
                    <div className='Tool'>
                        <img style={{ width: "70px", height: "70px" }} src={favourite}></img>
                        <p className='Toolsdesc'>Favourite Post</p>
                    </div>
                </div>
                <div className='Trending'>
                    <p style={{ padding: "8px" }}>Trending</p>
                    <div className='Topics'>
                        <ul className='Topiclist'>
                            <li>
                                <div className='Topic1'>
                                    <p style={{ padding: "5px" }}>Topic1</p>
                                </div>
                                <div className='Topic2'>
                                    <p style={{ padding: "5px" }}>Topic2</p>
                                </div>
                                <div className='Topic3'>
                                    <p style={{ padding: "5px" }}>Topic3</p>
                                </div>
                                <div className='Topic'>
                                    <p style={{ padding: "5px" }}>Topic4</p>
                                </div>
                                <div className='Topic'>
                                    <p style={{ padding: "5px" }}>Topic5</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='Postgrid'>
                    <ul className='Post'>
                        <li>
                            <div className='Posts'>
                                <div className='Content'>
                                    <h1 className='Title'>This is title</h1>
                                    <div className="FlexContainer">
                                        <img className='Preview' src={acetaffy} alt="Preview"></img>
                                        <p className='Paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <p className='Buttons'> Like 12 &nbsp;&nbsp;&nbsp;  Comments 6 &nbsp;&nbsp;&nbsp; Share 0 </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='Posts'>
                                <div className='Content'>
                                    <h1 className='Title'>This is title</h1>
                                    <div className="FlexContainer">
                                        <img className='Preview' src={acetaffy} alt="Preview"></img>
                                        <p className='Paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <p className='Buttons'> Like 12 &nbsp;&nbsp;&nbsp;  Comments 6 &nbsp;&nbsp;&nbsp; Share 0 </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='Posts'>
                                <div className='Content'>
                                    <h1 className='Title'>This is title</h1>
                                    <div className="FlexContainer">
                                        <img className='Preview' src={acetaffy} alt="Preview"></img>
                                        <p className='Paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <p className='Buttons'> Like 12 &nbsp;&nbsp;&nbsp;  Comments 6 &nbsp;&nbsp;&nbsp; Share 0 </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='Posts'>
                                <div className='Content'>
                                    <h1 className='Title'>This is title</h1>
                                    <div className="FlexContainer">
                                        <img className='Preview' src={acetaffy} alt="Preview"></img>
                                        <p className='Paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <p className='Buttons'> Like 12 &nbsp;&nbsp;&nbsp;  Comments 6 &nbsp;&nbsp;&nbsp; Share 0 </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='Posts'>
                                <div className='Content'>
                                    <h1 className='Title'>This is title</h1>
                                    <div className="FlexContainer">
                                        <img className='Preview' src={acetaffy} alt="Preview"></img>
                                        <p className='Paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <p className='Buttons'> Like 12 &nbsp;&nbsp;&nbsp;  Comments 6 &nbsp;&nbsp;&nbsp; Share 0 </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Forum