import React, {useEffect, useState} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import {db} from '../../../ConfigFirebase';

import classNames from "classnames";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { FormatAlignJustify } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function FutureTalks(){
    const classes = useStyles();

    const [talks,setTalks] = useState([
        {
            date: "January 22",
            speaker: "Sergei Nechaev",
            tittle: "Interdisciplinary Scientific Center Poncelet (CNRS UMI 2615) Moscow - Russia"
        },  
        {
            date: "February 5",
            speaker: "Alice Patania",
            tittle: "Indiana University - USA"
        },
        {
            date: "February 19",
            speaker: "Nina Otter",
            tittle: "UCLA - USA"
        },
        {
            date: "March 5",
            speaker: "Davide Michieletto",
            tittle: "University of Edinburgh - UK"
        },
        {
            date: "March 19",
            speaker: "Daniel Peralta-Salas",
            tittle: "ICMAT - Spain"
        },
        {
            date: "April 9",
            speaker: "Stephen Childress",
            tittle: "NYU - USA"
        },
        {
            date: "April 23",
            speaker: "Andrzej Stasiak",
            tittle: "University of Lausanne - Switzerland"
        },
        {
            date: "May 7",
            speaker: "Aldo Guzmán-Sáenz",
            tittle: "IBM Thomas J. Watson Research Center - USA"
        },
        {
            date: "May 21",
            speaker: "Caroline Uhler",
            tittle: "ETH Zurich - Switzerland"
        },
    ]);

    const [talks2,setTalks2] = useState([
        {
            date: "August 20",
            speaker: "Bei Wang",
            tittle: "University of Utah - USA"
        },  
        {
            date: "September 3",
            speaker: "Yasu Wang",
            tittle: "UC San Diego - USA"
        },
        {
            date: "September 17",
            speaker: "Enzo Orlandini", 
            tittle: "Physics U. Padova - Italy"
        },
        {
            date: "October 1",
            speaker: "Lynn Zechiedrich",
            tittle: "Baylor College of Medicine - USA"
        },
        {
            date: "October 15",
            speaker: "Janet M. Thornton",
            tittle: "EMBL-EBI - UK"
        },
        {
            date: "October 29",
            speaker: "Fazle Hussain",
            tittle: "Texas Tech University - USA"
        },
        {
            date: "November 12",
            speaker: "Paweł Dłotko",
            tittle: "Dioscuri Center - Poland"
        },
        {
            date: "November 19",
            speaker: "Antonio Rieser",
            tittle: "CIMAT - Mexico"
        },
        {
            date: "December 10",
            speaker: "Matthew Kahle",
            tittle: "Ohio State University - USA"
        },
    ]);

    return(
        <>
        <div className={classes.section} style={{paddingTop: 20}}>
            <h1 className={classes.title}>SPRING 2021 TALKS</h1>
            <div styles={{justifyContent: 'center'}}>
                <GridContainer>
                    <GridItem xs={3} sm={3} md={2}>
                        <Button type="button" color="primary" disabled>Date</Button>
                    </GridItem>
                    <GridItem xs={9} sm={9} md={10}>
                        <Button type="button" color="primary" disabled>Speaker</Button>
                    </GridItem>
                    {talks.map(talk => (
                        <>
                        <GridItem xs={3} sm={3} md={2}>
                            <p className={classes.nextTalks}>{talk.date}</p>
                        </GridItem>
                        <GridItem xs={3} sm={3} md={2}>
                            <p className={classes.nextTalks}>{talk.speaker}</p>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={8}>
                            <p className={classes.nextTalks}>{talk.tittle}</p>
                        </GridItem>
                        </>
                    ))}
                </GridContainer>
            </div>
        </div>
        <div className={classes.section} style={{paddingTop: 20}}>
            <h1 className={classes.title}>FALL 2021 TALKS</h1>
            <div styles={{justifyContent: 'center'}}>
                <GridContainer>
                    <GridItem xs={3} sm={3} md={2}>
                        <Button type="button" color="primary" disabled>Date</Button>
                    </GridItem>
                    <GridItem xs={9} sm={9} md={10}>
                        <Button type="button" color="primary" disabled>Speaker</Button>
                    </GridItem>
                    {talks2.map(talk => (
                        <>
                        <GridItem xs={3} sm={3} md={2}>
                            <p className={classes.nextTalks}>{talk.date}</p>
                        </GridItem>
                        <GridItem xs={3} sm={3} md={2}>
                            <p className={classes.nextTalks}>{talk.speaker}</p>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={8}>
                            <p className={classes.nextTalks}>{talk.tittle}</p>
                        </GridItem>
                        </>
                    ))}
                </GridContainer>
            </div>
        </div>
        </>
    );
}