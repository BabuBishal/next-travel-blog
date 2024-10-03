import React from 'react'

const Login = ({loginMode, handleClick}) => {
  console.log(loginMode)
  return (
    <div >
    
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
<div className="mb-8 text-center">
  <h1 className="my-3 text-4xl font-bold">{loginMode}</h1>
  <p className="text-sm dark:text-gray-600">{ loginMode === "Sign In" ? "Sign in to access your account" : "Sign up to create your account"}</p>
</div>
<form noValidate="" action="" className="space-y-12">
  <div className="space-y-4">
 {loginMode === "Sign Up" && <div>
      <label htmlFor="username" className="block mb-2 text-sm">Username</label>
      <input type="text" name="username" id="username" placeholder="Your Username" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
    </div>}
    <div>
      <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
      <input type="email" name="email" id="email" placeholder="user@email.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
    </div>
    <div>
      <div className="flex justify-between mb-2">
        <label htmlFor="password" className="text-sm">Password</label>
        {loginMode === "Sign In" && <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>}
      </div>
      <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
    </div>
  </div>
  <div className="space-y-2">
    <div>
      <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">{loginMode}</button>
    </div>
    <p className="px-6 text-sm text-center dark:text-gray-600">{loginMode === "Sign In" ? "Don't have an account yet?" : "Already have an account?"}
      <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600" onClick={handleClick}>{loginMode === "Sign In" ? "Sign Up" : "Sign In"}</a>.
    </p>
  </div>
</form>
</div>

{/* {
loginMode === "signup" && <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
<div className="mb-8 text-center">
  <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
  <p className="text-sm dark:text-gray-600">Sign up to create your account</p>
</div>
<form noValidate="" action="" className="space-y-12">
  <div className="space-y-4">
  <div>
      <label htmlFor="username" className="block mb-2 text-sm">Username</label>
      <input type="text" name="username" id="username" placeholder="Your Username" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
    </div>
    <div>
      <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
      <input type="email" name="email" id="email" placeholder="user@email.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
    </div>
    <div>
      <div className="flex justify-between mb-2">
        <label htmlFor="password" className="text-sm">Password</label>
      </div>
      <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
    </div>
  </div>
  <div className="space-y-2">
    <div>
      <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign up</button>
    </div>
    <p className="px-6 text-sm text-center dark:text-gray-600">Have an account already?
      <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600" onClick={handleSignup}>Sign in</a>.
    </p>
  </div>
</form>
</div>} */}
    </div>
  )
}

export default Login