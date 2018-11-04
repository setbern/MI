import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Base from './Base';
import AnimationCon from './AnimationCon';
import DashboardPage from './DashboardPage';

class Home extends Base {
    render() {
        return (
            <div className='Home'>
                <Route 
                    exact 
                    path={'/'} 
                    render={ 
                        () => <Redirect to={'/home/dashboard'} /> 
                    } 
                />
                <Route
                    path={'/home/dashboard'}
                    children={props => {
                        return (
                            <AnimationCon
                                in={this.props.location.pathname.indexOf('dashboard') != -1}
                                classNames='dashboard'
                                appear
                                timeout={{
                                    enter: 1000,
                                    exit: 1000,
                                }}
                            >
                                <DashboardPage {...props}/>
                            </AnimationCon>
                        )  
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);