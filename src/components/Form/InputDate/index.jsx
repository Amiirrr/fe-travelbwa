import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { DateRange } from "react-date-range";
import formatDate from '@/utils/FormatDate';

import iCalendar from '@/assets/img/icon/ic_calendar.svg'

import 'react-date-range/dist/styles.css';  // main style file
import 'react-date-range/dist/theme/default.css';  // theme css file
import './_index.scss'

const InputDate = (props) => {
    const refDate = useRef();
    const { onChange, placeholder = "pick ur date", value = 1, outerClassName, name = "date" } = props
    const [isShowed, setIsShowed] = useState(false);

    const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${value.endDate ? " - " + formatDate(value.endDate) : ""}`;
    // const displayDate = `${value.startDate ? value.startDate : ""}${value.endDate ? " - " + value.endDate : ""}`;

    const handleClickOutside = (event) => {
        if (refDate && !refDate.current.contains(event.target)) {
            setIsShowed(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const datePickerChange = (value) => {
        console.log(value)
        const target = {
            target: {
                value: value.selection,
                name: name,
            },
        };
        props.onChange(target);
    };

    const check = (focus) => {
        focus.indexOf(1) < 0 && setIsShowed(false);
    };


    return (
        <div ref={refDate} className='input-date' >
            <div className='icon' onClick={() => setIsShowed(!isShowed)} >
                <img src={iCalendar} alt="calender" />
            </div>
            <input
                type="text"
                readOnly
                className='form-input'
                placeholder={placeholder}
                value={displayDate}
                onChange={onChange}
                onClick={() => setIsShowed(!isShowed)}
            />
            {isShowed && (
                <div className="date-range-wrapper">
                    <DateRange
                        editableDateInputs={true}
                        onChange={datePickerChange}
                        moveRangeOnFirstSelection={false}
                        onRangeFocusChange={check}
                        ranges={[value]}
                    />
                </div>
            )}
        </div>

    )
}

Date.propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    outerClassName: PropTypes.string,
};

export default InputDate