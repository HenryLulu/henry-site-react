import React from 'react';
import './Loading.less';

export default ({status}) => (
    <div className={`loading ${status}`}>
        <p className="cup">
            <div className="coffee">
                <p className="coffee-1"></p>
                <p className="coffee-2"></p>
            </div>
        </p>
    </div>
);