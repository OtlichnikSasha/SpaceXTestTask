import React from 'react';

export const AboutBlock = ({title, data, subData}) => {
    return (
        <div className="about_block">
            <div className="about_block__title">
                {title}
            </div>
            <div className="about_block__data">
                {data}
            </div>
            <div className="about_block__sub_data">
                {subData}
            </div>
        </div>
    );
};

