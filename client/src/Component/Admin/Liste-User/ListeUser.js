import React,{useEffect,Fragment} from 'react'
import {GetUsers} from '../../../actions/user'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import UserItem from './UserItem';
import Spinner from '../../Layout/Spinner';
import Aside from '../Layout/Aside';


const ListeUser = ({GetUsers,user:{users,loading}}) => {

    useEffect(() => {
        GetUsers();
      }, [GetUsers]);

  return (
      
<Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>

<div class="app-container">

    <div class="app-main" id="main">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 m-b-30">
                <div class="d-block d-sm-flex flex-nowrap align-items-center">
                    <div class="page-title mb-2 mb-sm-0">
                        <h1>Clients</h1>
                    </div>
                    <div class="ml-auto d-flex align-items-center">
                        <nav>
                            <ol class="breadcrumb p-0 m-b-0">
                                <li class="breadcrumb-item">
                                    <a href="index.html"><i class="ti ti-home"></i></a>
                                </li>
                                <li class="breadcrumb-item">
                                    Pages
                                </li>
                                <li class="breadcrumb-item active text-primary" aria-current="page">Clients</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="row">
            <div class="col-12">
                <div class="card card-statistics clients-contant">
                    <div class="card-header">
                        <div class="d-xxs-flex justify-content-between align-items-center">
                            <div class="card-heading">
                                <h4 class="card-title">Clients</h4>
                            </div>
                           
                        </div>
                    </div>
                    <div class="card-body py-0 table-responsive">
                        <table class="table clients-contant-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Clients</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Edit & Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                              {users.map((x)=>(<UserItem  key={x._id} x={x} />))}
                                   
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
 
    </div>
  
    </div>  </div>  
 </Fragment>
      )}
    </Fragment>
  );
};
ListeUser.propTypes = {
    GetUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    user: state.user,
  });
  
  export default connect(mapStateToProps, { GetUsers })(ListeUser);
 