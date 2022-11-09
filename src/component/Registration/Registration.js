import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const Registration = () => {
    const {createUser, updateUser} = useContext(authContext);
    const handleRegistration = (event)=>{
        event.preventDefault();
        const form = event.target;
        const username = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            handlUpdate(username);
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    const handlUpdate = (name)=>{
        const profileInfo = {
            displayName : name
        }
        updateUser(profileInfo)
        .then(() => {})
        .catch(err => console.log(err))
    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegistration} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" placeholder="Username" className="input input-bordered" name='name' />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name='email' />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name='password' />
          
        </div>
        <div className="form-control mt-6">
        <input type="submit" className="btn btn-warning input input-bordered" />
        </div>
        <h1>Already have an account? Please <Link to="/login" className='text-warning'>Login.</Link></h1>
      </form>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Registration;