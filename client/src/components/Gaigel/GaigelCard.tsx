import { makeStyles } from "@material-ui/core/styles";

import { Paper, Box, Typography, CardActionArea } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 40,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    cardActionArea: {
        height: "100%",
        width: "100%",
        display: "flex",
    },
    cardIcons: {
        flex: 1,
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
});

interface Props {
    type: string;
    value: string;
    clickable: boolean;
    playCard?: (type: string, value: string) => void;
}

interface Hash {
    [details: string]: string;
}

const GaigelCard: React.FC<Props> = ({ type, value, clickable, playCard }) => {
    const classes = useStyles();
    const symbolMap: Hash = {};
    const iconSize = 10;
    symbolMap["Eichel"] = "/Eichel.png";
    symbolMap["Blatt"] = "/Blatt.png";
    symbolMap["Herz"] = "/Herz.png";
    symbolMap["Schellen"] = "/Bollen.png";

    return (
        <Paper
            className={classes.root}
            onClick={() => {
                if (clickable && typeof playCard !== "undefined") playCard(type, value);
            }}
        >
            <CardActionArea
                className={classes.cardActionArea}
                style={{ pointerEvents: clickable ? "auto" : "none" }}
            >
                {value !== "" && (
                    <Box>
                        <img src={symbolMap[type]} width={iconSize} height={iconSize} alt="" />
                        <img src={"/Blank.jpg"} width={"15"} height={iconSize} alt="" />
                        <img src={symbolMap[type]} width={iconSize} height={iconSize} alt="" />
                        <Typography align="center">{value}</Typography>
                        <img src={symbolMap[type]} width={iconSize} height={iconSize} alt="" />
                        <img src={"/Blank.jpg"} width={"15"} height={iconSize} alt="" />
                        <img src={symbolMap[type]} width={iconSize} height={iconSize} alt="" />
                    </Box>
                )}
            </CardActionArea>
        </Paper>
    );
};

export default GaigelCard;
