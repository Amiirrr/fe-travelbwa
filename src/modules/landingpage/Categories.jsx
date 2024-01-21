import React from 'react'
import img from '@/assets/img/mostpicked-1.png'

const Categories = ({ data }) => {

    return data.map((category, indexCat) => {
        if (category.items.length === 0) return null;

        return (
            <section className='category container' key={`category - ${indexCat}`}>
                <h4 className='title'>{category.name}</h4>
                <div className='items'>
                    {
                        category.items.map((item, indexItem) => {
                            return (
                                <div className='card' key={indexItem}>
                                    {
                                        item.isPopular ? (
                                            <p className='badge'><span>Popular</span> Choice</p>
                                        ) : null
                                    }

                                    <img src={img} alt="" />
                                    <div className='details'>
                                        <p className='name'>{item.name}</p>
                                        <p className='locations'>{item.city}, {item.country}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    })
}

export default Categories

// return (
//     <section className='category container'>
//         <h4 className='title'>House With Beauty Backyard</h4>

//         <div className='items'>
//             <div className='card'>
//                 <img src={img} alt="" />
//                 <div className='details'>
//                     <p className='name'>Stay Home</p>
//                     <p className='locations'>Wonosobo, Indonesia</p>
//                 </div>
//             </div>
//         </div>
//     </section>
// )