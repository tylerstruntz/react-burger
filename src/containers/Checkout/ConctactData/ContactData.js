import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipCode: '',
        }
    }
    
    render(){
        return(
            <div className={classes.ContactData}>
                <h4>Please fill out form</h4>
                <form>
                    <input className={classes.Input} type='text' name='name' placeholder='Enter name' />
                    <input className={classes.Input} type='email' name='email' placeholder='Enter email' />
                    <input className={classes.Input} type='text' name='street' placeholder='Enter Street' />
                    <input className={classes.Input} type='text' name='zipCode' placeholder='Enter zip code' />
                    <Button btnType='Success' clicked > Order </Button>
                </form>
            </div>
        )
    }
}

export default ContactData;