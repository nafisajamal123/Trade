import React from 'react';
function Hero() {
    return (
        <div className='container-fluid' style={{ backgroundColor: "#1ba3f7", color: "white" }}>
            <div className='row'>
                
                <div className='col-6 my-5' style={{paddingLeft:"8%"}}>
                    <h5>Support Portal</h5>
                    <p className='mt-5 fs-4 mb-5'>Search for an answer or browse help topics to create a ticket</p>

                    {/* Search bar with button inside */}
                    <div style={{ position: 'relative', width: '85%' }}>   {/* position: 'relative' nhi likhogi then seach icon input box ke andar nhi aa rha khi bahar chala ja rha*/}
                        <input
                            type="text"
                            placeholder="Eg, how do I activate F&O, why is my order getting rejected..."
                            style={{                              
                                width: '100%',
                                height:'50px',                               
                                border: 'none',
                                fontSize: '15px',
                                outline:'none',
                                padding: '10px 60px 10px 25px',//use padding so that placeholder ke text ke saath hi humara line aae jab hum inbut bos pr click
                            }}
                        />
                        <button
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '25%',
                                border: 'none',
                                backgroundColor: 'white',
                                background: 'white',
                                cursor: 'pointer',
                                fontSize: '18px',
                            }}
                        >
                            🔍
                        </button>
                    </div>

                    <div className='mt-4' style={{color:"white"}}>
                        <a href='' className='pe-4' style={{color:"white",textUnderlinePosition:"under"}}>Track account Opening</a>
                        <a href='' className='pe-4' style={{color:"white",textUnderlinePosition:"under"}}>Track segment activation</a>
                        <a href='' className='pe-4' style={{color:"white",textUnderlinePosition:"under"}}>Track account Opening</a><br/><br/>
                        <a href='' className='' style={{color:"white",textUnderlinePosition:"under"}}>Track segment activation</a>
                    </div>
                </div>

                <div className='col-6 my-5' style={{paddingRight:"9%"}}>
                    <a href='' style={{color:"white",textUnderlinePosition:"under",fontSize:"17px",position:"relative",left:"80%"}}>Track Tickets</a> 
                    <h4 style={{paddingTop:"20%"}}>Featured</h4>
                    <p className='pt-3 fs-6'>Users will not be able to add funds to the equity segment from 8 PM to 12 AM due to the upcoming quarterly settlement. <a href='' style={{textDecoration:""}}>Read more.</a></p>
                </div>
            </div>
        </div>
    );
}
export default Hero;
