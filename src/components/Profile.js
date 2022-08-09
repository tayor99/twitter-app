import '../styles/profile.css';
import { BiArrowBack } from 'react-icons/bi';
import { MdOutlineCelebration } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  // useEffect(() => {
  //   const loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
  //   const getUserProfile = async () => {
  //     try {
  //       const userProfile = await axios.post(
  //         'https://robot-twitter.herokuapp.com/api/v2/profile',
  //         {
  //           headers: {
  //             Authorization: `Bearer ${loginDetails.token}`,
  //           },
  //         }
  //       );
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getUserProfile();
  // }, []);
  return (
    <div className="profile">
      <div className="profile__top">
        <div className="profileTop__options">
          <BiArrowBack className="arrBack" />
          <div className="numOfTweets">
            <p className="profile__name">Tayor♾♾</p>
            <p className="tweet__count">600 Tweets</p>
          </div>
        </div>
        <div className="profileTop__info">
          <img
            src="https://pbs.twimg.com/profile_banners/730973701806665728/1614801657/600x200"
            alt="cover"
          />
          <div className="profileInfo__detail">
            <div className="edit__profile">
              <img
                src="https://pbs.twimg.com/profile_images/1546803457268629512/rLNgz1-u_400x400.jpg"
                alt="profileImage"
              />
              <button>Edit profile</button>
            </div>
            <div className="profileInfo__details">
              <div className="profile__names">
                <p className="details__name">Tayor♾♾</p>
                <p className="details__username">@tayor_official</p>
              </div>
              <div className="profile__dates">
                <span className="dob">
                  <MdOutlineCelebration className="datesIcons" /> Born October
                  15, 1999
                </span>
                <span>
                  <AiOutlineCalendar className="datesIcons" /> Joined May 2016
                </span>
              </div>
              <div className="follows">
                <p className="followers__count">
                  730 <span>Following</span>
                </p>
                <p className="followers__count">
                  30 <span>Followers</span>
                </p>
              </div>
            </div>
            <div className="profile__options">
              <ul>
                <li>Tweets</li>
                <li>Tweets & replies</li>
                <li>Media</li>
                <li>Likes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
