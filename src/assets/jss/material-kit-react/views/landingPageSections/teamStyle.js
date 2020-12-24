import { FullscreenExit } from "@material-ui/icons";
import { cardTitle, title } from "../../../material-kit-react.js";
import imagesStyle from "../../imagesStyles.js";

const teamStyle = {
  section: {
    //padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "black"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  nextTalk: {
    //backgroundColor: 'black',
      paddingLeft: '70px',
      paddingTop: '60px',
    //padding: '10%',
    //border: 0,
  },
  team: {
    paddingLeft: '150px',
    paddingRight: '150px'
  }
};

export default teamStyle;
