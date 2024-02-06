import React, { useState } from 'react'
import Header from '@/components/layout/Header';
import Button from '@/components/Button';
import Stepper, {
    Numbering,
    Meta,
    MainContent,
    Controller,
} from '@/components/Stepper';

import BookingInformation from '@/modules/Checkout/BookingInformation';
import Payment from '@/modules/Checkout/Payment';

const Checkout = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        proofPayment: "",
        bankName: "",
        bankHolder: "",
    })

    const onChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    console.log(data)

    const steps = {
        bookingInformation: {
            title: "Booking Information",
            description: "Please fill up the blank fields below",
            content: (
                <BookingInformation
                    data={data}
                    // checkout={checkout}
                    // ItemDetails={page[checkout._id]}
                    onChange={onChange}
                />
            ),
        },
        payment: {
            title: "Payment",
            description: "Kindly follow the instructions below",
            content: (
                <Payment
                //       data={data}
                //       ItemDetails={page[checkout._id]}
                //       checkout={checkout}
                //       onChange={this.onChange}
                />
            ),
        },
        completed: {
            title: "Yay! Completed",
            description: null,
            //   content: <Completed />,
        },
    };
    return (
        <>
            <Header />
            <div className='checkout'>
                <Stepper steps={steps} initialStep="bookingInformation" className='stepper'>
                    {(prevStep, nextStep, CurrentStep, steps) => (
                        <>
                            <Numbering data={steps} current={CurrentStep} />

                            <Meta data={steps} current={CurrentStep} />

                            <MainContent data={steps} current={CurrentStep} />

                            <Controller>
                                <Button
                                    type='button'
                                    isPrimary
                                    hasShadow
                                    onclick={prevStep}

                                >
                                    Continue to Book
                                </Button>
                                <Button
                                    type='button'
                                    isLight
                                    onclick={prevStep}

                                >
                                    Cancel
                                </Button>
                            </Controller>

                        </>
                    )}
                </Stepper>
            </div>
        </>
    )
}

export default Checkout