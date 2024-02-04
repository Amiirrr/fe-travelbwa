import React from 'react'

const Controller = (props) => {
    return (
        <section className='container'>
            <div>
                <div>{props.children}</div>
            </div>
        </section>
    )
}

export default Controller