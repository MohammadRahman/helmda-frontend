import { defaultState } from '../../server/defaultState';
import { useState, useEffect } from 'react';
import './new.css';
import '../../css/colorStyle.css';
import CustomButton from '../../components/custom-button/CustomButton.components';
import SmallArrow from '../../images/svg/arrowRightSmall';
const New = ({ id, src, white,showButton }) => {
    const [showContent, setShowContent] = useState(false);
    const [content, setContent] = useState('');

    let colorStyle = white === true ? "white" : "black";
    let color = colorStyle + "Color";
    let text = colorStyle + "Footer";

    let date = '';
    let name = '';
    let newContent = '';
    defaultState.news.forEach(news => {
        if (news.id === id) {
            newContent = news.content;
            name = news.name;
            date = news.date
            src = news.src;
        }

    })

    let minimizedContent = newContent.substr(0, 169) + '...';

    useEffect(() => {
        if (!showContent) {
            setContent(minimizedContent);
        }
        else {
            setContent(newContent);
        }
    }, [showContent]);

    const handleClick = () => {
        setShowContent(!showContent);
    }

    return (
        <div id='topic'>
            <div id='topic-img'>
                <img src={src} alt={name} />
            </div>
            <div id='topic-text'>
                <p id='news-name' className={color}>{name}</p>
                <p id='news-text' className={text}>{content}</p>
                <button className={'read-more ' + color} onClick={handleClick}>{!showContent?'Read More':'Read Less'}</button>
                <p id='news-date' className={text}>{date}</p>

                {showButton ? (<div className='button-div'>
                    <p className={'more-news ' + color}>More News</p>

                    <CustomButton link='news'>
                        <SmallArrow className="abour-small-arrow" white={false} />
                    </CustomButton>
                </div>)
                    :
                    (<></>)}

            </div>
        </div>
    )
}



export default New;