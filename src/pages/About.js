import React from 'react';
import {AboutBlock} from "../components/AboutBlock";

export const About = () => {
    return (
        <section className="main_page">
            <div className="main_page__place">
                <div className="container">
                    <div className="container__flex">
                        <div className="left_part">
                            <div>
                                <h3 className="trip">
                                    Путешествие
                                </h3>
                                <span className="sub_trip">
                                на красную планету
                            </span>
                            </div>
                            <div className="left_part__btn">
                                Начать путешествие
                            </div>
                        </div>
                        <div className="about_info">
                            <AboutBlock title="мы" data="1" subData="на рынке"/>
                            <AboutBlock title="гарантируем" data="50%" subData="безопасность"/>
                            <AboutBlock title="календарик за" data="2001г." subData="в подарок"/>
                            <AboutBlock title="путешествие" data="597" subData="дней"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

