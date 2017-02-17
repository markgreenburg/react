import React from "react";
import { Link } from 'react-router';

export default class Footer extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <p className="text-muted">
                        Mark &amp; Nedra | &copy;2016
                    </p>
                </div>
            </footer>
        );
    }
}