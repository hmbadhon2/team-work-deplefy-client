import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

const CheckoutFrom = ({pricingData}) => {
    const[cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const[processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState();
    const{money, month, text}=pricingData;
    const {user}=useContext(AuthContext)

    useEffect(() => {
  
        fetch("http://localhost:9000/create-payment-intent", {
          method: "POST",
          headers: {
             "Content-Type": "application/json", 
            //  authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
          body: JSON.stringify({money}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [money]);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit =async(event)=>{
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        
        if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
  
          if(error){
            console.log(error)
            setCardError(error.message)
          }
          else{
            setCardError('')
          }

          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName,
                  email: user?.email
                },
              },
            },
          );
          if(confirmError){
            setCardError(confirmError.message)
            return;
          }
          console.log('paymentIntent', paymentIntent);
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
           <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form> 
    <p className='text-red-500'>{cardError}</p>
        </div>
    );
};

export default CheckoutFrom;