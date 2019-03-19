import React from 'react';
import $ from 'jquery';

import './Gallery.less';

const images = [
    {
        src: 'https://user-images.githubusercontent.com/14797054/54417962-7fd94280-473e-11e9-8d5b-1081b1e7ece1.png',
        tag: '2013 - 宣传海报 - 北科大',
        title: '索思科技协会招新海报'
    }, {
        src: 'https://user-images.githubusercontent.com/14797054/54417977-8cf63180-473e-11e9-9a51-a2c65ad07352.png',
        tag: '2012 - 手册封面 - 北科大',
        title: '《2012新生攻略》封面'
    }, {
        src: 'https://user-images.githubusercontent.com/14797054/54417950-79e36180-473e-11e9-8406-d9adf3b15fe0.png',
        tag: '2012 - 产品周边 - iBeiKe',
        title: 'iBeiKe 11周年站庆文化衫'
    }, {
        src: 'https://user-images.githubusercontent.com/14797054/54417980-92ec1280-473e-11e9-8af1-fdfacc745b81.png',
        tag: '2013 - 宣传海报 - iBeiKe',
        title: 'iBeike 12周年站庆海报'
    }
];

export default class extends React.Component {

    componentDidMount() {
        const vw = window.innerWidth;
        const ROW_IMAGE_COUNT = vw > 750 ? 3 : 1;
        const $container = $('#gallery-wrapper');
        let pool = [];
        let loadCount = 0;
        for (let image of images) {
            let $img = new Image();
            $img.src = image.src;
            $img.data = image;
            $img.onload = e => {
                loadCount ++;
                $img.ratio = $img.width / $img.height;
                $img.width = 0;
                $img.height = 0;
                pool.push($img);
                let $imgbox = $(`
                    <div class="img-box">
                        <div class="img-mask">
                            <p class="img-mask-tag">${$img.data.tag}</p>
                            <p class="img-mask-title">${$img.data.title}</p>
                        </div>
                    </div>
                `);
                $imgbox.append($($img));
                $container.append($imgbox);

                if (pool.length === ROW_IMAGE_COUNT || loadCount === images.length) {
                    setImgWidth(pool);
                    pool.length = 0;
                }
            }
        }
    }

    render() {
        return <div className="gallery">
            <div className="gallery-header">
                <p className="gh-title"> 很久以前，我是个『美工』</p>
            </div>
            <div id="gallery-wrapper" className="gallery-wrapper"></div>
        </div>
    }
}

const setImgWidth = pool => {
    const vw = window.innerWidth;
    const w = vw > 750 ? vw - 35 : vw;
    const totalRatio = pool.map($img => $img.ratio).reduce((s, a) => s + a);
    console.log(totalRatio)
    for (let $img of pool) {
        $img.height = w / totalRatio;
        $img.width = $img.height * $img.ratio;
        if ($img.width > 750) {
            $img.height = $img.height / $img.width * 500;
            $img.width = 500;
        }
    }
}