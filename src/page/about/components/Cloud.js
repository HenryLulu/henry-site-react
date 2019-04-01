/**
  * @file: Cloud.js
  * @author: why
  * @date: 2019-03-29
*/

import React from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';
import d3Tip from "d3-tip";

import keywords from './keywords';
import colors from './colors';

import './Cloud.less';

export default class Compo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.genarateCloud();
    }

    genarateCloud = () => {
        const baseSize = 10;
        const width = window.innerWidth > 500 ? 500 : window.innerWidth;
        const layout = cloud()
            .size([width, 200000 / width])
            .words(keywords.map(W => ({
                text: W.word,
                color: colors[Math.floor(Math.random() * 100) % colors.length],
                tiplines: W.projects || [],
                // size: W.value * baseSize
                size: (Math.random() + W.value) * baseSize
            })))
            .padding(2)
            .rotate(() => 0)
            .font('Impact')
            .fontSize(d => d.size)
            .on('end', draw);

        layout.start();

        function draw(words) {

            const tip = d3Tip()
                .attr('class', 'd3-tip')
                .html(d => {
                    const inner = d.tiplines.map(P => `<p>${P}</p>`).join('');
                    return `<div style="background: #${d.color}">${inner}</div>`;
                })

            d3.select('.about-cloud-canvas').append('svg')
                .attr('width', layout.size()[0])
                .attr('height', layout.size()[1])
                .append('g')
                .attr('transform', 'translate(' + layout.size()[0] / 2 + ',' + layout.size()[1] / 2 + ')')
                .selectAll('text')
                .data(words).enter().append('text')// .call(tip)
                .style('font-size', d => `${d.size}px`)
                .style('font-family', 'Impact')
                .style('fill', d => `#${d.color}`)
                .style('cursor', 'pointer')
                .attr('text-anchor', 'middle')
                .attr('transform', d => `translate(${d.x}, ${d.y})`)
                // .on('mouseover', tip.show)
                // .on('mouseout', tip.hide)
                .text(d => d.text);
        }
    }

    render() {
        return <div className="about-cloud">
            {/* <p className="text-title">功能点</p> */}
            <div className="about-cloud-inner">
                <p className="about-cloud-canvas"></p>
            </div>
        </div>;
    }
}