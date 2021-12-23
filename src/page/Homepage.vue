<template>
  <div id="main">
    <el-row id="head1">
      <el-col :span="24">
        <el-col :span="2">
          <div id="bulestar"></div>
        </el-col>
        <el-col :span="2">
          <div id="logowenz">
            <router-link to="/Childpage"> 中国蓝星</router-link>
          </div>
        </el-col>
        <el-col :span="8" :offset="4">
          <div id="moshihua">
            模式化监控系统
          </div>
        </el-col>
        <el-col :span="2" :offset="2">
          <div id="dateS">2021/11/09</div>
        </el-col>
        <el-col :span="2">
          <div id="timeS">
            20:33:333
          </div>
        </el-col>
        <el-col :span="2">
          <div id="Mlogo"></div>
        </el-col>
      </el-col>
    </el-row>
    <el-row id="title1">
      <el-col :span="8">
        <div class="Mwenzi">【基础环氧树脂】</div>
      </el-col>
      <el-col :span="8">
        <div class="Mwenzi"><i>南通星辰合成材料有限公司重大危险源</i></div>
      </el-col>
      <el-col :span="8">
        <div class="Mwenzi">【特种环氧树脂】</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="Mborder">
          <el-row>
            <el-col :span="12">
              <div class="sandian1" id="sandiantu1"></div>
            </el-col>
            <el-col :span="12">
              <div class="sandian1" id="zhixiantu1"></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" id="biaopan1" class="yibiaopan"> </el-col>
            <el-col :span="8" id="biaopan2" class="yibiaopan"> </el-col>
            <el-col :span="8" id="biaopan3" class="yibiaopan"> </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="Mwenzi">【双酚A】</div>
            </el-col>
          </el-row>
          <el-row>
            <div class="Mborder">
              <el-row>
                <el-col :span="12">
                  <div class="sandian1" id="sandiantu3"></div>
                </el-col>
                <el-col :span="12">
                  <div class="sandian1" id="zhixiantu3"></div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8" id="biaopan7" class="yibiaopan"> </el-col>
                <el-col :span="8" id="biaopan8" class="yibiaopan"> </el-col>
                <el-col :span="8" id="biaopan9" class="yibiaopan"> </el-col>
              </el-row>
            </div>
          </el-row>
        </div>
      </el-col>

      <el-col :span="8">
        <div>
          <div class="Mmid">
            <el-row class="panyi1">
              <el-col :span="16">
                <el-row>
                  <el-col :span="4"> </el-col>
                  <el-col :span="4">
                    <div class="zhuangtai" id="zongliang"></div>
                  </el-col>
                  <el-col :span="4">
                    <div class="zhuangtai" id="lixian"></div>
                  </el-col>
                  <el-col :span="4">
                    <div class="zhuangtai" id="zhengchang"></div>
                  </el-col>
                  <el-col :span="4">
                    <div class="zhuangtai" id="yujing"></div>
                  </el-col>
                  <el-col :span="4">
                    <div class="zhuangtai" id="baojing"></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="4"> </el-col>
                  <el-col :span="4" class="wenzif">
                    <span class="wenzi1">模型总量</span>
                  </el-col>
                  <el-col :span="4" class="wenzif">
                    <span class="wenzi1">离线</span>
                  </el-col>
                  <el-col :span="4" class="wenzif">
                    <span class="wenzi1">正常</span>
                  </el-col>
                  <el-col :span="4" class="wenzif">
                    <span class="wenzi1">预警</span>
                  </el-col>
                  <el-col :span="4" class="wenzif">
                    <span class="wenzi1">报警</span>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="4"> </el-col>
                  <el-col :span="4" class="wenzif">
                    <span class="wenzi1">6</span>
                  </el-col>
                  <el-col :span="4" class="wenzif">
                    <span class="wenzi1">0</span>
                  </el-col>
                  <el-col :span="4" class="wenzif">
                    <span class="wenzi1">6</span>
                  </el-col>
                  <el-col :span="4" class="wenzif">
                    <span class="wenzi1" id="yujingtext">0</span>
                  </el-col>
                  <el-col :span="4" class="wenzif">
                    <span class="wenzi1" id="baojingtext">0</span>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <span class="wenzi1">系统状态：</span>
                  <div class="xiaoyuandian" id="xitong"></div>
                </el-row>
                <el-row>
                  <span class="wenzi1">通讯状态：</span>
                  <div class="xiaoyuandian" id="tongxun"></div>
                </el-row>
              </el-col>
            </el-row>

            <el-row>
              <div id="pic" :style="src">
                  <!-- 图片闪烁->雪碧图 -->
                <span class="tag" @click="nextPage()">基础环氧树脂</span>
                <span class="tag">特种环氧树脂</span>
                <span class="tag">双酚A</span>
                <span class="tag">PBT</span>
              </div>
            </el-row>
          </div>

          <div class="Mmid">
            <el-row>
              <el-row>
                <div class="pianyi">
                  <el-col :span="12" class="Mwenzi">【安全列表】</el-col>
                  <el-col :span="12" class="Mwenzi">【稳定列表】</el-col>
                </div>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <div class="pianyi">
                    <el-table
                      height="150"
                      :data="tableData"
                      size="mini"
                      :cell-style="{ color: '#ff6600' }"
                      :header-row-style="{ height: '15px' }"
                      highlight-current-row
                    >
                      <el-table-column prop="col1" label="占比" align="center">
                      </el-table-column>
                      <el-table-column
                        prop="col2"
                        label="当前值"
                        align="center"
                      >
                      </el-table-column>
                      <el-table-column prop="col3" label="描述" align="center">
                      </el-table-column>
                    </el-table>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="pianyi">
                    <el-table
                      height="150"
                      :data="tableData"
                      size="mini"
                      :cell-style="{ color: '#ff6600' }"
                      :header-row-style="{ height: '15px' }"
                      highlight-current-row
                    >
                      <el-table-column prop="col1" label="占比" align="center">
                      </el-table-column>
                      <el-table-column
                        prop="col2"
                        label="当前值"
                        align="center"
                      >
                      </el-table-column>
                      <el-table-column prop="col3" label="描述" align="center">
                      </el-table-column>
                    </el-table>
                  </div>
                </el-col>
              </el-row>
            </el-row>
          </div>
          <div class="buttonGroup">
            <el-button @click="nextPage()">上一张</el-button>
            <el-button @click="pause(action)">{{
              this.action === true ? "暂停" : "继续"
            }}</el-button>
            <el-button @click="nextPage()">下一张</el-button>
          </div>
        </div>
      </el-col>

      <el-col :span="8">
        <div class="Mborder">
          <el-row>
            <el-col :span="12">
              <div class="sandian1" id="sandiantu2"></div>
            </el-col>
            <el-col :span="12">
              <div class="sandian1" id="zhixiantu2"></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" id="biaopan4" class="yibiaopan"> </el-col>
            <el-col :span="8" id="biaopan5" class="yibiaopan"> </el-col>
            <el-col :span="8" id="biaopan6" class="yibiaopan"> </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="Mwenzi">【聚对苯二甲酸丁二醇酯】</div>
            </el-col>
          </el-row>
          <el-row>
            <div class="Mborder">
              <el-row>
                <el-col :span="12">
                  <div class="sandian1" id="sandiantu4"></div>
                </el-col>
                <el-col :span="12">
                  <div class="sandian1" id="zhixiantu4"></div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8" id="biaopan10" class="yibiaopan"> </el-col>
                <el-col :span="8" id="biaopan11" class="yibiaopan"> </el-col>
                <el-col :span="8" id="biaopan12" class="yibiaopan"> </el-col>
              </el-row>
            </div>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import * as echarts from "echarts";
import { mapState, mapActions } from "vuex";
import dayjs from "dayjs";
import { calMax, calMin } from "../tools/dataFormat";
export default {
  data() {
    return {
      src:{
          backgroundImage:"url("+ require("../assets/img/NTBg2.png")+")"
      },
      action: true,
      colorFlag: 0,
      colorFlag1: 0,
      id: 0,
      id2: 0,
      id3:0,
      id4:0,
      numMax: 5,
      size: 5, //散点图展示点的大小
      color: [
        "rgba(128, 128, 128, 0.7)",
        "rgba(255, 0, 0, 1)",
        "rgba(255, 242, 0, 1)",
        "rgba(25, 5, 247, 1)"
      ] //散点图展示点的默认颜色
    };
  },
  mounted() {
    //图像初始化
    this.id2 = setInterval(() => {
      this.refTime();
    }, 1000);
    this.findCurData();
  },
  watch: {
    scatterData: {
      handler(newval) {
        if (newval && newval.length) {
          this.drawScatter(newval);
        }
      }
    },
    lineData1: {
      deep: true,
      handler(newval) {
        if (newval.x1.length || newval.x2.length || newval.x3.length) {
          this.drawLine1(newval);
        }
      }
    },
    gaugeData: {
      deep: true,
      handler(newval) {
        this.drawGauge1(newval);
      }
    },
    testTag: {
      deep: true,
      handler(newval) {
        this.refStatus(newval);
      }
    }
  },
  computed: {
    ...mapState("main", [
      "scatterData",
      "lineData1",
      "gaugeData",
      "tableData",
      "testTag"
    ])
  },
  methods: {
    ...mapActions("main", [
      "scatterCur",
      "line1Cur",
      "guageCur",
      "tableCur",
      "testTagCur"
    ]),

    findCurData() {
      this.id = setInterval(() => {
        this.scatterCur({ numMax: this.numMax });
        this.line1Cur();
        this.guageCur();
        this.tableCur();
        this.testTagCur();
      }, 1000);
    },
    drawScatter(val) {
      //对散点图进行重新绘制
      let myChart = echarts.getInstanceByDom(
        document.getElementById("sandiantu1")
      );
      if (myChart == null) {
        myChart = echarts.init(document.getElementById("sandiantu1"));
      }

      let myChart1 = echarts.getInstanceByDom(
        document.getElementById("sandiantu2")
      );
      if (myChart1 == null) {
        myChart1 = echarts.init(document.getElementById("sandiantu2"));
      }

      let myChart2 = echarts.getInstanceByDom(
        document.getElementById("sandiantu3")
      );
      if (myChart2 == null) {
        myChart2 = echarts.init(document.getElementById("sandiantu3"));
      }

      let myChart3 = echarts.getInstanceByDom(
        document.getElementById("sandiantu4")
      );
      if (myChart3 == null) {
        myChart3 = echarts.init(document.getElementById("sandiantu4"));
      }
      var that = this;

      var option = {
        xAxis: {
          min: 0,
          max: 100,
          show: false
        },
        yAxis: {
          min: 0,
          max: 100,
          show: false
        },
        grid: {
          x: 10,
          y: 10,
          x2: 10,
          y2: 10
        },
        series: [
          {
            symbolSize: this.size,
            data: val,
            type: "scatter",
            itemStyle: {
              normal: {
                color: function(params) {
                  let colorList = that.color;
                  if (params.dataIndex > val.length - colorList.length) {
                    return colorList[val.length - params.dataIndex];
                  }
                  return colorList[0];
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option, true);
      myChart1.setOption(option, true);
      myChart2.setOption(option, true);
      myChart3.setOption(option, true);
    }, //绘制散点图，用于更新
    drawLine1(val) {
      let myChart = echarts.getInstanceByDom(
        document.getElementById("zhixiantu1")
      );
      if (myChart == null) {
        myChart = echarts.init(document.getElementById("zhixiantu1"));
      }

      let myChart1 = echarts.getInstanceByDom(
        document.getElementById("zhixiantu2")
      );
      if (myChart1 == null) {
        myChart1 = echarts.init(document.getElementById("zhixiantu2"));
      }

      let myChart2 = echarts.getInstanceByDom(
        document.getElementById("zhixiantu3")
      );
      if (myChart2 == null) {
        myChart2 = echarts.init(document.getElementById("zhixiantu3"));
      }

      let myChart3 = echarts.getInstanceByDom(
        document.getElementById("zhixiantu4")
      );
      if (myChart3 == null) {
        myChart3 = echarts.init(document.getElementById("zhixiantu4"));
      }
      let Max1 = calMax(val.x1);
      let Min1 = calMin(val.x1);
      let Max2 = calMax(val.x2);
      let Min2 = calMin(val.x2); //用于对齐双y轴
      var option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["before", "", "", "", "", "", "now"]
        },

        grid: {
          x: 25,
          y: 30,
          x2: 25,
          y2: 20
        },
        yAxis: [
          {
            type: "value",
            name: "工况模式指数",
            min: Min1,
            max: Max1,
            interval: (Max1 - Min1) / 5,
            splitNumber: 5,
            nameTextStyle: {
              color: "yellow"
            }
          },
          {
            type: "value",
            name: "预警时间",
            min: Min2,
            max: Max2,
            interval: (Max2 - Min2) / 5,
            splitNumber: 5,
            nameTextStyle: {
              color: "red"
            }
          }
        ],

        series: [
          {
            name: "工况模式指数",
            type: "line",
            data: val.x1
          },
          {
            name: "预警时间",
            type: "line",
            yAxisIndex: 1,
            data: val.x2
          }
        ]
      };
      myChart.setOption(option, true);
      myChart1.setOption(option, true);
      myChart2.setOption(option, true);
      myChart3.setOption(option, true);
    }, //绘制折线图1,用于更新
    drawGauge1(val) {
      let myChart = echarts.getInstanceByDom(
        document.getElementById("biaopan1")
      );
      if (myChart === undefined) {
        myChart = echarts.init(document.getElementById("biaopan1"));
      }

      let myChart1 = echarts.getInstanceByDom(
        document.getElementById("biaopan2")
      );
      if (myChart1 === undefined) {
        myChart1 = echarts.init(document.getElementById("biaopan2"));
      }

      let myChart2 = echarts.getInstanceByDom(
        document.getElementById("biaopan3")
      );
      if (myChart2 === undefined) {
        myChart2 = echarts.init(document.getElementById("biaopan3"));
      }
      ////
      let myChart3 = echarts.getInstanceByDom(
        document.getElementById("biaopan4")
      );
      if (myChart3 === undefined) {
        myChart3 = echarts.init(document.getElementById("biaopan4"));
      }

      let myChart4 = echarts.getInstanceByDom(
        document.getElementById("biaopan5")
      );
      if (myChart4 === undefined) {
        myChart4 = echarts.init(document.getElementById("biaopan5"));
      }

      let myChart5 = echarts.getInstanceByDom(
        document.getElementById("biaopan6")
      );
      if (myChart5 === undefined) {
        myChart5 = echarts.init(document.getElementById("biaopan6"));
      }

      let myChart6 = echarts.getInstanceByDom(
        document.getElementById("biaopan7")
      );
      if (myChart6 === undefined) {
        myChart6 = echarts.init(document.getElementById("biaopan7"));
      }

      let myChart7 = echarts.getInstanceByDom(
        document.getElementById("biaopan8")
      );
      if (myChart7 === undefined) {
        myChart7 = echarts.init(document.getElementById("biaopan8"));
      }

      let myChart8 = echarts.getInstanceByDom(
        document.getElementById("biaopan9")
      );
      if (myChart8 === undefined) {
        myChart8 = echarts.init(document.getElementById("biaopan9"));
      }

      let myChart9 = echarts.getInstanceByDom(
        document.getElementById("biaopan10")
      );
      if (myChart9 === undefined) {
        myChart9 = echarts.init(document.getElementById("biaopan10"));
      }

      let myChart10 = echarts.getInstanceByDom(
        document.getElementById("biaopan11")
      );
      if (myChart10 === undefined) {
        myChart10 = echarts.init(document.getElementById("biaopan11"));
      }

      let myChart11 = echarts.getInstanceByDom(
        document.getElementById("biaopan12")
      );
      if (myChart11 === undefined) {
        myChart11 = echarts.init(document.getElementById("biaopan12"));
      }
      var option = {
        series: [
          {
            type: "gauge",
            axisLine: {
              lineStyle: {
                width: 3,
                color: [
                  [0.3, "#67e0e3"],
                  [0.7, "#37a2da"],
                  [1, "#fd666d"]
                ]
              }
            },
            pointer: {
              itemStyle: {
                color: "inherit"
              }
            },
            splitLine: {
              show: false,
              distance: -30,
              length: 3,
              lineStyle: {
                color: "#fff",
                width: 2
              }
            },
            axisLabel: {
              color: "inherit",
              distance: 10,
              fontSize: 8
            },
            detail: {
              valueAnimation: true,
              formatter: "\n{value}\n工况模式指数",
              color: "inherit",
              fontSize: 8
            },
            data: [{ value: val.gkmszs }]
          }
        ]
      };
      let option1 = JSON.parse(JSON.stringify(option));
      let option2 = JSON.parse(JSON.stringify(option));

      option1.series[0].data[0].value = val.yjzs;
      option1.series[0].detail.formatter = "\n{value}\n稳定指数";
      option2.series[0].data[0].value = val.wdzs;
      option2.series[0].detail.formatter = "\n{value}\n预警指数";

      myChart.setOption(option, true);
      myChart1.setOption(option1, true);
      myChart2.setOption(option2, true);
      myChart3.setOption(option, true);
      myChart4.setOption(option1, true);
      myChart5.setOption(option2, true);
      myChart6.setOption(option, true);
      myChart7.setOption(option1, true);
      myChart8.setOption(option2, true);
      myChart9.setOption(option, true);
      myChart10.setOption(option1, true);
      myChart11.setOption(option2, true);
    },
    refTime() {
      let date = document.getElementById("dateS");
      let time = document.getElementById("timeS");
      let curtime = dayjs();
      let innerDate = dayjs(curtime).format("YYYY-MM-DD");
      let innerTime = dayjs(curtime).format("HH:mm:ss");
      date.innerText = innerDate;
      time.innerHTML = innerTime;
    }, //用于刷新时间
    pause(parms) {
      if (this.id !== 0 && parms === true) {
        clearInterval(this.id);
        this.id = 0;
        this.action = !parms;
      }
      if (parms === false) {
        this.findCurData();
        this.action = !parms;
      }
    },
    nextPage() {
      if (this.id !== 0 || this.id2 !== 0 || this.id3 !==0 || this.id4 !==0) {
        clearInterval(this.id);
        clearInterval(this.id2);
        clearInterval(this.id3);
        clearInterval(this.id4);
        this.id = 0;
      }
      this.$router.push("/Childpage");
    },
    changeColor(node,color){
        if(!this.colorFlag){
            node.style.backgroundColor = 'transparent'
            this.colorFlag = 1;
        }else{
            node.style.backgroundColor = color
            this.colorFlag = 0;
        }
    },
        changeColor1(node,color){
        if(!this.colorFlag1){
            node.style.backgroundColor = 'transparent'
            this.colorFlag1 = 1;
        }else{
            node.style.backgroundColor = color
            this.colorFlag1 = 0;
        }
    },
    refStatus(val) {
      let tag1 = Math.round(val.testTag1);
      let tag2 = Math.round(val.testTag2);
      let xitongNode = document.getElementById("xitong");
      let tongxunNode = document.getElementById("tongxun");
      let yujingNode = document.getElementById("yujingtext");
      let baojingNode = document.getElementById("baojingtext");
      let yujing = document.getElementById("yujing");
      let baojing = document.getElementById("baojing");
      if(tag2 >= 50){
          this.src.backgroundImage = "url("+ require("../assets/img/NTBg1.png")+")"
      }else{
           this.src.backgroundImage = "url("+ require("../assets/img/NTBg2.png")+")"
      }
      if (tag1 >= 50) {
        this.id3 =  setInterval(this.changeColor(yujing,'yellow'),1000)  
      }else{
          clearInterval(this.id3)
      }
      if (tag2 >= 50) {
        this.id4 =  setInterval(this.changeColor1(baojing,'red'),1000)  
      }else{
          clearInterval(this.id4)
      }
    
      yujingNode.innerText = tag1;
      baojingNode.innerText = tag2;
      if (tag1 >= 50) {
        xitongNode.style.backgroundColor = "red";
      } else {
        xitongNode.style.backgroundColor = "green";
      }
      if (tag2 >= 50) {
        tongxunNode.style.backgroundColor = "red";
      } else {
        tongxunNode.style.backgroundColor = "green";
      }
    }
  }
};
</script>
<style scoped>
/deep/ .el-table,
/deep/ .el-table__expanded-cell {
  background-color: transparent;
}

/* 表格内背景颜色 */

/deep/ .el-table th,
/deep/ .el-table thead,
/deep/ .el-table tr,
/deep/ .el-table td {
  background-color: transparent;
}

/deep/ .el-table th.el-table__cell {
  background-color: transparent;
}
</style>
