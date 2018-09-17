import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { get } from 'lodash';

import routes from '~/src/helpers/routes';
import history from '~/src/helpers/history';
import Modal from '~/src/components/Modal';


class ModalSwitch extends Component {
    constructor(props) {
        super(props);
        this.previousLocation = props.location;
    }

    componentWillUpdate(nextProps) {
        if (get(nextProps.location, 'state.modal')) {
            this.previousLocation = this.props.location;
        }
    }

    get isModal() {
        const { location } = this.props;
        return get(location, 'state.modal') && this.previousLocation !== location;
    }

    render() {
        const { location } = this.props;
        const mappedRoutes = routes.map((props) => <Route key={props.name} {...props} />);

        return (
            <Fragment>
                <Switch location={this.isModal ? this.previousLocation : location}>
                    {mappedRoutes}
                </Switch>
                {this.isModal && (
                    <Modal onLayoutClick={(e) => history.goBack()}>
                        <Switch> {mappedRoutes} </Switch>
                    </Modal>
                )}
            </Fragment>
        );
    }
}

export default withRouter(ModalSwitch);
