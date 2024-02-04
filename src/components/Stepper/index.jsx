import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Stepper = (props) => {
    const { initialStep, steps } = props;

    const stepKeys = Object.keys(steps);

    const [CurrentStep, setCurrentStep] = useState(
        stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]
    )

    const totalStep = stepKeys.length
    const indexStep = stepKeys.indexOf[CurrentStep]

    function prevStep() {
        if (+indexStep > 0) setCurrentStep(stepKeys[indexStep - 1])
    }

    function nextStep() {
        if (+indexStep < totalStep) setCurrentStep(stepKeys[indexStep + 1])
    }

    return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>
}

export default Stepper

Stepper.propTypes = {
    steps: PropTypes.object.isRequired,
    initialStep: PropTypes.string,
}

export { default as Numbering } from "./Numbering";
export { default as Meta } from "./Meta";
export { default as Controller } from "./Controller";
export { default as MainContent } from "./MainContent";