import React from 'react';
function RightSection({ heading, description, learnMore, imageURL }) {
    return (
        <div className='conatainer'>
            <div className='row mt-5'>
                <div className='col-1'></div>

                <div className='col-3 mt-5 fs-7 py-5' style={{lineHeight:"30px",paddingLeft:"3%"}}>
                    <h2 className='mb-4'>{heading}</h2>
                    <p>{description}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>{learnMore}</a>
                </div>

                <div className='col-1'></div>

                <div className='col-7 text-center'>
                    <img src={imageURL}/>
                </div>

            </div>
        </div>
    );
}
export default RightSection;
