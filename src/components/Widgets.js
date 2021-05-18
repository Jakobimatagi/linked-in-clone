import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Woah check out this!", "I coded this thing")}
            {newsArticle("Happy Summer", "Summer jobs just for you...")}
            {newsArticle("Coding Event", "Join the best of the best")}
            {newsArticle("Free Free Free", "Free learning?")}
            {newsArticle("Kobi is goated", "Sorry I had to")}
            
        </div>


    )
}

export default Widgets
