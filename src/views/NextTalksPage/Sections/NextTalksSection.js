import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ReactHtmlParser from 'react-html-parser'; 

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import image2 from "../../../assets/img/images/speakers/sp045.png";
import image1 from "../../../assets/img/images/speakers/sp044.png";

const useStyles = makeStyles(styles);

export default function NextTalksSection(){
    
    const [talks, setTalks] = useState([
        {
            date: "March 5, 2021",
            speaker: "Davide Michieletto",
            title: "Topologically Active Polymers and DNA",
            keywords: ["DNA topology", "Microrheology", "Soft Matter", "Living Polymers"],
            abstract: "<p>Polymer physics principles heavily rely on the assumption that polymers do not change "
            + "topology (or architecture) in time. This is not the case for DNA, which is constantly "
            + "topologically re-arranged within the cell nucleus. "
            + "Inspired by this, I propose to study entangled systems of polymers which can selectively "
            + "alter their topology and architecture in time and may expend energy to do so. I argue that "
            + "solutions of these 'topologically active (living) polymers' can display unconventional "
            + "viscoelastic behaviours and can be conveniently realised using solutions of DNA "
            + "functionalised by certain families of proteins. </p>"
            + "<p>In this talk I will present my first excursion into this field and present some recent "
            + "results on the microrheology of entangled Lambda DNA undergoing digestion by restriction "
            + "enzymes. Finally, I will discuss some wild conjectures and speculations about possible "
            + "future directions.</p>",
        },
    ]);

    const [talks2, setTalks2] = useState([
        {
            date: "March 5, 2021",
            speaker: "Daniel Peralta-Salas",
            title: "Pseudo-Seifert surfaces and vortex reconnections in quantum fluids",
            keywords: ["quantum vortices", "nodal lines", "Schrödinger equation", " Gross-Pitaievskii equation", "approximation theorems"],
            abstract: "<p>The quantum vortices of a superfluid are described as nodal lines of a solution to the time-dependent "
            +"Gross-Pitaevskii equation. Experiments in Lab and extensive numerical computations show that quantum "
            +"vortices cross, each of them breaking into two parts and exchanging part of itself for part of the other. "
            +"This phenomenon, known as quantum vortex reconnection, occurs even though the superfluid does not lose "
            +"its smoothness. This usually leads to a change of topology of the quantum vortices. In this talk I will "
            +"show that, given any initial and final congurations of quantum vortices (i.e. closed curves, possibly "
            +"knotted and linked), and any way of transforming one into the other through a generic pseudo-Seifert "
            +"surface embedded in spacetime, there is an initial condition whose associatedsolution realizes this "
            +"specific vortex reconnection scenario. This allows us to track the vortex reconnection process at all "
            +"times, both locally and globally. Key to prove this result is a new Runge-type approximation theorem "
            +"for the linear Schrodinger equation.</p> "
            +"<p>This is based on joint work with Alberto Enciso.</p>",
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
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Abstract: "}</b> {ReactHtmlParser (talk.abstract)}</p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Keywords: "}</b> {talk.keywords.join(", ")}</p></GridItem>
                        </>
                    ))}
                </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={5} className={classes.nextTalk}>
              <img src={image2} className={imageClasses}/>
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
                <GridContainer>
                    {talks2.map(talk => (
                        <>
                        <GridItem xs={12} sm={12} md={12}><h1 className={classes.title}>{talk.speaker}</h1></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{talk.date}</b></p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Title: "}</b>{talk.title}</p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Abstract: "}</b> {ReactHtmlParser (talk.abstract)}</p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Keywords: "}</b> {talk.keywords.join(", ")}</p></GridItem>
                        </>
                    ))}
                </GridContainer>
                    </GridItem>
        </GridContainer>
    );
}