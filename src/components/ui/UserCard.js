import React from 'react';

const UserCard = (props) => {
  const { me } = props;
  const {
    name,
    lastName,
    username,
    imageUrl,
    id,
  } = me;

  return (
    <div>
      <p>{name} {lastName} </p>
      <p>{username} </p>
      <p>{id} </p>
      <img width={250} src={imageUrl} alt={username} />
    </div>
  );
};

export default UserCard;
