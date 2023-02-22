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
    const{_id, money, month, text}=pricingData;
    const {user}=useContext(AuthContext)

    useEffect(() => {
  
        fetch("https://deplefy-server.vercel.app/create-payment-intent", {
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
          setSuccess('')
          setProcessing(true)
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
          console.log('paymentIntent', paymentIntent);
          if(paymentIntent.status==='succeeded'){
            setSuccess('Congrates ! Your payment successfully');
            setTransactionId(paymentIntent.id);
            
            const payments={
              money,
              transactionId: paymentIntent.id,
              email: user?.email,
              name: user?.displayName,
              pricingPlanData: _id
       }
            fetch('https://deplefy-server.vercel.app/payments', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payments)
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data)
              if(data.insertedId){
                setSuccess('Congrates ! Your payment successfully');
                setTransactionId(paymentIntent.id);
              }
            })
          
          }
          setProcessing(false)
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
      <button type="submit" disabled={!stripe || !elements || processing}>
        Pay
      </button>
    </form> 
    <p className='text-red-500'>{cardError}</p>
    {
        success && <div>
          <p className='text-green-500'>{success}</p>
          <p>Your TransactionId:  <span className='text-bold'>{transactionId}</span></p>
        </div>
       
      }
        </div>
    );
};

export default CheckoutFrom;