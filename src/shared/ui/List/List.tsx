import React, { FC } from 'react';

export interface ListProps {
  classNameItem?: string;
  classNameList?: string;
  items: any[];
}

const List: FC<ListProps> = (props) => {
  const {
    classNameItem,
    classNameList,
    items,
  } = props;

  return (
    <ul className={classNameList}>
      {items.map((item: string) => <li className={classNameItem} key={item}>{item}</li>)}
    </ul>
  );
};

export default List;
