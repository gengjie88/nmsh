<template>
  <div style="overflow:hiddn">
    <div id="body" ref="body">
      <div id="head">
        <div id="companyName">
          <span style="color: white">国能榆林化工有限公司</span>
        </div>
        <div id="center">
          <span style="color: white; font-size: 24px">模式化监控系统</span>
        </div>
        <div id="dateAndTime">
          <span class="timeSpan">日期：</span>
          <span class="timeSpan" id="date"></span><br />
          <span class="timeSpan">时间：</span>
          <span class="timeSpan" id="time"></span>
        </div>
        <div id="logo"></div>
      </div>
      <div id="content">
        <div id="contentLeft">
          <div id="leftTop">
            <div class="tab">
              <span>【预警分析】</span>
            </div>
            <div id="zhutu1"></div>
            <div>
              <div id="yibiao">
                <div id="yibiao1"></div>
                <div id="yibiao2"></div>
              </div>
            </div>
          </div>
          <div id="leftBottom">
            <div class="tab">
              <span>【工况分析变量】</span>
            </div>
            <div class="tablefather">
              <el-table
                class="el-table"
                :data="tableData"
                size="mini"
                height="170"
                :cell-style="{ color: '#ff6600' }"
                :header-row-style="{ height: '15px' }"
                highlight-current-row
              >
                <el-table-column
                  prop="col1"
                  label="贡献度"
                  width="150"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="col2"
                  label="当前值"
                  width="150"
                  align="center"
                >
                </el-table-column>
                <el-table-column prop="col3" label="描述" align="center">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div id="contentCenter">
          <div id="name">
            <span style="color: white; font-size: 18px" id="zzname"
              ><i>基础环氧树脂</i></span
            >
          </div>
          <div id="cont">
            <span style="text-align: center; line-height: 40px; color: white"
              >【运行模态】</span
            >
          </div>
          <div id="cont1">
            <span style="color: white"></span>
          </div>

          <div id="xx1">
            <img src="../assets/img/ti.jpg" alt="" style="margin-right: 40%" id="wjx1" />
            <img src="../assets/img/ti.jpg" alt="" style="margin-left: 40%" id="wjx2" />
          </div>
          <div id="myChart"></div>
          <div id="xx2">
            <img src="../assets/img/ti.jpg" alt="" style="margin-right: 40%" id="wjx3" />
            <img src="../assets/img/ti.jpg" alt="" style="margin-left: 40%" id="wjx4" />
          </div>
          <el-date-picker
            v-model="value1"
            size="mini"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="timestamp"
          >
          </el-date-picker
          ><br />

          <el-button size="small" @click="goHome()">回到首页</el-button>

          <el-button @click="findCurData()" size="small" round
            >切换实时</el-button
          >
          <el-button @click="findHisData()" size="small" round
            >查询历史</el-button
          >

          <el-button
            type="primary"
            icon="el-icon-s-tools"
            size="small"
            round
            @click="dialogVisible = true"
          ></el-button>
          <el-dialog
            title="设置"
            :visible.sync="dialogVisible"
            width="30%"
            :close="handleClose"
            modal
          >
            <el-form label-width="120px">
              <el-form-item label="最多显示个数">
                <el-input-number
                  v-model="numMax"
                  :step="50"
                  size="mini"
                  controls-position="right"
                  :min="50"
                ></el-input-number>
              </el-form-item>
              <el-form-item label="标记点大小">
                <el-input-number
                  v-model="size"
                  size="mini"
                  controls-position="right"
                  :min="5"
                ></el-input-number>
              </el-form-item>
              <el-form-item label="最近数据的个数">
                <el-input-number
                  v-model="num"
                  size="mini"
                  controls-position="right"
                  :min="1"
                ></el-input-number>
              </el-form-item>

              <el-form-item label="最近数据的颜色">
                <el-color-picker
                  v-model="color[item]"
                  size="mini"
                  v-for="item of num"
                  :key="item"
                  show-alpha
                ></el-color-picker>
              </el-form-item>

              <el-form-item label="剩余数据的颜色">
                <el-color-picker
                  v-model="color[0]"
                  size="mini"
                  show-alpha
                ></el-color-picker>
              </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false"
                >保存</el-button
              >
            </span>
          </el-dialog>
        </div>
        <div id="contentRight">
          <div id="rightTop">
            <div class="tab">
              <span>【稳态分析】</span>
            </div>
            <div id="zhutu2"></div>
            <div>
              <div id="yibiao_1">
                <div id="yibiao3"></div>
              </div>
            </div>
          </div>
          <div id="rightBottom">
            <div class="tab">
              <span>【稳定变量】</span>
            </div>
            <div class="tablefather">
              <el-table
                height="170"
                :data="tableData"
                size="mini"
                :cell-style="{ color: '#ff6600' }"
                :header-row-style="{ height: '15px' }"
                highlight-current-row
              >
                <el-table-column
                  prop="col1"
                  label="贡献度"
                  width="150"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="col2"
                  label="当前值"
                  width="150"
                  align="center"
                >
                </el-table-column>
                <el-table-column prop="col3" label="描述" align="center">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { mapState, mapActions } from "vuex";
import { calMax, calMin } from "../tools/dataFormat";
import dayjs from "dayjs";
export default {
  data() {
    return {
      data1: [100, 20, 101, 74, -3, 23, 20],
      data2: [-1, 6, 11, 4, 9, 3, 0],
      //data1 data2为折线图存储数据
      dataArr: [],
      //散点图存储数据
      gkmszs: 0, //工况模式指数
      yjsj: 0, //预警指数
      wdzs: 0, //稳定指数
      gaugeName: "稳定指数", //仪表盘名称
      //  tableData: [], //表格数据
      value1: [new Date().getTime(), new Date().getTime()], //为日期时间选择器的值
      id: 0,
      dialogVisible: false, //dialog的开闭状态
      numMax: 50, //散点图展示点的个数
      size: 10, //散点图展示点的大小
      color: [
        "rgba(128, 128, 128, 0.7)",
        "rgba(255, 0, 0, 1)",
        "rgba(255, 242, 0, 1)",
        "rgba(25, 5, 247, 1)"
      ], //散点图展示点的默认颜色
      num: 3, //最近数据点个数
      src: require("../assets/img/wjx.png"),
      src1: require("../assets/img/ti.jpg")
    };
  },
  created() {},
  mounted() {
    //图像初始化

    this.id2 = setInterval(() => {
      this.refTime();
      // this.refWjx();
    }, 1000);
    this.findCurData();
  },
  watch: {
    scatterData: {
      handler(newval) {
        if (newval && newval.length) {
          this.drawScatter(newval);
          this.refWjx(newval);
        }
      }
    },
    lineData1: {
      deep: true,
      handler(newval) {
        if (newval.x1.length || newval.x2.length) {
          this.drawLine1(newval);
        }
      }
    },
    lineData2: {
      deep: true,
      handler(newval) {
        if (newval.x1.length || newval.x2.length) {
          this.drawLine2(newval);
        }
      }
    },
    gaugeData: {
      deep: true,
      handler(newval) {
        this.drawGauge1(newval);
      }
    }
  },
  computed: {
    ...mapState("main", [
      "scatterData",
      "lineData1",
      "lineData2",
      "gaugeData",
      "tableData"
    ])
  },
  methods: {
    ...mapActions("main", [
      "scatterHis",
      "scatterCur",
      "clearState",
      "line1His",
      "line1Cur",
      "line2His",
      "line2Cur",
      "gaugeHis",
      "guageCur",
      "tableHis",
      "tableCur"
    ]),
    findHisData() {
      if (this.id !== 0) {
        clearInterval(this.id);
        this.id = 0;
        //如果定时器存在则清除定时器
        console.log("清除定时器！");
      }
      this.scatterHis({ time: this.value1, n: 1 });
      this.line1His({ time: this.value1 });
      this.line2His({ time: this.value1 });
      this.gaugeHis({ time: this.value1 });
      this.tableHis({ time: this.value1, n: 1 });
    },
    findCurData() {
      //查询页面中所有的实时数据
      this.clearState({ name: "scatterData", data: [] });
      this.clearState({ name: "lineData1", data: { x1: [], x2: [] } });
      this.clearState({ name: "lineData2", data: { x1: [], x2: [] } });
      this.id = setInterval(() => {
        this.scatterCur({ numMax: this.numMax });
        this.line1Cur();
        this.line2Cur();
        this.guageCur();
        this.tableCur();
      }, 1000);
    },
    drawScatter(val) {
      //对散点图进行重新绘制
      let myChart = echarts.getInstanceByDom(
        document.getElementById("myChart")
      );
      if (myChart == null) {
        myChart = echarts.init(document.getElementById("myChart"));
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
          x: 45,
          y: 45,
          x2: 45,
          y2: 45
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
    }, //绘制散点图，用于更新
    drawLine1(val) {
      let myChart = echarts.getInstanceByDom(document.getElementById("zhutu1"));
      if (myChart == null) {
        myChart = echarts.init(document.getElementById("zhutu1"));
      }
      let Max1 = calMax(val.x1);
      let Min1 = calMin(val.x1);
      let Max2 = calMax(val.x2);
      let Min2 = calMin(val.x2); //用于对齐双y轴
      var option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["工况模式指数", "预警时间"],
          textStyle: {
            color: "green"
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["before", "", "", "", "", "", "now"]
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
    }, //绘制折线图1,用于更新
    drawLine2(val) {
      let myChart = echarts.getInstanceByDom(document.getElementById("zhutu2"));
      if (myChart == null) {
        myChart = echarts.init(document.getElementById("zhutu2"));
      }
      let Max1 = calMax(val.x1);
      let Min1 = calMin(val.x1);
      let Max2 = calMax(val.x2);
      let Min2 = calMin(val.x2); //用于对齐双y轴
      var option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["工况模式指数", "预警时间"],
          textStyle: {
            color: "green"
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["before", "", "", "", "", "", "now"]
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
    }, //绘制折线图2,用于更新
    drawGauge1(val) {
      let myChart = echarts.getInstanceByDom(
        document.getElementById("yibiao1")
      );
      if (myChart === undefined) {
        myChart = echarts.init(document.getElementById("yibiao1"));
      }

      let myChart1 = echarts.getInstanceByDom(
        document.getElementById("yibiao2")
      );
      if (myChart1 === undefined) {
        myChart1 = echarts.init(document.getElementById("yibiao2"));
      }

      let myChart2 = echarts.getInstanceByDom(
        document.getElementById("yibiao3")
      );
      if (myChart2 === undefined) {
        myChart2 = echarts.init(document.getElementById("yibiao3"));
      }
      var option = {
        series: [
          {
            type: "gauge",
            axisLine: {
              lineStyle: {
                width: 10,
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
              fontSize: 10
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}\n工况模式指数",
              color: "inherit",
              fontSize: 10
            },
            data: [{ value: val.gkmszs }]
          }
        ]
      };
      let option1 = JSON.parse(JSON.stringify(option));
      let option2 = JSON.parse(JSON.stringify(option));
      if (this.id === 0) {
        option1.series[0].data[0].value[0] = val.yjzs;
        option1.series[0].detail.formatter = "{value}\n预警指数";
        option2.series[0].data[0].value[0] = val.wdzs;
        option2.series[0].detail.formatter = "{value}\n稳定指数";
      } else {
        option1.series[0].data[0].value = val.yjzs;
        option1.series[0].detail.formatter = "{value}\n预警指数";
        option2.series[0].data[0].value = val.wdzs;
        option2.series[0].detail.formatter = "{value}\n稳定指数";
      }

      myChart.setOption(option, true);
      myChart1.setOption(option1, true);
      myChart2.setOption(option2, true);
    }, //绘制仪表盘1，用于更新
    handleClose(done) {
      //执行修改操作
      done(); //关闭
    }, //用于关闭设置模态框
    refTime() {
      let date = document.getElementById("date");
      let time = document.getElementById("time");
      let curtime = dayjs();
      let innerDate = dayjs(curtime).format("YYYY-MM-DD");
      let innerTime = dayjs(curtime).format("HH:mm:ss");
      date.innerText = innerDate;
      time.innerHTML = innerTime;
    }, //用于刷新时间
    goHome() {
      clearInterval(this.id);
      clearInterval(this.id2);
      this.$router.push("/");
    },
    refWjx(val) {

        let newData = val[val.length - 1];
        let x = newData[0];
        let y = newData[1];
        let wjxNode1 = document.getElementById("wjx1");
        let wjxNode2 = document.getElementById("wjx2");
        let wjxNode3 = document.getElementById("wjx3");
        let wjxNode4 = document.getElementById("wjx4");
       
        if (x >= 50 && y >= 50) {
          // 右上角亮
          // console.log("进右上角")
          return  wjxNode2.src = this.src;
        } else {
          wjxNode1.src = this.src1;
          wjxNode3.src = this.src1;
          wjxNode4.src = this.src1;
        }

        if (x < 50 && y < 50) {
          // 左下角亮
          // console.log("左下角")
          
        return  wjxNode3.src = this.src;
        } else {
          wjxNode1.src = this.src1;
          wjxNode2.src = this.src1;
          wjxNode4.src = this.src1;
        }

        if (x < 50 && y >= 50) {
          // console.log("进左上角")
          // 左上角亮
         return wjxNode1.src = this.src;
        } else {
          wjxNode2.src = this.src1;
          wjxNode3.src = this.src1;
          wjxNode4.src = this.src1;
        }

        if (x >= 50 && y < 50) {
          // console.log("进右下角")
          //  右下角亮
         return wjxNode4.src = this.src;
        } else {
          wjxNode1.src = this.src1;
          wjxNode3.src = this.src1;
          wjxNode2.src = this.src1;
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
