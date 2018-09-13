import React, { Component } from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Grid
} from '@material-ui/core';


class Layout extends Component {
    render() {
        const {
            children,
            handleSubmit,
            pristine,
            reset,
            invalid,
            submitting
        } = this.props;

        return (
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={16}>
                            {children}
                        </Grid>
                    </form>
                </CardContent>
                <CardActions>
                    <Button
                        type="submit"
                        color="secondary"
                        variant="raised"
                        disabled={submitting || invalid}
                    >
                        Отправить заказ
                    </Button>
                    <Button
                        variant="raised"
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
                        Сбросить
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default Layout;
