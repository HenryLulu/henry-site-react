import React from 'react';
import $ from 'jquery';

import './Gallery.less';

const images = [
    {
        src: 'https://user-images.githubusercontent.com/14797054/54413911-63370d80-4732-11e9-960b-99b0343d4181.png',
        tag: '2013 - 宣传海报 - 北科大',
        title: '索思科技协会招新海报'
    }, {
        src: 'https://user-images.githubusercontent.com/14797054/54413923-7053fc80-4732-11e9-8c2f-cb0a15e8c4cc.png',
        tag: '2012 - 手册封面 - 北科大',
        title: '《2012新生攻略》封面'
    }, {
        src: 'https://user-images.githubusercontent.com/14797054/54413904-57e3e200-4732-11e9-8daa-f285cb7cf612.png',
        tag: '2012 - 产品周边 - iBeiKe',
        title: 'iBeiKe 11周年站庆文化衫（销量No.1）'
    }, {
        src: 'https://user-images.githubusercontent.com/14797054/54413934-78ac3780-4732-11e9-991b-6843aa18567e.png',
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
            $img.height = 100;
            $img.onload = e => {
                loadCount ++;
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
            <div id="gallery-wrapper" className="gallery-wrapper"></div>
        </div>
    }
}

const setImgWidth = pool => {
    const vw = window.innerWidth;
    const w = vw > 750 ? vw - 35 : vw;
    const totalImgWidth = pool.map($img => $img.width).reduce((s, a) => s + a);
    const ratio = w / totalImgWidth;
    for (let $img of pool) {
        const {width, height} = $img;
        $img.width = ratio * width;
        $img.height = ratio * height;
        if ($img.width > 750) {
            $img.height = $img.height / $img.width * 500;
            $img.width = 500;
        }
    }
}