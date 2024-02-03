const Form = (props) => {
    return (
        <section className="vh-100 ">
            <div className="container h-100">
                <div className="row d-flex justify-content-center  align-items-center h-100">
                    <div className="col col-lg-7 ">
                        <div className="card mb-5 bg-light">
                            <div className="row ">
                                <div className=" d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form onSubmit={props.submitHandler} >
                                            {props.children}
                                            <button
                                                type="submit"
                                                className="btn btn-outline-dark btn-info font-monospace btn-lg"
                                            >
                                                {props.buttonText}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;

// const Form = (props) => {
//     return (
//         <section className="vh-100">
//             <div className="container py-5 h-100">
//                 <div className="row d-flex justify-content-center align-items-center h-100">
//                     <div className="col col-xl-10">
//                         <div className="card">
//                             <div className="row g-0">
//                                 <div className="col-md-6 col-lg-7 d-flex align-items-center">
//                                     <div className="card-body p-4 p-lg-5 text-black">
//                                         <form>
//                                             <h5 className="fw-normal m-3 pb-3">Add a New User</h5>
//                                             {props.children}
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Form;
