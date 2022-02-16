import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: "10%",
        borderRadius: 20,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        gap: "10px",
    },
    name: {
        padding: 5,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 8,
    },
});

interface Props {
    order: string[];
    playerWithTurn: string;
}

const PlayerList: React.FC<Props> = ({ order, playerWithTurn }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {order.map((name) => {
                let turn = name === playerWithTurn;
                return (
                    <>
                        <Typography
                            className={classes.name}
                            style={{ border: turn ? "2px solid #ffe600" : "none" }}
                            key={name}
                        >
                            {name}
                        </Typography>
                        <Typography>›</Typography>
                    </>
                );
            })}
        </Box>
    );
};

export default PlayerList;
