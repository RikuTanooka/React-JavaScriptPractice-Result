import { faker } from "@faker-js/faker";
import React from "react";
import { FixedSizeList } from "react-window";

const bigList = [...Array(5000)].map(() => ({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
}));
/*
function List({ data= [], renderItem, renderEmpty}) {
    return !data.length ? (
        renderEmpty
    ) : (
        <ul>
            {data.map((item, i) => (
                <li key={i}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}
export default function App() {
    const renderItem = item => (
        <div style={{ display: "flex"}}>
            <img src={item.avatar} alt={item.username} width ={50} />
            <p>
                {item.username} - {item.email}
            </p>
            </div>
    );
    return <List data={bigList} renderItem={renderItem} />;
}
*/
export default function App() {
    const renderRow = ({ index, style }) => (
        <div style={{ ...style, ...{ display: "flex"} }}>
            <img
                src={bigList[index].avatar}
                alt={bigList[index].username}
                width={50}
                />
                <p>
                    {bigList[index].username} - {bigList[index].email}
                </p>
        </div>
    );

    return (
        <FixedSizeList 
            height={window.innerHeight}
            width={window.innerWidth - 20}
            itemCount={bigList.length}
            itemSize={50}
            >
                {renderRow}                
            </FixedSizeList>
    );
}