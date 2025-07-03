import Header from "../Header/Header"

const SignIn = () => {
  const FHandel = e => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const result = {name,email,password}
    console.log(result);
    
    
  }
  return (
    <Header>
       <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={FHandel}>
                    <fieldset className="fieldset">
                        <div>
                          <label className="label">Name</label>
                          <input type="text" name="name" className="input" placeholder="Email" />
                        </div>
                        <div>
                          <label className="label">Email</label>
                          <input type="email" name="email" className="input" placeholder="Email" />
                        </div>
                        <div>
                          <label className="label">Password</label>
                          <input type="password" name="password" className="input" placeholder="Password" />
                        </div>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
              </div>
            </div>
          </div>
       </div>
    </Header>
  )
}

export default SignIn