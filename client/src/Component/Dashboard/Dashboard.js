import React,{Fragment} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IndexAdmin from '../Admin/IndexAdmin';
import Spinner from '../Layout/Spinner';
import ListProduct from '../Frontoffice/Product/ListProduct/ListProduct';


function Dashboard({auth:{user,loading}}) {
  return loading || user === null ? (
    <Spinner />
  ) : (
    <Fragment>
       {user.Role =="Admin" ?<IndexAdmin/>:
        <ListProduct/>
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


