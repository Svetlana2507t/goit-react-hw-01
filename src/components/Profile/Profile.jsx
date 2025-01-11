import css from './Profile.module.css';
// import clsx from 'clsx';
const Profile = ({ name, tag, location, image, stats }) => {
  // console.log({ name, tag, location, image, stats });
  return (
    <div>
      <div className="wrap">
        <img src={image} alt={`Avatar of ${name}`} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>

        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
