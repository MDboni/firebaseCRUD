import { useContext } from "react"
import { AuthContext } from "../../Provider/ProviderContext"

const SingUp = () => {

   const {CreateUser} = useContext(AuthContext)

    const FHandel = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name,email,password);

       CreateUser(email,password)
            .then(result => { 
                console.log(result.user);
                const signupTime = result.user.metadata.creationTime
                 const newUser = {email,name,signupTime}
// database connsect 
                 fetch('http://localhost:5000/users',{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify(newUser)
                 })
                 .then(res => res.json())
                 .then( data => {
                    console.log(data);
                    
                 })

        })
            .catch(error => {
                console.log(error.message); 
        })


  }

  return (
    <div>
         <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={FHandel}>
                <fieldset className="fieldset space-y-2">
                  <div>
                    <label className="label">Name</label>
                    <input type="text" name="name" className="input w-full" placeholder="Email" />
                  </div>
                  <div>
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input w-full" placeholder="Email" />
                  </div>
                  <div>
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input w-full" placeholder="Password" />
                  </div>
                  <div><a className="link link-hover">Forgot password?</a></div>
                  <button className="btn btn-neutral mt-4 w-full">Sign In</button>
                </fieldset>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingUp