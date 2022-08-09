import '../styles/trends.css';
import { BsSearch } from 'react-icons/bs';

const tredingTopics = [
  {
    id: 1,
    trend: 'Messi',
  },
  {
    id: 2,
    trend: '#LabourChallenge',
  },
  {
    id: 3,
    trend: 'BoyAlone',
  },
  {
    id: 4,
    trend: '#Maguire',
  },
  {
    id: 5,
    trend: 'Davido',
  },
  {
    id: 6,
    trend: 'TwitterNG',
  },
  {
    id: 7,
    trend: 'FireBoy',
  },
  {
    id: 8,
    trend: '#vawulence',
  },
  {
    id: 9,
    trend: 'Ronaldo',
  },
  {
    id: 10,
    trend: 'baba Ijesha',
  },
];

const Trends = () => {
  return (
    <div className="trends">
      <div className="trends__top">
        <div className="trends__search">
          <BsSearch className="seach__icon" />
          <input type="text" placeholder="search twitter" />
        </div>
      </div>
      <div className="trends__bottom">
        <h3>Trends for you</h3>
        <ul>
          {tredingTopics.map((trend) => {
            return <li key={trend.id}>{trend.trend}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Trends;
