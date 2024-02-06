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
import Completed from '@/modules/Checkout/Completed';

const Checkout = (props) => {

    const {
        // checkout,
        page
    } = props

    const [checkout, SetCheckout] = useState({
        id: 1,
        duration: 2
    })

    function submit(nextStep) {
        console.log("submit");
        nextStep();
    }

    function home() {
        window.location.href = '/';
    }

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
                    data={data}
                    //       ItemDetails={page[checkout._id]}
                    //       checkout={checkout}
                    onChange={onChange}
                />
            ),
        },
        completed: {
            title: "Yay! Completed",
            description: null,
            content: <Completed />,
        },
    };
    console.log(data)

    return (
        <>
            <Header />
            <div className='checkout'>
                <Stepper steps={steps} initialStep="payment" className='stepper'>
                    {(prevStep, nextStep, CurrentStep, steps) => (
                        <>
                            <Numbering data={steps} current={CurrentStep} />

                            <Meta data={steps} current={CurrentStep} />

                            <MainContent data={steps} current={CurrentStep} />

                            {CurrentStep === "bookingInformation" && (
                                <Controller>
                                    {
                                        (data.firstName !== "" &&
                                            data.lastName !== "" &&
                                            data.email !== "" &&
                                            data.phone !== "") && (
                                            <Button
                                                type='button'
                                                isPrimary
                                                hasShadow
                                                onClick={nextStep}

                                            >
                                                Continue to Book
                                            </Button>
                                        )
                                    }
                                    <Button
                                        type='button'
                                        isLight
                                        onClick={home}
                                    >
                                        Cancel
                                    </Button>
                                </Controller>
                            )}

                            {CurrentStep === "payment" && (
                                <Controller>
                                    {
                                        (data.proofPayment !== "" &&
                                            data.bankName !== "" &&
                                            data.bankHolder !== "") && (
                                            <Button
                                                type='button'
                                                isPrimary
                                                hasShadow
                                                onClick={() => submit(nextStep)}
                                            >
                                                Continue to Book
                                            </Button>
                                        )
                                    }
                                    <Button
                                        type='button'
                                        isLight
                                        onClick={prevStep}
                                    >
                                        Cancel
                                    </Button>
                                </Controller>
                            )}
                        </>
                    )}
                </Stepper>
            </div>
        </>
    )
}

export default Checkout