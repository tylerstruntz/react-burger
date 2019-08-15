import React from 'react';
import classes from './Input.css';

//this class creates multiple different types of inputs. it uses a switch 
//statement to figure out what was passed to it. it then returns that input
//element.
const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement =
                <input
                    className={ inputClasses.join(' ') }
                    { ...props.elementConfig }
                    value={ props.value }
                    onChange={ props.changed }
                />;
            break;

        case ('textarea'):
            inputElement =
                <textare
                    className={ inputClasses.join(' ') }
                    { ...props.elementConfig }
                    value={ props.value }
                    onChange={ props.changed }
                />;
            break;

        case ('select'):
            inputElement =
                <select
                    className={ inputClasses.join(' ') }
                    value={ props.value }
                    onChange={ props.changed }>
                    { props.elementConfig.options.map(option => (
                        <option key={ option.value } value={ option.value }>{ option.displayValue }</option>
                    )) };
                </select>

            break;

        default:
            inputElement =
                <input
                    className={ inputClasses.join(' ') }
                    { ...props.elementConfig }
                    value={ props.value }
                    onChange={ props.changed }
                />

    }
    return (
        <div className={ classes.Input }>
            <label className={ classes.Label }>{ props.label }</label>
            { inputElement }
        </div>
    );
}

export default input;