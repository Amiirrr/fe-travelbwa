import React, { useEffect, useState } from 'react'
import InputNumber from '@/components/Form/InputNumber'
import InputDate from '@/components/Form/InputDate'
import Button from '@/components/Button'

import '@/styles/modules/_booking-form.scss'

const BookingForm = (props) => {
    const { dummy } = props
    const [data, setData] = useState({
        duration: 1,
        date: {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    });

    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        const handleDateChange = () => {
            const startDate = new Date(data.date.startDate);
            const endDate = new Date(data.date.endDate);
            const countDuration = new Date(endDate - startDate).getDate();
            setData((prevData) => ({
                ...prevData,
                duration: countDuration,
            }));
        };

        handleDateChange();
    }, [data.date]);

    useEffect(() => {
        const handleDurationChange = () => {
            const startDate = new Date(data.date.startDate);
            const endDate = new Date(
                startDate.setDate(startDate.getDate() + +data.duration - 1)
            );
            setData((prevData) => ({
                ...prevData,
                date: {
                    ...prevData.date,
                    endDate: endDate,
                },
            }));
        };

        handleDurationChange();
    }, [data.duration]);

    return (
        <div className='booking-form'>
            <h4 className='title'>Start Booking</h4>
            <p className='price'><span>${dummy.price}</span> per {dummy.unit}</p>
            <label htmlFor="duration">How long you will stay?</label>
            <InputNumber
                max={30}
                name={"duration"}
                value={data.duration}
                suffix={"night"}
                onChange={updateData}
            />
            <label htmlFor="date">Pick a Date</label>
            <InputDate
                onChange={updateData}
                value={data.date}
            />
            <p className='total-price'>Your will pay
                <span> ${dummy.price * data.duration}</span> per <span>{data.duration} {data.duration > 1 ? dummy.unit + "s" : dummy.unit}</span>
            </p>
            <Button
                type="button"
                isPrimary
                hasShadow
            >Continue to Book</Button>
        </div>
    )
}

export default BookingForm