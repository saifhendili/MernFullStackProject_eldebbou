import React from 'react'

function ContenuChat() {
  return (
    <div class="app-container">

    <div class="app-main" id="main">
        <div class="container-fluid">
            {/* <div class="row">
                <div class="col-md-12 m-b-30">
                    <div class="d-block d-sm-flex flex-nowrap align-items-center">
                        <div class="page-title mb-2 mb-sm-0">
                            <h1>Chat</h1>
                        </div>
                        <div class="ml-auto d-flex align-items-center">
                            <nav>
                                <ol class="breadcrumb p-0 m-b-0">
                                    <li class="breadcrumb-item">
                                        <a href="index.html">
                                            <i class="ti ti-home"></i>
                                        </a>
                                    </li>
                                    <li aria-current="page" class="breadcrumb-item active text-primary">
                                        Chat
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div> */}
         
            <div class="row">
                <div class="col-12">
                    <div class="card card-statistics">
                        <div class="card-body p-0">
                            <div class="row no-gutters">
                                <div class="col-xl-4 col-xxl-3">
                                    <div class="app-chat-sidebar border-right border-md-n h-100">
                                        <div class="app-chat-sidebar-search px-4 pb-4 pt-4 border-bottom">
                                            <div class="input-group">
                                                <input aria-describedby="basic-addon1" class="form-control border-right-0" placeholder="Search..." type="text"/>
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon1">
                                                            <i class="ti ti-search magnifier"></i>
                                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="app-chat-sidebar-user scrollbar scroll_dark">
                                            <div class="app-chat-sidebar-user-item">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex active">
                                                        <div>
                                                            <div class="bg-img">
                                                                <img class="img-fluid" src="assets/img/avtar/01.jpg" alt="user"/>
                                                                <i class="bg-img-status bg-success"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h5 class="mb-0">Demian Leyon</h5>
                                                            <p class="text-white"><span><i class="zmdi zmdi-check mr-2"></i></span>I like you</p>
                                                            <div class="d-xl-none">
                                                                <small>Just now</small>
                                                                <span class="badge badge-success">5</span>
                                                            </div>
                                                        </div>
                                                        <div class="ml-auto text-right d-none d-xl-block">
                                                            <small>Just now</small>
                                                            <span class="badge badge-success">5</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="app-chat-sidebar-user-item">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/02.jpg" alt="user"/>
                                                        </div>
                                                        <div>
                                                            <h5 class="mb-0">Jennyns Leyon</h5>
                                                            <p><span><i class="zmdi zmdi-check mr-2"></i></span>How are you</p>
                                                            <small class="d-xl-none">yesterday</small>
                                                        </div>
                                                        <div class="ml-auto text-right d-none d-xl-block">
                                                            <small>yesterday</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="app-chat-sidebar-user-item">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/03.jpg" alt="user"/>
                                                            <i class="bg-img-status bg-success"></i>
                                                        </div>
                                                        <div>
                                                            <h5 class="mb-0">Smithmin Leyon </h5>
                                                            <p><span><i class="zmdi zmdi-check-all mr-2"></i></span>Thanks</p>
                                                            <div class="d-xl-none">
                                                                <small>30 Aug</small>
                                                                <span class="badge badge-success">35</span>
                                                            </div>
                                                        </div>
                                                        <div class="ml-auto text-right d-none d-xl-block">
                                                            <small>30 Aug</small>
                                                            <span class="badge badge-success">35</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="app-chat-sidebar-user-item">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/04.jpg" alt="user"/>
                                                            <i class="bg-img-status bg-danger"></i>
                                                        </div>
                                                        <div>
                                                            <h5 class="mb-0">Brianing Leyon</h5>
                                                            <p><span><i class="zmdi zmdi-check mr-2"></i></span> You will sail along until you...</p>
                                                            <div class="d-xl-none">
                                                                <small>25 Aug</small> <span class="badge badge-success">15</span>
                                                            </div>
                                                        </div>
                                                        <div class="ml-auto text-right d-none d-xl-block">
                                                            <small>25 Aug</small> <span class="badge badge-success">15</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="app-chat-sidebar-user-item">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex">
                                                        <div>
                                                            <div class="bg-img">
                                                                <img class="img-fluid" src="assets/img/avtar/05.jpg" alt="user"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h5 class="mb-0">Adrianing Leyon</h5>
                                                            <p><span><i class="zmdi zmdi-check mr-2"></i></span>Hi...</p>
                                                            <small class="d-xl-none">20 Aug</small>
                                                        </div>
                                                        <div class="ml-auto text-right d-none d-xl-block">
                                                            <small>20 Aug</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="app-chat-sidebar-user-item">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/06.jpg" alt="user"/>
                                                            <i class="bg-img-status bg-success"></i>
                                                        </div>
                                                        <div>
                                                            <h5 class="mb-0">Garydmi Leyon</h5>
                                                            <p><span><i class="zmdi zmdi-check-all mr-2"></i></span>Thanks</p>
                                                            <div class="d-xl-none">
                                                                <small>15 Aug</small>
                                                                <span class="badge badge-success">45</span>
                                                            </div>
                                                        </div>
                                                        <div class="ml-auto text-right d-none d-xl-block">
                                                            <small>15 Aug</small>
                                                            <span class="badge badge-success">45</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="app-chat-sidebar-user-item">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/07.jpg" alt="user"/>
                                                        </div>
                                                        <div>
                                                            <h5 class="mb-0">Andrewvi Leyon</h5>
                                                            <p><span><i class="zmdi zmdi-check mr-2"></i></span>Hello...</p>
                                                            <div class="d-xl-none">
                                                                <small>06 Aug</small>
                                                                <span class="badge badge-success">99+</span>
                                                            </div>
                                                        </div>
                                                        <div class="ml-auto text-right d-none d-xl-block">
                                                            <small>06 Aug</small>
                                                            <span class="badge badge-success">99+</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="app-chat-sidebar-user-item">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/08.jpg" alt="user"/>
                                                        </div>
                                                        <div>
                                                            <h5 class="mb-0">Brainjon Leyon</h5>
                                                            <p><span><i class="zmdi zmdi-check mr-2"></i></span>So, make the decision...</p>
                                                            <small class="d-xl-none">30 May</small>
                                                        </div>
                                                        <div class="ml-auto text-right d-none d-xl-block">
                                                            <small>30 May</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="app-chat-sidebar-user-item">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/09.jpg" alt="user"/>
                                                            <i class="bg-img-status bg-danger"></i>
                                                        </div>
                                                        <div>
                                                            <h5 class="mb-0">Jimmyimg Leyon</h5>
                                                            <p><span><i class="zmdi zmdi-check-all mr-2"></i></span>Okay</p>
                                                            <div class="d-xl-none">
                                                                <small>30 May</small>
                                                                <span class="badge badge-success">25</span>
                                                            </div>
                                                        </div>
                                                        <div class="ml-auto text-right d-none d-xl-block">
                                                            <small>30 May</small>
                                                            <span class="badge badge-success">25</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-8 col-xxl-9 border-md-t">
                                    <div class="app-chat-msg">
                                        <div class="d-flex align-items-center justify-content-between p-3 px-4 border-bottom">
                                            <div class="app-chat-msg-title">
                                                <h4 class="mb-0">Demian Leyon</h4>
                                                <p class="text-success">
                                                    Online
                                                </p>
                                            </div>
                                            <div class="app-chat-msg-btn">
                                                <a class="font-20 text-muted btn" href="javascript:void(0)">
                                                    <i class="fa fa-video-camera"></i>
                                                </a>
                                                <a aria-expanded="false" aria-haspopup="true" class="font-20 text-muted btn pr-0" data-toggle="dropdown" href="javascript:void(0)">
                                                    <i class="fa fa-gear"></i>
                                                </a>
                                                <div class="dropdown-menu custom-dropdown dropdown-menu-right p-4">
                                                    <h6>Action</h6>
                                                    <a class="dropdown-item" href="javascript:void(0)">
                                                        <i class="ti ti-pencil pr-2"></i>Rename
                                                    </a>
                                                    <a class="dropdown-item" href="javascript:void(0)">
                                                        <i class="ti ti-announcement pr-2"></i>Mark as Unread
                                                    </a>
                                                    <a class="dropdown-item" href="javascript:void(0)">
                                                        <i class="ti ti-close pr-2"></i>Close
                                                    </a>
                                                    <a class="dropdown-item" href="javascript:void(0)">
                                                        <i class="ti ti-trash pr-2"></i>Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="scrollbar scroll_dark app-chat-msg-chat p-4">
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/01.jpg" alt="user"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center py-4">
                                                <h6>30 May</h6>
                                            </div>
                                            <div class="chat chat-left justify-content-end">
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/01.jpg" alt="user"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/01.jpg" alt="user"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center py-4">
                                                <h6>06 Aug</h6>
                                            </div>
                                            <div class="chat chat-left justify-content-end">
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/01.jpg" alt="user"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/01.jpg" alt="user"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center py-4">
                                                <h6>20/07/2018</h6>
                                            </div>
                                            <div class="chat chat-left justify-content-end">
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/01.jpg" alt="user"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/01.jpg" alt="user"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center py-4">
                                                <h6>Today</h6>
                                            </div>
                                            <div class="chat chat-left justify-content-end">
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)">
                                                        <div class="bg-img">
                                                            <img class="img-fluid" src="assets/img/avtar/01.jpg" alt="user"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="app-chat-type">
                                        <div class="input-group mb-0 ">
                                            <div class="input-group-prepend d-none d-sm-flex">
                                                <span class="input-group-text">
                                                        <i class="fa fa-smile-o">
                                                        </i>
                                                    </span>
                                            </div>
                                            <input class="form-control" placeholder="Type here..." type="text"/>
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                        <i class="fa fa-paper-plane"></i>
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ContenuChat