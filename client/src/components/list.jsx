import React from 'react';

function List(props) {
  return (
    <div>
      <h1>Learn about these cows:</h1>
      <br />
      {props.cowList.map((cowItem) => (
        <div> {cowItem.cow_name} </div>
      )
      )}

    </div>
  )
}

export default List;