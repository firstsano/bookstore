import React, { Component } from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Divider,
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
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <Grid container spacing={16}>
                            {children}
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Button
                            onClick={handleSubmit}
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
                </form>
            </Card>
        );
    }
}

export default Layout;
