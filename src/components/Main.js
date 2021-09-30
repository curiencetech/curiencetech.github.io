import React, { useRef } from 'react';
import './Main.css';
import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import fashion_design_draw from './assets/fashion_design_draw.jpeg';
// import noun_fashion_design_sketch from './assets/noun_fashion_design_sketch.jpeg';

import background1 from './assets/background1.jpeg';
import background2 from './assets/background2.jpeg';
import background3 from './assets/background3.jpeg';
import background4 from './assets/background4.jpeg';

import siddhant_pic from './assets/siddhant_pic.jpeg';
import Divider from "@material-ui/core/Divider";

import logo from './assets/logo.png';

import logo1 from './assets/1.png';
import logo2 from './assets/2.png';

import AppBar from '@material-ui/core/AppBar';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CrossfadeImage from './CrossFadeImage';
import { FaIndustry, FaMobileAlt, FaSearch, FaEnvelope } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';


const images = [background1, background2, background3, background4];

function GetLandingPageImage(props) {
    const [imageIndex, setImageIndex] = React.useState(0);

    function changeImage() {
        if (imageIndex === images.length - 1) {
            console.log("Set index to:", 0);
            setImageIndex(0);
        } else {
            let local_index = imageIndex;
            console.log("Set index to:", local_index);
            setImageIndex(local_index + 1);
        }
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            console.log("Change image called.");
            changeImage();

        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, [imageIndex]);

    return (
        <Grid item xs={12} sm={12} style={{
            height: window.innerHeight, width: window.innerWidth
        }}>
            <CrossfadeImage
                src={images[imageIndex]}
                duration={1000}
                timingFunction={"ease-out"}
            >
            </CrossfadeImage>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0}
                style={{ width: "100%", height: "100%", position: "absolute", top: "0px", backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            >
                <Grid item xs={1} sm={3}>
                </Grid>
                <Grid item xs={10} sm={6} style={{ textAlign: "center" }}>
                    <div >
                        <p style={{
                            fontSize: "80px",
                            fontFamily: "Georgia", fontWeight: 100, color: "#1d3557",
                            padding: "10px", textShadow: "inherit",
                            textShadow: "-0.5px 0 white, 0 0.5px white, 0.5px 0 white, 0 -0.5px white",
                            backgroundColor: "rgba(255, 255, 255, 0.5)"
                        }}>
                            Curience
                            <p style={{
                                fontSize: "30px", fontFamily: "serif", marginTop: "-1px",
                                textShadow: "-0.25px 0 #073b4c, 0 0.25px #073b4c, 0.25px 0 #073b4c, 0 -0.25px #073b4c"
                            }}>
                                Curating quality fashion and lifestyle experiences.
                            </p>
                        </p>
                    </div>
                    <div>
                        <button
                            style={{
                                backgroundColor: "#ff4d6d",
                                color: "rgb(255, 254, 220)",
                                fontSize: "20px",
                                fontFamily: "serif",
                                padding: "10px 20px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                marginRight: "15px",
                                marginLeft: "15px",
                                borderColor: "rgba(255, 254, 220, 0.4)"
                            }}
                            onClick={() => {
                                props.what_we_do.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }}>
                            What We Do
                        </button>
                        <button
                            style={{
                                backgroundColor: "#ff4d6d",
                                color: "rgb(255, 254, 220)",
                                fontSize: "20px",
                                fontFamily: "serif",
                                padding: "10px 20px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                marginRight: "15px",
                                marginLeft: "15px",
                                borderColor: "rgba(255, 254, 220, 0.4)"
                            }}
                            onClick={() => {
                                props.about_us.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }}>
                            Who We Are
                        </button>
                        <button
                            style={{
                                backgroundColor: "#ff4d6d",
                                color: "rgb(255, 254, 220)",
                                fontSize: "20px",
                                fontFamily: "serif",
                                padding: "10px 20px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                marginRight: "15px",
                                marginLeft: "15px",
                                borderColor: "rgba(255, 254, 220, 0.4)"
                            }}
                            onClick={() => {
                                window.open('https://outgoing-stay-139.notion.site/Curience-Job-Board-9c585d7510a043288e211c74a83a624d');
                            }}>
                            Work With Us
                        </button>
                    </div>
                </Grid>
                <Grid item xs={1} sm={3}>
                </Grid>
            </Grid>
        </Grid >
    );
}

function WhatWeDoItem(props) {
    return (
        <div>
            <div>
                <p>
                    <span style={{ fontSize: "30px", color: "#ff4d6d" }}>
                        {
                            props.icon === "industry" ? <FaIndustry /> : (props.icon === "search" ? <FaSearch /> : <FaMobileAlt />)
                        }
                    </span>
                </p>
            </div>
            <h4 style={{ color: "#1d3557", fontFamily: "Georgia" }}>
                {props.heading}
            </h4>
            <p style={{ color: "#1d3557", fontFamily: "serif", fontSize: "18px" }}>
                {props.content}
            </p>
            <p>
                <br />
                <br />
                <br />
            </p>
        </div>
    );
}

function WhatWeDo(props) {
    return (
        <Grid container style={{ textAlign: "center", paddingTop: "50px", justifyContent: "center", alignContent: "center" }} spacing={2}>
            <Grid container xs={12} sm={12}>
                <Grid item xs={3} sm={3}>
                </Grid>
                <Grid ref={props.what_we_do} item xs={6} sm={6}>
                    <h1 style={{ color: "#1d3557", fontFamily: "Georgia" }}>
                        What We Do
                    </h1>
                    <p>
                        <br />
                        <Divider />
                        <br />
                    </p>
                    <p style={{ color: "#1d3557", fontFamily: "serif", fontSize: "18px" }}>
                        We are building a recommendation-first fashion commerce platform where people come for trend inspirations and make informed purchase decisions.
                    </p>
                    <p style={{ color: "#1d3557", fontFamily: "serif", fontSize: "18px" }}>
                        It is supported by a supply-chain which ensures high-quality trendy products at affordable prices.
                    </p>
                </Grid>
                <Grid item xs={3} sm={3}>
                </Grid>

                <Grid item xs={5} sm={5}>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <h3 style={{ color: "#1d3557", fontFamily: "Georgia" }}>
                        <br />
                        Our Methodology
                        <br />
                    </h3>
                    <p>
                        <Divider />
                    </p>
                </Grid>
                <Grid item xs={5} sm={5}>
                </Grid>
                <Grid item xs={0} sm={3}>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <WhatWeDoItem
                        icon="industry"
                        heading="Feedback"
                        content="A faster feedback loop with our supply/manufacturing partners"
                    />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <WhatWeDoItem
                        icon="search"
                        heading="Curation"
                        content="Data driven SKU curation which keeps us ahead of the fashion industry"
                    />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <WhatWeDoItem
                        icon="app"
                        heading="Experience"
                        content="Improved app experience via ML driven personalized recommendations"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

function PeopleCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }} style={{ padding: "10px" }}>
            <CardMedia
                component="img"
                height="300"
                image={props.url}
                alt={props.alttext}
                style={{ opacity: 0.7 }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ color: "#1d3557", fontFamily: "serif", fontSize: "22px" }}>
                    {props.name}
                </Typography>
                <Typography variant="body2" style={{ color: "#1d3557", fontFamily: "serif", fontSize: "18px" }}>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
                <SocialIcon url={props.linkedin} />
                <a href={"mailto:" + props.email}>
                    <div style={{ width: "48px", height: "48px", backgroundColor: "#1d3557", borderRadius: "24px", textAlign: "center" }}>
                        <FaEnvelope style={{ fontSize: "24px", color: "rgb(255, 254, 220)", marginTop: "11px" }} />
                    </div>
                </a>
            </CardActions>
        </Card >
    );
}

function AboutUs(props) {
    return (
        <Grid container
            style={{ textAlign: "center", paddingTop: "50px", backgroundColor: "rgb(255, 254, 220, 0.2)" }}>
            <Grid container ref={props.about_us} style={{ justifyContent: "center", alignContent: "center" }}>
                <Grid item xs={3} sm={3}>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <h1 style={{ color: "#1d3557", fontFamily: "Georgia" }}>
                        Who We Are
                    </h1>
                    <p>
                        <br />
                        <Divider />
                        <br />
                    </p>
                    <p style={{ color: "#1d3557", fontFamily: "serif", fontSize: "18px" }}>
                        We are IITK alumni working with the vision to satisfy the end-to-end fashion needs of the Indian GenZ users.
                    </p>
                    <p>
                        <br />
                    </p>
                </Grid>
                <Grid item xs={3} sm={3}>
                </Grid>
                <Grid item xs={8} sm={3}>
                    {/* "https://media-exp1.licdn.com/dms/image/C5603AQG21rjMlo9zMQ/profile-displayphoto-shrink_400_400/0/1594585342295?e=1638403200&v=beta&t=9LQrCdv-a9VZ6hm7kg15VHw7ISmlOSEOd9smrP5ecwo" */}
                    <PeopleCard
                        url={siddhant_pic}
                        alttext="Siddhant Manocha"
                        name="Siddhant Manocha"
                        description="Experience in software engineering and machine learning at Google."
                        linkedin="https://www.linkedin.com/in/siddhant-manocha-358445a5/"
                        email="siddhant@curience.com"
                    />
                </Grid>
                <Grid item xs={8} sm={3}>
                    <PeopleCard
                        url="https://media-exp1.licdn.com/dms/image/C4E03AQGLeFLYRS-_-Q/profile-displayphoto-shrink_400_400/0/1516862195582?e=1638403200&v=beta&t=-b_peo-rljyFqWUfLSr9Fbg9FpJ8TbPPQylzqimN56k"
                        alttext="Gautam PS"
                        name="Gautam PS"
                        description="Strategic ops and business development, most recently at ShareChat/Moj."
                        linkedin="https://www.linkedin.com/in/gautamps25/"
                        email="gautam@curience.com"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

function Footer() {
    return (
        <Grid container xs={12} sm={12}>
            <Grid item xs={12} sm={12} style={{ height: 50, width: 50, textAlign: "center", marginTop: 20 }}>
                <p>
                    Curience Tech.
                </p>
            </Grid>
        </Grid>
    );
}

function AppHeader() {
    return (
        <AppBar position="fixed" color="transparent" elevation={0}>
            <img src={logo1} alt="Curience" style={{ width: "150px", padding: 15 }} />
        </AppBar>
    );
}

function Main() {
    const what_we_do = useRef(null);
    const about_us = useRef(null);

    return (
        <React.Fragment>
            <AppHeader />
            <Container maxWidth={false} style={{
                paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px"
            }}>
                <GetLandingPageImage what_we_do={what_we_do} about_us={about_us} />
                <WhatWeDo what_we_do={what_we_do} />
                <AboutUs about_us={about_us} />
                <Footer />
            </Container >
        </React.Fragment >
    );
}

export default Main;
