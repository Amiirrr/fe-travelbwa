import React from 'react'

import Header from '@/components/layout/Header';
import Stepper, {
    Numbering,
    Meta,
    MainContent,
    Controller,
} from '@/components/Stepper';

const Checkout = () => {

    const steps = {
        bookingInformation: {
            title: "Booking Information",
            description: "Please fill up the blank fields below",
            //   content: (
            //     <BookingInformation
            //       data={data}
            //       checkout={checkout}
            //       ItemDetails={page[checkout._id]}
            //       onChange={this.onChange}
            //     />
            //   ),
        },
        payment: {
            title: "Payment",
            description: "Kindly follow the instructions below",
            //   content: (
            //     <Payment
            //       data={data}
            //       ItemDetails={page[checkout._id]}
            //       checkout={checkout}
            //       onChange={this.onChange}
            //     />
            //   ),
        },
        completed: {
            title: "Yay! Completed",
            description: null,
            //   content: <Completed />,
        },
    };
    return (
        <div className='checkout'>
            <Header />
            <Stepper steps={steps} initialStep="payment">
                {(prevStep, nextStep, CurrentStep, steps) => (
                    <>
                        <Numbering data={steps} current={CurrentStep} />

                        <Meta data={steps} current={CurrentStep} />
                    </>
                )}
            </Stepper>
        </div>
    )
}

export default Checkout