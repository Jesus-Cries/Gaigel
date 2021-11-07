import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

import GaigelCard from "../../components/GaigelCard/GaigelCard";

const useStyles = makeStyles({
    root: {
        width: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    cardActionArea: {
        height: "100%",
        width: "100%",
        display: "flex",
    },
    paper: {
        width: 50,
        height: 75,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    counter: {
        marginTop: 10,
    },
    header: {
        marginBottom: 10,
    },
});

interface Props {
    cardsLeft: number;
    drawCard: (amount: number) => void;
}

const Talon: React.FC<Props> = ({ cardsLeft, drawCard }) => {
    const classes = useStyles();

    return (
        <Grid item className={classes.root}>
            <Typography className={classes.header}>Talon</Typography>
            <Paper className={classes.paper}>
                <CardActionArea
                    className={classes.cardActionArea}
                    onClick={() => {
                        drawCard(1);
                    }}
                >
                    <Typography variant="h4" align="center">
                        🃏
                    </Typography>
                </CardActionArea>
            </Paper>
            <Typography className={classes.counter}>Cards left: {cardsLeft}</Typography>
        </Grid>
    );
};

export default Talon;
