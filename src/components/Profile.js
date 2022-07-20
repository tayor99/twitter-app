import '../styles/profile.css';
import { BiArrowBack } from 'react-icons/bi';
import { MdOutlineCelebration } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__top">
        <div className="profileTop__options">
          <BiArrowBack className="arrBack" />
          <div className="numOfTweets">
            <h1>Tayor♾♾</h1>
            <p>600 Tweets</p>
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
                <h1>Tayor♾♾</h1>
                <p>@tayor_official</p>
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
                <h2>
                  730 <span>Following</span>
                </h2>
                <h2>
                  30 <span>Followers</span>
                </h2>
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
