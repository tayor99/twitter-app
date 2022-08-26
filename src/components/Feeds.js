import React from 'react';
import '../styles/feed.css';
import {
  BsStars,
  BsFillImageFill,
  BsFileSpreadsheet,
  BsFillEmojiFrownFill,
  BsDot,
} from 'react-icons/bs';
import {
  AiOutlineFileGif,
  AiOutlineRetweet,
  AiOutlineHeart,
} from 'react-icons/ai';
import { FaPollH, FaRegComment } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { tweets } from '../data';

const Feeds = () => {
  return (
    <div className="feeds">
      <div className="feeds__nav">
        <ul>
          <li>Home</li>
          <li>
            <BsStars />
          </li>
        </ul>
      </div>
      <div className="feeds__post">
        <div className="feedsPost__img">
          <img
            src="https://pbs.twimg.com/profile_images/1528624295479595010/SwapSZK9_400x400.jpg"
            alt="profile pic"
          />
        </div>
        <div className="feedsPost__input">
          <div class="textareaElement" contentEditable></div>
          <div className="feedsPostInput__buttons">
            <div className="feedsPostInput__icons">
              <ul>
                <li>
                  <BsFillImageFill />
                </li>
                <li>
                  <AiOutlineFileGif />
                </li>
                <li>
                  <FaPollH />
                </li>
                <li>
                  <BsFillEmojiFrownFill />
                </li>
                <li>
                  <BsFileSpreadsheet />
                </li>
                <li>
                  <GoLocation />
                </li>
              </ul>
            </div>
            <div className="feedsPostInputBtn">
              <button>Tweet</button>
            </div>
          </div>
        </div>
      </div>
      {/* tweets */}
      <div className="feeds__tweets">
        {tweets.map((tweet) => {
          return (
            <div className="feedsTweets__info">
              <div className="feedTweets__img">
                <img
                  src="https://pbs.twimg.com/profile_images/1546803457268629512/rLNgz1-u_400x400.jpg"
                  alt="profile pic"
                />
              </div>
              <div className="feedsTweets__details">
                <div className="tweets__names">
                  <h1>{tweet.name}</h1>
                  <span>{tweet.username}</span>
                  <span className="time">
                    <BsDot />
                    {tweet.tca}
                  </span>
                </div>
                <div className="tweet">
                  <p>{tweet.tweet}</p>
                </div>
                <div className="tweet__option">
                  <ul>
                    <li>
                      <FaRegComment /> <span> {tweet.numOfCoomments}</span>
                    </li>
                    <li>
                      <AiOutlineRetweet /> <span>{tweet.numOfRetweets}</span>
                    </li>
                    <li>
                      <AiOutlineHeart /> <span>{tweet.numOfLikes}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feeds;
