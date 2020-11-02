import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import choris from "../../assets/choris.jpg";
import SimpleCard from "../../components/simpleCard";


const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
    },
    disc: {
        fontFamily: "Exo2, Nunito",
    }
});
export default function home() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    return (

        <Grid container xs={12} className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Typography className={classes.disc} variant="h3">
                    Bom dia gruupo do zapzap, choris na area
                </Typography>
                <Typography className={classes.disc} variant="p">
                    Paǵina feita para explicar como funciona a estrutura dos componentes e pastas no react
                    os colegas que deram a ideia de fazer uma pg em homenagem ao choris.

                </Typography>
            </Grid>
            <Grid
                container
                justify="center"
                alignItems="center"
            >
                <img src={choris} alt={"choris"}/>
            </Grid>

            <Grid container item xs={12} spacing={2}>
                <Grid item xs={6}>
                    <SimpleCard disc={"Um homem quando esta em paz ..."} data={"2012"}/>
                </Grid>
                <Grid item xs={6}>
                    <SimpleCard disc={"Adoro uma erva fina"} date={"2009"}/>
                </Grid>
                <Grid item xs={6}>
                    <SimpleCard disc={"Carrinho sem óleo não é um carrinho"} date={"2010"}/>
                </Grid>
                <Grid item xs={6}>
                    <SimpleCard/>
                </Grid>
            </Grid>
        </Grid>
    );
}
