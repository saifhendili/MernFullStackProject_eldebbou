import React,{Fragment} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IndexAdmin from '../Admin/IndexAdmin';
import Spinner from '../Layout/Spinner';
import ListProduct from '../Frontoffice/Product/ListProduct/ListProduct';
import SendRequestOrganisation from '../Frontoffice/Request/SendRequestOrganisation';
import WaitForRespense from '../Frontoffice/Request/WaitForRespense';
import SendRequestDelivery from '../Frontoffice/Request/SendRequestDelivery';
import BlockedUser from '../Auth/BlockedUser';


function Dashboard({auth:{user,loading}}) {
  return loading || user === null ? (
    <Spinner />
  ) : (
    <Fragment>
       {
       user.blocked?<BlockedUser/>:
       user.Role =="Admin" ?<IndexAdmin/>:
       user.Role =="Client or Saller" ?
        <ListProduct/>:
        user.Role =="Organisation"&& user.status==false&&user.request==false?
         <SendRequestOrganisation/>
        : user.Role =="Delivery"&& user.status==false&&user.request==false?
        <SendRequestDelivery/>:
         user.Role =="Delivery"&& user.status==true?
<ListProduct/>:
        <WaitForRespense/>
        }
        </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,

}
const mapStateToProps = (state) => ({
  auth: state.auth,
  
});

export default connect(mapStateToProps, {
  
})(Dashboard);


