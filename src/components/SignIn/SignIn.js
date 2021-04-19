import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInUsername: '',
      signInPassword: '',
    };
  }

  onUsernameChange = (event) => {
    this.setState({ signInUsername: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  loading = () => {
    const btn = document.getElementById('sign-in');
    return (btn.innerText = 'Loading ...');
  };

  onSubmitSignIn = (event) => {
    event.preventDefault();
    fetch('https://pure-dusk-78963.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.signInUsername,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 'success') {
          this.props.onRouteChange('home');
        }
        if (data === 'success') {
          this.props.onRouteChange('home');
        }
        if (data === 'error logging in') {
          document.getElementById('error').classList.remove('hidden');
          document.getElementById('sign-in').innerText = 'Sign In!';
          document.getElementById('un').value = '';
          document.getElementById('pw').value = '';
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div
        className='bg-pink-100 py-20 grid h-full place-items-center'
        id='signin'
      >
        <div className='m-2 font-sans leading-normal transform'>
          <form
            onSubmit={this.onSubmitSignIn}
            className='shadow-2xl rounded-lg overflow-hidden pt-10 grid place-items-center bg-blue-100 pl-20 pr-20'
          >
            <label className='font-mono pb-2' id='username' htmlFor='username'>
              Username
            </label>
            <input
              onChange={this.onUsernameChange}
              className='w-full opacity-60 outline-none'
              type='username'
              id='un'
            />
            <label
              className='font-mono pt-5 pb-2'
              id='password'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='w-full opacity-60 outline-none'
              type='password'
              onChange={this.onPasswordChange}
              id='pw'
            />
            <div id='error' className='px-6 py-4 hidden text-red-400'>
              Incorrect username/password
            </div>
            <div className='px-6 py-4 '>
              <button
                type='submit'
                value='Sign in'
                id='sign-in'
                className='py-3 px-6 text-black font-bold rounded-full mt-1 mb-2 bg-green-200 hover:bg-green-500 font-mono'
                onClick={this.loading}
              >
                Sign In!
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
