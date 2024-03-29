/* eslint-disable prettier/prettier,no-unused-vars,no-console,no-undef,react/no-unescaped-entities,jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom'
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardAvatar from 'components/Card/CardAvatar.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';

import avatar from 'assets/img/faces/marc.jpg';
import Popup from "reactjs-popup";
import AttributeBoxContent from "../Dashboard/attributeBoxContent";
import Table from "@material-ui/core/Table";
import ModalImage from "react-modal-image";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import QuantitativeContent from "../Dashboard/quantitativeContent";
import scatterJsonarray from "../../datas_json/group_top_new_25_array";
import RepresentativeAttributes from "../../datas_json/representative_attributes";
import Chart from "react-apexcharts";
import linechartJson from "../../datas_json/trend_by_city_ver2";
import linechartForecastingJson from "../../datas_json/trend_by_city_ver2_forcasting";
import axios from "axios";
import 'antd/dist/antd.css';
import {Steps, Tag, Menu} from "antd";
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import Carousel, {Modal, ModalGateway} from "react-images";
import flagshipImagesJson from "../../datas_json/flagshipImagesJson";
import attributeGroupJson from "../../datas_json/attributeGroupsJson";
import intersectionInformation from "../../datas_json/intersection_information";
import Attribute from "../Dashboard/Attribute";
import FashionQComponent from "../Dashboard/FashionQComponent";
import AttributeCompares from "../Dashboard/AttributeCompares";

const {Step} = Steps;
const {SubMenu} = Menu;

const styles = {
    cardCategoryWhite: {
        color: 'rgba(255,255,255,.62)',
        margin: '0',
        fontSize: '14px',
        marginTop: '0',
        marginBottom: '0',
    },
    cardTitleWhite: {
        color: '#FFFFFF',
        marginTop: '0px',
        minHeight: 'auto',
        fontWeight: '300',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: '3px',
        textDecoration: 'none',
    },
};

const useStyles = makeStyles(styles);

const scatter_group_data_array = {
    series: [
        {
            name: 'S1',
            data: scatterJsonarray['group1'],
        },
        {
            name: 'S2',
            data: scatterJsonarray['group2'],
        },
        {
            name: 'S3',
            data: scatterJsonarray['group3'],
        },
        {
            name: 'S4',
            data: scatterJsonarray['group4'],
        },
        {
            name: 'S5',
            data: scatterJsonarray['group5'],
        },
        {
            name: 'S6',
            data: scatterJsonarray['group6'],
        },
        {
            name: 'S7',
            data: scatterJsonarray['group7'],
        },
        {
            name: 'S8',
            data: scatterJsonarray['group8'],
        },
        {
            name: 'S9',
            data: scatterJsonarray['group9'],
        },
        {
            name: 'S10',
            data: scatterJsonarray['group10'],
        },
        {
            name: 'S11',
            data: scatterJsonarray['group11'],
        },
        {
            name: 'S12',
            data: scatterJsonarray['group12'],
        },
        {
            name: 'S13',
            data: scatterJsonarray['group13'],
        },
        {
            name: 'S14',
            data: scatterJsonarray['group14'],
        },
        {
            name: 'S15',
            data: scatterJsonarray['group15'],
        },
        {
            name: 'S16',
            data: scatterJsonarray['group16'],
        },
        {
            name: 'S17',
            data: scatterJsonarray['group17'],
        },
        {
            name: 'S18',
            data: scatterJsonarray['group18'],
        },
        {
            name: 'S19',
            data: scatterJsonarray['group19'],
        },
        {
            name: 'S20',
            data: scatterJsonarray['group20'],
        },
        {
            name: 'S21',
            data: scatterJsonarray['group21'],
        },
        {
            name: 'S22',
            data: scatterJsonarray['group22'],
        },
        {
            name: 'S23',
            data: scatterJsonarray['group23'],
        },
        {
            name: 'S24',
            data: scatterJsonarray['group24'],
        },
        {
            name: 'S25',
            data: scatterJsonarray['group25'],
        },
    ],
};
let colors = [
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
];
let trendcolors = [
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
    '#665f5f',
];

const trend1Color = '#a50000';
const trend2Color = '#6dc365';
const trend3Color = '#1979fe';

let apexChartScatterOptions = {
    options: {
        chart: {
            toolbar:{
                show:false
            },
            height: '320',
            type: 'scatter',
            zoom: {
                enabled: false,
                type: 'xy',
            },
            animations: {
                enabled: true,
                speed: 100,
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        },
        xaxis: {
            // tickAmount: 10,
            labels: {
                show: false,
                formatter: function (val) {
                    return parseFloat(val).toFixed(1);
                },
            },
        },
        yaxis: {
            show: false,
            tickAmount: 7,
        },
    },
};

let apexTrendChartScatterOptions = {
    options: {
        chart: {
            height: '300',
            type: 'scatter',
            zoom: {
                enabled: false,
                type: 'xy',
            },
            animations: {
                enabled: true,
                speed: 100,
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        },
        xaxis: {
            // tickAmount: 10,
            labels: {
                show: false,
                formatter: function (val) {
                    return parseFloat(val).toFixed(1);
                },
            },
        },
        yaxis: {
            show: false,
            tickAmount: 7,
        },
    },
};
var apexChartLineOptions = {
    series: [linechartForecastingJson['group1'][0]],
    options: {
        legend: {
            show: false
        },
        chart: {
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            align: 'center',
            margin: 10,
            style: {
                fontFamily: 'BebasNeue-Bold',
                fintSize: '22px',
            }
        },
        annotations: {
            xaxis: [{
                x: 2019,
                x2: 2020,
                fillColor: '#96baf7',
                opacity: 0.4,
                label: {
                    borderColor: '#96baf7',
                    style: {
                        fontSize: '20px',
                        color: '#fff',
                        background: '#78a0f7',
                    },
                    offsetY: -10,
                    text: 'Forecasting Vaalue',
                }
            }]
        },
        xaxis: {
            categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        },
        yaxis: {
            seriesName: '%',
            forceNiceScale: false,
            floating: false,
            decimalsInFloat: 2,
//             min: 0,
//             max: 12,
            tickAmount:2,
            title: {
                text: '%',
                rotate: -90,
                offsetX: 0,
                offsetY: 0,
                style: {
                    color: undefined,
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-title',
                },
            },

        }
    }
};

export default function Dashboard() {
    const classes = useStyles();

    const [groupNumState, setGroupState] = React.useState(null);
    const [checkDataPulled, setcheckDataPulledState] = React.useState(false);
    const [trendMenu, setTrendMenuState] = React.useState('trending');
    const [stepState, setStepState] = React.useState(1);


    const [firstColorPosition, setFirstColorPositionState] = React.useState(0);
    const [secondColorPosition, setSecondColorPositionState] = React.useState(0);

    const [trend1, setTrend1State] = React.useState('group1');
    const [trend2, setTrend2State] = React.useState('group3');
    const [trend3, setTrend3State] = React.useState('group4');
    const [selectedTrend, setSelectState] = React.useState(null);

    const [isStyleButtonClicked, setIsStyleButtonClickedState] = React.useState(false);
    const [isTrendButtonClicked, setIsTrendButtonClickedState] = React.useState(false);

    const [attributeList, setAttributeList] = React.useState(null);
    const [attributeListFull, setAttributeFullList] = React.useState(null);

    let jaccard_result;
    let unique;
    let position;


    function roundNumber(number, decimals) {
        var newnumber = new Number(number + '').toFixed(parseInt(decimals));
        return parseFloat(newnumber);
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    function randomNumberArray(number, length) {
        var arr = [];
        while (arr.length < number) {
            var r = Math.floor(Math.random() * length);
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        return arr;
    }


    function jaccardSim(list1, list2) {
        let s1 = new Set(list1);
        let s2 = new Set(list2);
        let intersect = new Set([...s1].filter(i => s2.has(i)));
        var union = [...new Set([...s1, ...s2])];
        return parseFloat(intersect.size) / parseFloat(union.length)
    }

    function onClickTrendButton(trendValue, pos) {
        setIsTrendButtonClickedState(true);
        setSecondColorPositionState(pos);
        setSelectState(trendValue);
//         console.log(trendValue);

    }

    function intersectLists(list1, list2) {
        let s1 = new Set(list1);
        let s2 = new Set(list2);
        let intersect = [...new Set([...s1].filter(i => s2.has(i)))];
        return intersect;
    }

    function sortByValue(a, b) {
        if (a.value == b.value) {
            return 0
        }
        return a.value < b.value ? 1 : -1;
    }

    function stringTonumber(str) {
        var res;
        res = str.replace(/[^0-9]/g, "");
        return res;
    }

    function onClickTrendMenu(e) {
//         console.log('click ', e);
        setTrendMenuState(e.key);

        let trendTreStateArray = ['group1','group3','group4'];
        let trendDecStateArray = ['group16','group6','group17'];
        let trendUpcStateArray = ['group5','group18','group13'];
        let trendSteStateArray = ['group9','group22','group24'];

//         console.log(groupNumState);
        if(trendTreStateArray.includes(groupNumState)){
            for(let i=0; i<trendTreStateArray.length; i++){
                if(trendTreStateArray[i] === groupNumState){
                    trendTreStateArray[i] = 'group2';
                    break;
                }
            }
        }else if(trendDecStateArray.includes(groupNumState)){
            for(let i=0; i<trendDecStateArray.length; i++){
                if(trendDecStateArray[i] === groupNumState){
                    trendDecStateArray[i] = 'group14';
                    break;
                }
            }
        }else if(trendUpcStateArray.includes(groupNumState)){
            for(let i=0; i<trendUpcStateArray.length; i++){
                if(trendUpcStateArray[i] === groupNumState){
                    trendUpcStateArray[i] = 'group15';
                    break;
                }
            }
        }else if(trendSteStateArray.includes(groupNumState)){
            for(let i=0; i<trendSteStateArray.length; i++){
                if(trendSteStateArray[i] === groupNumState){
                    trendSteStateArray[i] = 'group19';
                    break;
                }
            }
        }

        if (e.key === 'trending') {
            delete apexChartLineOptions["options"]["yaxis"]["min"]
            delete apexChartLineOptions["options"]["yaxis"]["max"]
            setTrend1State(trendTreStateArray[0]);
            setTrend2State(trendTreStateArray[1]);
            setTrend3State(trendTreStateArray[2]);
        } else if (e.key === 'declining') {
            delete apexChartLineOptions["options"]["yaxis"]["min"]
            delete apexChartLineOptions["options"]["yaxis"]["max"]
            setTrend1State(trendDecStateArray[0]);
            setTrend2State(trendDecStateArray[1]);
            setTrend3State(trendDecStateArray[2]);
        } else if (e.key === 'upcoming') {
            delete apexChartLineOptions["options"]["yaxis"]["min"]
            delete apexChartLineOptions["options"]["yaxis"]["max"]
            setTrend1State(trendUpcStateArray[0]);
            setTrend2State(trendUpcStateArray[1]);
            setTrend3State(trendUpcStateArray[2]);
        } else {
            apexChartLineOptions["options"]["yaxis"]["min"] = 0
            apexChartLineOptions["options"]["yaxis"]["max"] = 10
            setTrend1State(trendSteStateArray[0]);
            setTrend2State(trendSteStateArray[1]);
            setTrend3State(trendSteStateArray[2]);
        }
    }

    function erasenumAndUnderbar(str) {
        var res;
        res = str.replace(/[^a-zA-Z_]/g, "").replace(/_/g, ' ');
        return res;
    }

    function attrGo() {
        ReactDOM.render(
            <>
                {unique.map(index => {
                    if (attributeList.includes(index)) {
                        return (
                            <span key={index}>
                            <Button onClick={() => {
                                onClickButton(index)
                            }} style={{height: '100%', backgroundColor: '#159fec'}}>
                                <h2 style={{
                                    color: '#ffffff',
                                    fontFamily: 'BebasNeue-Bold'
                                }}>{erasenumAndUnderbar(index)}</h2>
                            </Button>
                        </span>
                        );
                    } else {
                        return (
                            <span key={index}>
                            <Button onClick={() => {
                                onClickButton(index)
                            }} style={{height: '100%', backgroundColor: '#ffffff'}}>
                                <h2 style={{
                                    color: '#159fec',
                                    fontFamily: 'BebasNeue-Bold'
                                }}>{erasenumAndUnderbar(index)}</h2>
                            </Button>
                        </span>
                        );
                    }
                })}
            </>,
            document.getElementById('attributes'),
        );
        ReactDOM.render(
            <>
                {attributeGroupJson['Type of clothes'].map(a => {
                    return (
                        <Attribute
                            key={a}
                            attr={a}
                            list={attributeList}
                            group={'Type of clothes'}
                        />
                    );
                })}
                {attributeGroupJson['Dominant colors'].map(a => {
                    return <Attribute key={a} attr={a} list={attributeList}/>;
                })}
                {attributeGroupJson['Garments parts'].map(a => {
                    return <Attribute key={a} attr={a} list={attributeList}/>;
                })}
                {attributeGroupJson['Textile pattern'].map(a => {
                    return <Attribute key={a} attr={a} list={attributeList}/>;
                })}
                {attributeGroupJson['Decorations'].map(a => {
                    return <Attribute key={a} attr={a} list={attributeList}/>;
                })}
                {attributeGroupJson['Finishing'].map(a => {
                    return <Attribute key={a} attr={a} list={attributeList}/>;
                })}
            </>,
            document.getElementById('yourLookAttrs'),
        );


        ReactDOM.render(<>
            <Button onClick={() => {
                onClickAttributeBoxButton(0);
                setGroupState(jaccard_result[0].name)
            }} style={{height: '10%', width: '15%', backgroundColor: '#5fa038'}} id={'firstStyleButton'}>
                <span style={{
                    fontSize: '23px',
                    fontFamily: 'BebasNeue-Bold',
                }}>STYLE {stringTonumber(jaccard_result[0].name)} - {roundNumber(jaccard_result[0].value.toFixed(6) * 100, 1)}%</span>
            </Button>
            <Button onClick={() => {
                onClickAttributeBoxButton(1);
                setGroupState(jaccard_result[1].name)
            }} style={{height: '10%', width: '15%', backgroundColor: '#fb4c3d'}} id={'seconStyleButton'}>
                <span style={{
                    fontSize: '23px',
                    fontFamily: 'BebasNeue-Bold'
                }}>STYLE {stringTonumber(jaccard_result[1].name)} - {roundNumber(jaccard_result[1].value.toFixed(6) * 100, 1)}%</span>
            </Button>
            <Button onClick={() => {
                onClickAttributeBoxButton(2);
                setGroupState(jaccard_result[2].name)
            }} style={{height: '10%', width: '15%', backgroundColor: '#fdb40b'}} id={'thirdStyleButton'}>
                <span style={{
                    fontSize: '23px',
                    fontFamily: 'BebasNeue-Bold'
                }}>STYLE {stringTonumber(jaccard_result[2].name)} - {roundNumber(jaccard_result[2].value.toFixed(6) * 100, 1)}%</span>
            </Button>
        </>, document.getElementById('button_groups'));
    }

    function attrCompareGo() {
        ReactDOM.render(
            <>
                {attributeGroupJson['Type of clothes'].map(a => {
                    return <AttributeCompares key={a} attr={a} jaccard_position={position} groupNum={groupNumState}/>;
                })}
                {attributeGroupJson['Dominant colors'].map(a => {
                    return <AttributeCompares key={a} attr={a} jaccard_position={position} groupNum={groupNumState}/>;
                })}
                {attributeGroupJson['Garments parts'].map(a => {
                    return <AttributeCompares key={a} attr={a} jaccard_position={position} groupNum={groupNumState}/>;
                })}
                {attributeGroupJson['Textile pattern'].map(a => {
                    return <AttributeCompares key={a} attr={a} jaccard_position={position} groupNum={groupNumState}/>;
                })}
                {attributeGroupJson['Decorations'].map(a => {
                    return <AttributeCompares key={a} attr={a} jaccard_position={position} groupNum={groupNumState}/>;
                })}
                {attributeGroupJson['Finishing'].map(a => {
                    return <AttributeCompares key={a} attr={a} jaccard_position={position} groupNum={groupNumState}/>;
                })}
            </>,
            document.getElementById('AttrsCompare'),
        );
    }

    function onClickButton(key) {
        let temp = Object.assign([], attributeList);
//         console.log(temp);
        if (temp.includes(key)) {
            const idx = temp.indexOf(key);
            if (idx > -1) temp.splice(idx, 1);
            setAttributeList(temp);
        } else {
            temp.push(key);
            setAttributeList(temp);
        }
        attrGo();
    }

    function stepGo() {
        ReactDOM.render(<Steps current={stepState}>
            <Step title="Upload File" description="Upload your own image file"/>
            <Step title="Style Check"
                  description="Check your style and attributes"
            />
            <Step title="Style Result" description="FashionQ!!"/>
        </Steps>, document.getElementById('fashionqStep'));
    }

    function onClickAttributeBoxButton(jaccard_position) {
        setIsStyleButtonClickedState(true);
        setFirstColorPositionState(jaccard_position);
        setStepState(2);

        ReactDOM.render(
            <>
                {attributeGroupJson['Type of clothes'].map(a => {
                    return <AttributeCompares key={a} attr={a} jaccard_position={jaccard_position}
                                              groupNum={groupNumState}/>;
                })}
                {attributeGroupJson['Dominant colors'].map(a => {
                    return <AttributeCompares key={a} attr={a} jaccard_position={jaccard_position}
                                              groupNum={groupNumState}/>;
                })}
                {attributeGroupJson['Garments parts'].map(a => {
                    return <AttributeCompares key={a} attr={a} jaccard_position={jaccard_position}
                                              groupNum={groupNumState}/>;
                })}
                {attributeGroupJson['Textile pattern'].map(a => {
                    return <AttributeCompares key={a} attr={a} jaccard_position={jaccard_position}
                                              groupNum={groupNumState}/>;
                })}
                {attributeGroupJson['Decorations'].map(a => {
                    return <AttributeCompares key={a} attr={a} jaccard_position={jaccard_position}
                                              groupNum={groupNumState}/>;
                })}
                {attributeGroupJson['Finishing'].map(a => {
                    return <AttributeCompares key={a} attr={a} jaccard_position={jaccard_position}
                                              groupNum={groupNumState}/>;
                })}
            </>,
            document.getElementById('AttrsCompare'),
        );
    }

    function firstImagerender(filename) {
        ReactDOM.render(
            <img
                style={{textAlign: 'center', maxWidth: '100%'}}
                width="100%"
                height={'auto'}
                // src={'/static/' + this.state.file.name}
                src={'/static/' + filename}
            />,
            document.getElementById('lookImage'),
        );
    }

    function scatterChartGo() {
        apexChartScatterOptions['options']['colors'] = colors;
        ReactDOM.render(<Chart
            width={'100%'}
            height={500}
            options={apexChartScatterOptions.options}
            series={scatter_group_data_array.series}
            type="scatter"
        />, document.getElementById('scatterChart'));
    }

    function trendScatterGo() {
        trendcolors[stringTonumber(trend1) - 1] = trend1Color;
        trendcolors[stringTonumber(trend2) - 1] = trend2Color;
        trendcolors[stringTonumber(trend3) - 1] = trend3Color;
        apexTrendChartScatterOptions['options']['colors'] = trendcolors;

        ReactDOM.render(<Chart
            width={'100%'}
            height={500}
            options={apexTrendChartScatterOptions.options}
            series={scatter_group_data_array.series}
            type="scatter"
        />, document.getElementById('trendScatter'));
    }

    axios.get('http://210.107.206.210:8000/fashionq/posts/99').then(res => {
//         console.log(res.data);

        // 맨 처음만 State 초기화
        if (!checkDataPulled) {
            setcheckDataPulledState(true);
            setAttributeList(res.data['attribute_names']);
            setAttributeFullList(res.data['attribute_names']);
        }


        jaccard_result = [];
        unique = attributeListFull.filter(onlyUnique);

        for (let representativeAttribute in RepresentativeAttributes) {
            let temp = jaccardSim(attributeList, RepresentativeAttributes[representativeAttribute]);
            let temp_json = {};
            temp_json['name'] = representativeAttribute
            temp_json['value'] = temp;
            jaccard_result.push(temp_json);
        }
        jaccard_result.sort(sortByValue);

        colors[stringTonumber(jaccard_result[0].name) - 1] = '#5fa038';
        colors[stringTonumber(jaccard_result[1].name) - 1] = '#fb4c3d';
        colors[stringTonumber(jaccard_result[2].name) - 1] = '#fdb40b';

        if (groupNumState !== null) {
            if (groupNumState === jaccard_result[0].name) {
                position = 0;
            } else if (groupNumState === jaccard_result[1].name) {
                position = 1;
            } else {
                position = 2
            }
        }


        /*
        *  처음 보이는 이미지
        *                 */

        firstImagerender(res.data['filename']);
        attrGo();
        attrCompareGo();
        scatterChartGo();


        stepGo();


        let imagesList = flagshipImagesJson[groupNumState];
        let carouselList = [];
        for (let i = 0; i < 14; i++) {
            let temp = {};
            temp['source'] =
                '/static/Representative_Images_top15/' + groupNumState + '/' + imagesList[i];
            carouselList.push(temp);
        }


        ReactDOM.render(
            <div style={{textAlign: 'left'}}>
                {imagesList.map(img => {
                    return (
                        <div key={img} style={{maxWidth: '110px', width: '20%', display: 'inline-block',}}>
                            <ModalImage
                                small={'/static/Representative_Images_top15/' + groupNumState + '/' + img}
                                midium={'/static/Representative_Images_top15/' + groupNumState + '/' + img}
                                large={'/static/Representative_Images_top15/' + groupNumState + '/' + img}
                            /></div>
                    );
                })}
            </div>,
            document.getElementById('representativeLooks'),
        );


        /*********************
         *
         *
         *       TRENDQ
         *
         *
         * ******************/


        if (isStyleButtonClicked) {
            for (let i = 0; i < trendcolors.length; i++) {
                trendcolors[i] = '#665f5f';
            }
            trendScatterGo();
             if(trend1 === groupNumState){
                setTrend1State('group2')
            }else if(trend2 === groupNumState){
                setTrend2State('group2')
            }else if(trend3 === groupNumState){
                setTrend3State('group2')
            }

            apexChartLineOptions['options']['colors'] = [trend1Color];
            ReactDOM.render(<Chart width={'100%'} height={300}
                                   options={apexChartLineOptions.options}
                                   series={[linechartForecastingJson[trend1][0]]}
                                   type={'line'}/>, document.getElementById('trend_chart1'));

            apexChartLineOptions['options']['colors'] = [trend2Color];
            ReactDOM.render(<Chart width={'100%'} height={300}
                                   options={apexChartLineOptions.options}
                                   series={[linechartForecastingJson[trend2][0]]}
                                   type={'line'}/>, document.getElementById('trend_chart2'));

            apexChartLineOptions['options']['colors'] = [trend3Color];
            ReactDOM.render(<Chart width={'100%'} height={300}
                                   options={apexChartLineOptions.options}
                                   series={[linechartForecastingJson[trend3][0]]}
                                   type={'line'}/>, document.getElementById('trend_chart3'));


            let trendImageArray = randomNumberArray(6, 15);
//             console.log(trendImageArray);
            let imagesList_trend1 = [];
            for (let i = 0; i < 6; i++) {
                imagesList_trend1.push(flagshipImagesJson[trend1][trendImageArray[i]]);
            }

            ReactDOM.render(
                <div>
                    {imagesList_trend1.map(img => {
                        return (<div style={{width: '15%', float: 'left', padding: '10'}} key={img}>
                                <ModalImage
                                    small={'/static/Representative_Images_top15/' + trend1 + '/' + img}
                                    midium={'/static/Representative_Images_top15/' + trend1 + '/' + img}
                                    large={'/static/Representative_Images_top15/' + trend1 + '/' + img}
                                /></div>
                        );
                    })}
                </div>,
                document.getElementById('images1'),
            );


            let imagesList_trend2 = [];
            for (let i = 0; i < 6; i++) {
                imagesList_trend2.push(flagshipImagesJson[trend2][trendImageArray[i]]);
            }
            ReactDOM.render(<div>
                    {imagesList_trend2.map(img => {
                        return (<div style={{width: '15%', float: 'left', padding: '10'}} key={img}>
                                <ModalImage
                                    small={'/static/Representative_Images_top15/' + trend2 + '/' + img}
                                    midium={'/static/Representative_Images_top15/' + trend2 + '/' + img}
                                    large={'/static/Representative_Images_top15/' + trend2 + '/' + img}
                                /></div>
                        );
                    })}
                </div>,
                document.getElementById('images2'),
            );

            let imagesList_trend3 = [];
            for (let i = 0; i < 6; i++) {
                imagesList_trend3.push(flagshipImagesJson[trend3][trendImageArray[i]]);
            }
            ReactDOM.render(<div>
                    {imagesList_trend3.map(img => {
                        return (<div style={{width: '15%', float: 'left', padding: '10'}} key={img}>
                                <ModalImage
                                    small={'/static/Representative_Images_top15/' + trend3 + '/' + img}
                                    midium={'/static/Representative_Images_top15/' + trend3 + '/' + img}
                                    large={'/static/Representative_Images_top15/' + trend3 + '/' + img}
                                /></div>
                        );
                    })} </div>,
                document.getElementById('images3'),
            );

            // let result = '';
            // for (let j = 0; j < unique.length; j++) {
            //     result = result + unique[j] + '<br/>';
            // }
            //
            // let select1List = RepresentativeAttributes[groupNumState];
            // let select2List = RepresentativeAttributes[selectedTrend];
            // let intersectList = intersectLists(select1List, select2List);

        }

    });


    const menuItems = (
        <Menu style={{float: 'left', textAlign: 'left', fontSize: 30}} onClick={onClickTrendMenu}
              selectedKeys={[trendMenu]} mode="horizontal">
            <Menu.Item key="trending">
                TRENDING STYLES
            </Menu.Item>
            <Menu.Item key="declining">
                DECLINING STYLES
            </Menu.Item>
            <Menu.Item key="upcoming">
                UPCOMING STYLES
            </Menu.Item>
            <Menu.Item key="steady">
                STEADY STYLES
            </Menu.Item>
        </Menu>
    );
    const TrendQ = () => (
        <div id={'trendQ'} disabled={true}>
            <GridContainer>
                <GridItem xs={12}>
                    <GridItem xs={12} sm={12}>
                        <Card>
                            <CardHeader color="rose">
                            <span style={{
                                color: '#FFFFFF', fontFamily: 'BebasNeue-Bold', fontSize: '50px'
                            }} className={classes.cardCategory}>Trend-Q</span>

                            </CardHeader>
                            <GridContainer
                                justify="center"
                                direction="row">
                                <GridItem xs={12} sm={2} style={{float: 'left', marginRight: '20px'}}>
                                    <div
                                        style={{textAlign: 'left', fontSize: '40px', fontFamily: 'BebasNeue-Bold', marginLeft:'20px'}}>
                                        STYLE MAP
                                    </div>
                                    <div id={'trendScatter'}/>
                                </GridItem>
                                <GridItem xs={12} sm={9}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            <div
                                                style={{
                                                    textAlign: 'left',
                                                    fontSize: '40px',
                                                    fontFamily: 'BebasNeue-Bold'
                                                }}>
                                                {menuItems}
                                            </div>

                                        </GridItem>
                                        <GridItem xs={12}>
                                            <GridContainer>
                                                <GridItem xs={12} sm={4}>
                                                    <Button onClick={() => {
                                                        onClickTrendButton(trend1, 0)
                                                    }} style={{
                                                        fontSize: '25px',
                                                        fontFamily: 'BebasNeue-Bold',
                                                        width: '40%',
                                                        backgroundColor: trend1Color
                                                    }}>
                                                        STYLE {stringTonumber(trend1)}</Button>
                                                    <div id={'trend_chart1'}/>
                                                    <div id={'images1'}/>
                                                </GridItem>
                                                <GridItem xs={12} sm={4}>
                                                    <Button onClick={() => {
                                                        onClickTrendButton(trend2, 1)
                                                    }} style={{
                                                        fontSize: '25px',
                                                        fontFamily: 'BebasNeue-Bold',
                                                        width: '40%',
                                                        backgroundColor: trend2Color
                                                    }}>
                                                        STYLE {stringTonumber(trend2)}</Button>
                                                    <div id={'trend_chart2'}/>
                                                    <div id={'images2'}/>
                                                </GridItem>
                                                <GridItem xs={12} sm={4}>
                                                    <Button onClick={() => {
                                                        onClickTrendButton(trend3, 2)
                                                    }} style={{
                                                        fontSize: '25px',
                                                        fontFamily: 'BebasNeue-Bold',
                                                        width: '40%',
                                                        backgroundColor: trend3Color
                                                    }}>
                                                        STYLE {stringTonumber(trend3)}</Button>
                                                    <div id={'trend_chart3'}/>
                                                    <div id={'images3'}/>
                                                </GridItem>
                                            </GridContainer>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                        </Card>
                    </GridItem>
                </GridItem>
            </GridContainer>
        </div>
    );

    const FashionQ = () => (
        <GridItem xs={12} sm={12}>
            <Card>
                <CardHeader color="rose">
                                <span style={{
                                    color: '#FFFFFF', fontFamily: 'BebasNeue-Bold', fontSize: '50px'
                                }} id={'quantitative'} className={classes.cardCategory}>
                                  Merge-Q{' '}
                                </span>

                </CardHeader>
                {/*<GridContainer>*/}
                <GridContainer
                    justify="center"
                    direction="row">
                    <GridItem xs={12} sm={3}>
                        <div
                            style={{textAlign: 'left', fontSize: '40px', fontFamily: 'BebasNeue-Bold', marginLeft:'10px'}}>
                            INTERSECTION ATTRIBUTES
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                        <GridItem>
                            <div
                                style={{
                                    textAlign: 'left',
                                    fontSize: '40px',
                                    fontFamily: 'BebasNeue-Bold'
                                }}>
                                INTERSECTION LOOKS
                            </div>
                        </GridItem>
                    </GridItem>
                    <GridItem xs={12} sm={3}>
                        <GridItem>
                            <div
                                style={{
                                    textAlign: 'left',
                                    fontSize: '40px',
                                    fontFamily: 'BebasNeue-Bold'
                                }}>
                                INTERSECTION SHOWS
                            </div>
                        </GridItem>
                    </GridItem>
                </GridContainer>
                <FashionQComponent first={groupNumState} second={selectedTrend} positionfirst={firstColorPosition} positionSecond={secondColorPosition}/>
            </Card>
        </GridItem>
    );


    return (
        <div>
            <GridContainer>
                <GridItem xs={12}>
                    <GridItem xs={12}>
                    </GridItem>
                    <GridItem xs={12} sm={12}>
                        <Card>
                            <CardHeader color="rose">
                <span style={{
                    color: '#FFFFFF', fontFamily: 'BebasNeue-Bold', fontSize: '50px'
                }} id={'quantitative'} className={classes.cardCategory}>
                  STYLE-Q{' '}
                </span>
                            </CardHeader>
<GridContainer
                                justify="center"
                                direction="row">
                                <GridItem xs={12} sm={2}>
                                    <span id="lookImage" className={classes.stats}></span>
                                </GridItem>
                                <GridItem xs={12} sm={9}>
                                    <span>
                                        <div
                                            style={{textAlign: 'left', fontSize: '40px', fontFamily: 'BebasNeue-Bold'}}>
                                            ATTRIBUTES
                                        </div>
                                        <Card style={{width: '100%'}}>
                                            <br/>
                                            <div style={{textAlign: 'left', padding: '10px'}} id={'attributes'}/></Card>
                                    </span>
                                    <Table
                                        alignItems="center"
                                        justify="center"
                                        style={{textAlign: 'center', width: '70%'}}
                                        className={classes.table}
                                    >
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    style={{
                                                        fontFamily: 'BebasNeue-Bold',
                                                        //backgroundColor: '#bfaa3a',
                                                        textAlign: 'center',
                                                        fontSize: 25,
                                                        border: '1px solid #000000',
                                                    }}
                                                    colSpan={60}
                                                >
                                                    Type of clothes
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        fontFamily: 'BebasNeue-Bold',
                                                        //backgroundColor: '#9bbf36',
                                                        textAlign: 'center',
                                                        fontSize: 25,
                                                        border: '1px solid #000000',
                                                    }}
                                                    colSpan={15}
                                                >
                                                    Dominant colors
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        fontFamily: 'BebasNeue-Bold',
                                                        //backgroundColor: '#50bf60',
                                                        textAlign: 'center',
                                                        fontSize: 25,
                                                        border: '1px solid #000000',
                                                    }}
                                                    colSpan={27}
                                                >
                                                    Garments parts
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        fontFamily: 'BebasNeue-Bold',
                                                        //backgroundColor: '#51b9bf',
                                                        textAlign: 'center',
                                                        fontSize: 25,
                                                        border: '1px solid #000000',
                                                    }}
                                                    colSpan={21}
                                                >
                                                    Textile pattern
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        fontFamily: 'BebasNeue-Bold',
                                                        //backgroundColor: '#bf5861',
                                                        textAlign: 'center',
                                                        fontSize: 25,
                                                        border: '1px solid #000000',
                                                    }}
                                                    colSpan={15}
                                                >
                                                    Decorations
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        fontFamily: 'BebasNeue-Bold',
                                                        //backgroundColor: '#9673bf',
                                                        textAlign: 'center',
                                                        fontSize: 25,
                                                        border: '1px solid #000000',
                                                    }}
                                                    colSpan={9}
                                                >
                                                    Finishing
                                                </TableCell>
                                            </TableRow>
                                            <TableRow id={'yourLookAttrs'} style={{width: '80%'}}>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                    <br/>
                                </GridItem>
                            </GridContainer>
                            <GridContainer
                                justify="center"
                                direction="row">
                                <GridItem xs={12} sm={2}>
                                    <div
                                        style={{textAlign: 'left', fontSize: '40px', fontFamily: 'BebasNeue-Bold', marginLeft:'20px'}}>
                                        STYLE MAP
                                    </div>
                                    <CardBody id={'scatterChart'}/>
                                </GridItem>
                                <GridItem xs={12} sm={9}>
                                    <div style={{textAlign: 'left', marginBottom: '20px'}} id={'button_groups'}>
                                        <Button id={'firstStyleButton'}></Button>
                                        <Button id={'seconStyleButton'}></Button>
                                        <Button id={'thirdStyleButton'}></Button>
                                    </div>
                                    <Table
                                        alignItems="center"
                                        justify="center"
                                        style={{textAlign: 'center', width: '70%'}}
                                        className={classes.table}
                                    >
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    style={{
                                                        fontFamily: 'BebasNeue-Bold',
                                                        //backgroundColor: '#bfaa3a',
                                                        textAlign: 'center',
                                                        fontSize: 25,
                                                        border: '1px solid #000000',
                                                    }}
                                                    colSpan={60}
                                                >
                                                    Type of clothes
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        fontFamily: 'BebasNeue-Bold',
                                                        //backgroundColor: '#9bbf36',
                                                        textAlign: 'center',
                                                        fontSize: 25,
                                                        border: '1px solid #000000',
                                                    }}
                                                    colSpan={15}
                                                >
                                                    Dominant colors
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        fontFamily: 'BebasNeue-Bold',
                                                        //backgroundColor: '#50bf60',
                                                        textAlign: 'center',
                                                        fontSize: 25,
                                                        border: '1px solid #000000',
                                                    }}
                                                    colSpan={27}
                                                >
                                                    Garments parts
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        fontFamily: 'BebasNeue-Bold',
                                                        //backgroundColor: '#51b9bf',
                                                        textAlign: 'center',
                                                        fontSize: 25,
                                                        border: '1px solid #000000',
                                                    }}
                                                    colSpan={21}
                                                >
                                                    Textile pattern
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        fontFamily: 'BebasNeue-Bold',
                                                        //backgroundColor: '#bf5861',
                                                        textAlign: 'center',
                                                        fontSize: 25,
                                                        border: '1px solid #000000',
                                                    }}
                                                    colSpan={15}
                                                >
                                                    Decorations
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        fontFamily: 'BebasNeue-Bold',
                                                        //backgroundColor: '#9673bf',
                                                        textAlign: 'center',
                                                        fontSize: 25,
                                                        border: '1px solid #000000',
                                                    }}
                                                    colSpan={9}
                                                >
                                                    Finishing
                                                </TableCell>
                                            </TableRow>
                                            <TableRow id={'AttrsCompare'} style={{width: '80%'}}>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                    <GridItem xs={12} sm={12}>
                                        <br/>
                                        <div
                                            style={{textAlign: 'left', fontSize: '40px', fontFamily: 'BebasNeue-Bold'}}>
                                            REPRESENTATIVE LOOKS
                                        </div>
                                        <div id={'representativeLooks'}></div>
                                    </GridItem>
                                </GridItem>
                            </GridContainer>
                        </Card>
                    </GridItem>
                </GridItem>
            </GridContainer>
            <div id={'trendQQ'}>
                {isStyleButtonClicked ? <TrendQ/> : null}
            </div>
            <div id={'fashionQ'}>
                {isTrendButtonClicked ? <FashionQ/> : null}
            </div>
        </div>
    );
}
