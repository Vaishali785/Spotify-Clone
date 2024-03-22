import React from 'react';
import list from './List.module.css';

const List = (props) => {
    return (
        <div className={`${list['list']} artists-modal`} style={props.color}>
            <h2 className={`${list['list_item']} ${list['list_heading']}`}>Artists</h2>
            <ul className={`scroll-y modal-sub-list`} >
                {props.items?.length == 1 && (
                    <li key={props.items[0].id} className={`${list['list_item']} bg-hover`} onClick={() => props.callHandleClick(`/artist/${props.items[0].id}`)}>{props.items[0].name}</li>
                )}

                {props.items?.length > 1 && props?.items.map(item => (
                    <li key={item.id} className={`${list['list_item']} bg-hover`} onClick={() => props.callHandleClick(`/artist/${item.id}`)}>{item.name}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default List