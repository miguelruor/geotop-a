import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import image1 from "../../../assets/img/images/speakers/sp042.png";

const useStyles = makeStyles(styles);

export default function NextTalksSection(){
    
    const [talks, setTalks] = useState([
        {
            date: "February 5, 2021",
            speaker: "Alice Patania",
            title: "Predicting emergent sequences of neural networks via directional graphs",
            keywords: ['Neuroscience', 'topological data analysis (TDA)', 'graph signal processing'],
            abstract: 'Sequences of neural activity arise in many brain areas, including cortex, hippocampus,' 
            + 'and central pattern generator circuits that underlie rhythmic behaviors like locomotion. A' +
            ' fundamental question is to understand how the network’s connectivity shapes neuronal activity. ' 
            + 'Surprisingly, there is a correspondence between unstable fixed points and dynamic attractors. '
            + 'In this talk we will look into different network architectures and the fixed points they produce'
            + ' by decomposing the networks into “directional” components.' +
            ' This is joint work with C.Curto, F.Burtscher , S. Ebli, D.Egas, K.Morrison, N.Sanderson  and Y.Zhou.',
            image: "../../../assets/img/images/sp41.jpg",
        },
    ]);

    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid,
      );
      
    return(
        <GridContainer>
            <GridItem xs={12} sm={12} md={5} className={classes.nextTalk}>
              <img src={image1} className={imageClasses}/>
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
                <GridContainer>
                    {talks.map(talk => (
                        <>
                        <GridItem xs={12} sm={12} md={12}><h1 className={classes.title}>{talk.speaker}</h1></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{talk.date}</b></p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Title: "}</b>{talk.title}</p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Abstract: "}</b> {talk.abstract}</p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Keywords: "}</b> {talk.keywords.join(", ")}</p></GridItem>
                        </>
                    ))}
                </GridContainer>
            </GridItem>
        </GridContainer>
    );
}