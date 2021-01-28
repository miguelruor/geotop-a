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
import image1 from "../../../assets/img/images/speakers/sp042.png";
import image2 from "../../../assets/img/images/speakers/sp043.png";

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

    const [talks2, setTalks2] = useState([
        {
            date: "February 19, 2021",
            speaker: "Nina Otter",
            title: "The magnitude of point-cloud data",
            keywords: ["magnitude", "point-cloud data", "stability", "persistent homology"],
            abstract: "<p>Magnitude is an isometric invariant of metric spaces that was introduced by Tom Leinster "
            + "in 2010, and is currently the object of intense research, since it has been shown to encode many "
            + "invariants of a metric space such as volume, dimension, and capacity.\n\n"
            + '</p>'
            + "<p>Magnitude homology is a homology theory for metric spaces that has been introduced by "
            + "Hepworth-Willerton and Leinster-Shulman, and categorifies magnitude in a similar way as the singular "
            + "homology of a topological space categorifies its Euler characteristic.\n\n"
            + "</p>"
            + "<p>In this talk I will first introduce magnitude and magnitude homology. I will then give an overview of "
            + "existing results and current research in this area, explain how magnitude homology is related to "
            + "persistent homology, and finally discuss new stability results for magnitude and how it can be used to "
            + "study point-cloud data."
            + "</p>"
            + "<p>This talk is based on joint work in progress with Miguel O'Malley and Sara Kalisnik, as well as the "
            + "<a href = https://arxiv.org/abs/1807.01540>preprint</a>.</p>",
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