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
    <>
      <p>{name} {lastName} </p>
    </>
  );
};

export default UserCard;
