import React from 'react';
function LeftSection({imageURL, heading, description, tryDemo, learnMore, googlePlay, appStore}) 
{
    return (
        <div className='container'>
            <div className='row'>

                <div className='col-8 mb-5'>
                    <img src={imageURL} className='' style={{marginLeft:"10%",marginTop:"10%"}}/>
                </div>

                <div className='col-4'>
                    <h2 className='mb-4' style={{marginTop:"35%"}}>{heading}</h2>
                    <p className='' style={{lineHeight:"200%",marginRight:"10%"}}>{description}</p>
                    <div className='mb-4'>
                        <a href={tryDemo} style={{marginRight:"15%",letterSpacing:"1.5px",textDecoration:"none"}}>{tryDemo}</a>
                        <a href={learnMore} style={{letterSpacing:"1.5px",textDecoration:"none"}}>{learnMore}</a>
                    </div>
                    <div>
                        <a href={googlePlay} style={{marginRight:"7%"}}>
                            <img src={googlePlay} style={{width:"35%"}}/>
                        </a>

                        <a href={appStore}>
                            <img src={appStore} style={{width:"33%"}}/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default LeftSection;