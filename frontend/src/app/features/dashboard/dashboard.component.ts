import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

interface MetricCard {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('spendingChart') chartRef!: ElementRef<HTMLDivElement>;

  metrics: MetricCard[] = [
    { label: 'Total Spending',  value: '€3,240', delta: '+8.2% vs last month', positive: false },
    { label: 'Monthly Budget',  value: '€4,000', delta: '81% used',             positive: false },
    { label: 'Total Savings',   value: '€12,580', delta: '+€320 this month',    positive: true  },
    { label: 'Transactions',    value: '47',      delta: 'this month',           positive: true  },
  ];

  ngAfterViewInit(): void {
    const chart = echarts.init(this.chartRef.nativeElement);

    chart.setOption({
      grid: { top: 16, right: 16, bottom: 32, left: 56 },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisLine: { lineStyle: { color: '#c4c6d0' } },
        axisTick: { show: false },
        axisLabel: { color: '#43474f', fontSize: 12 },
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { lineStyle: { color: '#e6eeff' } },
        axisLabel: {
          color: '#43474f',
          fontSize: 12,
          formatter: (val: number) => `€${val.toLocaleString()}`,
        },
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#ffffff',
        borderColor: '#c4c6d0',
        borderWidth: 1,
        textStyle: { color: '#121c2a', fontSize: 12 },
        formatter: (params: echarts.TooltipComponentFormatterCallbackParams) => {
          const p = Array.isArray(params) ? params[0] : params;
          return `<strong>${p.name}</strong>: €${Number(p.value).toLocaleString()}`;
        },
      },
      series: [
        {
          data: [2100, 2800, 3100, 2650, 3400, 3240],
          type: 'line',
          smooth: true,
          lineStyle: { color: '#405f91', width: 2 },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(64, 95, 145, 0.12)' },
              { offset: 1, color: 'rgba(64, 95, 145, 0)' },
            ]),
          },
          itemStyle: { color: '#405f91' },
          symbol: 'circle',
          symbolSize: 6,
        },
      ],
    });

    window.addEventListener('resize', () => chart.resize());
  }
}
