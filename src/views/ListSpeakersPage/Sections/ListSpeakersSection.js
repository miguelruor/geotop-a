import React, {useEffect, useState} from "react";

import removeAccents from "remove-accents"

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import MenuOpen from '@material-ui/icons/MenuOpen';

import {db} from '../../../ConfigFirebase';

// For modals

import Button from "../../../components/CustomButtons/Button.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

export default function ListSpeakersSection(){
    const classes = useStyles();
    const [speakersList,setSpeakersList] = useState([]);
    const [speakersDic, setSpeakersDic] = useState({});
    const [speakersListByLetter,setSpeakersListByLatter] = useState([]);
    const [lettersInSurname, setLettersInSurname] = useState([]);
    const [visitLetters, setVisitLetters] = useState({});
    const [talks,setTalks] = useState({});

    //para modals
    const [modal, setModal] = useState(false);
    const[talkTitle,setTalkTitle] = useState('');
    const[talkDate,setTalkDate] = useState('');
    const[talkDescription,setTalkDescription] = useState('');
    const[talkVideo,setTalkVideo] = useState('');
    const[talkPresentation,setTalkPresentation] = useState('');
    const[talkSpeaker,setTalkSpeaker] = useState('');
    const[talkKeywords,setTalkKeywords] = useState([]);

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    useEffect(async () => {
        var talks = {};
        await db.collection("talks")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(async function(doc){
                var date = doc.data().date.toDate();
                talks[doc.id] = {
                    speakerID: doc.data().speaker,
                    year: date.getFullYear(),
                    video: doc.data().video,
                    date: month[date.getMonth()] + " " + date.getDate().toString() + ", " + date.getFullYear().toString(),
                    title: doc.data().title,
                    keywords: doc.data().keywords,
                    slides: doc.data().presentation,
                    abstract: doc.data().abstract,
                };
            });
        })
        .catch(function(error) {
            alert("Cannot load some talk.");
        });
        setTalks(talks);
    
        var speakers = {};

        await db.collection("speakers").where("talks","!=", null)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    var mi = doc.data().middle_initial;

                    speakers[doc.id] = {
                        name: doc.data().name,
                        surname: doc.data().surname,
                        middle_initial: doc.data().middle_initial,
                        completeName: doc.data().name + " " + 
                            (mi != null ? mi : "") + " " + doc.data().surname,
                        talks: doc.data().talks,
                        years: [],
                        inList: false
                    };

                    var talks_len = speakers[doc.id].talks.length;

                    if(talks[speakers[doc.id].talks[0].toString()].video != null){
                        speakers[doc.id].inList = true;
                    }

                    for(var i=0; i<talks_len; i++){
                        var talkDate = talks[speakers[doc.id].talks[i].toString()].date.toDate();

                        speakers[doc.id].years.push(talkDate.getFullYear());
                    }

                }); // Se acaba el forEach
            })
            .catch(function(error) {
                alert("Cannot load speakers");
            });



            /*listSpeakers.sort(function(a,b){
                if(removeAccents(a.surname) > removeAccents(b.surname)){
                    return 1;
                }
                if(a.surname < b.surname){
                    return -1;
                }
                return 0;
            });*/
            setSpeakersDic(speakers);
            //setSpeakersList(listSpeakers);
        },[]);

    // Al modificar speakers list con el contenido se actualiza
    useEffect(() => {
        handleLettersInSurname();
    },[speakersList]);
      
    // Función que revisa las letras que existen para hacer listas
    function handleLettersInSurname(){
        let letterSet = new Set();
        let visitLetters = {};
        let speakersWithLetter = {};

        speakersList.forEach(speaker => {
            if(!speaker.inList){
                return;
            }

            const letter = removeAccents(speaker.surname.charAt(0));
            //console.log(letter);
            letterSet.add(letter);
            visitLetters[letter] = false;
            speakersWithLetter[letter] = [];
        });

        speakersList.forEach(speaker => {
            if(!speaker.inList){
                return;
            }
            const letter = removeAccents(speaker.surname.charAt(0));
            //console.log(letter);
            speakersWithLetter[letter].push(speaker);
        });
        
        setLettersInSurname([...letterSet]);
        setVisitLetters(visitLetters);
        setSpeakersListByLatter(speakersWithLetter); 
    }  

    function listWithLetter(letter){
        const listItems = speakersListByLetter[letter].map(speaker => {
            var firstTalk = true;
            return(
                <li style={{listStyleType:'square'}}>
                <h5 style={{fontSize: '20px', fontStyle:'normal'}}>{speaker.surname} {speaker.name} {speaker.middle_initial} <br/>
                {speaker.talks.map(function(talkID) {
                    if(talks[talkID].video == null){
                        return;
                    }
                    return (
                        <>
                            {firstTalk ? firstTalk=false : ', ' }<a href={talks[talkID].video} target="_blank">{talks[talkID].season}</a>
                        </>
                    );  
                })}
                </h5>
                </li>
            );
        }
        
        );
        
        return (
            <ul style={{textAlign: 'left'}}>{listItems}</ul>
        );
    }

    function listAlphabetical(){
        const listItems = lettersInSurname.map(letter => 
                <li 
                    style={{cursor: 'pointer'}}> 
                    <h1 className={classes.title}> 
                        {letter} <MenuOpen
                        onClick={onclickLetter.bind(this, letter)}
                        /> {visitLetters[letter] ? listWithLetter(letter) : null}
                    </h1>
                </li>
        );
        return (
            <ul style={{textAlign: 'left'}}>{listItems}</ul>
        );
    }

    const [count, setCount] = useState(0);

    function onclickLetter(letter){
        let newVisit = visitLetters;
        newVisit[letter] = !newVisit[letter];
        setVisitLetters(newVisit);
        setCount(count+1);
    }
    return(
        <div className={classes.section}> 
            {listAlphabetical()}
        </div>
    );
}