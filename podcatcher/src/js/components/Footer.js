import React from "react";

export default class Footer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <footer class="footer">
                <div class="container">
                    <p class="text-muted">
                        Mark Greenburg | &copy;2016
                    </p>
                </div>
            </footer>
        );
    }
}