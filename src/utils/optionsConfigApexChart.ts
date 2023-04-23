export const optionsPie = {
  labels: [
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sabado",
    "Domingo",
  ],
  // colors: ["#93C3EE", "#E5C6A0", "#669DB5", "#94A74A"],

  legend: {

    /*  formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex];
    }, */

    fontSize: "16px",
    labels: {
      colors: ["#fff", "#fff"],
    },
  },
  dataLabels: {
    enabled: true,

    /* formatter: function (val, opts) {
      const value = parseFloat(val.toString());
      return opts.w.globals.labels[opts.seriesIndex] + ":  " + value.toFixed();
    }, */

    background: {},
    style: {
      fontSize: "18px",
      fontFamily: undefined,
      fontWeight: "bold",
    },
  },

  plotOptions: {
    theme: {
      mode: <"dark" | "light">"dark",
    },
    pie: {
      donut: {
        size: "65%",
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "22px",
            fontFamily: undefined,
            fontWeight: 600,
            color: undefined,
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: "16px",
            fontFamily: undefined,
            fontWeight: 400,
            color: "gray",
            offsetY: 16,
            formatter: function (val) {
              return val.toLocaleString();
            },
          },
          total: {
            show: true,
            fontSize: "22px",
            fontFamily: undefined,
            fontWeight: 600,
            label: "Total",
            color: undefined,
            formatter: function (w) {
              return w.globals.seriesTotals
                .reduce((a, b) => {
                  return a + b;
                }, 0)
                .toLocaleString();
            },
          },
        },
      },
    },
  },
  series: [3, 6, 1, 12, 15, 0, 20],
};

export const optionsArea = {
  theme: {
    mode: <"dark" | "light">"dark",
  },
  series: [{
    data: [2, 1, 3, 4, 2, 1]
  }],
  labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
}

export const optionsBar = {
  theme: {
    mode: <"dark" | "light">"dark",
  },
  series: [{
    data: [12, 6, 3, 2, 7, 4]
  }],
  labels: ["Node", "React", "Next", "Laravel", "PHP", "React-Native"],
}