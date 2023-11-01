import { useSelector } from 'react-redux';
import logo from '../assets/react.svg'

const SignUp = () => {
    const handleSubmit = () => {

    }
    return (
        <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 h-screen">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-6 sm:p-16">
                            <div className="space-y-4">
                                <img src={logo} loading="lazy" className="w-10" alt="logo" />
                                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Sign up</h2>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-16 grid space-y-4">
                                    <label className="font-semibold text-xs" >Username</label>
                                    <input

                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="email" />

                                    <label className="font-semibold text-xs" >Mobile Number</label>
                                    <input
                                        className="flex items-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type="tel" />

                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 right-1 flex items-center px-2 top-6 text-2xl cursor-pointer">
                                            {/* Show password icon */}
                                            {/* <div onClick={togglePassword}>
                                            {showPassword ? (<AiFillEyeInvisible />) : (<AiFillEye />)}
                                        </div> */}
                                        </div>
                                        <label className="font-semibold text-xs mt-3" >Password</label>
                                        <input

                                            className=" group w-full py-3 px-3 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                                        // type={showPassword ? "text" : "password"} 
                                        />
                                    </div>



                                    <input className='flex items-center justify-center group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:text-black text-white font-semibold bg-gray-800 hover:bg-gray-300 cursor-pointer' type="submit" value="Sign Up" />


                                </div>
                            </form>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;