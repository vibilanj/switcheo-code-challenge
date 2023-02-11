import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./styles/TransactionForm.css"

const TransactionForm = () => {
    const [submit, setSubmit] = useState(false);
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [otp, setOtp] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setSubmit(true);
    };

    const newForm = () => {
        setSubmit(false);
    }

    if (!submit) {
        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label for="input-address" class="form-label">ETH Address</Form.Label>
                    <Form.Control 
                    type="text" 
                    class="form-control" 
                    id="input-address" 
                    placeholder="Must be a valid ETH Address" 
                    pattern="(0x[a-f0-9]{40})"
                    value={address}
                    onChange={e => setAddress(e.target.value)} 
                    required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label for="input-amount" class="form-label">Amount to send</Form.Label>
                    <Form.Control 
                    type="number" 
                    min="0" 
                    step="0.000000000000000001" 
                    class="form-control" 
                    id="input-amount" 
                    placeholder="Amount in ETH" 
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label for="input-otp" class="form-label">OTP Authentication</Form.Label>
                    <Form.Control 
                    type="text" 
                    pattern="([a-zA-Z0-9\b]{6}$)" 
                    maxlength="6" class="
                    form-control" 
                    id="input-otp" 
                    placeholder="6-digit OTP" 
                    value={otp}
                    onChange={e => setOtp(e.target.value)}
                    required/>
                </Form.Group>
                <Button type='submit' class="btn btn-primary">
                    Send Tokens
                </Button>
            </Form>
        )
    } else {
        return (
            <div className='submit'>
                <p className='submit-text'>Sent <b>{amount}</b> ETH  to <br/> <b>{address}</b>.</p>
                <Button type='submit' class="btn btn-primary" onClick={newForm}>
                    Make Another Transaction
                </Button>
            </div>
        )
    }
};

export default TransactionForm;