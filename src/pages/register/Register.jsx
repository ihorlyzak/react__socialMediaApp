import React from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

export const Register = () => {
    return (
        <div className='register'>
            <div className='card'>
                <div className='left'>
                    <h1>React stuff</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem laboriosam quisquam doloribus vero officia earum architecto magnam, voluptates sed. Doloremque eaque ad nihil, tempore excepturi animi similique officiis quam nulla.</p>
                    <span>Do you have an account?</span>

                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                </div>

                <div className='right'>
                    <h1>Register</h1>
                    <form>
                        <input type='text' placeholder='Username' />
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <input type='text' placeholder='Name' />
                        <button>Register</button>
                    </form>
                </div>

            </div>
        </div>
    );
};
