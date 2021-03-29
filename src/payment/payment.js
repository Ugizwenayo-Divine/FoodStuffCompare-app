import dotenv from 'dotenv';
import fetch from 'node-fetch';
import TransactionServices from '../services/transactionServices';

dotenv.config();

const {
  createTransaction,
} = TransactionServices;

const rwn_mobilemoney=  async (userData, data)=>{
  const transaction = await createTransaction(userData);
  let result = '';                     
  result = await fetch('https://api.flutterwave.com/v3/charges?type=mobile_money_rwanda', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+process.env.SECRET_KEY,
      },
      body: JSON.stringify(
        {
          "tx_ref":transaction.id,
          "amount":data.amount,
          "currency":data.currency,
          "network":"MTN",
          "email":data.email,
          "phone_number":data.phone_number,
          "fullname":data.fullname,
          // "callback": function (data) { // specified callback function
          //   console.log(data);
          // },
          "redirect_url":"http://localhost:3001/displayclientorders",
        }
      ),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);

    return result;
}
const verifyPayment = async (transactionId) => {
  let verified='';
  verified = await fetch ('https://api.flutterwave.com/v3/transactions/'+transactionId+'/verify',{
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+process.env.SECRET_KEY,
    },
  })
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);
  return verified;
}

export default { rwn_mobilemoney, verifyPayment };