const Sidebar = () => {
    return (
        <>
            <nav
                className="col-md-5 bg-light col-lg-2 d-md-flex flex-md-column justify-content-center position-absolute"
                style={{ height: '100vh' }}
            >
                <div className="position-sticky ">
                    <ul className="nav flex-column">
                        <li className="nav-item btn btn-light">
                            <a
                                className="nav-link font-monospace fw-bold text-body-secondary"
                                href="/dashboard"
                            >
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item btn btn-light">
                            <a
                                className="nav-link font-monospace fw-bold text-body-secondary"
                                href="#"
                            >
                                SKED
                            </a>
                        </li>
                        <li className="nav-item btn btn-light">
                            <a
                                className="nav-link fw-bold font-monospace text-body-secondary"
                                href="#"
                            >
                                CARGO
                            </a>
                        </li>
                        <li className="nav-item btn btn-light">
                            <a
                                className="nav-link fw-bold font-monospace text-body-secondary"
                                href="#"
                            >
                                PAX
                            </a>
                        </li>
                        <li className="nav-item btn btn-light">
                            <a
                                className="nav-link fw-bold font-monospace text-body-secondary"
                                href="#"
                            >
                                WEATHER
                            </a>
                        </li>
                        <li className="nav-item btn btn-light">
                            <a
                                className="nav-link font-monospace fw-bold text-body-secondary"
                                href="#"
                            >
                                CHARTER
                            </a>
                        </li>
                        <li className="nav-item btn btn-light">
                            <a
                                className="nav-link fw-bold font-monospace text-body-secondary"
                                href="#"
                            >
                                VALE
                            </a>
                        </li>
                        <li className="nav-item btn btn-light">
                            <a
                                className="nav-link fw-bold font-monospace text-body-secondary"
                                href="#"
                            >
                                REPORTING
                            </a>
                        </li>

                        {/* Add more sidebar items as needed */}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;
// <div class="container-fluid">
//     <div class="row">
//         <!-- Sidebar -->
//         <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
//             <div class="position-sticky">
//                 <ul class="nav flex-column">
//                     <li class="nav-item">
//                         <a class="nav-link active" href="#">
//                             Dashboard
//                         </a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="#">
//                             Orders
//                         </a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="#">
//                             Products
//                         </a>
//                     </li>
//                     <!-- Add more sidebar items as needed -->
//                 </ul>
//             </div>
//         </nav>

//         <!-- Content -->
//<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//             <!-- Your main content goes here -->
//             <h2>Main Content</h2>
//         </main>
//     </div>
// </div>
