import React, { Component, createElement } from 'react';
import { TextField, Grid } from '@material-ui/core';
import { Field as BaseField } from 'redux-form';
import { withStyles } from '@material-ui/core';


const styles = {
    icon: {
        fontSize: 30,
        marginRight: 10
    }
};

const renderTextField = ({input, meta: { touched, error }, fieldProps}) => (
    <TextField
        error={touched && error}
        helperText={touched && error}
        margin="normal"
        {...input}
        {...fieldProps}
    />
)

class Field extends Component {
    render() {
        const {
            gridWidth,
            icon,
            fieldProps,
            name,
            classes,
            alignItems = "flex-end"
        } = this.props;

        const iconComponent = createElement(icon, {
            color: 'primary',
            className: classes.icon
        });

        return (
            <Grid
                container
                item
                xs={gridWidth}
                alignItems={alignItems}
            >
                { icon && <Grid item> {iconComponent} </Grid> }
                <Grid item>
                    <BaseField {...{
                        name,
                        fieldProps,
                        component: renderTextField
                    }}/>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Field);
