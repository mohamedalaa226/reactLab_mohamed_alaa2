import { Container } from "react-bootstrap";
import bgImage from "../assets/Wavy_Tech-28_Single-10.jpg"
import { useForm } from "react-hook-form"

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmitFun = (Data) => console.log(Data)
    const password = watch("password");
    const passwordMatch = (value) => {
        return value === password || "Passwords do not match";
    }
    return (
        <Container className='my-5'>
            <div className="row d-flex align-items-center justify-content-center ">

                <div className="col-5">
                    <h1>Sign UP</h1>
                    <form id="Register" className="d-flex flex-column mt-4" onSubmit={handleSubmit(onSubmitFun)}>

                        <input type="text"{...register('name', { required: true, pattern: /^[A-Za-z]+$/ })}
                            className="form-control form-control-lg my-1" placeholder="Name" />
                        <div id="emailHelp" className="form-text text-danger" >
                            <small className="form-text text-danger" >
                                {errors.name?.type === 'required' && "this filed is required"}
                                {errors.name?.type === 'pattern' && "Name must not start number or #$@ and no spaces"}
                            </small>
                        </div>


                        <input type="text"{...register('username', { required: true, pattern: /^@[^ ]*/ })}
                            className="form-control form-control-lg my-1" placeholder="Username" />
                        <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger">
                                {errors.username?.type === 'required' && "We'll never share your Username with anyone else"}
                                {errors.username?.type === 'pattern' && "Username must  start @ and no spaces."}
                            </small>
                        </div>


                        <input type="email" {...register('email', { required: true, pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/ })} className="form-control form-control-lg my-1" placeholder="Email" />
                        <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger" >
                                {errors.email?.type === 'required' && "We'll never share your Email with anyone else"}
                                {errors.email?.type === 'pattern' && "Email must   letters ( uppercase and lowercase), Numbers, @ , $ , . , - . EX: abc.12@gmail.com"}
                            </small>
                        </div>

                        <input type="password"  {...register('password', { required: true, minLength: 8, pattern: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/ })}
                            className="form-control form-control-lg my-1" placeholder="Password" />
                        <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger">
                                {errors.password?.type === 'minLength' && " Your password must be at least 8 characters long"}
                                {errors.password?.type === 'required' && " We'll never share your Password with anyone else"}
                                {errors.password?.type === 'pattern' && " must include at least one lowercase letter, one uppercase letter, one number, and one special symbol."}
                            </small>
                        </div>

                        <input type="password" 
                            className="form-control form-control-lg my-1"
                            {...register('confirm',{ required: true, minLength: 8, validate: passwordMatch })}
                            placeholder="Confirm password"
                            />
                            <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger">
                                {errors.confirm?.type ==='validate' && " Passwords do not match"}
                            </small>
                            </div>
                        <button className="btn btn-primary col-2 my-3 align-items-center ">Sign Up</button>
                    </form>
                </div>
                <div className="col-5">
                    <img src={bgImage} style={{ width: '100%' }} alt="cs" />
                </div>

            </div>

        </Container>)
}
export default Register;
