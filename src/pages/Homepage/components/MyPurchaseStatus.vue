<template>
  <div class="purchase-status">
    <h2>나의 구매현황</h2>
    <div class="status-card">
      <table>
        <tbody>
          <tr>
            <th>당월 구매금액</th>
            <td>1,200 만원</td>
          </tr>
          <tr>
            <th>누적 구매액 (년)</th>
            <td>1,234,567 만원</td>
          </tr>
          <tr>
            <th>누적 이익금액 (년)</th>
            <td>3,200 만원</td>
          </tr>
        </tbody>
      </table>
      <div class="monthly-average">월평균 금액 999 만원</div>

      <div class="tabs">
        <button>월간</button>
        <button class="active">분기</button>
        <button>연간</button>
      </div>
      <!-- chart -->
      <div id="chartdiv"></div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";

// chartjs
onMounted(() => {
  am5.ready(function () {
    var root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
        layout: root.verticalLayout,
      })
    );

    chart.set(
      "colors",
      am5.ColorSet.new(root, {
        colors: [
          am5.color(0x73556e),
          am5.color(0x9fa1a6),
          am5.color(0xf2aa6b),
          am5.color(0xf28f6b),
          am5.color(0xa95a52),
          am5.color(0xe35b5d),
          am5.color(0xffa446),
        ],
      })
    );

    var xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 50,
      minorGridEnabled: true,
    });

    xRenderer.grid.template.setAll({ location: 1 });

    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        min: 0,
        renderer: am5xy.AxisRendererY.new(root, { strokeOpacity: 0.1 }),
      })
    );

    var series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, { labelText: "{valueY}" }),
      })
    );

    series.columns.template.setAll({
      tooltipY: 0,
      tooltipText: "{categoryX}: {valueY}",
      shadowOpacity: 0.1,
      shadowOffsetX: 2,
      shadowOffsetY: 2,
      shadowBlur: 1,
      strokeWidth: 2,
      stroke: am5.color(0xffffff),
      shadowColor: am5.color(0x000000),
      cornerRadiusTL: 50,
      cornerRadiusTR: 50,
      fillGradient: am5.LinearGradient.new(root, {
        stops: [{}, { color: am5.color(0x000000) }],
      }),
      fillPattern: am5.GrainPattern.new(root, {
        maxOpacity: 0.15,
        density: 0.5,
        colors: [am5.color(0x000000), am5.color(0x000000), am5.color(0xffffff)],
      }),
    });

    series.columns.template.states.create("hover", {
      shadowOpacity: 1,
      shadowBlur: 10,
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
    });

    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    var data = [
      { country: "USA", value: 2025 },
      { country: "China", value: 1282 },
      { country: "Japan", value: 909 },
      { country: "Germany", value: 752 },
      { country: "UK", value: 652 },
      { country: "Italy", value: 452 },
    ];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);
  });
});
</script>
<style>
.purchase-status {
  max-width: 400px;
  margin: 30px auto;
  padding: 0 16px;
}
.purchase-status h2 {
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
}

/* 상단 카드 */
.status-card {
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
}
.status-card table {
  width: 100%;
  border-collapse: collapse;
}
.status-card th {
  text-align: left;
  font-size: 14px;
  color: #666;
  font-weight: normal;
  padding: 4px 0;
}
.status-card td {
  text-align: right;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  padding: 4px 0;
}

/* 월평균 금액(오른쪽 독립 표기) */
.monthly-average {
  text-align: right;
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

/* 탭 (월간, 분기, 연간) */
.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.tabs button {
  flex: 1;
  padding: 8px 0;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 20px;
  color: #666;
  font-size: 14px;
  cursor: pointer;
}
.tabs button.active {
  background: #333;
  color: #fff;
  border-color: #333;
}
/* chart style */
#chartdiv {
  width: 100%;
  height: 500px;
}
</style>
