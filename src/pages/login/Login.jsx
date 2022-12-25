import React from 'react';
import './login.scss';

export const Login = () => {
    return (
        <div className='login'>
            <div className='card'>
                <div className='left'>
                    <h1>Hello!</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem laboriosam quisquam doloribus vero officia earum architecto magnam, voluptates sed. Doloremque eaque ad nihil, tempore excepturi animi similique officiis quam nulla.</p>
                    <span>Don`t you have an account?</span>
                    <button>Register</button>
                </div>

                <div className='right'>
                    <h1>Login</h1>
                    <form>
                        <input type='text' placeholder='Username' />
                        <input type='password' placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>

            </div>
        </div>
    );
};
