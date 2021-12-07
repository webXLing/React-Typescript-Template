/*
 * @Author: web_XL
 * @Date: 2021-09-10 10:34:01
 * @LastEditors: web_XL
 * @LastEditTime: 2021-09-10 10:43:01
 * @Description:
 */
import { LOADIPHLPAPI } from 'dns';
import React from 'react'
import './index.css'
const TagInput = ({ tags = [] }) => {
    const [tagData, setTagData] = React.useState(tags);
    const removeTagData = indexToRemove => {
        setTagData([...tagData.filter((_, index) => index !== indexToRemove)]);
    };
    const addTagData = event => {
        console.log("event", event);
        if (event.target.value !== '') {
            setTagData([...tagData, event.target.value]);
            event.target.value = '';
        }
    };
    return (
        <div className="tag-input">
            <ul className="tags">
                {tagData.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className="tag-title">{tag}</span>
                        <span
                            className="tag-close-icon"
                            onClick={() => removeTagData(index)}
                        >
                            x
                        </span>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                onKeyUp={event => (event.key === 'Enter' ? addTagData(event) : null)}
                placeholder="Press enter to add a tag"
            />
        </div>
    );
};
export default TagInput