import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Divider
} from '@material-ui/core';


const styles = {
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    },
    infoBlock: {
        paddingRight: 20
    }
};

const phone = '+7 (8442) 33-33-33';

class Contacts extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <Grid item xs={12}>
                    <Typography
                        variant="title"
                        className={classes.title}
                    >
                        Офис продаж и контакты
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.infoBlock}>
                    <Typography>
                        Мобильный автоответчик - при звонке на номер {phone} вас
                        поприветствует автоответчик компании. Прослушав голосовое меню вы найдете
                        большинство ответов на свои вопросы. Если же ответы не были найдены, мы
                        с радостью вам поможем.
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.infoBlock}>
                    <Typography component='div'>
                        Вы можете позвонить на наши круглосуточные номера:
                        <ul>
                            <li> {phone} – для абонентов беспроводного интернета </li>
                            <li> {phone} – для абонентов проводного интернета </li>
                            <li> {phone} – для абонентов Волжского </li>
                            <li> {phone} – наш мобильный номер </li>
                        </ul>
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Contacts);