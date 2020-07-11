import React, { useContext } from 'react';
import Shoe from './../shoe.json';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Nikeimg from './../images/nike.png'
import { Context } from './../GlobalContext/Context';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: '10px',
        padding: '10px',
        border: '2px solid #9aa6e2',
        boxShadow: '2px 2px 3px #9aa6e2',
        textAlign: 'center',
        background: '#f4f5f6',
        color: theme.palette.text.secondary,
    },
}));


function ProductHome() {

    const classes = useStyles();
    const { Additems,alert,Alert } = useContext(Context);
    // console.log(Additems)

    console.log(alert)
    // Additems(item);
    

    return (
        <div className={classes.root} >

            <div className="ProductHome">
                {
                    Object.keys(Shoe).map((Objpro) => {     //Object.keys array return kare ga name ki
                        const tempShoe = Shoe[Objpro];       //name se particular obj le sakte he Shoe[Objpro]=Shoe.Objpro 
                        return (
                            <Grid item xs={12} sm={4} key={Objpro}>
                                <Paper className={classes.paper}>

                                    <p className="imagename">
                                        <img src={Nikeimg} width={35} height={40} alt="nikelogo"></img>
                                        {tempShoe.name}

                                    </p>
                                    <Link to={Objpro} className="Shoelink">
                                        <img src={tempShoe.img} className="shoeimg" alt="ShoesImage" />
                                    </Link>
                                    <p className="priceshoe"> <span style={{ paddingLeft: '4px' }}> RS: {tempShoe.Price} </span>
                                        <span>

                                            <button onClick={() => {
                                                Additems(tempShoe) 
                                                Alert(alert+1)
                                            }} className="btnchart">Add to Cart</button>

                                        </span>
                                    </p>

                                </Paper>
                            </Grid>
                        )

                    })
                }
            </div>

        </div>
    );
}
export default ProductHome;