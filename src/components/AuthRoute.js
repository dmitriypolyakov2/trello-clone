import { connect } from 'react-redux'
import { AuthRoute } from 'react-router-auth'
 
const mapStateToProps = state => ({
    authenticated: state.authMeta.isLogged, 
})
 
export default connect(mapStateToProps)(AuthRoute)