import axios from "../tools/post";
import { scatterDataFormat, tableDataFormat } from "../tools/dataFormat";
export default {
    namespaced: true,

    state: {
        lineData1: {
            x1: [],
            x2: [],
        },
        lineData2: {
            x1: [],
            x2: [],
        },
        ////////////////
        lineData3: {
            x1: [],
            x2: [],
            x3: [],
        },
        /////////////////
        scatterData: [], //散点图数据源
        gaugeData: {
            gkmszs: 0, //工况模式指数
            yjzs: 0, //预警指数
            wdzs: 0, //稳定指数
        },
        tableData: [], //表格数据
        //////
        testTag: {
            testTag1: 0,
            testTag2: 0,
        }



    },
    mutations: {
        clear_state(state, data) {
            if (data.name === "scatterData") {
                state.scatterData = data.data;
            }
            if (data.name === "lineData1") {
                state.lineData1 = data.data;
            }
            if (data.name === "lineData2") {
                state.lineData2 = data.data;
            }
        },
        set_scatterData(state, data) {
            state.scatterData = data;
        },
        set_lineData1(state, data) {
            state.lineData1 = data;
        },
        set_lineData2(state, data) {
            state.lineData2 = data;
        },
        ////////////////////////
        set_lineData3(state, data) {
            state.lineData3 = data;
        },
        ////////////////////////
        set_guageData(state, data) {
            state.gaugeData = data
        },
        set_tableData(state, data) {
            state.tableData = data
        },
        set_testTag(state, data) {
            state.testTag = data
        }
    },
    getters: {
        scatterData: (state) => state.scatterData,
    },
    actions: {
        clearState(context, params) {
            context.commit("clear_state", { name: params.name, data: params.data });
        },
        scatterHis(context, params) {
            let n = params.n;
            let numMax;
            if (params.time[1] === params.time[0]) {
                numMax = 1;
            } else {
                numMax = (params.time[1] - params.time[0]) / 1000 / n;
            }
            //计算该段时间的点数，n为取样频率单位n/s
            axios({
                method: "POST",
                url: "/api/DbComm/GetHisData",
                data: {
                    tags: ["data\\tag1", "data\\tag2"],
                    stime: params.time[0],
                    etime: params.time[1],
                    count: numMax,
                },
            }).then((res) => {
                let newRes = scatterDataFormat(res);
                context.commit("set_scatterData", newRes);
            });
        },
        scatterCur(context, params) {
            let newArr = context.state.scatterData;
            axios
                .post("/api/DbComm/GetData", ["data\\tag1", "data\\tag2"])
                .then((res) => {
                    if (context.state.scatterData.length < params.numMax) {
                        newArr.push(res); //最新数据放到最前面
                    } else if (context.state.scatterData.length === params.numMax) {
                        newArr.shift();
                        newArr.push(res);
                    }
                    context.commit("set_scatterData", newArr);
                });
        },
        line1His(context, params) {
            axios({
                method: "POST",
                url: "/api/DbComm/GetHisData",
                data: {
                    tags: ["data\\tag1", "data\\tag2"],
                    stime: params.time[0],
                    etime: params.time[1],
                    count: 7,
                },
                contentType: "application/x-www-form-urlencoded",
            }).then((res) => {
                let newObj = {
                    x1: res[0],
                    x2: res[1],
                };
                context.commit("set_lineData1", newObj);
            });
        },
        line1Cur(context) {
            let newObj = context.state.lineData1;
            axios
                .post("/api/DbComm/GetData", [
                    "data\\tag1",
                    "data\\tag2",
                ])
                .then((res) => {
                    if (newObj.x1.length < 7 || newObj.x2.length < 7) {
                        newObj.x1.push(res[0]);
                        newObj.x2.push(res[1]);
                    }
                    if (newObj.x1.length === 7 || newObj.x2.length === 7) {
                        newObj.x1.shift();
                        newObj.x1.push(res[0]);
                        newObj.x2.shift();
                        newObj.x2.push(res[1]);
                    }
                    context.commit("set_lineData1", newObj);
                });
        },

        /////////////////////////////////////////////////////
        line3Cur(context) {
            let newObj = context.state.lineData3;
            axios
                .post("/api/DbComm/GetData", [
                    "data\\tag1",
                    "data\\tag2",
                    "data\\tag3"
                ])
                .then((res) => {
                    if (newObj.x1.length < 7 || newObj.x2.length < 7 || newObj.x3.length < 7) {
                        newObj.x1.push(res[0]);
                        newObj.x2.push(res[1]);
                        newObj.x3.push(res[2]);
                    }
                    if (newObj.x1.length === 7 || newObj.x2.length === 7 || newObj.x3.length === 7) {
                        newObj.x1.shift();
                        newObj.x1.push(res[0]);
                        newObj.x2.shift();
                        newObj.x2.push(res[1]);
                        newObj.x3.shift();
                        newObj.x3.push(res[2]);
                    }
                    context.commit("set_lineData3", newObj);
                });
        },
        ///////////////////////////////////////////

        line2His(context, params) {
            axios({
                method: "POST",
                url: "/api/DbComm/GetHisData",
                data: {
                    tags: ["data\\tag3", "data\\tag4"],
                    stime: params.time[0],
                    etime: params.time[1],
                    count: 7,
                },
                contentType: "application/x-www-form-urlencoded",
            }).then((res) => {
                let newObj = {
                    x1: res[0],
                    x2: res[1],
                };
                context.commit("set_lineData2", newObj);
            });
        },
        line2Cur(context) {
            let newObj = context.state.lineData2;
            axios
                .post("/api/DbComm/GetData", ["data\\tag3", "data\\tag4"])
                .then((res) => {
                    if (newObj.x1.length < 7 || newObj.x2.length < 7) {
                        newObj.x1.push(res[0]);
                        newObj.x2.push(res[1]);
                    }
                    if (newObj.x1.length === 7 || newObj.x2.length === 7) {
                        newObj.x1.shift();
                        newObj.x1.push(res[0]);
                        newObj.x2.shift();
                        newObj.x2.push(res[1]);
                    }
                    context.commit("set_lineData2", newObj);
                });
        },
        gaugeHis(context, params) {
            axios({
                method: "POST",
                url: "/api/DbComm/GetHisData",
                data: {
                    tags: ["data\\tag5", "data\\tag6", "data\\tag7"],
                    stime: params.time[1],
                    etime: params.time[1],
                    count: 1,
                },
                contentType: "application/x-www-form-urlencoded",
            }).then((res) => {
                let newObj = {
                    gkmszs: 0,
                    yjzs: 0,
                    wdzs: 0
                }
                newObj.gkmszs = res[0];
                newObj.yjzs = res[1];
                newObj.wdzs = res[2];
                context.commit("set_guageData", newObj);
            });
        },
        guageCur(context) {
            axios
                .post("/api/DbComm/GetData", [
                    "data\\tag5",
                    "data\\tag6",
                    "data\\tag7",
                ])
                .then((res) => {
                    let newObj = context.state.gaugeData
                    newObj.gkmszs = res[0];
                    newObj.yjzs = res[1];
                    newObj.wdzs = res[2];
                    context.commit("set_guageData", newObj);
                });
        },
        tableHis(context, params) {
            let n = params.n;
            let numMax;
            if (params.time[1] === params.time[0]) {
                numMax = 1;
            } else {
                numMax = (params.time[1] - params.time[0]) / 1000 / n;
            }
            axios({
                method: "POST",
                url: "/api/DbComm/GetHisData",
                data: {
                    tags: ["data\\tag1.PV", "data\\tag2.PV", "data\\tag3.PV"],
                    stime: params.time[0],
                    etime: params.time[1],
                    count: numMax,
                },
                // contentType: "application/x-www-form-urlencoded",
            }).then((res) => {
                context.commit("set_tableData", tableDataFormat(res, 1))
            });
        },
        tableCur(context) {
            axios
                .post("/api/DbComm/GetData", [
                    "data\\tag1.Name",
                    "data\\tag1.PV",
                    "data\\tag1.DESC",
                    "data\\tag2.Name",
                    "data\\tag2.PV",
                    "data\\tag2.DESC",
                    "data\\tag3.Name",
                    "data\\tag3.PV",
                    "data\\tag3.DESC",
                ])
                .then((res) => {
                    context.commit("set_tableData", tableDataFormat(res, 0))
                });
        },
        testTagCur(context) {
            axios
                .post("/api/DbComm/GetData", ["data\\tag8", "data\\tag9"])
                .then((res) => {
                    let newObj = {
                        testTag1: res[0],
                        testTag2: res[1]
                    }
                    context.commit("set_testTag", newObj);
                });
        },

    },
};