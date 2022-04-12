import React from 'react';

const Tools = () => {
    return (
        <section className="text-center content-section" id="tools">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h2>Tools By StockBase</h2>
                        <ul className="list-inline banner-social-buttons">
                            <li className="list-inline-item">
                                <a href={"/screener"}>
                                    <button className="btn btn-primary btn-lg btn-default" type="button">
                                        <span className="network-name">Stock Screener</span>
                                    </button>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href={"/portfolio"}>
                                    <button className="btn btn-primary btn-lg btn-default" type="button">
                                        <span className="network-name">Stock Screener</span>
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tools;
