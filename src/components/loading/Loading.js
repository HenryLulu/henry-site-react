import React from 'react';
import './Loading.less';

export default ({status, onRetry}) => (
    <div className="loader" onClick={() => {status === 'failed' && onRetry();}}>
        <div className="cup">
            <div className={`coffee ${status}`}>
                <p className="coffee-1"></p>
                <p className="coffee-2"></p>
                <p className="retry"></p>
            </div>
        </div>
    </div>
);