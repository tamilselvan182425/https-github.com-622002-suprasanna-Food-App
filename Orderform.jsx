import React,{ useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



const OrderForm = () => {

 const [order, setOrder] = useState({
         UserName:"",
         phoneNumber:"",
         email:"",
         address:"",
         LandMark:"",
         PinCode:"",
        });
        const {UserName,phoneNumber,email,address,LandMark,PinCode} = order;
        const onChange = (e) => {
         
          setOrder({ ...order, [e.target.name]: e.target.value });
         

        };

        const onSubmit = async(e) => {
          e.preventDefault();
         
         
                  
          if (!order.UserName || !validatePhoneNumber(order.phoneNumber) || !validateEmail(order.email) || !order.address || !order.LandMark || !order.PinCode) {
           
            toast.error("Please provide a valid email or Ph number ") || 
            toast.error("pleas enter 10 digits")
           
          }  else {
            toast.success("order placed successfully")
          }
          
          axios.post("http://localhost:8001/Orders",{UserName,phoneNumber,email,address,LandMark,PinCode})
          .then((res)=> console.log(res))
          .catch(err => console.log(err))
          return;
       };   

       const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      };
      
          
      const validatePhoneNumber = (phoneNumber) => {
        const ph = /^\d{10}$/;
        return ph.test(phoneNumber);
      };
      
          
        
          
        return (

            <div className=" max-w-full px-2 w-2/6 mx-auto mt-24 backdrop-blur-2xl rounded-3xl">
           
            <form onSubmit={onSubmit} className=' w-full grid grid-cols-2 gap-6'>

              <div className="form-group">
                <label id="UserName" className="text-lg mt-6 ml-4 font-semibold text-white ">Name:</label>
                <br></br>
                <input
                  type="text"
                  id="UserName"
                  name="UserName"
                  placeholder='Name...'
                  value={order.UserName}
                  onChange={onChange}
                  required
                  className=" w-4/5 mt-3 ml-4  px-4 py-1.5 text-md text-gray-700 border-white rounded transition duration-100 ease-in 
     focus:text-gray-700   mb-6 hover:shadow-2xl "
                /> 
              </div>
              <div className="form-group">
                <label id="phoneNumber" className="text-lg  font-semibold text-white   ">Phone Number:</label>
                <br></br>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder='phone no...'
                  value={order.phoneNumber}
                  onChange={onChange}
                  pattern='/^\d{10}$/'
                  required
                  className="w-4/5 mt-3 mb-6 px-4 py-1.5 text-md text-gray-700 bg-white border-grey-300 rounded transition duration-100 ease-in-out
     focus:text-gray-700 focus:bg-white focus:border-slate-600 hover:shadow-2xl "
                /> 
              </div>
              <div className="form-group">
                <label id="email" className="text-lg mt-6 ml-4   font-semibold text-white ">Email:</label>
                <br></br>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Example123@gmail.com'
                  value={order.email}
                  onChange={onChange}
                 
                  required
                  className="w-4/5 mt-3 ml-4 px-4 py-1.5 text-md text-gray-700 bg-white border-gray-300 rounded transition duration-100 ease-in-out
                  focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 hover:shadow-2xl"
                />
                
              </div>
              
              
              <div className="form-group">
                <label id="address" className="text-lg mt-6   font-semibold  text-white">Address:</label>
                <br></br>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder='Address...'
                  value={order.address}
                  onChange={onChange}
                  required
                  className="w-4/5 mt-3   px-4 py-1.5 text-md text-gray-700 bg-white border-gray-300 rounded transition duration-100 ease-in-out
                  focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 hover:shadow-2xl"
                />
              </div>
           
          <div className="form-group">
          <label id="LandMark" className="text-lg mt-6 ml-4 font-semibold  text-white">LandMark:</label>
          <br></br>
          <input
            type="text"
            id="LandMark"
            name="LandMark"
            placeholder='LandMark...'
            value={order.LandMark}
            onChange={onChange}
            required
            className="w-4/5 mt-3 ml-4  px-4 py-1.5 text-md text-gray-700 bg-white border-gray-300 rounded transition duration-100 ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 hover:shadow-2xl"
          />
        </div>
        <div className="form-group">
        <label id="PinCode" className="text-lg mt-6 font-semibold  text-white">PinCode:</label>
        <br></br>
        <input
          type="text"
          id="PinCode"
          name="PinCode"
          placeholder='PinCode...'
          value={order.pinCode}
          onChange={onChange}
          required
          className="w-4/5 mt-3  px-4 py-1.5 text-md text-gray-700 bg-white border-gray-300 rounded transition duration-100 ease-in-out
          focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 hover:shadow-2xl"
        />
      </div>
      <button type="submit"  className='mb-6 ml-2 mt-4 w-full px-4 py-3 bg-blue-600 text-white font-medium text-sm uppercase
      rounded-2xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 
      ease-in-out'>Place Order</button>
      </form>
           
            <ToastContainer 
            
                 position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
    
            />
       
          </div>
         
      
  )
}

export default OrderForm
