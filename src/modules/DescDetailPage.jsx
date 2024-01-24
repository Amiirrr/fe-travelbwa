import React from 'react'
import ic_kulkas from '@/assets/img/icon/ic_kulkas.svg'
import ic_diningroom from '@/assets/img/icon/ic_diningroom.svg'
import ic_bedroom from '@/assets/img/icon/ic_bedroom.svg'
import ic_livingroom from '@/assets/img/icon/ic_livingroom.svg'
import ic_wifi from '@/assets/img/icon/ic_wifi.svg'
import ic_ac from '@/assets/img/icon/ic_ac.svg'
import ic_bathroom from '@/assets/img/icon/ic_bathroom.svg'
import ic_tv from '@/assets/img/icon/ic_tv.svg'

const DescDetailPage = () => {
    return (
        <div className='desc-detail'>
            <h4 className='title'>About the place</h4>
            <p className='desc'>Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell. <br />
                Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era. <br />
                Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better.
            </p>
            <div className='features'>
                <div className="item">
                    <img src={ic_bedroom} alt="ic_bedroom" />
                    <p><span>{5}</span> bedroom</p>
                </div>
                <div className="item">
                    <img src={ic_livingroom} alt="ic_livingroom" />
                    <p><span>{5}</span> Living room</p>
                </div>
                <div className="item">
                    <img src={ic_bathroom} alt="ic_bathroom" />
                    <p><span>{5}</span> bathroom</p>
                </div>
                <div className="item">
                    <img src={ic_diningroom} alt="ic_diningroom" />
                    <p><span>{5}</span> dining room</p>
                </div>
                <div className="item">
                    <img src={ic_wifi} alt="ic_wifi" />
                    <p><span>{5}</span> mbp/s</p>
                </div>
                <div className="item">
                    <img src={ic_ac} alt="ic_a" />
                    <p><span>{5}</span> unit ready</p>
                </div>
                <div className="item">
                    <img src={ic_kulkas} alt="ic_kulkas" />
                    <p><span>{5}</span> refigerator</p>
                </div>
                <div className="item">
                    <img src={ic_tv} alt="ic_tv" />
                    <p><span>{5}</span> television</p>
                </div>
            </div>
        </div>
    )
}

export default DescDetailPage